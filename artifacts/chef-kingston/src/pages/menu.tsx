import { useState } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { menuItems, sides, MenuItem } from "../data/menu";
import { ShoppingBag, Plus, Minus, Trash2, MessageCircle, Check } from "lucide-react";

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
      <div className="bg-card py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-secondary font-semibold text-xs uppercase tracking-wider">Fresh & Delicious</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary mt-2 mb-4">This Week's <span className="text-secondary italic">Menu</span></h1>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Chef-prepared, includes 2 sides + delivery, priced per portion. No kids sizes — just extra leftovers.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs text-muted-foreground hidden md:block">
            Choose your meal, pick 2 sides, then send your order.
          </p>
          <button
            onClick={() => setCartOpen(v => !v)}
            className="relative flex items-center gap-2 rounded-full bg-secondary text-white px-5 py-2 text-sm font-semibold shadow-md shadow-secondary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            data-testid="button-open-cart"
          >
            <ShoppingBag className="w-4 h-4" />
            My Order
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center" data-testid="cart-count">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {cartOpen && (
          <div className="mb-8 bg-card border border-border/40 rounded-2xl shadow-md p-5" data-testid="cart-panel">
            <h2 className="text-lg font-serif font-bold text-primary mb-4">Your Order</h2>
            {cart.length === 0 ? (
              <p className="text-muted-foreground text-sm py-3 text-center">No items added yet. Pick your sides and tap "Add to Order" below.</p>
            ) : (
              <>
                <ul className="divide-y divide-border/50 mb-5">
                  {cart.map(item => (
                    <li key={item.id} className="flex items-start gap-3 py-3" data-testid={`cart-item-${item.id}`}>
                      <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground text-sm truncate">{item.name}</p>
                        <p className="text-secondary font-bold text-sm">{item.price}</p>
                        {item.selectedSides.length > 0 && (
                          <p className="text-xs text-muted-foreground mt-0.5">Sides: {item.selectedSides.join(", ")}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 pt-0.5">
                        <button onClick={() => updateQty(item.id, -1)} className="w-6 h-6 rounded-full border border-border/60 flex items-center justify-center hover:bg-muted transition-colors">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center text-sm font-bold">{item.quantity}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="w-6 h-6 rounded-full border border-border/60 flex items-center justify-center hover:bg-muted transition-colors">
                          <Plus className="w-3 h-3" />
                        </button>
                        <button onClick={() => removeFromCart(item.id)} className="ml-1 text-muted-foreground hover:text-destructive transition-colors">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <a href={`https://wa.me/16472000047?text=${buildOrderMessage()}`} target="_blank" rel="noreferrer"
                    className="flex-1 inline-flex justify-center items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                    data-testid="button-order-whatsapp">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                  <a href="https://m.me/61588412791988" target="_blank" rel="noreferrer"
                    className="flex-1 inline-flex justify-center items-center gap-2 rounded-full bg-[#0084FF] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                    data-testid="button-order-messenger">
                    <MessageCircle className="w-4 h-4" /> Messenger
                  </a>
                </div>
                <p className="text-[11px] text-muted-foreground mt-2.5 text-center">
                  We'll confirm availability, pricing, and delivery details.
                </p>
              </>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuItems.map((meal, idx) => {
            const qty = getCartQty(meal.id);
            const selectedForMeal = sideSelections[meal.id] || [];
            return (
              <div
                key={meal.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                data-testid={`meal-card-${meal.id}`}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={meal.image} alt={meal.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {meal.tags.map(tag => (
                      <span key={tag} className="bg-white/90 backdrop-blur-sm text-foreground text-[11px] font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2 gap-3">
                    <h3 className="font-serif font-bold text-lg text-primary leading-snug">{meal.name}</h3>
                    <div className="text-right whitespace-nowrap">
                      <span className="font-bold text-xl text-secondary">{meal.price}</span>
                      <span className="text-[11px] text-muted-foreground block">{meal.priceDetail}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">{meal.description}</p>

                  <div className="mb-4">
                    <p className="text-[11px] font-semibold text-foreground uppercase tracking-wider mb-2">Pick 2 sides</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {sides.map(side => {
                        const isSelected = selectedForMeal.includes(side);
                        return (
                          <button key={side} onClick={() => toggleSide(meal.id, side)}
                            aria-pressed={isSelected}
                            className={`text-left text-[11px] px-2.5 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${
                              isSelected ? "border-secondary bg-secondary/8 text-secondary font-semibold" : "border-border/60 text-muted-foreground hover:border-secondary/30"
                            }`}>
                            {isSelected && <Check className="w-3 h-3 shrink-0" />}
                            {side}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border/50">
                    {qty === 0 ? (
                      <button onClick={() => addToCart(meal)}
                        className="w-full inline-flex justify-center items-center gap-2 rounded-full bg-secondary px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-secondary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                        data-testid={`button-add-to-order-${meal.id}`}>
                        <Plus className="w-4 h-4" /> Add to Order
                      </button>
                    ) : (
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <button onClick={() => updateQty(meal.id, -1)} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-6 text-center font-bold text-primary">{qty}</span>
                          <button onClick={() => updateQty(meal.id, 1)} className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-secondary/90 transition-colors">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-sm font-semibold text-secondary flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> Added
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 bg-card rounded-2xl p-7 sm:p-8 max-w-3xl mx-auto border border-border/40 shadow-sm">
          <div className="text-center mb-5">
            <h3 className="text-xl font-serif font-bold text-primary mb-1">How to Order</h3>
            <p className="text-muted-foreground text-sm">Send a DM or text with:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { step: "1", label: "Your meal choices" },
              { step: "2", label: "Quantity" },
              { step: "3", label: "Side selections" },
            ].map(item => (
              <div key={item.step} className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs shrink-0">{item.step}</div>
                <span className="text-foreground font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-xs mb-5">Delivered straight to your door. Heat, eat, enjoy.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="https://wa.me/16472000047" target="_blank" rel="noreferrer"
              className="inline-flex justify-center items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              data-testid="button-whatsapp-cta">
              <MessageCircle className="w-4 h-4" /> Order via WhatsApp
            </a>
            <a href="https://m.me/61588412791988" target="_blank" rel="noreferrer"
              className="inline-flex justify-center items-center gap-2 rounded-full bg-[#0084FF] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              data-testid="button-messenger-cta">
              <MessageCircle className="w-4 h-4" /> Order via Messenger
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
