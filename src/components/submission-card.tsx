'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Submission } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SubmissionCardProps {
  submission: Submission;
}

export function SubmissionCard({ submission }: SubmissionCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === submission.imageId);

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
        {image ? (
            <div className="relative h-48 w-full">
                <Image
                    src={image.imageUrl}
                    alt={submission.title}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                />
            </div>
        ) : (
            <div className="h-48 w-full bg-muted flex items-center justify-center text-muted-foreground">
                No Image
            </div>
        )}
      <CardHeader>
        <CardTitle className="text-xl font-headline">{submission.title}</CardTitle>
        <p className="text-sm text-muted-foreground">by {submission.author}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-2">{submission.description}</p>
      </CardContent>
      <CardFooter>
        <Badge variant="outline">{submission.activityTitle}</Badge>
      </CardFooter>
    </Card>
  );
}
