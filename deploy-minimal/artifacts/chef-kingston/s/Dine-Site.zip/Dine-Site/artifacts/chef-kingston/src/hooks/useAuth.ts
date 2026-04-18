import { useState, useEffect, useCallback } from "react";
import { API_BASE_URL, apiUrl } from "@/lib/apiBase";

type AdminUser = { id: number; email: string };

export function useAuth() {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = useCallback(async () => {
    try {
      const res = await fetch(apiUrl("/api/auth/me"), { credentials: "include" });
      if (!res.ok) {
        setUser(null);
        return;
      }
      const text = await res.text();
      try {
        const data = text ? (JSON.parse(text) as { user?: AdminUser }) : {};
        setUser(data.user ?? null);
      } catch {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const login = async (email: string, password: string): Promise<string | null> => {
    try {
      const res = await fetch(apiUrl("/api/auth/login"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const text = await res.text();
      let data: { error?: string; user?: AdminUser } = {};
      try {
        data = text ? (JSON.parse(text) as typeof data) : {};
      } catch {
        if (!API_BASE_URL) {
          return "This site has no API on the same host. In Vercel → Settings → Environment Variables, add VITE_API_URL with your deployed API base (e.g. https://api-xx.up.railway.app), then redeploy.";
        }
        return "The API returned a non-JSON response. Confirm the API is running and VITE_API_URL points to its root URL (no trailing slash).";
      }
      if (res.ok) {
        if (data.user) setUser(data.user);
        return null;
      }
      return data.error || "Login failed";
    } catch {
      if (!API_BASE_URL) {
        return "Could not reach the server. Deploy the Express API and set VITE_API_URL on Vercel to that API’s https URL, then redeploy the frontend.";
      }
      return "Could not reach the API (CORS, wrong URL, or mixed content). On the API, set CORS_ORIGIN to this site’s exact URL (https://…). You can list several origins separated by commas.";
    }
  };

  const logout = async () => {
    await fetch(apiUrl("/api/auth/logout"), { method: "POST", credentials: "include" });
    setUser(null);
  };

  return { user, loading, login, logout, checkAuth };
}
