import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db, adminUsersTable } from "@workspace/db";
import { eq } from "drizzle-orm";

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is required");
}
const COOKIE_NAME = "admin_token";

function adminCookieBase() {
  const crossOrigin = Boolean(process.env.CORS_ORIGIN);
  const prod = process.env.NODE_ENV === "production";
  return {
    httpOnly: true as const,
    secure: prod,
    sameSite: (crossOrigin ? "none" : "lax") as "none" | "lax",
    path: "/" as const,
  };
}

router.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required" });
      return;
    }

    const [user] = await db
      .select()
      .from(adminUsersTable)
      .where(eq(adminUsersTable.email, email.toLowerCase().trim()))
      .limit(1);

    if (!user) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie(COOKIE_NAME, token, {
      ...adminCookieBase(),
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ user: { id: user.id, email: user.email } });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/auth/me", async (req, res) => {
  try {
    const token = req.cookies?.[COOKIE_NAME];
    if (!token) {
      res.status(401).json({ error: "Not authenticated" });
      return;
    }

    const payload = jwt.verify(token, JWT_SECRET) as { id: number; email: string };

    const [user] = await db
      .select({ id: adminUsersTable.id, email: adminUsersTable.email })
      .from(adminUsersTable)
      .where(eq(adminUsersTable.id, payload.id))
      .limit(1);

    if (!user) {
      res.status(401).json({ error: "User not found" });
      return;
    }

    res.json({ user });
  } catch {
    res.status(401).json({ error: "Invalid or expired token" });
  }
});

router.post("/auth/logout", (_req, res) => {
  const base = adminCookieBase();
  res.clearCookie(COOKIE_NAME, { path: base.path, sameSite: base.sameSite, secure: base.secure });
  res.json({ success: true });
});

export default router;
