'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Loader2, PartyPopper } from 'lucide-react';

import { activities } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { FileUploader } from './file-uploader';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from './ui/card';

const submissionSchema = z.object({
  activityId: z.string().min(1, 'Please select an activity.'),
  title: z.string().min(3, 'Title must be at least 3 characters.').max(50, 'Title is too long.'),
  description: z.string().max(300, 'Description is too long.').optional(),
  file: z.any().refine((file) => file, 'An artwork file is required.'),
});

type SubmissionFormValues = z.infer<typeof submissionSchema>;

const steps = [
  { id: 'step1', fields: ['activityId'] },
  { id: 'step2', fields: ['title', 'description'] },
  { id: 'step3', fields: ['file'] },
  { id: 'step4' },
];

export function SubmissionForm({ selectedActivityId }: { selectedActivityId: string | null }) {
  const router = useRouter();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SubmissionFormValues>({
    resolver: zodResolver(submissionSchema),
    defaultValues: {
      activityId: selectedActivityId ?? '',
      title: '',
      description: '',
      file: undefined,
    },
  });

  const nextStep = async () => {
    const fields = steps[currentStep].fields;
    const output = await form.trigger(fields as any, { shouldFocus: true });
    if (!output) return;
    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit();
      } else {
        setCurrentStep(step => step + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(step => step - 1);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    // This is where you would handle the actual submission to a server action
    // which would upload the file to Firebase Storage and save data to Firestore.
    // For this demo, we'll simulate a delay.
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form Submitted:', form.getValues());
    setIsLoading(false);
    setCurrentStep(steps.length - 1); // Move to success step
  };

  return (
    <Card>
      <CardContent className="p-6">
        <Form {...form}>
          <form className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {currentStep === 0 && (
                  <FormField
                    control={form.control}
                    name="activityId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>1. Choose an Activity</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a creative activity" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {activities.map(activity => (
                              <SelectItem key={activity.id} value={activity.id}>
                                {activity.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {currentStep === 1 && (
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>2. Give it a Title</FormLabel>
                          <FormControl>
                            <Input placeholder="My Awesome Artwork" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tell us about it (optional)</FormLabel>
                          <FormControl>
                            <Textarea placeholder="I was inspired by..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                
                {currentStep === 2 && (
                    <FormField
                        control={form.control}
                        name="file"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>3. Upload Your Creation</FormLabel>
                            <FormControl>
                                <FileUploader
                                    onFileChange={field.onChange}
                                    file={field.value}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                )}

                {currentStep === 3 && (
                    <div className="text-center space-y-4 py-8">
                        <PartyPopper className="mx-auto h-16 w-16 text-primary" />
                        <h2 className="text-2xl font-bold font-headline">Submission Successful!</h2>
                        <p className="text-muted-foreground">Great job! Your creation has been submitted.</p>
                        <Button onClick={() => router.push('/')}>Back to Gallery</Button>
                    </div>
                )}
              </motion.div>
            </AnimatePresence>
          </form>
        </Form>
        
        {currentStep < steps.length - 2 && (
          <div className="mt-8 flex justify-between">
            <Button onClick={prevStep} variant="outline" disabled={currentStep === 0}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            <Button onClick={nextStep}>
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {currentStep === steps.length - 2 && (
            <div className="mt-8 flex justify-between">
                <Button onClick={prevStep} variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                <Button onClick={nextStep} disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Submit Creation
                </Button>
            </div>
        )}
      </CardContent>
    </Card>
  );
}
