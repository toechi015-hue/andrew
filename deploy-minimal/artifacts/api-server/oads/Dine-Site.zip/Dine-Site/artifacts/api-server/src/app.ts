import express, { type Express } from "express";
import cors, { type CorsOptions } from "cors";
import cookieParser from "cookie-parser";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

app.set("trust proxy", 1);

function normalizeOrigin(origin: string) {
  return origin.trim().replace(/\/$/, "");
}

function expandOriginVariants(origins: string[]) {
  const set = new Set<string>();
  for (const origin of origins) {
    const normalized = normalizeOrigin(origin);
    if (!normalized) continue;
    set.add(normalized);

    try {
      const url = new URL(normalized);
      const host = url.hostname;
      if (host.startsWith("www.")) {
        url.hostname = host.replace(/^www\./, "");
      } else {
        url.hostname = `www.${host}`;
      }
      set.add(url.toString().replace(/\/$/, ""));
    } catch {
      set.add(normalized);
    }
  }
  return Array.from(set);
}

function productionCorsOrigin(): CorsOptions["origin"] {
  const raw = process.env.CORS_ORIGIN ?? "";
  const allowed = raw
    .split(",")
    .map(normalizeOrigin)
    .filter(Boolean);
  if (allowed.length === 0) return false;
  const expanded = expandOriginVariants(allowed);
  if (expanded.length === 1) return expanded[0];
  return expanded;
}

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production" ? productionCorsOrigin() : true,
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
