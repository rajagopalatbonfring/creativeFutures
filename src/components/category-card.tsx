'use client';
import { motion } from 'framer-motion';

export const CategoryCard = ({ category, index }: any) => {
    return (
      <motion.div
        className="p-6 rounded-2xl shadow-sm bg-card border hover:border-primary/50 transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -5, shadow: 'lg' }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div
            className="text-2xl p-3 rounded-xl text-primary-foreground bg-primary"
          >
            {category.icon}
          </div>
          <h3 className="text-xl font-extrabold font-headline text-primary">{category.name}</h3>
        </div>
        <ul className="space-y-2">
          {category.activities.map((activity: string) => (
            <li
              key={activity}
              className="flex items-center gap-2 text-muted-foreground font-medium text-sm"
            >
              <span className="text-sm text-primary/50">◆</span>
              {activity}
            </li>
          ))}
        </ul>
      </motion.div>
    );
  };
  