import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AgeGroups } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Paintbrush, Mic, FlaskConical } from 'lucide-react';

const ageGroupData = Object.entries(AgeGroups).map(([key, value]) => ({
  age: key,
  stage: value,
}));

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us');

  return (
    <>
      <div className="relative overflow-hidden py-24">
        <div className="container mx-auto px-4 py-12 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About Us</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Creative Futures is a vibrant community where young minds can explore, create, and share their unique talents with the world.
            </p>
          </div>

          {aboutImage && (
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-lg">
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            </div>
          )}

          <div className="mb-16">
              <h2 className="text-3xl font-headline font-bold text-center mb-8">Participant Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ageGroupData.map(({ age, stage }) => (
                  <Card key={age} className="bg-background/80 backdrop-blur-sm">
                      <CardHeader>
                      <CardTitle className="font-headline">{stage}</CardTitle>
                      </CardHeader>
                      <CardContent>
                      <p className="text-muted-foreground font-bold">{`Ages: ${age}`}</p>
                      </CardContent>
                  </Card>
                  ))}
              </div>
          </div>

          <div>
              <h2 className="text-3xl font-headline font-bold text-center mb-8">Activity Zones</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="text-center bg-background/80 backdrop-blur-sm">
                      <CardHeader>
                          <Paintbrush className="h-10 w-10 mx-auto text-primary" />
                          <CardTitle className="font-headline mt-4">The Young Pen & Draw Your Dream</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">Dive into written works and visual arts. Write stories, poems, essays, or create drawings, comics, and crafts.</p>
                      </CardContent>
                  </Card>
                  <Card className="text-center bg-background/80 backdrop-blur-sm">
                      <CardHeader>
                          <Mic className="h-10 w-10 mx-auto text-accent" />
                          <CardTitle className="font-headline mt-4">Sing Dance Shine</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">Show off your performing talents! Share singing, dancing, acting, or instrumental performances.</p>
                      </CardContent>
                  </Card>
                  <Card className="text-center bg-background/80 backdrop-blur-sm">
                      <CardHeader>
                          <FlaskConical className="h-10 w-10 mx-auto text-secondary" />
                          <CardTitle className="font-headline mt-4">Kid Scientists</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">Explore the world of STEM with science experiments, invention ideas, puzzles, and DIY projects.</p>
                      </CardContent>
                  </Card>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
