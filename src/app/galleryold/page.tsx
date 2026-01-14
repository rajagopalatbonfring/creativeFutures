'use client';

import { motion } from 'framer-motion';
import { SubmissionCard } from '@/components/submission-card';
import { featuredSubmissions } from '@/lib/constants';

export default function GalleryPage() {
  return (
    <>
      <div className="flex flex-col items-center py-24">
        <section className="w-full py-16 md:py-24 relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-headline text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                Art Gallery
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                See what other young artists are making!
              </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {featuredSubmissions.map((submission, i) => (
                <motion.div
                  key={submission.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <SubmissionCard submission={submission} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
