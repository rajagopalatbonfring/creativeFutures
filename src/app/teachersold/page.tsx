import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TeachersPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Teacher’s Corner
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Empowering educators to bring creativity into the classroom.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Bulk Classroom Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We are thrilled to partner with schools and educators to foster creativity on a larger scale. We gladly accept bulk classroom submissions, making it easy for you to showcase your students' collective work.
            </p>
            <p className="text-muted-foreground">
              Whether it's a class art project, a collection of stories, or a science fair showcase, we provide a platform for your students' achievements to be celebrated.
            </p>
            <div className="mt-6 text-center">
              <Button asChild size="lg">
                <Link href="/contact?subject=Classroom%20Submission">Contact Us for Bulk Submissions</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}