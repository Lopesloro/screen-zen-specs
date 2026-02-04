import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Sparkles, Heart, Moon, Eye, Glasses } from "lucide-react";
import glassesSide from "@/assets/glasses-side.png";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Bloqueio de 100% da Luz UV",
    description: "Proteja seus olhos dos raios UV prejudiciais, tanto de telas quanto do ambiente.",
  },
  {
    icon: Sparkles,
    title: "Redução da Luz Azul",
    description: "Minimize a exposição à luz azul de alta energia que causa fadiga ocular.",
  },
  {
    icon: Heart,
    title: "Conforto Visual",
    description: "Desfrute de horas de trabalho ou lazer com menos desconforto.",
  },
  {
    icon: Eye,
    title: "Prevenção de Dores",
    description: "Diga adeus às dores de cabeça causadas pelo esforço visual.",
  },
  {
    icon: Moon,
    title: "Sono Otimizado",
    description: "Melhore significativamente a qualidade do seu sono.",
  },
  {
    icon: Glasses,
    title: "Lentes Premium",
    description: "Visão nítida com lentes resistentes e antirreflexo.",
  },
];

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl blur-2xl" />
              <img
                src={glassesSide}
                alt="BlueShield Pro - Vista lateral"
                className="relative z-10 w-full max-w-md mx-auto rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              A Solução
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Óculos Bloqueador de Luz Azul{" "}
              <span className="amber-text-gradient">BlueShield Pro</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Meticulosamente projetado para oferecer a proteção que seus olhos precisam 
              em um mundo cada vez mais digital. Com tecnologia avançada de filtragem de luz azul.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
