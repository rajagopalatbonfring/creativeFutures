'use client';

import { motion } from 'framer-motion';

export const StepCard = ({ number, title, description, icon, index }: any) => {
    return (
      <motion.div
        className="text-center p-6 bg-card rounded-2xl shadow-sm relative border border-transparent hover:border-primary/50 transition-colors"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: index * 0.1 }}
      >
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-extrabold text-lg border-4 border-background font-headline">{number}</div>
        <div
          className="text-4xl text-primary mb-4 flex items-center justify-center mt-6"
        >
          {icon}
        </div>
        <h3 className="text-lg font-extrabold mb-2 text-foreground font-headline">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </motion.div>
    );
  };
  