// components/age-group-detail-client.tsx
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Sparkles, Zap } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Activity } from '@/lib/types';

interface AgeGroupDetailClientProps {
  group: { age: string; stage: string; activity: string; emoji: string; color: string };
  eligible: Activity[];
}

export function AgeGroupDetailClient({ group, eligible }: AgeGroupDetailClientProps) {
  return (
    <div className="bg-gradient-to-b from-[#00B4EE]/5 to-white min-h-screen">
      {/* Compact Header */}
      <section className="relative pt-40 pb-12 overflow-hidden">
        <div className="container mx-auto relative z-10 max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button asChild variant="ghost" size="sm" className="rounded-full hover:bg-white/80">
              <Link href="/participant-category">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Categories
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-lg"
          >
            <div className="text-8xl md:text-9xl flex-shrink-0 transform hover:scale-105 transition-transform">
              {group.emoji}
            </div>
            <div className="text-center md:text-left flex-1 space-y-3">
              <Badge className={`${group.color} border-0 text-black font-black text-sm px-4 py-1.5 shadow-md`}>
                Ages {group.age} years
              </Badge>
              <h1 className="text-5xl md:text-6xl font-headline font-black leading-tight">
                {group.stage}
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
                {group.activity}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-headline font-black mb-2">
              Your Eligible <span className="text-[#FB0091]">Activities</span>
            </h2>
            <p className="text-gray-600">
              {eligible.length} activities available for you 🎨
            </p>
          </motion.div>

          {eligible.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {eligible.map((activity, index) => {
                const image = PlaceHolderImages.find(img => img.id === activity.imageId);
                const isSpecial = activity.isSpecialChallenge && activity.isCurrent;

                return (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 overflow-hidden group cursor-pointer hover:-translate-y-1 bg-white">
                      {/* Image */}
                      <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                        {image ? (
                          <Image
                            src={image.imageUrl}
                            alt={activity.title}
                            fill
                            className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full text-5xl">🎨</div>
                        )}

                        {isSpecial && (
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-[#FBC51A] text-black border-0 shadow-md font-black px-2 py-0.5 text-xs flex items-center gap-1">
                              <Zap className="w-3 h-3" />
                              Special
                            </Badge>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <CardHeader className="pb-2 pt-4">
                        <CardTitle className={`text-lg font-headline font-bold line-clamp-2 transition-colors ${isSpecial ? 'group-hover:text-[#FBC51A]' : 'group-hover:text-[#00B4EE]'}`}>
                          {activity.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="pt-0 pb-4">
                        <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-2">
                          {activity.description}
                        </p>

                        <Button
                          asChild
                          size="sm"
                          className={`w-full border-0 rounded-full font-bold text-xs shadow-md hover:shadow-lg transition-all ${
                            isSpecial
                              ? 'bg-gradient-to-r from-[#FBC51A] to-yellow-300 text-black'
                              : 'bg-black text-white hover:bg-gray-800'
                          }`}
                        >
                          <Link href={`/submit?activity=${activity.id}`}>
                            {isSpecial ? 'Join Challenge' : 'Start'}
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-5xl mb-3">🔍</div>
              <h3 className="text-xl font-bold mb-1">No Activities Yet</h3>
              <p className="text-gray-600 text-sm">Check back soon or try another age group!</p>
            </motion.div>
          )}

          {/* CTA */}
          {eligible.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mt-16"
            >
              <p className="text-gray-600 text-lg mb-6">Want to see what others have created?</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-[#FB0091] to-pink-500 text-white shadow-lg rounded-full font-bold px-8">
                  <Link href="/gallery">View Gallery</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-black hover:bg-black hover:text-white rounded-full font-bold px-8">
                  <Link href="/participant-category">Other Age Groups</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}