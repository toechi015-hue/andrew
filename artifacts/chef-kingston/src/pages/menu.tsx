import { useState } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { menuItems, sides, MenuItem } from "../data/menu";
import { ShoppingBag, Plus, Minus, Trash2, MessageCircle, Check } from "lucide-react";
import heroImg from "@assets/att.zF1zSKs8HE67Fv1Ysn_cQNG7xuMXY-hnNeYQLjM67bU_1775869943923.jpeg";

type CartItem = MenuItem & { quantity: number; selectedSides: string[] };

export default function Menu() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [sideSelections, setSideSelections] = useState<Record<string, string[]>>({});

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  function toggleSide(mealId: string, side: string) {
    setSideSelections(prev => {
      const current = prev[mealId] || [];
      if (current.includes(side)) {
        return { ...prev, [mealId]: current.filter(s => s !== side) };
      }
      if (current.length >= 2) {
        return { ...prev, [mealId]: [current[1], side] };
      }
      return { ...prev, [mealId]: [...current, side] };
    });
  }

  function addToCart(meal: MenuItem) {
    const selected = sideSelections[meal.id] || [];
    setCart(prev => {
      const existing = prev.find(c => c.id === meal.id);
      if (existing) {
        return prev.map(c => c.id === meal.id ? { ...c, quantity: c.quantity + 1, selectedSides: selected } : c);
      }
      return [...prev, { ...meal, quantity: 1, selectedSides: selected }];
    });
    setCartOpen(true);
  }

  function updateQty(id: string, delta: number) {
    setCart(prev =>
      prev
        .map(c => c.id === id ? { ...c, quantity: c.quantity + delta } : c)
        .filter(c => c.quantity > 0)
    );
  }

  function removeFromCart(id: string) {
    setCart(prev => prev.filter(c => c.id !== id));
  }

  function buildOrderMessage() {
    const lines = cart.map(c => {
      const sidesText = c.selectedSides.length > 0
        ? ` (Sides: ${c.selectedSides.join(", ")})`
        : "";
      return `${c.quantity}x ${c.name} ${c.price}${sidesText}`;
    });
    return encodeURIComponent(
      "Hi! I'd like to place an order:\n\n" +
      lines.join("\n") +
      "\n\nPlease confirm availability and total. Thank you!"
    );
  }

  function getCartQty(id: string) {
    return cart.find(c => c.id === id)?.quantity ?? 0;
  }

  return (
    <PageLayout>
      <div className="relative bg-primary pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover opacity-25" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/80 to-primary/90"></div>
        </div>
        <div className="relative z-10 container mx-auto max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">This Week's Menu</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Each meal is chef-prepared, includes 2 sides + delivery, and is priced per portion. No kids sizes — just extra leftovers.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-end mb-8">
          <button
            onClick={() => setCartOpen(v => !v)}
            className="relative flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow hover:bg-primary/90 transition-colors"
            data-testid="button-open-cart"
          >
            <ShoppingBag className="w-4 h-4" />
            My Order
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-secondary text-primary text-xs font-bold flex items-center justify-center" data-testid="cart-count">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {cartOpen && (
          <div className="mb-10 bg-card border border-border rounded-2xl shadow-sm p-6" data-testid="cart-panel">
            <h2 className="text-xl font-serif font-bold text-primary mb-4">Your Order</h2>
            {cart.length === 0 ? (
              <p className="text-muted-foreground text-sm py-4 text-center">No items added yet. Pick your sides and tap "Add to Order" below.</p>
            ) : (
              <>
                <ul className="divide-y divide-border mb-6">
                  {cart.map(item => (
                    <li key={item.id} className="flex items-start gap-4 py-4" data-testid={`cart-item-${item.id}`}>
                      <img src={item.image} alt={item.name} className="w-14 h-14 rounded-lg object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground text-sm truncate">{item.name}</p>
                        <p className="text-secondary font-bold text-sm">{item.price}</p>
                        {item.selectedSides.length > 0 && (
                          <p className="text-xs text-muted-foreground mt-1">Sides: {item.selectedSides.join(", ")}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2 pt-1">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-1 text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/16472000047?text=${buildOrderMessage()}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex justify-center items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow hover:bg-[#25D366]/90 transition-colors"
                    data-testid="button-order-whatsapp"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Send Order via WhatsApp
                  </a>
                  <a
                    href={`https://m.me/YourPersonalChefKingston`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex justify-center items-center gap-2 rounded-md bg-[#0084FF] px-5 py-3 text-sm font-semibold text-white shadow hover:bg-[#0084FF]/90 transition-colors"
                    data-testid="button-order-messenger"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Send Order via Messenger
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Clicking sends your selections to us. We'll confirm availability, pricing, and delivery details.
                </p>
              </>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((meal, idx) => {
            const qty = getCartQty(meal.id);
            const selectedForMeal = sideSelections[meal.id] || [];
            return (
              <div
                key={meal.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 fill-mode-both flex flex-col"
                style={{ animationDelay: `${idx * 80}ms` }}
                data-testid={`meal-card-${meal.id}`}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={meal.image}
                    alt={meal.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {meal.tags.map(tag => (
                      <span key={tag} className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-3 gap-4">
                    <h3 className="font-serif font-bold text-xl text-primary leading-tight">{meal.name}</h3>
                    <div className="text-right whitespace-nowrap">
                      <span className="font-bold text-2xl text-primary">{meal.price}</span>
                      <span className="text-xs text-muted-foreground block">{meal.priceDetail}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-5 flex-1">{meal.description}</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                      Choose Your Sides (pick 2)
                    </p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {sides.map(side => {
                        const isSelected = selectedForMeal.includes(side);
                        return (
                          <button
                            key={side}
                            onClick={() => toggleSide(meal.id, side)}
                            className={`text-left text-xs px-2.5 py-1.5 rounded-md border transition-all flex items-center gap-1.5 ${
                              isSelected
                                ? "border-secondary bg-secondary/10 text-secondary font-semibold"
                                : "border-border text-muted-foreground hover:border-secondary/40"
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 shrink-0" />}
                            {side}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    {qty === 0 ? (
                      <button
                        onClick={() => addToCart(meal)}
                        className="w-full inline-flex justify-center items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors"
                        data-testid={`button-add-to-order-${meal.id}`}
                      >
                        <Plus className="w-4 h-4" />
                        Add to Order
                      </button>
                    ) : (
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQty(meal.id, -1)}
                            className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-bold text-primary">{qty}</span>
                          <button
                            onClick={() => updateQty(meal.id, 1)}
                            className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-sm font-semibold text-secondary">Added</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-primary/5 rounded-2xl p-8 sm:p-10 max-w-4xl mx-auto border border-primary/10">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-serif font-bold text-primary mb-2">How to Order</h3>
            <p className="text-muted-foreground">Send a DM or text with:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {[
              { step: "1", label: "Your meal choices" },
              { step: "2", label: "Quantity" },
              { step: "3", label: "Side selections" },
            ].map(item => (
              <div key={item.step} className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-8 h-8 rounded-full bg-primary text-secondary flex items-center justify-center font-bold text-sm shrink-0">
                  {item.step}
                </div>
                <span className="text-foreground font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mb-6">
            Delivered straight to your door. Heat, eat, enjoy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/16472000047"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#25D366]/90 transition-colors"
              data-testid="button-whatsapp-cta"
            >
              <MessageCircle className="w-4 h-4" />
              Order via WhatsApp
            </a>
            <a
              href="https://m.me/YourPersonalChefKingston"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center gap-2 rounded-md bg-[#0084FF] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#0084FF]/90 transition-colors"
              data-testid="button-messenger-cta"
            >
              <MessageCircle className="w-4 h-4" />
              Order via Messenger
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
