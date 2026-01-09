'use client';

import { motion } from 'framer-motion';

export const AgeGroupCard = ({ group }: any) => {
    return (
      <motion.div
        className="p-3 text-center transition-all duration-300 relative overflow-hidden rounded-2xl group bg-card"
        whileHover={{ y: -5, scale: 1.05, shadow: 'lg' }}
      >
        <div className="relative z-10">
          <motion.div
            className="text-3xl mb-3 mx-auto flex justify-center text-primary"
          >
            {group.icon}
          </motion.div>
          <h3 className="text-lg font-extrabold font-headline mb-1" >{group.range}</h3>
          <p className="text-xs text-muted-foreground leading-snug hidden sm:block">{group.name}</p>
        </div>
      </motion.div>
    );
  };
  