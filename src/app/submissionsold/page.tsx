import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const formatTypes = [
    'Text',
    'Drawing',
    'Craft',
    'Audio',
    'Video',
    'Mixed Media'
];

export default function SubmissionsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Submission Guidelines
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Everything you need to know to share your creation with us.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Accepted Formats</CardTitle>
            <CardDescription>We welcome a wide variety of creative formats. Let your imagination run wild!</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {formatTypes.map((format) => (
                <li key={format} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-muted-foreground">{format}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
