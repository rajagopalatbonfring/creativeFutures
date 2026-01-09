'use client';

import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

export const ResourceCard = ({ title, description, icon, color }: any) => {    
    return (
      <motion.div
        className="p-6 rounded-2xl bg-card shadow-sm border border-transparent hover:border-primary/50 transition-all duration-300 flex flex-col text-center items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        whileHover={{ y: -8, shadow: '0 10px 20px rgba(0,0,0,0.05)' }}
      >
        <div
          className="text-4xl mb-4"
          style={{ color }}
        >
          {icon}
        </div>
        <h3 className="text-lg font-extrabold mb-2 text-foreground font-headline">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-grow">{description}</p>
        <motion.button
          className="inline-flex items-center gap-2 mt-auto py-2 px-4 bg-primary/10 text-primary rounded-full font-semibold cursor-pointer text-sm"
          whileHover={{ scale: 1.05, backgroundColor: 'hsl(var(--primary)/20)', color:'white'}}
        >
          <FaDownload /> Download
        </motion.button>
      </motion.div>
    );
  };
  