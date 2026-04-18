import type { Request, Response } from "express";
import serverless from "serverless-http";
import app from "../src/app.js";
import { ensureAdminUser, ensureMenuData } from "../src/lib/seedAdmin.js";

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

export default async function handler(event: any, context: any) {
  await ensureStartup();
  const serverlessApp = serverless(app);
  return serverlessApp(event, context);
}
