import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, TrendingUp, GraduationCap, Gamepad2, Smartphone } from "lucide-react";

const audiences = [
  {
    icon: Code,
    title: "Desenvolvedores",
    description: "Programadores e Engenheiros de Software. Foco total no código sem distração.",
  },
  {
    icon: Palette,
    title: "Designers",
    description: "Designers Gráficos e Editores de Vídeo. Precisão nas cores com proteção.",
  },
  {
    icon: TrendingUp,
    title: "Marketing Digital",
    description: "Gerencie campanhas e análises com conforto e clareza visual.",
  },
  {
    icon: GraduationCap,
    title: "Estudantes",
    description: "Horas de estudo na tela não serão mais um problema.",
  },
  {
    icon: Gamepad2,
    title: "Gamers",
    description: "Aumente seu tempo de jogo e performance com olhos descansados.",
  },
  {
    icon: Smartphone,
    title: "Uso Diário",
    description: "Qualquer pessoa que usa dispositivos digitais diariamente.",
  },
];

const AudienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Para Você
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Para Quem é o BlueShield Pro?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ideal para profissionais que passam longas horas em frente às telas 
            e buscam proteger sua saúde ocular.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-accent/40 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl amber-gradient flex items-center justify-center mb-4">
                  <audience.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground">
                  {audience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
