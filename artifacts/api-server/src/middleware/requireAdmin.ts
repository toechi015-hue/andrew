import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { db, adminUsersTable } from "@workspace/db";
import { eq } from "drizzle-orm";

const JWT_SECRET = process.env.JWT_SECRET;
const COOKIE_NAME = "admin_token";

export async function requireAdmin(req: Request, res: Response, next: NextFunction) {
  try {
    if (!JWT_SECRET) {
      res.status(500).json({ error: "Server configuration error" });
      return;
    }

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

    (req as any).adminUser = user;
    next();
  } catch {
    res.status(401).json({ error: "Invalid or expired token" });
  }
}
