'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { coreActivities } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function ActivitiesGrid() {
  const [showAll, setShowAll] = useState(false);

  // Sort by age range start (optional – helps show progression)
  const sortedActivities = [...coreActivities].sort((a, b) => {
    const aStart = parseInt(a.ageGroups[0].split('-')[0]);
    const bStart = parseInt(b.ageGroups[0].split('-')[0]);
    return aStart - bStart;
  });

  const visibleActivities = showAll ? sortedActivities : sortedActivities.slice(0, 6);

  const getAgeRangeText = (ages: string[]) => {
    if (ages.length === 0) return 'All ages';
    const first = ages[0];
    const last = ages[ages.length - 1];
    return first === last ? `Ages ${first}` : `Ages ${first} to ${last}`;
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {visibleActivities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden group cursor-pointer hover:-translate-y-2 bg-white">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={`https://picsum.photos/seed/${activity.imageId}/600/480`}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white drop-shadow-md">
                    {activity.title}
                  </h3>
                </div>
              </div>

              <CardContent className="pt-6">
                <p className="text-gray-600 mb-5 line-clamp-3 min-h-[4.5rem]">
                  {activity.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                    {getAgeRangeText(activity.ageGroups)}
                  </span>
                  {activity.isSpecialChallenge && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200">
                      Special Challenge
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {coreActivities.length > 6 && (
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="gap-2 border-2 border-[#FB0091]/30 hover:bg-[#FB0091]/10 transition-colors"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp className="h-5 w-5" />
              </>
            ) : (
              <>
                Show More ({coreActivities.length - 6} more) <ChevronDown className="h-5 w-5" />
              </>
            )}
          </Button>
        </div>
      )}
    </>
  );
}