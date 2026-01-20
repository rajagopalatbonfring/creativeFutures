'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Lightbulb, Loader2, Sparkles, Wand2 } from 'lucide-react';

import { useAuth } from '@/lib/auth-provider';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { AgeGroups } from '@/lib/types';

const preferencesSchema = z.object({
  preferences: z.string().min(10, 'Tell us a bit more about what you like!').max(200),
});

type PreferencesFormValues = z.infer<typeof preferencesSchema>;

export function ActivitySuggester() {
  const { userProfile } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const form = useForm<PreferencesFormValues>({
    resolver: zodResolver(preferencesSchema),
    defaultValues: { preferences: userProfile?.preferences || '' },
  });

  // const onSubmit = async (values: PreferencesFormValues) => {
  //   if (!userProfile || !userProfile.ageGroup) {
  //     toast({ title: 'Error', description: 'User profile not found.', variant: 'destructive' });
  //     return;
  //   }
  //   setIsLoading(true);
  //   setSuggestions([]);
  //   try {
  //     const result = await suggestRelevantActivities({
  //       // In a real app, these would be fetched from Firestore
  //       pastSubmissions: ['Made a clay dinosaur', 'Wrote a poem about the moon'],
  //       statedPreferences: values.preferences,
  //       ageGroup: userProfile.ageGroup,
  //     });
  //     setSuggestions(result.suggestedActivities);
  //   } catch (error) {
  //     console.error(error);
  //     toast({
  //       title: 'Suggestion Failed',
  //       description: 'Could not get suggestions. Please try again.',
  //       variant: 'destructive',
  //     });
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <Card className="bg-background/80">
      <CardHeader>
        <div className="flex items-center gap-3">
            <Wand2 className="h-8 w-8 text-accent" />
            <div>
                <CardTitle className="font-headline text-2xl">Activity Idea Generator</CardTitle>
                <CardDescription>Not sure what to create? Let our AI help!</CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-6">
            <FormField
              control={form.control}
              name="preferences"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What are you in the mood for?</FormLabel>
                  <FormControl>
                    <Textarea placeholder="e.g., I like drawing animals, building with blocks, and telling funny stories." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Ideas...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Suggest Activities
                </>
              )}
            </Button>
          </form>
        </Form>

        {(isLoading || suggestions.length > 0) && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold font-headline mb-4">Here are some ideas for you:</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {isLoading && Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg border bg-card p-4">
                  <div className="h-6 w-6 rounded-full bg-muted animate-pulse"></div>
                  <div className="h-4 flex-1 rounded bg-muted animate-pulse"></div>
                </div>
              ))}
              {!isLoading && suggestions.map((suggestion, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg border bg-card p-4 transition-all hover:bg-accent/10">
                  <Lightbulb className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                  <p className="text-sm font-medium">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
