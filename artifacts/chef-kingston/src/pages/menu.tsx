import { useState } from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { menuItems } from "../data/menu";

export default function Menu() {
  const [filter, setFilter] = useState<string>("All");

  const allTags = Array.from(new Set(menuItems.flatMap(item => item.tags)));
  const filters = ["All", ...allTags];

  const filteredMeals = filter === "All" 
    ? menuItems 
    : menuItems.filter(item => item.tags.includes(filter));

  return (
    <PageLayout>
      <div className="bg-primary pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">This Week's Menu</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Fresh, chef-prepared meals ready for pickup or delivery. Heat, eat, and enjoy.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
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

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMeals.map((meal, idx) => (
            <div 
              key={meal.id} 
              className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
              style={{ animationDelay: `${idx * 100}ms` }}
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
              <div className="p-6">
                <div className="flex justify-between items-start mb-3 gap-4">
                  <h3 className="font-serif font-bold text-xl text-primary leading-tight">{meal.name}</h3>
                  <div className="text-right whitespace-nowrap">
                    <span className="font-bold text-lg text-primary">{meal.price}</span>
                    <span className="text-xs text-muted-foreground block">{meal.priceDetail}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-6">{meal.description}</p>
                <div className="pt-4 border-t border-border flex justify-between items-center">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Available this week</span>
                  <a 
                    href="https://m.me/YourPersonalChefKingston" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-sm font-semibold text-secondary hover:text-primary transition-colors"
                  >
                    Order Meal
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Info Block */}
        <div className="mt-20 bg-muted/50 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto border border-border">
          <h3 className="text-2xl font-serif font-bold text-primary mb-4">How to Order</h3>
          <p className="text-muted-foreground mb-8">Send us a message with your selections, quantities, and whether you prefer pickup or delivery. We'll confirm your order and total.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://m.me/YourPersonalChefKingston" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex justify-center items-center rounded-md bg-[#0084FF] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#0084FF]/90 transition-colors"
            >
              Order via Messenger
            </a>
            <a 
              href="https://wa.me/16472000047" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex justify-center items-center rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#25D366]/90 transition-colors"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
