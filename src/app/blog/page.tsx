import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Star } from 'lucide-react';

const spotlightAwards = [
    {
        title: 'Star of the Month',
        description: 'Awarded to a creator who has shown exceptional talent and creativity.'
    },
    {
        title: 'Top Artist',
        description: 'Celebrating the most visually stunning artwork submitted.'
    },
    {
        title: 'Junior Voice',
        description: 'Highlighting the most powerful and inspiring written piece.'
    }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Blog & Monthly Newsletter
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Stay updated with the latest news and see our top entries!
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Creator Spotlights</CardTitle>
            <CardDescription>
              Each month, we shine a spotlight on the most outstanding entries. Here are the awards we give out:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {spotlightAwards.map(award => (
                <div key={award.title} className="flex items-start gap-4">
                  <Star className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{award.title}</h3>
                    <p className="text-sm text-muted-foreground">{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
