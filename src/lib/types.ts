export const AgeGroups = {
  '2-4': 'Little Explorers',
  '5-6': 'Creative Starters',
  '7-8': 'Junior Thinkers',
  '9-10': 'Curious Minds',
  '11-12': 'Young Creators',
  '13-14': 'Growing Scholars',
  '15-16': 'Teen Journalists',
} as const;
export type AgeGroup = keyof typeof AgeGroups;
export type StageName = typeof AgeGroups[AgeGroup];


export const ActivityCategories = {
  'young-pen': 'The Young Pen',
  'draw-dream': 'Draw Your Dream',
  'sing-dance-shine': 'Sing Dance Shine',
  'kid-scientists': 'Kid Scientists',
  'colourful-cultures': 'Our Colourful Cultures',
  'kindness-corner': 'Kindness Corner',
} as const;
export type ActivityCategory = keyof typeof ActivityCategories;
export type ActivityCategoryName = typeof ActivityCategories[ActivityCategory];

export type Activity = {
  id: string;
  title: string;
  description: string;
  category: ActivityCategory;
  ageGroup: AgeGroup;
  imageId: string;
};

export type Submission = {
  id: string;
  title: string;
  author: string;
  authorId: string;
  activityId: string;
  activityTitle: string;
  imageId: string;
  description?: string;
  fileUrl?: string;
  mediaType?: 'image' | 'video' | 'audio' | 'text';
};

export type UserProfile = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  ageGroup: AgeGroup | null;
  preferences: string;
};
