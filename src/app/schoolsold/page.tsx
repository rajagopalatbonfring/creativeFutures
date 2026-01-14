import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SchoolsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          School Corner
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A dedicated space for schools to shine.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="text-center">
          <CardHeader>
            <CardTitle>Showcase Your School's Creativity</CardTitle>
            <CardDescription>
              School Corner is a dedicated space for schools to upload group activities, class experiments, or entire exhibition content. Share your students' collaborative projects with our global community.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              From annual art shows to science fairs, your school's creative spirit deserves a platform. We welcome entire class projects and exhibitions.
            </p>
            <Button asChild size="lg">
              <Link href="/submit?source=school">Submit School Project</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}