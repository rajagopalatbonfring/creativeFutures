// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import * as z from 'zod';
// import { AnimatePresence, motion } from 'framer-motion';
// import { ArrowLeft, ArrowRight, Loader2, PartyPopper, CheckCircle2 } from 'lucide-react';

// import { allActivities } from '@/lib/constants';
// import { Button } from '@/components/ui/button';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import { Textarea } from '@/components/ui/textarea';
// import { FileUploader } from './file-uploader';
// import { useToast } from '@/hooks/use-toast';
// import { Card, CardContent } from './ui/card';

// const submissionSchema = z.object({
//   activityId: z.string().min(1, 'Please select an activity.'),
//   title: z.string().min(3, 'Title must be at least 3 characters.').max(50, 'Title is too long.'),
//   description: z.string().max(300, 'Description is too long.').optional(),
//   file: z.any().refine((file) => file, 'An artwork file is required.'),
// });

// type SubmissionFormValues = z.infer<typeof submissionSchema>;

// const steps = [
//   { id: 'step1', fields: ['activityId'] },
//   { id: 'step2', fields: ['title', 'description'] },
//   { id: 'step3', fields: ['file'] },
//   { id: 'success' },
// ];

// export function SubmissionForm({ selectedActivityId }: { selectedActivityId: string | null }) {
//   const router = useRouter();
//   const { toast } = useToast();
//   const [currentStep, setCurrentStep] = useState(0);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const form = useForm<SubmissionFormValues>({
//     resolver: zodResolver(submissionSchema),
//     defaultValues: {
//       activityId: selectedActivityId ?? '',
//       title: '',
//       description: '',
//       file: undefined,
//     },
//   });

//   const nextStep = async () => {
//     const fields = steps[currentStep].fields;
//     if (!fields?.length) return;

//     const isValid = await form.trigger(fields as any, { shouldFocus: true });
//     if (!isValid) return;

//     if (currentStep < steps.length - 2) {
//       setCurrentStep(prev => prev + 1);
//     } else if (currentStep === steps.length - 2) {
//       await handleSubmit();
//     }
//   };

//   const prevStep = () => {
//     if (currentStep > 0) {
//       setCurrentStep(prev => prev - 1);
//     }
//   };

//   const handleSubmit = async () => {
//     setIsSubmitting(true);

//     try {
//       // Simulate API call (replace with real Firebase / server action)
//       await new Promise(resolve => setTimeout(resolve, 1800));

//       toast({
//         title: "Submission Received!",
//         description: "Your creation has been submitted for review.",
//       });

//       // Move to success step
//       setCurrentStep(steps.length - 1);

//       // Auto-redirect to dashboard after 5 seconds
//       setTimeout(() => {
//         router.push('/dashboard');
//       }, 5000);
//     } catch (error) {
//       toast({
//         variant: "destructive",
//         title: "Submission failed",
//         description: "Something went wrong. Please try again.",
//       });
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Card className="border-0 shadow-xl">
//       <CardContent className="p-6 md:p-8">
//         <Form {...form}>
//           <form className="space-y-8">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentStep}
//                 initial={{ x: 300, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: -300, opacity: 0 }}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//               >
//                 {/* Step 1: Choose Activity */}
//                 {currentStep === 0 && (
//                   <FormField
//                     control={form.control}
//                     name="activityId"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>1. Choose an Activity</FormLabel>
//                         <Select onValueChange={field.onChange} defaultValue={field.value}>
//                           <FormControl>
//                             <SelectTrigger className="h-12">
//                               <SelectValue placeholder="Select a creative activity" />
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent>
//                             {allActivities.map(activity => (
//                               <SelectItem key={activity.id} value={activity.id}>
//                                 {activity.isSpecialChallenge ? `${activity.title} (Weekly)` : activity.title}
//                               </SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 )}

//                 {/* Step 2: Title & Description */}
//                 {currentStep === 1 && (
//                   <div className="space-y-6">
//                     <FormField
//                       control={form.control}
//                       name="title"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>2. Give it a Title</FormLabel>
//                           <FormControl>
//                             <Input placeholder="My Underwater Adventure" className="h-12" {...field} />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
//                     <FormField
//                       control={form.control}
//                       name="description"
//                       render={({ field }) => (
//                         <FormItem>
//                           <FormLabel>Tell us about it (optional)</FormLabel>
//                           <FormControl>
//                             <Textarea
//                               placeholder="I was inspired by my trip to the beach..."
//                               className="min-h-[120px]"
//                               {...field}
//                             />
//                           </FormControl>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     />
//                   </div>
//                 )}

//                 {/* Step 3: File Upload */}
//                 {currentStep === 2 && (
//                   <FormField
//                     control={form.control}
//                     name="file"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>3. Upload Your Creation</FormLabel>
//                         <FormControl>
//                           <FileUploader
//                             onFileChange={field.onChange}
//                             file={field.value}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 )}

//                 {/* Success Step */}
//                 {currentStep === 3 && (
//                   <div className="text-center py-12 space-y-6">
//                     <div className="flex justify-center">
//                       <div className="relative">
//                         <CheckCircle2 className="h-24 w-24 text-green-500" strokeWidth={2} />
//                         <motion.div
//                           initial={{ scale: 0 }}
//                           animate={{ scale: 1 }}
//                           transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
//                           className="absolute inset-0 flex items-center justify-center"
//                         >
//                           <PartyPopper className="h-10 w-10 text-yellow-500" />
//                         </motion.div>
//                       </div>
//                     </div>

//                     <h2 className="text-3xl font-bold font-headline text-green-700">
//                       Submitted for Review!
//                     </h2>

//                     <p className="text-lg text-muted-foreground max-w-md mx-auto">
//                       Great job! Your creation has been successfully submitted and is now under review by our team.
//                     </p>

//                     <p className="text-base font-medium text-amber-700">
//                       You can track its status and see when it gets featured in your dashboard.
//                     </p>

//                     <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
//                       <Button
//                         onClick={() => router.push('/dashboard')}
//                         className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg font-bold shadow-lg"
//                       >
//                         Go to Dashboard
//                       </Button>

//                       <Button
//                         variant="outline"
//                         onClick={() => router.push('/gallery')}
//                         className="px-8 py-6 text-lg font-medium border-2"
//                       >
//                         Back to Gallery
//                       </Button>
//                     </div>

//                     <p className="text-sm text-muted-foreground pt-4">
//                       Redirecting to dashboard in 5 seconds...
//                     </p>
//                   </div>
//                 )}
//               </motion.div>
//             </AnimatePresence>
//           </form>
//         </Form>

//         {/* Navigation Buttons */}
//         {currentStep < 3 && (
//           <div className="mt-10 flex justify-between items-center">
//             <Button
//               variant="outline"
//               onClick={prevStep}
//               disabled={currentStep === 0 || isSubmitting}
//               className="px-6 py-5 text-base"
//             >
//               <ArrowLeft className="mr-2 h-5 w-5" />
//               Previous
//             </Button>

//             <Button
//               onClick={nextStep}
//               disabled={isSubmitting}
//               className="px-8 py-5 text-base font-bold min-w-[140px]"
//             >
//               {isSubmitting ? (
//                 <>
//                   <Loader2 className="mr-2 h-5 w-5 animate-spin" />
//                   Submitting...
//                 </>
//               ) : currentStep === 2 ? (
//                 'Submit Creation'
//               ) : (
//                 <>
//                   Next
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </>
//               )}
//             </Button>
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   );
// }



























'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Loader2, PartyPopper, CheckCircle2 } from 'lucide-react';

import { getEligibleActivities } from '@/lib/constants';
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
import { AgeGroup } from '@/lib/types';

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
  { id: 'success' },
];

interface SubmissionFormProps {
  selectedActivityId: string | null;
  userAgeGroup: AgeGroup; // ← new prop from auth
}

export function SubmissionForm({ selectedActivityId, userAgeGroup }: SubmissionFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get only eligible activities for this user's age
  const eligibleActivities = getEligibleActivities(userAgeGroup);

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
    if (!fields?.length) return;

    const isValid = await form.trigger(fields as any, { shouldFocus: true });
    if (!isValid) return;

    if (currentStep < steps.length - 2) {
      setCurrentStep(prev => prev + 1);
    } else if (currentStep === steps.length - 2) {
      await handleSubmit();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // Simulate API call (replace with real Firebase / server action)
      await new Promise(resolve => setTimeout(resolve, 1800));

      toast({
        title: "Submission Received!",
        description: "Your creation has been submitted for review.",
      });

      // Move to success step
      setCurrentStep(steps.length - 1);

      // Auto-redirect to dashboard after 5 seconds
      setTimeout(() => {
        router.push('/dashboard');
      }, 5000);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: "Something went wrong. Please try again.",
      });
      setIsSubmitting(false);
    }
  };

  // If no eligible activities → show message
  if (eligibleActivities.length === 0) {
    return (
      <Card className="border-0 shadow-xl">
        <CardContent className="p-10 text-center">
          <div className="text-6xl mb-6">😕</div>
          <h2 className="text-2xl font-bold mb-4">No eligible activities found</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Your age group ({userAgeGroup}) doesn't have any activities yet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => router.push('/participant-category')}>
              Choose Different Age Group
            </Button>
            <Button variant="outline" onClick={() => router.push('/gallery')}>
              Back to Gallery
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-xl">
      <CardContent className="p-6 md:p-8">
        <Form {...form}>
          <form className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* Step 1: Choose Activity (only eligible ones) */}
                {currentStep === 0 && (
                  <FormField
                    control={form.control}
                    name="activityId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>1. Choose an Activity</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select an eligible activity" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {eligibleActivities.map(activity => (
                              <SelectItem key={activity.id} value={activity.id}>
                                {activity.isSpecialChallenge ? `${activity.title} (Weekly)` : activity.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {/* Step 2: Title & Description */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>2. Give it a Title</FormLabel>
                          <FormControl>
                            <Input placeholder="My Underwater Adventure" className="h-12" {...field} />
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
                            <Textarea
                              placeholder="I was inspired by my trip to the beach..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {/* Step 3: File Upload */}
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

                {/* Success Step */}
                {currentStep === 3 && (
                  <div className="text-center py-12 space-y-6">
                    <div className="flex justify-center">
                      <div className="relative">
                        <CheckCircle2 className="h-24 w-24 text-green-500" strokeWidth={2} />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <PartyPopper className="h-10 w-10 text-yellow-500" />
                        </motion.div>
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold font-headline text-green-700">
                      Submitted for Review!
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-md mx-auto">
                      Great job! Your creation has been successfully submitted and is now under review by our team.
                    </p>

                    <p className="text-base font-medium text-amber-700">
                      You can track its status and see when it gets featured in your dashboard.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                      <Button
                        onClick={() => router.push('/dashboard')}
                        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg font-bold shadow-lg"
                      >
                        Go to Dashboard
                      </Button>

                      <Button
                        variant="outline"
                        onClick={() => router.push('/gallery')}
                        className="px-8 py-6 text-lg font-medium border-2"
                      >
                        Back to Gallery
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground pt-4">
                      Redirecting to dashboard in 5 seconds...
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </form>
        </Form>

        {/* Navigation Buttons */}
        {currentStep < 3 && (
          <div className="mt-10 flex justify-between items-center">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0 || isSubmitting}
              className="px-6 py-5 text-base"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Previous
            </Button>

            <Button
              onClick={nextStep}
              disabled={isSubmitting}
              className="px-8 py-5 text-base font-bold min-w-[140px]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : currentStep === 2 ? (
                'Submit Creation'
              ) : (
                <>
                  Next
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}