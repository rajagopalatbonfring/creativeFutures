import type { Activity, Submission } from './types';

export const activities: Activity[] = [
  {
    id: 'paint-the-world',
    title: 'Paint the World',
    description: 'Use watercolors, crayons, or anything you can find to create a masterpiece.',
    category: 'draw-dream',
    ageGroup: '2-4',
    imageId: 'activity-painting',
  },
  {
    id: 'story-time-adventures',
    title: 'Story Time Adventures',
    description: 'Write a short story about a magical creature or a brave hero.',
    category: 'young-pen',
    ageGroup: '7-8',
    imageId: 'activity-writing',
  },
  {
    id: 'make-some-noise',
    title: 'Make Some Noise!',
    description: 'Compose a song using household items or simple instruments.',
    category: 'sing-dance-shine',
    ageGroup: '5-6',
    imageId: 'activity-music',
  },
  {
    id: 'kitchen-science',
    title: 'Kitchen Science Report',
    description: 'Try a safe kitchen science experiment (like lemon volcanoes) and submit a photo + observation.',
    category: 'kid-scientists',
    ageGroup: '9-10',
    imageId: 'activity-coding',
  },
  {
    id: 'clay-creations',
    title: 'Clay Creations',
    description: 'Mold and sculpt amazing figures out of modeling clay.',
    category: 'draw-dream',
    ageGroup: '5-6',
    imageId: 'activity-sculpture',
  },
  {
    id: 'photo-safari',
    title: 'Photo Safari',
    description: 'Go on a safari in your backyard and take pictures of interesting things.',
    category: 'draw-dream',
    ageGroup: '7-8',
    imageId: 'activity-photography',
  },
  {
    id: 'finish-the-picture',
    title: 'Finish the Picture',
    description: 'We started a drawing, you complete it! Download the template and show us your creativity.',
    category: 'draw-dream',
    ageGroup: '2-4',
    imageId: 'activity-coloring'
  },
  {
    id: 'comic-strip-challenge',
    title: 'Comic Strip Challenge',
    description: 'Create a short comic strip with your own characters and story.',
    category: 'young-pen',
    ageGroup: '13-14',
    imageId: 'activity-comic'
  }
];

export const featuredSubmissions: Submission[] = [
  {
    id: 'sub-1',
    title: 'Dino in Space',
    author: 'Leo, Age 7',
    authorId: 'user-1',
    activityId: 'paint-the-world',
    activityTitle: 'Paint the World',
    imageId: 'submission-1',
    description: "My drawing of a T-Rex visiting a new planet.",
  },
  {
    id: 'sub-2',
    title: 'The Galaxy Star',
    author: 'Mia, Age 10',
    authorId: 'user-2',
    activityId: 'story-time-adventures',
    activityTitle: 'Story Time Adventures',
    imageId: 'submission-2',
    description: "A story about a lost star finding its way home.",
  },
  {
    id: 'sub-3',
    title: 'Blobby the Robot',
    author: 'Chloe, Age 9',
    authorId: 'user-3',
    activityId: 'clay-creations',
    activityTitle: 'Clay Creations',
    imageId: 'submission-3',
    description: "This is Blobby. He is a friendly robot from the future.",
  },
  {
    id: 'sub-4',
    title: 'My Fish Friend',
    author: 'Sam, Age 5',
    authorId: 'user-4',
    activityId: 'paint-the-world',
    activityTitle: 'Paint the World',
    imageId: 'submission-4',
    description: "A fish I met in my dream. His name is Bubbles.",
  },
];
