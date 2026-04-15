import type { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import navLogo from "@assets/att.Yeeup1CO9VY9Crw97iTvpDTiILgB9ae2yfNErH_GxAA.png_1775869943923.jpeg";

function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-secondary via-secondary to-secondary/90 text-white text-center py-2 px-4 text-[13px] font-medium w-full z-50 tracking-wide">
      <span className="opacity-90">Fresh weekly meals available now</span> — <span className="font-semibold">order early to secure your spot!</span>
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/meal-plans", label: "Meal Plans" },
    { href: "/catering", label: "Catering" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  function isActive(href: string) {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-card/85 backdrop-blur-xl border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href="/" className="flex items-center gap-3 group">
              <img src={navLogo} alt="PCK Logo" className="h-11 w-11 rounded-full object-cover shadow-md ring-2 ring-secondary/30 group-hover:ring-secondary/50 transition-all" />
              <div className="text-primary font-serif text-lg font-bold tracking-tight leading-tight">
                Your Personal Chef<br /><span className="text-[11px] text-secondary font-sans font-semibold uppercase tracking-[0.25em]">Kingston</span>
              </div>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-8 hidden">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-1 text-[13px] font-medium">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`px-3 py-2 rounded-lg transition-all font-semibold ${
                        isActive(link.href)
                          ? "text-secondary bg-secondary/8"
                          : "text-foreground/65 hover:text-secondary hover:bg-secondary/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-4">
              <Link
                className="rounded-full bg-secondary px-5 py-2 text-[13px] font-semibold text-white shadow-md shadow-secondary/20 transition-all hover:bg-secondary/90 hover:shadow-lg hover:shadow-secondary/25 hover:-translate-y-0.5 active:translate-y-0"
                href="/menu"
              >
                Order Now
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              className="rounded-full bg-muted/80 p-2.5 text-foreground/60 transition hover:bg-secondary/10 hover:text-secondary"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border/30 bg-card/95 backdrop-blur-xl">
          <nav aria-label="Global" className="px-4 py-3">
            <ul className="flex flex-col gap-1 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-xl p-3 transition font-semibold ${
                      isActive(link.href)
                        ? "text-secondary bg-secondary/8"
                        : "text-foreground/65 hover:text-secondary hover:bg-secondary/5"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  className="block w-full text-center rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-md"
                  href="/menu"
                  onClick={() => setIsOpen(false)}
                >
                  Order Now
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 rounded-[2rem] bg-gradient-to-r from-secondary to-secondary/85 p-8 sm:p-10 shadow-xl sm:flex-row sm:justify-between">
          <div>
            <strong className="text-xl text-white sm:text-2xl font-serif block">Limited Weekly Spots Available</strong>
            <p className="text-white/80 text-sm mt-1">Order before they sell out — we cook in small batches.</p>
          </div>
          <Link
            className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white px-8 py-3 text-primary font-semibold hover:bg-transparent hover:text-white transition-colors shrink-0"
            href="/contact"
          >
            <span className="text-sm">Get in Touch</span>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center sm:text-left">
            <Link href="/" className="inline-block mb-4">
              <img src={navLogo} alt="Your Personal Chef Kingston" className="h-14 w-14 rounded-full object-cover ring-2 ring-white/20 mx-auto sm:mx-0" />
            </Link>
            <p className="text-base font-medium text-white font-serif mt-2">Your Personal Chef Kingston</p>
            <p className="mt-2 max-w-xs mx-auto sm:mx-0 text-white/60 text-sm leading-relaxed">
              Freshly made meals in Kingston, prepared by a Red Seal certified chef. Ready when you are.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-white/90 uppercase tracking-wider">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/menu" className="text-white/60 transition hover:text-white">Weekly Menu</Link></li>
              <li><Link href="/meal-plans" className="text-white/60 transition hover:text-white">Meal Plans</Link></li>
              <li><Link href="/catering" className="text-white/60 transition hover:text-white">Catering & Events</Link></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-white/90 uppercase tracking-wider">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              <li>
                <a href="mailto:ypcdinners@gmail.com" className="transition hover:text-white">ypcdinners@gmail.com</a>
              </li>
              <li>
                <a href="tel:6472000047" className="transition hover:text-white">(647) 200-0047</a>
              </li>
              <li>Kingston, Ontario, Canada</li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-white/90 uppercase tracking-wider">Connect</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              <li>
                <a href="https://m.me/61588412791988" target="_blank" rel="noreferrer" className="transition hover:text-white">Facebook Messenger</a>
              </li>
              <li>
                <a href="https://wa.me/16472000047" target="_blank" rel="noreferrer" className="transition hover:text-white">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 sm:flex sm:items-center sm:justify-between text-white/40">
          <p className="text-center text-xs sm:text-left">
            &copy; 2026 Your Personal Chef Kingston. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/16472000047"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:shadow-xl transition-all z-50 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
