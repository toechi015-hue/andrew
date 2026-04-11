import { Link } from "wouter";
import { PageLayout } from "../components/layout/PageLayout";
import { menuItems } from "../data/menu";
import heroImg from "../assets/images/hero.png";
import aboutImg from "../assets/images/about-chef.png";

export default function Home() {
  const featuredMeals = menuItems.slice(0, 3);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Beautifully plated upscale dinner" 
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-semibold tracking-wider uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Personal Chef & Meal Delivery
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both">
              Freshly Made Meals in Kingston — <span className="text-secondary">Ready When You Are</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-both max-w-xl leading-relaxed">
              Busy day? We've got dinner covered. Enjoy delicious, freshly prepared meals made with care by a Red Seal certified chef.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500 fill-mode-both">
              <Link 
                href="/menu" 
                className="inline-flex justify-center items-center rounded-md bg-secondary px-8 py-3.5 text-sm font-semibold text-secondary-foreground shadow-lg hover:bg-secondary/90 hover:scale-105 transition-all"
                data-testid="button-view-menu-hero"
              >
                View Menu
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex justify-center items-center rounded-md bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 transition-all"
                data-testid="button-contact-hero"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">How Ordering Works</h2>
            <p className="text-muted-foreground text-lg">Gourmet meals at home, made simple.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              { step: "01", title: "Fresh Menu", desc: "4-5 fresh options posted weekly" },
              { step: "02", title: "Choose", desc: "Select meals and quantities" },
              { step: "03", title: "Order", desc: "Message us on social media or text" },
              { step: "04", title: "Cooked", desc: "Chef cooks your meals fresh to order" },
              { step: "05", title: "Delivery", desc: "Pick up or get it delivered" },
              { step: "06", title: "Enjoy", desc: "Heat, eat, and enjoy your evening" }
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col items-center p-6 bg-card rounded-xl shadow-sm border border-border/50 hover:shadow-md hover:border-secondary/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center font-serif font-bold text-xl mb-4 group-hover:scale-110 group-hover:bg-secondary group-hover:text-primary transition-all">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Meals */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">Featured Weekly Meals</h2>
              <p className="text-muted-foreground text-lg">A taste of what's coming out of our kitchen. Made fresh with quality ingredients.</p>
            </div>
            <Link 
              href="/menu" 
              className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors"
              data-testid="link-view-all-menu"
            >
              View Full Menu <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMeals.map((meal) => (
              <div key={meal.id} className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-all duration-300">
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
                  <p className="text-muted-foreground text-sm line-clamp-2">{meal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Who Is This For?</h2>
            <p className="text-muted-foreground text-lg">We cook so you don't have to.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm text-center">
              <h3 className="font-serif font-bold text-2xl text-primary mb-4">Busy Families</h3>
              <p className="text-muted-foreground">Healthy home-style dinners that are kid-friendly. Reclaim your stress-free weeknights and spend more time together.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm text-center">
              <h3 className="font-serif font-bold text-2xl text-primary mb-4">Individuals</h3>
              <p className="text-muted-foreground">Fresh portioned meals perfectly sized for one. Save time on cooking and cleanup while eating better than takeout.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm text-center">
              <h3 className="font-serif font-bold text-2xl text-primary mb-4">Students</h3>
              <p className="text-muted-foreground">Better than fast food, affordable, and filling. Just heat, eat, and get back to your studies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent hidden lg:block"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">Why Choose Your Personal Chef?</h2>
              <ul className="space-y-6">
                {[
                  { title: "Professional Chef Prepared", desc: "25+ years experience, Red Seal certified, Michelin-star trained." },
                  { title: "Fresh Quality Ingredients", desc: "No preservatives, no shortcuts. Just real food cooked with care." },
                  { title: "Convenient Delivery & Pickup", desc: "Flexible options to fit your schedule perfectly." },
                  { title: "Affordable Pricing", desc: "Restaurant-quality meals at prices that make sense for everyday dining." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link 
                  href="/about" 
                  className="inline-flex justify-center items-center rounded-md bg-transparent border border-secondary text-secondary px-6 py-3 text-sm font-semibold hover:bg-secondary hover:text-primary transition-all"
                  data-testid="button-about-chef"
                >
                  Meet the Chef
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img src={aboutImg} alt="Chef in kitchen" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary rounded-2xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">What Kingston Is Saying</h2>
            <p className="text-muted-foreground text-lg">Real meals, real people — coming soon. Reviews will appear here once we launch.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Finally, a meal service that actually feels home-cooked. We order every week for the whole family.", name: "Sarah T.", location: "Kingston, ON", initial: "S" },
              { quote: "As a student, I never ate this well. Fresh food, great price — total game changer.", name: "Marcus L.", location: "Queen's University", initial: "M" },
              { quote: "The salmon dish was restaurant quality. Can't believe I can get this at home with zero effort.", name: "Jennifer K.", location: "Kingston, ON", initial: "J" }
            ].map((t, i) => (
              <div key={i} className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm relative">
                <span className="text-5xl text-secondary/30 font-serif absolute top-4 left-6 leading-none select-none">&ldquo;</span>
                <p className="text-foreground/80 leading-relaxed mb-6 pt-4 italic">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-secondary flex items-center justify-center font-bold text-sm shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.location}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-secondary fill-secondary" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 italic">Testimonials are illustrative examples. Real reviews will populate here after our April/May 2026 launch.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-6">Ready for a Better Dinner?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Weekly spots are limited. Order now via WhatsApp, text, or DM — we'll take care of the rest.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/16472000047" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors"
              data-testid="button-cta-whatsapp"
            >
              Order Now via WhatsApp
            </a>
            <Link 
              href="/meal-plans" 
              className="inline-flex justify-center items-center rounded-md bg-secondary/10 text-secondary border border-secondary/20 px-8 py-4 text-base font-semibold hover:bg-secondary/20 transition-colors"
              data-testid="button-cta-plans"
            >
              View Meal Plans
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Or call/text us at <a href="tel:6472000047" className="text-primary font-medium hover:text-secondary transition-colors">(647) 200-0047</a> or email <a href="mailto:ypcdinners@gmail.com" className="text-primary font-medium hover:text-secondary transition-colors">ypcdinners@gmail.com</a>
          </p>
        </div>
      </section>

    </PageLayout>
  );
}
