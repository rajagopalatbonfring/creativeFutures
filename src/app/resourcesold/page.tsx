import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';

const resources = [
    {
        title: "Kitchen Science Report",
        description: "Try a safe kitchen science experiment (like lemon volcanoes or rainbow milk) and submit a photo + observation.",
        action: "Download Template"
    },
    {
        title: "Memory Map",
        description: "Kids draw or describe a favourite memory as a map.",
        action: "Get Started"
    },
    {
        title: "Write a Story from This Emoji",
        description: "Let your imagination run wild and write a story based on a single emoji prompt.",
        action: "See Prompts"
    },
    {
        title: "Finish the Picture Challenge",
        description: "We provide a starting sketch, you finish the masterpiece!",
        action: "Download Sketch"
    }
]

export default function ResourcesPage() {
  const resourceImage = PlaceHolderImages.find(img => img.id === 'resource-hub');

  return (
    <>
      <div className="relative overflow-hidden py-24">
        <div className="container mx-auto px-4 py-12 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Resource Hub</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Find downloadable activities, creative prompts, and fun challenges to spark your imagination.
            </p>
          </div>

          {resourceImage && (
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-lg">
              <Image
                src={resourceImage.imageUrl}
                alt={resourceImage.description}
                fill
                className="object-cover"
                data-ai-hint={resourceImage.imageHint}
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="flex flex-col bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-headline">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    {resource.action}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
              <h2 className="text-3xl font-headline font-bold">Ready to Share?</h2>
              <p className="mt-2 text-muted-foreground max-w-xl mx-auto">Once you've completed an activity, submit it for a chance to be featured in our gallery!</p>
              <Button asChild size="lg" className="mt-6">
                  <Link href="/submit">Submit Your Work</Link>
              </Button>
          </div>

        </div>
      </div>
    </>
  );
}
