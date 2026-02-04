import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Eye, HeadsetIcon, Brain } from "lucide-react";

const problems = [
  {
    icon: Monitor,
    title: "Horas em frente às telas?",
    description: "Trabalho, estudo ou lazer — as telas dominam nosso dia a dia.",
  },
  {
    icon: Eye,
    title: "Fadiga ocular e olhos secos?",
    description: "Sensação de queimação, irritação e cansaço visual constante.",
  },
  {
    icon: HeadsetIcon,
    title: "Dores de cabeça frequentes?",
    description: "Enxaquecas que afetam sua produtividade e qualidade de vida.",
  },
  {
    icon: Brain,
    title: "Dificuldade para dormir?",
    description: "A luz azul desregula seu ciclo natural de sono.",
  },
];

const ProblemSection = () => {
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
          <span className="inline-block px-4 py-2 rounded-full bg-destructive/10 text-destructive font-medium text-sm mb-4">
            O Problema
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Você se identifica com isso?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A luz azul emitida por telas digitais é uma das principais causas de desconforto visual 
            e impacta diretamente sua qualidade de vida e produtividade.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <problem.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12 text-lg text-muted-foreground"
        >
          Se você respondeu <span className="text-accent font-semibold">sim</span> a qualquer uma dessas perguntas, 
          você não está sozinho.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
