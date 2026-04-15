import { useAuth } from "../hooks/useAuth";
import { useLocation } from "wouter";
import { Link } from "wouter";
import { useState, useEffect, useCallback, useRef } from "react";
import { LogOut, UtensilsCrossed, Users, CalendarDays, MessageCircle, Home, Plus, Pencil, Trash2, Save, X, ChevronDown, ChevronUp, Upload, ImageIcon } from "lucide-react";
import navLogo from "@assets/att.Yeeup1CO9VY9Crw97iTvpDTiILgB9ae2yfNErH_GxAA.png_1775869943923.jpeg";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string;
  imageUrl: string;
  sortOrder: number;
};

type EditingItem = Omit<MenuItem, "id"> & { id?: number };

const emptyItem: EditingItem = { name: "", description: "", price: 0, tags: "", imageUrl: "", sortOrder: 0 };

export default function AdminDashboard() {
  const { user, loading, logout } = useAuth();
  const [, navigate] = useLocation();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [sides, setSides] = useState<string[]>([]);
  const [menuLoading, setMenuLoading] = useState(true);
  const [editing, setEditing] = useState<EditingItem | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState<number | null>(null);
  const [sidesText, setSidesText] = useState("");
  const [savingSides, setSavingSides] = useState(false);
  const [menuExpanded, setMenuExpanded] = useState(true);
  const [sidesExpanded, setSidesExpanded] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchMenu = useCallback(async () => {
    try {
      const res = await fetch("/api/menu");
      if (res.ok) {
        const data = await res.json();
        setMenuItems(data.items);
        setSides(data.sides);
        setSidesText(data.sides.join(", "));
      }
    } catch {
    } finally {
      setMenuLoading(false);
    }
  }, []);

  useEffect(() => {
    if (user) fetchMenu();
  }, [user, fetchMenu]);

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

  function showSuccess(msg: string) {
    setSuccess(msg);
    setError("");
    setTimeout(() => setSuccess(""), 3000);
  }

  function showError(msg: string) {
    setError(msg);
    setSuccess("");
  }

  function startEdit(item: MenuItem) {
    setEditing({ ...item });
    setIsNew(false);
    setError("");
  }

  function startAdd() {
    setEditing({ ...emptyItem, sortOrder: menuItems.length });
    setIsNew(true);
    setError("");
  }

  function cancelEdit() {
    setEditing(null);
    setIsNew(false);
    setError("");
  }

  async function handleImageUpload(file: File) {
    if (!editing) return;
    if (!file.type.startsWith("image/")) {
      showError("Please select an image file.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      showError("Image must be under 5MB.");
      return;
    }
    setUploading(true);
    try {
      const urlRes = await fetch("/api/storage/uploads/request-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          name: file.name,
          size: file.size,
          contentType: file.type,
        }),
      });
      if (!urlRes.ok) {
        showError("Failed to prepare upload.");
        return;
      }
      const { uploadURL, objectPath } = await urlRes.json();
      const uploadRes = await fetch(uploadURL, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });
      if (!uploadRes.ok) {
        showError("Upload failed. Please try again.");
        return;
      }
      const imageUrl = `/api/storage${objectPath}`;
      setEditing({ ...editing, imageUrl });
      showSuccess("Image uploaded!");
    } catch {
      showError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  async function handleSave() {
    if (!editing) return;
    if (!editing.name.trim() || !editing.description.trim()) {
      showError("Name and description are required.");
      return;
    }
    if (editing.price <= 0) {
      showError("Price must be greater than 0.");
      return;
    }

    setSaving(true);
    try {
      const url = isNew ? "/api/admin/menu/items" : `/api/admin/menu/items/${editing.id}`;
      const method = isNew ? "POST" : "PUT";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          name: editing.name.trim(),
          description: editing.description.trim(),
          price: editing.price,
          tags: editing.tags.trim(),
          imageUrl: editing.imageUrl.trim(),
          sortOrder: editing.sortOrder,
        }),
      });
      if (res.ok) {
        showSuccess(isNew ? "Menu item added!" : "Menu item updated!");
        setEditing(null);
        setIsNew(false);
        await fetchMenu();
      } else {
        const data = await res.json();
        showError(data.error || "Failed to save.");
      }
    } catch {
      showError("Network error. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Delete this menu item?")) return;
    setDeleting(id);
    try {
      const res = await fetch(`/api/admin/menu/items/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (res.ok) {
        showSuccess("Menu item deleted.");
        await fetchMenu();
      } else {
        showError("Failed to delete.");
      }
    } catch {
      showError("Network error.");
    } finally {
      setDeleting(null);
    }
  }

  async function handleSaveSides() {
    setSavingSides(true);
    try {
      const parsed = sidesText.split(",").map((s) => s.trim()).filter(Boolean);
      const res = await fetch("/api/admin/menu/sides", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ sides: parsed }),
      });
      if (res.ok) {
        const data = await res.json();
        setSides(data.sides);
        setSidesText(data.sides.join(", "));
        showSuccess("Sides updated!");
      } else {
        showError("Failed to update sides.");
      }
    } catch {
      showError("Network error.");
    } finally {
      setSavingSides(false);
    }
  }

  const quickLinks = [
    { title: "View Website", desc: "See the live site", icon: Home, href: "/", external: false },
    { title: "WhatsApp Orders", desc: "Check incoming messages", icon: MessageCircle, href: "https://wa.me/16472000047", external: true },
    { title: "Facebook Messenger", desc: "View customer messages", icon: MessageCircle, href: "https://m.me/61588412791988", external: true },
  ];

  const stats = [
    { label: "Weekly Menu Items", value: String(menuItems.length), icon: UtensilsCrossed, color: "bg-secondary/10 text-secondary" },
    { label: "Available Sides", value: String(sides.length), icon: CalendarDays, color: "bg-blue-500/10 text-blue-500" },
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

        {(error || success) && (
          <div className={`mb-6 rounded-xl px-4 py-3 text-sm font-medium ${error ? "bg-destructive/10 text-destructive" : "bg-green-500/10 text-green-700"}`}>
            {error || success}
          </div>
        )}

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
          <button
            onClick={() => setMenuExpanded((v) => !v)}
            className="flex items-center gap-2 w-full text-left mb-4"
          >
            <h2 className="text-lg font-serif font-bold text-primary">Weekly Menu</h2>
            {menuExpanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
          </button>

          {menuExpanded && (
            <>
              {menuLoading ? (
                <p className="text-muted-foreground text-sm">Loading menu...</p>
              ) : (
                <>
                  <div className="bg-card rounded-xl border border-border/40 overflow-hidden mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border/40 bg-muted/30">
                          <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Meal</th>
                          <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden sm:table-cell">Tags</th>
                          <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Price</th>
                          <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider w-24">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {menuItems.map((item) => (
                          <tr key={item.id} className="border-b border-border/20 hover:bg-muted/10 transition-colors">
                            <td className="px-4 py-3">
                              <p className="font-medium text-foreground">{item.name}</p>
                              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{item.description}</p>
                            </td>
                            <td className="px-4 py-3 hidden sm:table-cell">
                              {item.tags && (
                                <span className="bg-secondary/10 text-secondary text-[11px] font-semibold px-2 py-0.5 rounded-full">{item.tags}</span>
                              )}
                            </td>
                            <td className="px-4 py-3 text-right font-bold text-secondary">${item.price}</td>
                            <td className="px-4 py-3 text-right">
                              <div className="flex items-center justify-end gap-1">
                                <button
                                  onClick={() => startEdit(item)}
                                  className="w-7 h-7 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-secondary/10 hover:text-secondary transition-colors"
                                  title="Edit"
                                >
                                  <Pencil className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  onClick={() => handleDelete(item.id)}
                                  disabled={deleting === item.id}
                                  className="w-7 h-7 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-destructive/10 hover:text-destructive transition-colors disabled:opacity-50"
                                  title="Delete"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                        {menuItems.length === 0 && (
                          <tr>
                            <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground text-sm">No menu items yet. Add your first item below.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  {!editing && (
                    <button
                      onClick={startAdd}
                      className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-secondary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                    >
                      <Plus className="w-4 h-4" /> Add Menu Item
                    </button>
                  )}

                  {editing && (
                    <div className="bg-card rounded-xl border border-border/40 p-5 mt-4">
                      <h3 className="font-serif font-bold text-primary mb-4">{isNew ? "Add New Item" : "Edit Item"}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-foreground uppercase tracking-wider">Name</label>
                          <input
                            type="text"
                            value={editing.name}
                            onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                            className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                            placeholder="e.g. Chicken Parm"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-foreground uppercase tracking-wider">Price ($)</label>
                            <input
                              type="number"
                              value={editing.price || ""}
                              onChange={(e) => setEditing({ ...editing, price: Number(e.target.value) })}
                              className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                              placeholder="18"
                              min="0"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-foreground uppercase tracking-wider">Tags</label>
                            <input
                              type="text"
                              value={editing.tags}
                              onChange={(e) => setEditing({ ...editing, tags: e.target.value })}
                              className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                              placeholder="Chicken, Beef, etc."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-1.5 mb-4">
                        <label className="text-xs font-semibold text-foreground uppercase tracking-wider">Description</label>
                        <textarea
                          value={editing.description}
                          onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                          rows={2}
                          className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all resize-none"
                          placeholder="Describe the dish..."
                        />
                      </div>
                      <div className="space-y-1.5 mb-4">
                        <label className="text-xs font-semibold text-foreground uppercase tracking-wider">Photo</label>
                        <div className="flex items-center gap-4">
                          {editing.imageUrl ? (
                            <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-border/40 shrink-0">
                              <img src={editing.imageUrl} alt="Menu item" className="w-full h-full object-cover" />
                              <button
                                onClick={() => setEditing({ ...editing, imageUrl: "" })}
                                className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                                title="Remove photo"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          ) : (
                            <div className="w-20 h-20 rounded-xl border-2 border-dashed border-border/60 flex items-center justify-center shrink-0 bg-muted/20">
                              <ImageIcon className="w-6 h-6 text-muted-foreground/40" />
                            </div>
                          )}
                          <div>
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) handleImageUpload(file);
                                e.target.value = "";
                              }}
                            />
                            <button
                              onClick={() => fileInputRef.current?.click()}
                              disabled={uploading}
                              className="inline-flex items-center gap-2 rounded-xl border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/50 transition-all disabled:opacity-50"
                            >
                              <Upload className="w-4 h-4" />
                              {uploading ? "Uploading..." : editing.imageUrl ? "Change Photo" : "Upload Photo"}
                            </button>
                            <p className="text-[11px] text-muted-foreground mt-1">JPG, PNG, or WebP. Max 5MB.</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={handleSave}
                          disabled={saving}
                          className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all disabled:opacity-60"
                        >
                          <Save className="w-4 h-4" />
                          {saving ? "Saving..." : "Save"}
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="inline-flex items-center gap-2 rounded-full bg-muted/80 px-5 py-2.5 text-sm font-medium text-foreground/70 hover:bg-muted transition-all"
                        >
                          <X className="w-4 h-4" /> Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>

        <div className="mb-8">
          <button
            onClick={() => setSidesExpanded((v) => !v)}
            className="flex items-center gap-2 w-full text-left mb-4"
          >
            <h2 className="text-lg font-serif font-bold text-primary">Available Sides</h2>
            {sidesExpanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
          </button>

          {sidesExpanded && (
            <div className="bg-card rounded-xl border border-border/40 p-5">
              <p className="text-xs text-muted-foreground mb-3">Separate sides with commas. These appear on the menu page for customers to pick from.</p>
              <textarea
                value={sidesText}
                onChange={(e) => setSidesText(e.target.value)}
                rows={2}
                className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all resize-none mb-3"
                placeholder="Roasted Potatoes, Steamed Rice, ..."
              />
              <button
                onClick={handleSaveSides}
                disabled={savingSides}
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all disabled:opacity-60"
              >
                <Save className="w-4 h-4" />
                {savingSides ? "Saving..." : "Save Sides"}
              </button>
            </div>
          )}
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
          </div>
        </div>
      </main>
    </div>
  );
}
