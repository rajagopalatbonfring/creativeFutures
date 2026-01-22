// app/archives/[year]/[issue]/[activityId]/page.tsx
import { notFound } from 'next/navigation';
import { featuredSubmissions } from '@/lib/constants';
import { SubmissionCard } from '@/components/submission-card';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, Link
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
    <div className="container mx-auto px-4 py-48 max-w-7xl">
        <button  
            
        >
            <a 
            href="/archives"
            className="p-2 mb-4 inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-all border-2 border-transparent hover:border-[#FB0091]/20"
            >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Archives
            </a>

        </button>
      <h1 className="text-4xl font-bold mb-8">
        {params.year} &lt; Issue {params.issue} &lt; {publishedInThisIssue[0].activityTitle}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {publishedInThisIssue.map(sub => (
          <SubmissionCard key={sub.id} submission={sub} />
        ))}
      </div>
    </div>
  );
}