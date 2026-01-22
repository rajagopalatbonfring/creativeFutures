// app/archives/[year]/[issue]/[activityId]/page.tsx
import { notFound } from 'next/navigation';
import { featuredSubmissions } from '@/lib/constants';
import { SubmissionCard } from '@/components/submission-card';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, Link,User, Calendar, Heart, Eye, Clock, Tag, Award, Star, 
  PlayCircle, Mic, BookOpen, Image as ImageIcon, Sparkles 
} from 'lucide-react';

export default function IssueActivityPage({
  params,
}: {
  params: { year: string; issue: string; activityId: string };
}) {
  const year = Number(params.year);
  const issue = Number(params.issue);
  const activityId = params.activityId;

  const publishedInThisIssue = featuredSubmissions.filter(
    s => 
      s.isPublished &&
      s.publishedYear === year &&
      s.publishedIssue === issue &&
      s.activityId === activityId
  );

  if (publishedInThisIssue.length === 0) {
    notFound();
  }

  return (
    <div>
            {/* Hero Section with Wave */}
        <section className="relative pt-40 pb-12 overflow-hidden bg-gradient-to-br from-[#00B4EE]/10 via-[#FB0091]/5 to-white">
          {/* Playful Clouds & Stars */}
          <svg className="absolute top-20 left-10 w-24 h-16 opacity-40" viewBox="0 0 100 50">
            <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#00B4EE"/>
          </svg>
          <svg className="absolute top-40 right-20 w-32 h-20 opacity-30" viewBox="0 0 100 50">
            <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#FBC51A"/>
          </svg>
          <Star className="absolute top-32 right-32 w-8 h-8 text-[#FB0091] opacity-60 animate-pulse" />
          <Star className="absolute top-48 left-32 w-6 h-6 text-[#00B4EE] opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }} />

          <div className="container mx-auto max-w-7xl px-4 relative z-10 mt-20 mb-20">
              <h1 className="text-4xl font-bold mb-8 mx-auto text-center ">
                {params.year} &lt; Issue {params.issue} &lt; {publishedInThisIssue[0].activityTitle}
              </h1> 
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
              <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
            </svg>
          </div>
        </section>
    
        <section className="container mx-auto px-4 pb-16 max-w-7xl">
          <a 
          href="/archives"
          className="p-2 mb-8 inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-all border-2 border-transparent hover:border-[#FB0091]/20"
          >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Archives
          </a>

          {/* <h1 className="text-4xl font-bold mb-8">
            {params.year} &lt; Issue {params.issue} &lt; {publishedInThisIssue[0].activityTitle}
          </h1> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {publishedInThisIssue.map(sub => (
              <SubmissionCard key={sub.id} submission={sub} />
            ))}
          </div>
        </section>
    </div>
  );
}