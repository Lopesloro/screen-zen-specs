import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import glassesFront from "@/assets/glasses-front.png";

const specs = [
  { label: "Material da Armação", value: "TR90 Leve e Flexível" },
  { label: "Material da Lente", value: "Policarbonato Premium" },
  { label: "Largura Total", value: "143mm (5.63in)" },
  { label: "Altura do Frame", value: "47mm (1.85in)" },
  { label: "Largura da Ponte", value: "48mm (0.86in)" },
  { label: "Tecnologia", value: "Bloqueio 400-440nm" },
];

const SpecsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 hero-gradient" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Especificações
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground mb-6">
            Design Ergonômico Premium
          </h2>
          <p className="text-lg text-hero-foreground/70 max-w-2xl mx-auto">
            Desenvolvido para se adaptar confortavelmente ao rosto, 
            minimizando pontos de pressão e garantindo uso prolongado sem incômodos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Specs image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-hero-foreground/5 rounded-3xl p-8 border border-hero-foreground/10">
              <img
                src={glassesFront}
                alt="BlueShield Pro - Especificações"
                className="w-full max-w-md mx-auto"
              />
              
              {/* Measurement annotations */}
              <div className="absolute top-1/2 left-4 -translate-y-1/2 text-sm text-hero-foreground/60">
                <div className="border-t border-hero-foreground/30 w-12 mb-1" />
                47mm
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-hero-foreground/60 text-center">
                143mm
                <div className="border-t border-hero-foreground/30 w-32 mt-1" />
              </div>
            </div>
          </motion.div>

          {/* Specs list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-4">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-hero-foreground/5 border border-hero-foreground/10"
                >
                  <span className="text-hero-foreground/70">{spec.label}</span>
                  <span className="font-semibold text-hero-foreground">{spec.value}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 p-6 rounded-2xl amber-gradient"
            >
              <p className="text-accent-foreground font-semibold text-lg mb-2">
                Tecnologia de Filtragem de Ponta
              </p>
              <p className="text-accent-foreground/80">
                Nossas lentes utilizam um revestimento especial desenvolvido para bloquear 
                seletivamente as ondas de luz azul mais prejudiciais, sem comprometer a 
                clareza ou a percepção de cores.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
