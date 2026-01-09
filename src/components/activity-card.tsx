'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Paintbrush } from 'lucide-react';
import type { Activity } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ActivityCategories } from '@/lib/types';

interface ActivityCardProps {
  activity: Activity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === activity.imageId);

  return (
    <motion.div
      className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md"
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48 w-full">
        {image ? (
          <Image
            src={image.imageUrl}
            alt={activity.title}
            fill
            className="object-cover"
            data-ai-hint={image.imageHint}
          />
        ) : (
            <div className="flex h-full w-full items-center justify-center bg-muted">
                <Paintbrush className="h-12 w-12 text-muted-foreground" />
            </div>
        )}
      </div>
      <div className="p-6">
        <Badge variant="secondary" className="mb-2">
            {ActivityCategories[activity.category]}
        </Badge>
        <h3 className="text-lg font-bold font-headline">{activity.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{activity.description}</p>
        <Button asChild className="mt-4" size="sm">
          <Link href={`/submit?activity=${activity.id}`}>
            Start Creating <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}
