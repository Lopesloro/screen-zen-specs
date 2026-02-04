import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Glasses, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg amber-gradient flex items-center justify-center">
              <Glasses className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className={`text-lg font-bold ${isScrolled ? "text-foreground" : "text-hero-foreground"}`}>
              BlueShield Pro
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Benefícios", "Para Quem", "Especificações", "Depoimentos"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled ? "text-muted-foreground" : "text-hero-foreground/70"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button className="amber-gradient text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Comprar Agora
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-hero-foreground"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-hero-foreground"}`} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-border bg-background"
          >
            <div className="flex flex-col gap-4">
              {["Benefícios", "Para Quem", "Especificações", "Depoimentos"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors py-2"
                >
                  {item}
                </a>
              ))}
              <Button className="amber-gradient text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity w-full mt-2">
                Comprar Agora
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
