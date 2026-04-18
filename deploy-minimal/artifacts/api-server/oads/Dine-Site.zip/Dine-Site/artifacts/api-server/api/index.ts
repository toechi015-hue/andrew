import type { Request, Response } from "express";
import app from "../src/app";
import { ensureAdminUser, ensureMenuData } from "../src/lib/seedAdmin";

let startupPromise: Promise<void> | null = null;

function ensureStartup() {
  if (!startupPromise) {
    startupPromise = (async () => {
      await ensureAdminUser();
      await ensureMenuData();
    })();
  }

  return startupPromise;
}

export default async function handler(req: Request, res: Response) {
  await ensureStartup();
  return app(req, res);
}
