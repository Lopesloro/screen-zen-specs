import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Truck, RefreshCw } from "lucide-react";
import glassesFront from "@/assets/glasses-front.png";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Card */}
          <div className="relative overflow-hidden rounded-3xl hero-gradient p-8 md:p-12 lg:p-16">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground mb-6">
                  Invista na Sua{" "}
                  <span className="amber-text-gradient">Saúde Ocular</span>
                </h2>
                <p className="text-lg text-hero-foreground/70 mb-8">
                  Não deixe que a fadiga ocular e as dores de cabeça limitem seu potencial. 
                  Experimente o conforto e a clareza que seus olhos merecem.
                </p>

                {/* Guarantees */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                  {[
                    { icon: ShieldCheck, text: "Garantia 30 dias" },
                    { icon: Truck, text: "Frete Grátis" },
                    { icon: RefreshCw, text: "Troca Fácil" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2 text-hero-foreground/80">
                      <item.icon className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="amber-gradient text-accent-foreground font-semibold px-10 py-7 text-lg rounded-xl hover:opacity-90 transition-opacity"
                  >
                    Comprar Agora
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-hero-foreground/30 text-hero-foreground hover:bg-hero-foreground/10 px-10 py-7 text-lg rounded-xl"
                  >
                    Saiba Mais
                  </Button>
                </div>
              </div>

              {/* Product image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/30 blur-3xl rounded-full scale-90" />
                  <img
                    src={glassesFront}
                    alt="BlueShield Pro"
                    className="relative z-10 w-full max-w-sm drop-shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
