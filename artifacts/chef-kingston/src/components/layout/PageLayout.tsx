import type { ReactNode } from "react";
import { Link } from "wouter";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import navLogo from "@assets/att.Yeeup1CO9VY9Crw97iTvpDTiILgB9ae2yfNErH_GxAA.png_1775869943923.jpeg";
import bannerLogo from "@assets/att.J5mBriJkII7OGL5oPvxlZxyGMhLkpvzbH8sA1bQDX9o.png_1775869943923.jpeg";

function AnnouncementBar() {
  return (
    <div className="bg-secondary text-secondary-foreground text-center py-2 px-4 text-sm font-medium w-full z-50">
      Fresh weekly meals available now — order early to secure your spot!
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/meal-plans", label: "Meal Plans" },
    { href: "/catering", label: "Catering" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href="/" className="flex items-center gap-3">
              <img src={navLogo} alt="PCK Logo" className="h-12 w-12 rounded-md object-cover" />
              <div className="text-primary font-serif text-xl font-bold tracking-tight leading-tight">
                Your Personal Chef<br/><span className="text-sm text-secondary font-sans font-medium uppercase tracking-widest">Kingston</span>
              </div>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-8 hidden">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm font-medium">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-foreground/80 transition hover:text-secondary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow transition hover:bg-primary/90"
                  href="/menu"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border">
          <nav aria-label="Global" className="p-4 bg-background">
            <ul className="flex flex-col gap-4 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="block text-foreground/80 hover:text-secondary p-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  className="block w-full text-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow"
                  href="/menu"
                  onClick={() => setIsOpen(false)}
                >
                  Order Now
                </a>
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
        <div className="flex flex-col items-center gap-4 rounded-lg bg-secondary p-6 shadow-lg sm:flex-row sm:justify-between">
          <strong className="text-xl text-primary sm:text-xl font-serif"> Limited Weekly Spots Available </strong>

          <a
            className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-8 py-3 text-primary-foreground hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:bg-primary/90 transition-colors"
            href="/contact"
          >
            <span className="text-sm font-medium"> Get in Touch </span>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center sm:text-left">
            <Link href="/" className="inline-block mb-4">
              <img src={bannerLogo} alt="Your Personal Chef Kingston" className="h-16 w-auto object-contain brightness-0 invert mx-auto sm:mx-0" />
            </Link>
            <p className="mt-2 max-w-xs mx-auto sm:mx-0 text-white/80">
              Freshly made meals in Kingston, prepared by a Red Seal certified chef. Ready when you are.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-white font-serif">Services</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/menu" className="text-white/80 transition hover:text-white">Weekly Menu</Link></li>
              <li><Link href="/meal-plans" className="text-white/80 transition hover:text-white">Meal Plans</Link></li>
              <li><Link href="/catering" className="text-white/80 transition hover:text-white">Catering & Events</Link></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-white font-serif">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
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
            <p className="text-lg font-medium text-white font-serif">Social</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <a href="https://m.me/YourPersonalChefKingston" target="_blank" rel="noreferrer" className="transition hover:text-white">Facebook Messenger</a>
              </li>
              <li>
                <a href="https://wa.me/16472000047" target="_blank" rel="noreferrer" className="transition hover:text-white">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 sm:flex sm:items-center sm:justify-between text-white/60">
          <p className="text-center text-sm sm:text-left">
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
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
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
