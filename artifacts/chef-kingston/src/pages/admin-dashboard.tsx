import { useAuth } from "../hooks/useAuth";
import { useLocation } from "wouter";
import { Link } from "wouter";
import { LogOut, UtensilsCrossed, Users, CalendarDays, MessageCircle, Home } from "lucide-react";
import navLogo from "@assets/att.Yeeup1CO9VY9Crw97iTvpDTiILgB9ae2yfNErH_GxAA.png_1775869943923.jpeg";

export default function AdminDashboard() {
  const { user, loading, logout } = useAuth();
  const [, navigate] = useLocation();

  if (loading) {
    return (
      <div className="min-h-[100dvh] bg-background flex items-center justify-center">
        <div className="text-muted-foreground text-sm">Loading...</div>
      </div>
    );
  }

  if (!user) {
    navigate("/admin");
    return null;
  }

  async function handleLogout() {
    await logout();
    navigate("/admin");
  }

  const quickLinks = [
    { title: "View Website", desc: "See the live site", icon: Home, href: "/", external: false },
    { title: "WhatsApp Orders", desc: "Check incoming messages", icon: MessageCircle, href: "https://wa.me/16472000047", external: true },
    { title: "Facebook Messenger", desc: "View customer messages", icon: MessageCircle, href: "https://m.me/61588412791988", external: true },
  ];

  const stats = [
    { label: "Weekly Menu Items", value: "3", icon: UtensilsCrossed, color: "bg-secondary/10 text-secondary" },
    { label: "Meal Plans", value: "3", icon: CalendarDays, color: "bg-blue-500/10 text-blue-500" },
    { label: "Service Types", value: "4", icon: Users, color: "bg-green-500/10 text-green-500" },
  ];

  return (
    <div className="min-h-[100dvh] bg-background">
      <header className="sticky top-0 z-40 bg-card/85 backdrop-blur-xl border-b border-border/40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={navLogo} alt="PCK Logo" className="h-9 w-9 rounded-full object-cover shadow-sm ring-2 ring-secondary/30" />
              <div>
                <p className="text-primary font-serif text-sm font-bold">Admin Dashboard</p>
                <p className="text-[11px] text-muted-foreground">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/" className="text-xs text-muted-foreground hover:text-secondary transition-colors font-medium">
                View Site
              </Link>
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 rounded-full bg-muted/80 px-4 py-2 text-xs font-medium text-foreground/70 hover:bg-destructive/10 hover:text-destructive transition-all"
              >
                <LogOut className="w-3.5 h-3.5" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-2xl font-serif font-bold text-primary">Welcome back</h1>
          <p className="text-muted-foreground text-sm mt-1">Manage your restaurant from here.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card rounded-xl border border-border/40 p-5 flex items-center gap-4">
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-serif font-bold text-primary mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {quickLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="bg-card rounded-xl border border-border/40 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center mb-3 group-hover:bg-secondary/15 transition-colors">
                  <link.icon className="w-4 h-4 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{link.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{link.desc}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-serif font-bold text-primary mb-4">Current Weekly Menu</h2>
          <div className="bg-card rounded-xl border border-border/40 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/40 bg-muted/30">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Meal</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Category</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/20">
                  <td className="px-4 py-3 font-medium text-foreground">Chicken Parm with Homemade Tomato Sauce</td>
                  <td className="px-4 py-3 text-muted-foreground"><span className="bg-secondary/10 text-secondary text-[11px] font-semibold px-2 py-0.5 rounded-full">Chicken</span></td>
                  <td className="px-4 py-3 text-right font-bold text-secondary">$18</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="px-4 py-3 font-medium text-foreground">Crispy Orange Soy Glazed Beef Stir Fry</td>
                  <td className="px-4 py-3 text-muted-foreground"><span className="bg-secondary/10 text-secondary text-[11px] font-semibold px-2 py-0.5 rounded-full">Beef</span></td>
                  <td className="px-4 py-3 text-right font-bold text-secondary">$18</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">Sweet Potato Enchiladas</td>
                  <td className="px-4 py-3 text-muted-foreground"><span className="bg-green-500/10 text-green-600 text-[11px] font-semibold px-2 py-0.5 rounded-full">Vegetarian</span></td>
                  <td className="px-4 py-3 text-right font-bold text-secondary">$16</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3 italic">
            To update the menu, edit the menu data file or contact your developer.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-serif font-bold text-primary mb-4">Business Information</h2>
          <div className="bg-card rounded-xl border border-border/40 p-5 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Phone</span>
              <span className="font-medium text-foreground">(647) 200-0047</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Email</span>
              <span className="font-medium text-foreground">ypcdinners@gmail.com</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Service Area</span>
              <span className="font-medium text-foreground">Kingston, Ontario</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Available Sides</span>
              <span className="font-medium text-foreground">Roasted Potatoes, Steamed Rice, Buttered Pasta, Garlic Greens, Vegetable Medley, Honey Butter Glazed Carrots</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
