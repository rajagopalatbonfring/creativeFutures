'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaUpload } from 'react-icons/fa';
import { AgeGroupCard } from '@/components/age-group-card';
import { CategoryCard } from '@/components/category-card';
import { ResourceCard } from '@/components/resource-card';
import { StepCard } from '@/components/step-card';
import FishIcon from '@/components/fishIcon';
import SectionFish from '@/components/sectionfish';
import { ageGroups, categories, resources, submissionSteps } from '@/lib/home-page-data';
import img from "../images/bgbgbg.jpg";

export default function Home() {

  const Section = ({ children, id, className }: { children: React.ReactNode, id: string, className?: string }) => {
    return (
      <section
        id={id}
        className={`relative py-16 sm:my-24 px-4 md:px-8 min-h-[100vh] max-h-[100%] mx-auto flex flex-col items-center justify-center ${className}`}

      >
        {children}
      </section>
    );
  };

  const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="relative z-2 text-center mb-12">
      <motion.h2 
        className="text-4xl md:text-5xl font-headline text-foreground mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.p 
        className="text-lg text-muted-foreground max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {subtitle}
      </motion.p>
    </div>
  );

  return (
    <div className="creative-futures-container">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center text-center p-4 overflow-hidden bg-background">
          {/* <div 
            className="absolute inset-0 opacity-40"
            style={{ backgroundImage: `url(${img.src})`, backgroundRepeat:"no-repeat", backgroundSize:"contain", backgroundPosition:"center" }}
          ></div> */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white_0%,transparent_100%)]"></div>
        <div className="relative z-10 flex flex-col items-center">
            <motion.h1
              className="font-headline text-4xl sm:text-6xl lg:text-7xl leading-tight mb-6 text-foreground max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 100 }}
            >
              Unlock Your Inner Artist & Thinker
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, type: 'spring', stiffness: 100 }}
            >
              A vibrant community for kids and teens to share stories, art, science, and performances. Your next adventure awaits!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 100 }}
            >
              <motion.button
                className="inline-flex items-center gap-2 py-3 px-8 bg-primary text-primary-foreground rounded-full text-base font-bold shadow-lg shadow-primary/30"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                Start Creating <FaArrowRight />
              </motion.button>
            </motion.div>
        </div>
      </section>

      {/* Age Groups Section */}
      <Section id="ages">
        <SectionFish 
            colorScheme={['#ffb7f5', '#ff9bf5', '#ff69b4', '#db7093']}
            position="bottom"
            direction="left-to-right"
          />
        <SectionHeader title="Find Your Age Group" subtitle="Pick your age and discover fun activities just for you!" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {ageGroups.map((group) => (
            <AgeGroupCard 
              key={group.range} 
              group={group} 
            />
          ))}
        </div>
      </Section>

      {/* Activity Categories */}
      <Section id="activities" className="">
        <SectionFish 
            colorScheme={['#a3e635', '#84cc16', '#65a30d', '#4d7c0f']}
            position="top"
            direction="right-to-left"
          />
        <SectionHeader title="Explore Creative Categories" subtitle="No matter what you love, there's a category for you to shine." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </Section>

      {/* Resource Hub */}
      <Section id="resources">
        <SectionFish 
          colorScheme={['#fbbf24', '#f59e0b', '#fb923c', '#ea580c']}
          position="top"
        />
        <SectionHeader title="Spark Your Imagination" subtitle="Need ideas? Download our free activities and resource kits!" />
        <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, i) => (
                 <ResourceCard
                    key={i}
                    title={resource.title}
                    description={resource.description}
                    icon={resource.icon}
                    color={resource.color}
                />
            ))}
        </div>
      </Section>

      

      {/* Submission Process */}
      <Section id="submit" className="">
        <SectionFish
          colorScheme={['#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8']}
        />
        <SectionHeader title="Share Your Work in 3 Easy Steps!" subtitle="Show the world what you've created." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto my-12">
            {submissionSteps.map((step, i) => (
                <StepCard
                    key={step.number}
                    number={step.number}
                    title={step.title}
                    description={step.description}
                    icon={step.icon}
                    color={step.color}
                    index={i}
                />
            ))}
        </div>
        <div className="text-center mt-12">
          <motion.button
            className="inline-flex items-center gap-2 py-4 px-8 bg-primary text-primary-foreground rounded-full text-lg font-bold shadow-lg shadow-primary/30"
            whileHover={{ scale: 1.05, y: -3 }}
          >
            Submit Your Work <FaUpload />
          </motion.button>
        </div>
      </Section>
    </div>
  );
}
