import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Moon } from "lucide-react";
import glassesFront from "@/assets/glasses-front.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Proteção Profissional</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground leading-tight mb-6">
              Diga Adeus à{" "}
              <span className="amber-text-gradient">Fadiga Ocular</span>
              {" "}e Dores de Cabeça
            </h1>

            <p className="text-lg md:text-xl text-hero-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0">
              Desenvolvido para Profissionais de TI, Gamers e qualquer pessoa que passa horas em frente às telas. 
              Proteja sua visão e aumente sua produtividade.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {[
                { icon: Shield, text: "100% Bloqueio UV" },
                { icon: Zap, text: "Reduz Fadiga" },
                { icon: Moon, text: "Melhora o Sono" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-hero-foreground/5 border border-hero-foreground/10"
                >
                  <feature.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-hero-foreground/80">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="amber-gradient text-accent-foreground font-semibold px-8 py-6 text-lg rounded-xl hover:opacity-90 transition-opacity">
                Comprar Agora
              </Button>
              <Button size="lg" variant="outline" className="border-hero-foreground/20 text-hero-foreground hover:bg-hero-foreground/5 px-8 py-6 text-lg rounded-xl">
                Saiba Mais
              </Button>
            </motion.div>
          </motion.div>

          {/* Product image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-75 animate-glow-pulse" />
              
              <motion.img
                src={glassesFront}
                alt="BlueShield Pro - Óculos Bloqueador de Luz Azul"
                className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-hero-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
