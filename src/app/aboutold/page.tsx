// import Image from 'next/image';
// import { PlaceHolderImages } from '@/lib/placeholder-images';
// import { AgeGroups } from '@/lib/types';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Paintbrush, Mic, FlaskConical } from 'lucide-react';

// const ageGroupData = Object.entries(AgeGroups).map(([key, value]) => ({
//   age: key,
//   stage: value,
// }));

// export default function AboutPage() {
//   const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us');

//   return (
//     <>
//       <div className="relative overflow-hidden py-24">
//         <div className="container mx-auto px-4 py-12 md:px-6 relative z-10">
//           <div className="text-center mb-12">
//             <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About Us</h1>
//             <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
//               Creative Futures is a vibrant community where young minds can explore, create, and share their unique talents with the world.
//             </p>
//           </div>

//           {aboutImage && (
//             <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 shadow-lg">
//               <Image
//                 src={aboutImage.imageUrl}
//                 alt={aboutImage.description}
//                 fill
//                 className="object-cover"
//                 data-ai-hint={aboutImage.imageHint}
//               />
//             </div>
//           )}

//           <div className="mb-16">
//               <h2 className="text-3xl font-headline font-bold text-center mb-8">Participant Categories</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {ageGroupData.map(({ age, stage }) => (
//                   <Card key={age} className="bg-background/80 backdrop-blur-sm">
//                       <CardHeader>
//                       <CardTitle className="font-headline">{stage}</CardTitle>
//                       </CardHeader>
//                       <CardContent>
//                       <p className="text-muted-foreground font-bold">{`Ages: ${age}`}</p>
//                       </CardContent>
//                   </Card>
//                   ))}
//               </div>
//           </div>

//           <div>
//               <h2 className="text-3xl font-headline font-bold text-center mb-8">Activity Zones</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                   <Card className="text-center bg-background/80 backdrop-blur-sm">
//                       <CardHeader>
//                           <Paintbrush className="h-10 w-10 mx-auto text-primary" />
//                           <CardTitle className="font-headline mt-4">The Young Pen & Draw Your Dream</CardTitle>
//                       </CardHeader>
//                       <CardContent>
//                           <p className="text-muted-foreground">Dive into written works and visual arts. Write stories, poems, essays, or create drawings, comics, and crafts.</p>
//                       </CardContent>
//                   </Card>
//                   <Card className="text-center bg-background/80 backdrop-blur-sm">
//                       <CardHeader>
//                           <Mic className="h-10 w-10 mx-auto text-accent" />
//                           <CardTitle className="font-headline mt-4">Sing Dance Shine</CardTitle>
//                       </CardHeader>
//                       <CardContent>
//                           <p className="text-muted-foreground">Show off your performing talents! Share singing, dancing, acting, or instrumental performances.</p>
//                       </CardContent>
//                   </Card>
//                   <Card className="text-center bg-background/80 backdrop-blur-sm">
//                       <CardHeader>
//                           <FlaskConical className="h-10 w-10 mx-auto text-secondary" />
//                           <CardTitle className="font-headline mt-4">Kid Scientists</CardTitle>
//                       </CardHeader>
//                       <CardContent>
//                           <p className="text-muted-foreground">Explore the world of STEM with science experiments, invention ideas, puzzles, and DIY projects.</p>
//                       </CardContent>
//                   </Card>
//               </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// // OLD













import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Paintbrush, Mic, FlaskConical, Globe, Heart, BookOpen } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ageGroupData = [
    { age: '2-4', stage: 'Little Explorers', activity: 'Drawing, colouring, object recognition' },
    { age: '5-6', stage: 'Creative Starters', activity: 'Tracing, story starters, picture-based Q&A' },
    { age: '7-8', stage: 'Junior Thinkers', activity: 'Simple poems, "My Day" journal, puzzles' },
    { age: '9-10', stage: 'Curious Minds', activity: 'Short stories, mini-essays, word search, science facts' },
    { age: '11-12', stage: 'Young Creators', activity: 'Experiments, opinion writing, creative challenges' },
    { age: '13-14', stage: 'Growing Scholars', activity: 'Articles, comic strips, logic puzzles' },
    { age: '15-16', stage: 'Teen Journalists', activity: 'Essays, social issues, innovation topics' },
];

const youngPenActivities = [
    'Short Stories – Fiction or fantasy stories written by the child',
    'Poems – Rhyming, free verse, or structured poems',
    'Essays – Personal experiences, opinions, reflections',
    'Letters – Letter to a teacher, a planet, a future self',
    'Book Reviews – Book reflections and favourite reads',
    'Plays and Dialogues – Short skits written by children'
];

const drawDreamActivities = [
    'Drawings and Paintings',
    'Comics or Storyboards',
    'Craft Projects',
    'Model Photos'
];

const singDanceShineActivities = [
    'Singing Videos',
    'Dancing Videos',
    'Theatre and Acting',
    'Instrumental Performances'
];

const kidScientistsActivities = [
    'Science Experiments – Step-by-step experiments with photos',
    'Invention Ideas – Drawings or descriptions of new gadgets',
    'Math Puzzles or Riddles – Created or solved by kids',
    'DIY Projects – Engineering, robotics, or household builds'
];

const colourfulCulturesActivities = [
    'Storytelling in Native Languages – Video or audio with transcript',
    'Festivals and Traditions – Write-ups with artwork or photos',
    'Folk Songs or Poems – In regional languages with English meaning',
    'Multilingual Scripts – Skits or dialogues in two or more languages'
];

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us');

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About Us</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Creative Futures: A Journal By and For Kids (CFJBFK) is a vibrant community where young minds can explore, create, and share their unique talents with the world.
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
              <h2 className="text-3xl font-headline font-bold text-center mb-8">Participant Category</h2>
              <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Age Group</TableHead>
                        <TableHead>Stage Name</TableHead>
                        <TableHead>Activity Type</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {ageGroupData.map(({ age, stage, activity }) => (
                        <TableRow key={age}>
                            <TableCell className="font-medium">{age} years</TableCell>
                            <TableCell>{stage}</TableCell>
                            <TableCell>{activity}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
              </Card>
          </div>

          <div>
              <h2 className="text-3xl font-headline font-bold text-center mb-8">Parent-Child Activity Zone</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="text-center bg-background/80 backdrop-blur-sm">
                      <CardHeader>
                          <BookOpen className="h-10 w-10 mx-auto text-primary" />
                          <CardTitle className="font-headline mt-4">The Young Pen (Written Works)</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <ul className="text-muted-foreground text-sm space-y-2">
                            {youngPenActivities.map(activity => <li key={activity}>{activity}</li>)}
                          </ul>
                      </CardContent>
                  </Card>
                  <Card className="text-center bg-background/80 backdrop-blur-sm">
                      <CardHeader>
                          <Paintbrush className="h-10 w-10 mx-auto text-primary" />
                          <CardTitle className="font-headline mt-4">Draw Your Dream (Visual Artworks)</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <ul className="text-muted-foreground text-sm space-y-2">
                              {drawDreamActivities.map(activity => <li key={activity}>{activity}</li>)}
                          </ul>
                      </CardContent>
                  </Card>
                  <Card className="text-center bg-background/80 backdrop-blur-sm">
                      <CardHeader>
                          <Mic className="h-10 w-10 mx-auto text-accent" />
                          <CardTitle className="font-headline mt-4">Sing Dance Shine (Performing Arts)</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <ul className="text-muted-foreground text-sm space-y-2">
                            {singDanceShineActivities.map(activity => <li key={activity}>{activity}</li>)}
                          </ul>
                      </CardContent>
                  </Card>
                  <Card className="text-center bg-background/80 backdrop-blur-sm">
                      <CardHeader>
                          <FlaskConical className="h-10 w-10 mx-auto text-secondary" />
                          <CardTitle className="font-headline mt-4">Kid Scientists (STEM & Innovation)</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <ul className="text-muted-foreground text-sm space-y-2">
                            {kidScientistsActivities.map(activity => <li key={activity}>{activity}</li>)}
                          </ul>
                      </CardContent>
                  </Card>
                  <Card className="text-center bg-background/80 backdrop-blur-sm">
                      <CardHeader>
                          <Globe className="h-10 w-10 mx-auto text-green-500" />
                          <CardTitle className="font-headline mt-4">Our Colourful Cultures (Language and Culture)</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <ul className="text-muted-foreground text-sm space-y-2">
                            {colourfulCulturesActivities.map(activity => <li key={activity}>{activity}</li>)}
                          </ul>
                      </CardContent>
                  </Card>
                  <Card className="text-center bg-background/80 backdrop-blur-sm">
                      <CardHeader>
                          <Heart className="h-10 w-10 mx-auto text-red-500" />
                          <CardTitle className="font-headline mt-4">Kindness Corner</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <ul className="text-muted-foreground text-sm space-y-2">
                            <li>Real-life acts of kindness done by kids</li>
                            <li>Special certificate awarded (Heart of Gold)</li>
                          </ul>
                      </CardContent>
                  </Card>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}