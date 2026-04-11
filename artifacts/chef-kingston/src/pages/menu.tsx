import { useState } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { menuItems, MenuItem } from "../data/menu";
import { ShoppingBag, Plus, Minus, Trash2, MessageCircle } from "lucide-react";

type CartItem = MenuItem & { quantity: number };

export default function Menu() {
  const [filter, setFilter] = useState<string>("All");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const allTags = Array.from(new Set(menuItems.flatMap(item => item.tags)));
  const filters = ["All", ...allTags];

  const filteredMeals = filter === "All"
    ? menuItems
    : menuItems.filter(item => item.tags.includes(filter));

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  function addToCart(meal: MenuItem) {
    setCart(prev => {
      const existing = prev.find(c => c.id === meal.id);
      if (existing) {
        return prev.map(c => c.id === meal.id ? { ...c, quantity: c.quantity + 1 } : c);
      }
      return [...prev, { ...meal, quantity: 1 }];
    });
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
    const lines = cart.map(c => `${c.quantity}x ${c.name} (${c.price})`);
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
      <div className="bg-primary pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">This Week's Menu</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Fresh, chef-prepared meals ready for pickup or delivery. Add to your order, then send it via WhatsApp or Messenger.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters + Cart Button Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === f
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
                data-testid={`filter-${f.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {f}
              </button>
            ))}
          </div>
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

        {/* Cart Panel */}
        {cartOpen && (
          <div className="mb-10 bg-card border border-border rounded-2xl shadow-sm p-6" data-testid="cart-panel">
            <h2 className="text-xl font-serif font-bold text-primary mb-4">Your Order</h2>
            {cart.length === 0 ? (
              <p className="text-muted-foreground text-sm py-4 text-center">No items added yet. Browse the menu below and tap "Add to Order".</p>
            ) : (
              <>
                <ul className="divide-y divide-border mb-6">
                  {cart.map(item => (
                    <li key={item.id} className="flex items-center gap-4 py-4" data-testid={`cart-item-${item.id}`}>
                      <img src={item.image} alt={item.name} className="w-14 h-14 rounded-lg object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground text-sm truncate">{item.name}</p>
                        <p className="text-secondary font-bold text-sm">{item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                          data-testid={`cart-decrease-${item.id}`}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-bold" data-testid={`cart-qty-${item.id}`}>{item.quantity}</span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                          data-testid={`cart-increase-${item.id}`}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-1 text-muted-foreground hover:text-destructive transition-colors"
                          data-testid={`cart-remove-${item.id}`}
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

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMeals.map((meal, idx) => {
            const qty = getCartQty(meal.id);
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
                      <span className="font-bold text-lg text-primary">{meal.price}</span>
                      <span className="text-xs text-muted-foreground block">{meal.priceDetail}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 flex-1">{meal.description}</p>
                  <div className="pt-4 border-t border-border">
                    {qty === 0 ? (
                      <button
                        onClick={() => { addToCart(meal); setCartOpen(true); }}
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
                            data-testid={`button-decrease-${meal.id}`}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-bold text-primary" data-testid={`qty-display-${meal.id}`}>{qty}</span>
                          <button
                            onClick={() => updateQty(meal.id, 1)}
                            className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                            data-testid={`button-increase-${meal.id}`}
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-sm font-semibold text-secondary">Added to order</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order info block */}
        <div className="mt-20 bg-muted/50 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto border border-border">
          <h3 className="text-2xl font-serif font-bold text-primary mb-4">How to Order</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Add your desired meals to your order above, then send it via WhatsApp or Messenger. We'll confirm your selections, total, and preferred pickup or delivery time.
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
