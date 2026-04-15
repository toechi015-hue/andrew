import { useState } from "react";
import { useLocation } from "wouter";
import { useAuth } from "../hooks/useAuth";
import navLogo from "@assets/att.Yeeup1CO9VY9Crw97iTvpDTiILgB9ae2yfNErH_GxAA.png_1775869943923.jpeg";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { login, user } = useAuth();
  const [, navigate] = useLocation();

  if (user) {
    navigate("/admin/dashboard");
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    const err = await login(email, password);
    setSubmitting(false);
    if (err) {
      setError(err);
    } else {
      navigate("/admin/dashboard");
    }
  }

  return (
    <div className="min-h-[100dvh] bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <img src={navLogo} alt="PCK Logo" className="h-16 w-16 rounded-full object-cover shadow-md ring-2 ring-secondary/30 mx-auto mb-4" />
          <h1 className="font-serif text-2xl font-bold text-primary">Admin Login</h1>
          <p className="text-sm text-muted-foreground mt-1">Your Personal Chef Kingston</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border/40 shadow-sm p-6 space-y-4">
          {error && (
            <div className="bg-destructive/10 text-destructive text-sm rounded-xl px-4 py-3 font-medium">
              {error}
            </div>
          )}

          <div className="space-y-1.5">
            <label htmlFor="admin-email" className="text-xs font-semibold text-foreground uppercase tracking-wider">Email</label>
            <input
              id="admin-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              placeholder="admin@example.com"
              required
              autoFocus
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="admin-password" className="text-xs font-semibold text-foreground uppercase tracking-wider">Password</label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-secondary px-4 py-3 text-sm font-semibold text-white shadow-md shadow-secondary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
          >
            {submitting ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-xs text-muted-foreground mt-6">
          <a href="/" className="text-secondary font-medium hover:underline">← Back to website</a>
        </p>
      </div>
    </div>
  );
}
