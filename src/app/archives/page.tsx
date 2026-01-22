// app/archives/page.tsx
import { featuredSubmissions, allActivities } from '@/lib/constants';
import Link from 'next/link';
import type { Submission } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, BookOpen, Sparkles } from 'lucide-react';
import { 
  ArrowLeft, User,  Heart, Eye, Clock, Tag, Award, Star, 
  PlayCircle, Mic, Image as ImageIcon,
} from 'lucide-react';


export default function ArchivesPage() {
  // Group submissions by year and issue
  const grouped = featuredSubmissions
    .filter(s => s.isPublished && s.publishedYear && s.publishedIssue)
    .reduce((acc, sub) => {
      const year = sub.publishedYear!;
      const issue = sub.publishedIssue!;
      if (!acc[year]) acc[year] = {};
      if (!acc[year][issue]) acc[year][issue] = {};
      if (!acc[year][issue][sub.activityId]) {
        acc[year][issue][sub.activityId] = {
          activityTitle: sub.activityTitle,
          count: 0,
          submissions: []
        };
      }
      acc[year][issue][sub.activityId].count++;
      acc[year][issue][sub.activityId].submissions.push(sub);
      return acc;
    }, {} as Record<number, Record<number, Record<string, { activityTitle: string; count: number; submissions: Submission[] }>>>);

  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    
    <div className="min-h-screen ">
    {/* Hero Section with Wave */}
      <section className="relative pt-56 pb-12 overflow-hidden  bg-gradient-to-br from-[#00B4EE]/10 via-[#FB0091]/5 to-[#FBC51A]/10">
        {/* Playful Clouds & Stars */}
        <svg className="absolute top-20 left-10 w-24 h-16 opacity-40" viewBox="0 0 100 50">
          <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#00B4EE"/>
        </svg>
        <svg className="absolute top-40 right-20 w-32 h-20 opacity-30" viewBox="0 0 100 50">
          <path d="M20,35 Q15,35 15,30 Q15,25 20,25 Q20,20 25,20 Q30,20 30,25 Q35,25 35,30 Q35,35 30,35 Z" fill="#FBC51A"/>
        </svg>
        <Star className="absolute top-32 right-32 w-8 h-8 text-[#FB0091] opacity-60 animate-pulse" />
        <Star className="absolute top-48 left-32 w-6 h-6 text-[#00B4EE] opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }} />


        <h1 className="text-5xl font-headline font-black text-center mb-4">
          A Journal By and For Kids <span className="text-[#FB0091]">Archives</span>
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16">
          Explore featured creations from past issues — stories, art, performances & more!
        </p>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-32">
            <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 max-w-7xl">
        {years.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-7xl mb-6">📚✨</div>
            <h2 className="text-3xl font-bold mb-4">No published issues yet</h2>
            <p className="text-lg text-gray-600">Check back soon — new issues are coming!</p>
          </div>
        ) : (
          <div className="space-y-16">
            {years.map(year => (
              <div key={year} className="space-y-8">
                <h2 className="text-4xl font-headline font-black flex items-center gap-3">
                  <Calendar className="h-10 w-10 text-[#00B4EE]" />
                  {year}
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {[1, 2, 3, 4].map(issueNum => {
                    const issue = grouped[Number(year)]?.[issueNum];
                    if (!issue || Object.keys(issue).length === 0) return null;

                    return (
                      <Card key={issueNum} className="overflow-hidden border-2 border-gray-200 hover:border-[#FB0091] transition-all shadow-lg hover:shadow-xl">
                        <CardHeader className="bg-gradient-to-r from-gray-50 to-white">
                          <CardTitle className="text-2xl font-black flex items-center gap-2">
                            Issue {issueNum}
                            <span className="text-sm font-normal text-gray-500">
                              {issueNum === 1 ? '(Jan–Mar)' : issueNum === 2 ? '(Apr–Jun)' : issueNum === 3 ? '(Jul–Sep)' : '(Oct–Dec)'}
                            </span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                          {Object.entries(issue).map(([actId, data]) => (
                            <div key={actId} className="flex items-center justify-between">
                              <Link 
                                href={`/archives/${year}/${issueNum}/${actId}`}
                                className="text-lg font-medium hover:text-[#FB0091] transition-colors flex items-center gap-2"
                              >
                                <BookOpen className="h-5 w-5 text-gray-500" />
                                {data.activityTitle}
                              </Link>
                              <Badge variant="outline" className="text-sm">
                                {data.count} {data.count === 1 ? 'creation' : 'creations'}
                              </Badge>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}