import { Router } from "express";
import type { Request, Response } from "express";
import { ai } from "@workspace/integrations-gemini-ai";

const router = Router();

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 500;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 10;

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function getRateLimitKey(req: Request): string {
  return req.ip ?? req.socket.remoteAddress ?? "unknown";
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count++;
  return true;
}

setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap) {
    if (now > entry.resetAt) rateLimitMap.delete(key);
  }
}, 60_000);

const SYSTEM_PROMPT = `You are the friendly AI assistant for "Your Personal Chef Kingston" — a personal chef and meal delivery service in Kingston, Ontario, run by a Red Seal certified chef with 25+ years of experience.

KEY BUSINESS INFO:
- Phone: (647) 200-0047
- Email: ypcdinners@gmail.com
- WhatsApp: +1 647-200-0047
- Facebook: https://www.facebook.com/profile.php?id=61588412791988
- Service Area: Kingston, Ontario, Canada
- Order via: Facebook DM, WhatsApp, text, or phone call

THIS WEEK'S MENU (includes 2 sides + delivery, priced per portion):
1. Chicken Parm with Homemade Tomato Sauce — $18 (Chicken)
2. Crispy Orange Soy Glazed Beef Stir Fry — $18 (Beef)
3. Sweet Potato Enchiladas — $16 (Vegetarian)

AVAILABLE SIDES (pick 2 with each meal):
Roasted Potatoes, Steamed Rice, Buttered Pasta, Garlic Greens, Vegetable Medley, Honey Butter Glazed Carrots

MEAL PLANS:
- Starter Plan: 3 meals/week — great for trying us out
- Family Plan: $150/week — 12 meals (4 portions x 3 dinner options), most popular for families
- Full Plan: 7 meals/week — complete weekly coverage

SERVICES:
- Weekly Meal Delivery (our main service)
- Private Dinners
- Family Gatherings
- Small Events & Catering
- Weekly Home Meal Prep

HOW ORDERING WORKS:
1. Check the weekly menu (posted fresh each week)
2. Choose your meals and quantities
3. Order via text, WhatsApp, or Facebook DM
4. Chef cooks meals fresh
5. Pick up or get delivery
6. Heat, eat, enjoy!

RULES:
- Be warm, helpful, and concise
- Always mention specific menu items and prices when relevant
- Encourage ordering via Facebook DM or WhatsApp
- If asked about items not on the menu, say "That's not on this week's menu, but our menu changes weekly! Message us and we can let you know what's coming up."
- Keep responses short (2-4 sentences max) unless the customer asks for details
- Never make up prices or menu items not listed above
- If unsure, direct them to message on Facebook or WhatsApp
- Only answer questions related to the business, menu, ordering, and catering. For unrelated topics, politely redirect.`;

router.post("/chat", async (req: Request, res: Response) => {
  try {
    const key = getRateLimitKey(req);
    if (!checkRateLimit(key)) {
      res.status(429).json({ error: "Too many requests. Please wait a moment and try again." });
      return;
    }

    const { messages } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      res.status(400).json({ error: "Messages array is required" });
      return;
    }

    if (messages.length > MAX_MESSAGES) {
      res.status(400).json({ error: "Too many messages. Please start a new conversation." });
      return;
    }

    const validRoles = new Set(["user", "assistant"]);
    for (const m of messages) {
      if (!m || typeof m.content !== "string" || !validRoles.has(m.role)) {
        res.status(400).json({ error: "Invalid message format." });
        return;
      }
      if (m.content.length > MAX_MESSAGE_LENGTH) {
        res.status(400).json({ error: `Message too long. Maximum ${MAX_MESSAGE_LENGTH} characters.` });
        return;
      }
    }

    const chatMessages = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: chatMessages,
      config: {
        maxOutputTokens: 512,
        systemInstruction: SYSTEM_PROMPT,
      },
    });

    const text = response.text ?? "Sorry, I couldn't generate a response. Please try again!";
    res.json({ reply: text });
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

export default router;
