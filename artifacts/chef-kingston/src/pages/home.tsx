import { Link } from "wouter";
import { PageLayout } from "../components/layout/PageLayout";
import { menuItems } from "../data/menu";
import heroImg from "@assets/att.zF1zSKs8HE67Fv1Ysn_cQNG7xuMXY-hnNeYQLjM67bU_1775869943923.jpeg";
import aboutImg from "@assets/att.He80MLl2WKJIpBo865cw2_TJW-lTG6BDeJQ-TINd5m8_1775869943923.jpeg";
import gallery1 from "@assets/att.HQSPLJRNfF28v2i8Y4oH_xO7Im3GZ1e-4hCMbfyHlUk_1775869943923.jpeg";
import gallery2 from "@assets/att.qOSDHH62gq5NRRtaTOsXClmp7ZV4gqR2W9ulLehqcMY_1775869943923.jpeg";
import gallery3 from "@assets/att.o6wypxRaEioByCQGwWXcek02sBjEzj9H8bGGx8y5RQI_1775869943923.jpeg";
import gallery4 from "@assets/att.A69rdFWTe3wzITD52xuHTwgrojwY7VkksIX_4GHQRJI_1775869943923.jpeg";
import gallery5 from "@assets/att.VvcqNuUBwxjs3UpPbbrYE9R9cY2Sr8uFMo7ANHklVJ4_1775869943923.jpeg";
import gallery6 from "@assets/att.YYNyzODCUYr-GbkJ2Nig5eg7uhaYcjBubYlMsDSVAYg_1775869943923.jpeg";
import gallery7 from "@assets/47c46ebf-97c4-4ac3-92d2-cb1d5b43eb79_1776270077781.jpeg";
import gallery8 from "@assets/64623fe8-c173-4fc9-bdb3-62695b6264df_1776269707231.jpeg";

const galleryImages = [
  { src: gallery1, alt: "Roasted meat with vegetables" },
  { src: gallery2, alt: "Panko crusted fish with quinoa" },
  { src: gallery3, alt: "Citrus stir fry" },
  { src: gallery4, alt: "Beef stir fry" },
  { src: gallery5, alt: "Crispy chicken with dipping sauce" },
  { src: gallery6, alt: "Grilled vegetables" },
  { src: gallery7, alt: "Chicken parm fresh from the oven" },
  { src: gallery8, alt: "Crispy orange beef with rice" },
];

export default function Home() {
  const featuredMeals = menuItems.slice(0, 3);

  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[10%] w-72 h-72 bg-secondary/[0.06] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-[5%] w-96 h-96 bg-secondary/[0.04] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-secondary/10 text-secondary text-xs font-semibold tracking-wider uppercase mb-6 border border-secondary/15">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                Personal Chef & Meal Delivery
              </span>
              <h1 className="max-w-xl text-4xl sm:text-5xl lg:text-[3.5rem] font-serif font-bold leading-[1.08] tracking-tight mb-6 text-primary">
                Enjoy <span className="text-secondary italic">Delicious</span> Home-Cooked Meals
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Fresh ingredients, chef-prepared meals, and a passion for good food — delivered to your door or ready for pick-up in Kingston.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/menu"
                  className="inline-flex justify-center items-center rounded-full bg-secondary px-7 py-3 text-sm font-semibold text-white shadow-md shadow-secondary/25 hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5 transition-all active:translate-y-0"
                  data-testid="button-view-menu-hero"
                >
                  View This Week's Menu →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center rounded-full border border-primary/15 bg-card/50 px-7 py-3 text-sm font-semibold text-primary hover:border-secondary/40 hover:text-secondary transition-all"
                  data-testid="button-contact-hero"
                >
                  Get in Touch
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Red Seal Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>25+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/20 to-transparent scale-110 blur-2xl"></div>
                <div className="w-72 h-72 sm:w-[22rem] sm:h-[22rem] rounded-full overflow-hidden ring-[6px] ring-card shadow-2xl relative z-10">
                  <img
                    src={heroImg}
                    alt="Beautifully plated meals"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-card rounded-2xl shadow-xl p-4 border border-border/50 z-20 animate-float">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">This week's special</p>
                  <p className="font-serif font-bold text-primary text-sm mt-0.5">Chicken Parm</p>
                  <p className="text-secondary font-bold text-lg leading-tight">$18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-secondary font-semibold text-xs uppercase tracking-wider">Simple Process</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-2 mb-4">How Ordering Works</h2>
            <p className="text-muted-foreground">Gourmet meals at home, made simple.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-secondary/25 to-transparent"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
              {[
                { step: "01", title: "Fresh Menu", desc: "New options posted weekly" },
                { step: "02", title: "Choose", desc: "Select meals & quantities" },
                { step: "03", title: "Order", desc: "Text, WhatsApp, or DM" },
                { step: "04", title: "Cooked", desc: "Chef cooks meals fresh" },
                { step: "05", title: "Delivery", desc: "Pick up or delivered" },
                { step: "06", title: "Enjoy", desc: "Heat, eat, enjoy!" }
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center p-5 bg-background rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group border border-border/40">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-serif font-bold text-lg mb-3 group-hover:bg-secondary group-hover:text-white transition-all relative z-10">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="max-w-2xl">
              <span className="text-secondary font-semibold text-xs uppercase tracking-wider">This Week</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-2 mb-3">Our Signature <span className="text-secondary italic">Dishes</span></h2>
              <p className="text-muted-foreground">From classic favourites to modern culinary creations, every dish is made with the freshest ingredients.</p>
            </div>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all"
              data-testid="link-view-all-menu"
            >
              View Full Menu <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMeals.map((meal) => (
              <div key={meal.id} className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border/40">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={meal.image}
                    alt={meal.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {meal.tags.map(tag => (
                      <span key={tag} className="bg-white/90 backdrop-blur-sm text-foreground text-[11px] font-semibold px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2 gap-3">
                    <h3 className="font-serif font-bold text-lg text-primary leading-snug">{meal.name}</h3>
                    <div className="text-right whitespace-nowrap">
                      <span className="font-bold text-xl text-secondary">{meal.price}</span>
                      <span className="text-[11px] text-muted-foreground block">{meal.priceDetail}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">{meal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-secondary font-semibold text-xs uppercase tracking-wider">Perfect For You</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-2 mb-4">Who Is This For?</h2>
            <p className="text-muted-foreground">We cook so you don't have to.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Busy Families", desc: "Healthy home-style dinners that are kid-friendly. Reclaim your stress-free weeknights and spend more time together.", emoji: "👨‍👩‍👧‍👦" },
              { title: "Professionals", desc: "Fresh portioned meals perfectly sized for one. Save time on cooking and cleanup while eating better than takeout.", emoji: "🧑‍💼" },
              { title: "Students", desc: "Better than fast food, affordable, and filling. Just heat, eat, and get back to your studies.", emoji: "🎓" }
            ].map((item, i) => (
              <div key={i} className="bg-background p-7 rounded-2xl border border-border/40 text-center hover:shadow-md hover:-translate-y-0.5 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/15 transition-colors">
                  <span className="text-2xl">{item.emoji}</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-secondary font-semibold text-xs uppercase tracking-wider">Gallery</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-2 mb-4">A Feast for <span className="text-secondary italic">Your Eyes</span></h2>
            <p className="text-muted-foreground">Real meals, prepared fresh every week by our chef.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => {
              const isLarge = i === 0 || i === 5;
              return (
                <div
                  key={i}
                  className={`group overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all ${
                    isLarge ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <div className={`${isLarge ? "aspect-square" : "aspect-square"} overflow-hidden relative`}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-xs font-medium">{img.alt}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex justify-center items-center rounded-full bg-secondary px-7 py-3 text-sm font-semibold text-white shadow-md shadow-secondary/25 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              See This Week's Menu →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-semibold text-xs uppercase tracking-wider">About the Chef</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 mt-2">Why Choose Your Personal Chef?</h2>
              <ul className="space-y-5">
                {[
                  { title: "Professional Chef Prepared", desc: "25+ years experience, Red Seal certified, Michelin-star trained." },
                  { title: "Fresh Quality Ingredients", desc: "No preservatives, no shortcuts. Just real food cooked with care." },
                  { title: "Convenient Delivery & Pickup", desc: "Flexible options to fit your schedule perfectly." },
                  { title: "Affordable Pricing", desc: "Restaurant-quality meals at prices that make sense for everyday dining." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base mb-0.5">{item.title}</h3>
                      <p className="text-primary-foreground/60 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex justify-center items-center rounded-full border border-secondary/60 text-secondary px-6 py-2.5 text-sm font-semibold hover:bg-secondary hover:text-white transition-all"
                  data-testid="button-about-chef"
                >
                  Meet the Chef →
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl relative z-10 ring-1 ring-white/10">
                <img src={aboutImg} alt="Chef in kitchen" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary/20 rounded-2xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-secondary font-semibold text-xs uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mt-2 mb-4">What People Are <span className="text-secondary italic">Saying</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { quote: "Finally, a meal service that actually feels home-cooked. We order every week for the whole family.", name: "Sarah T.", location: "Kingston, ON", initial: "S" },
              { quote: "As a student, I never ate this well. Fresh food, great price — total game changer.", name: "Marcus L.", location: "Queen's University", initial: "M" },
              { quote: "The salmon dish was restaurant quality. Can't believe I can get this at home with zero effort.", name: "Jennifer K.", location: "Kingston, ON", initial: "J" }
            ].map((t, i) => (
              <div key={i} className="bg-background rounded-2xl p-6 border border-border/40 relative hover:shadow-md transition-all">
                <div className="text-secondary/15 font-serif text-6xl leading-none absolute top-4 right-5">"</div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-3.5 h-3.5 text-secondary fill-secondary" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-foreground/75 leading-relaxed mb-5 text-sm relative z-10">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-8 italic">Testimonials are illustrative examples. Real reviews coming after our April/May 2026 launch.</p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-secondary/5 rounded-3xl blur-xl"></div>
            <div className="relative bg-card rounded-2xl p-10 sm:p-14 border border-border/40 shadow-md">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">Ready to Eat <span className="text-secondary italic">Better?</span></h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Fresh ingredients, mouth-watering recipes, and a passion for good food delivered to your door.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href="https://wa.me/16472000047"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center items-center rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-secondary/25 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  data-testid="button-cta-whatsapp"
                >
                  Order Now →
                </a>
                <Link
                  href="/meal-plans"
                  className="inline-flex justify-center items-center rounded-full border border-primary/15 bg-background px-7 py-3.5 text-sm font-semibold text-primary hover:border-secondary/40 hover:text-secondary transition-all"
                  data-testid="button-cta-plans"
                >
                  View Meal Plans
                </Link>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                Or call/text us at <a href="tel:6472000047" className="text-secondary font-medium hover:underline">(647) 200-0047</a>
              </p>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
