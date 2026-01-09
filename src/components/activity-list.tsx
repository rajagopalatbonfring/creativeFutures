'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { activities } from '@/lib/constants';
import { ActivityCard } from '@/components/activity-card';
import { Button } from '@/components/ui/button';
import type { ActivityCategory, ActivityCategoryName } from '@/lib/types';
import { ActivityCategories } from '@/lib/types';

const categories = Object.keys(ActivityCategories) as ActivityCategory[];

export function ActivityList() {
  const [filter, setFilter] = useState<ActivityCategory | 'All'>('All');

  const filteredActivities = filter === 'All' ? activities : activities.filter((a) => a.category === filter);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        <Button
          variant={filter === 'All' ? 'default' : 'outline'}
          onClick={() => setFilter('All')}
          className="rounded-full transition-all duration-300 hover:scale-105"
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? 'default' : 'outline'}
            onClick={() => setFilter(category)}
            className="rounded-full transition-all duration-300 hover:scale-105"
          >
            {ActivityCategories[category]}
          </Button>
        ))}
      </div>
      <motion.div 
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {filteredActivities.map((activity) => (
          <motion.div
            key={activity.id}
            variants={item}
            layout
          >
            <ActivityCard activity={activity} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
