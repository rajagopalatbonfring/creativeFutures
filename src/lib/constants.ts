// import type { Activity, Submission } from './types';

// export const activities: Activity[] = [
//   {
//     id: 'paint-the-world',
//     title: 'Paint the World',
//     description: 'Use watercolors, crayons, or anything you can find to create a masterpiece.',
//     category: 'draw-dream',
//     ageGroup: '2-4',
//     imageId: 'activity-painting',
//   },
//   {
//     id: 'story-time-adventures',
//     title: 'Story Time Adventures',
//     description: 'Write a short story about a magical creature or a brave hero.',
//     category: 'young-pen',
//     ageGroup: '7-8',
//     imageId: 'activity-writing',
//   },
//   {
//     id: 'make-some-noise',
//     title: 'Make Some Noise!',
//     description: 'Compose a song using household items or simple instruments.',
//     category: 'sing-dance-shine',
//     ageGroup: '5-6',
//     imageId: 'activity-music',
//   },
//   {
//     id: 'kitchen-science',
//     title: 'Kitchen Science Report',
//     description: 'Try a safe kitchen science experiment (like lemon volcanoes) and submit a photo + observation.',
//     category: 'kid-scientists',
//     ageGroup: '9-10',
//     imageId: 'activity-coding',
//   },
//   {
//     id: 'clay-creations',
//     title: 'Clay Creations',
//     description: 'Mold and sculpt amazing figures out of modeling clay.',
//     category: 'draw-dream',
//     ageGroup: '5-6',
//     imageId: 'activity-sculpture',
//   },
//   {
//     id: 'photo-safari',
//     title: 'Photo Safari',
//     description: 'Go on a safari in your backyard and take pictures of interesting things.',
//     category: 'draw-dream',
//     ageGroup: '7-8',
//     imageId: 'activity-photography',
//   },
//   {
//     id: 'finish-the-picture',
//     title: 'Finish the Picture',
//     description: 'We started a drawing, you complete it! Download the template and show us your creativity.',
//     category: 'draw-dream',
//     ageGroup: '2-4',
//     imageId: 'activity-coloring'
//   },
//   {
//     id: 'comic-strip-challenge',
//     title: 'Comic Strip Challenge',
//     description: 'Create a short comic strip with your own characters and story.',
//     category: 'young-pen',
//     ageGroup: '13-14',
//     imageId: 'activity-comic'
//   },
//   {
//     id: 'kindness-story',
//     title: 'Share a Kindness Story',
//     description: 'Write about a time you helped someone or someone helped you. Let\'s spread positivity!',
//     category: 'kindness-corner',
//     ageGroup: '7-8',
//     imageId: 'submission-2'
//   },
//   {
//     id: 'cultural-tale',
//     title: 'Tell a Cultural Tale',
//     description: 'Share a folktale or a traditional story from your culture. You can write it or record it!',
//     category: 'colourful-cultures',
//     ageGroup: '9-10',
//     imageId: 'submission-3'
//   }
// ];





// export const featuredSubmissions: Submission[] = [
//   {
//     id: 'sub-1',
//     title: 'Dino in Space',
//     author: 'Leo, Age 7',
//     authorId: 'user-1',
//     activityId: 'paint-the-world',
//     activityTitle: 'Paint the World',
//     imageId: 'submission-1',
//     description: "My drawing of a T-Rex visiting a new planet.",
//     mediaType: 'image',
//   },
//   {
//     id: 'sub-2',
//     title: 'The Galaxy Star',
//     author: 'Mia, Age 10',
//     authorId: 'user-2',
//     activityId: 'story-time-adventures',
//     activityTitle: 'Story Time Adventures',
//     imageId: 'submission-2',
//     description: "A story about a lost star finding its way home.",
//     mediaType: 'text',
//   },
//   {
//     id: 'sub-3',
//     title: 'Blobby the Robot',
//     author: 'Chloe, Age 9',
//     authorId: 'user-3',
//     activityId: 'clay-creations',
//     activityTitle: 'Clay Creations',
//     imageId: 'submission-3',
//     description: "This is Blobby. He is a friendly robot from the future.",
//     mediaType: 'image',
//   },
//   {
//     id: 'sub-4',
//     title: 'My Fish Friend',
//     author: 'Sam, Age 5',
//     authorId: 'user-4',
//     activityId: 'paint-the-world',
//     activityTitle: 'Paint the World',
//     imageId: 'submission-4',
//     description: "A fish I met in my dream. His name is Bubbles.",
//     mediaType: 'image',
//   },
//   {
//     id: 'sub-5',
//     title: 'Jungle Beat',
//     author: 'Alex, Age 8',
//     authorId: 'user-5',
//     activityId: 'make-some-noise',
//     activityTitle: 'Make Some Noise!',
//     imageId: 'activity-music',
//     description: "I made a song using pots and pans. It sounds like a jungle!",
//     mediaType: 'audio',
//   },
//   {
//     id: 'sub-6',
//     title: 'My First Short Film',
//     author: 'Zoe, Age 12',
//     authorId: 'user-6',
//     activityId: 'sing-dance-shine',
//     activityTitle: 'Sing Dance Shine',
//     imageId: 'activity-photography',
//     description: "A short movie about my dog's secret life.",
//     mediaType: 'video',
//   },
//    {
//     id: 'sub-7',
//     title: 'The Poem of the Tree',
//     author: 'Liam, Age 11',
//     authorId: 'user-7',
//     activityId: 'story-time-adventures',
//     activityTitle: 'Story Time Adventures',
//     imageId: 'activity-writing',
//     description: "This is a poem I wrote about the big oak tree in my backyard.",
//     mediaType: 'text',
//   }
// ];


























// lib/constants.ts
import type { Activity, Submission } from './types';

// ────────────────────────────────────────────────
// Category definitions (used for colors, badges, filtering)
// ────────────────────────────────────────────────
export const ActivityCategories = {
  'young-pen':          'The Young Pen (Written Works)',
  'draw-dream':         'Draw Your Dream (Visual Artworks)',
  'sing-dance-shine':   'Sing Dance Shine (Performing Arts)',
  'kid-scientists':     'Kid Scientists (STEM & Innovation)',
  'colourful-cultures': 'Our Colourful Cultures (Language & Culture)',
  'kindness-corner':    'Kindness Corner',
} as const;

export type ActivityCategory = keyof typeof ActivityCategories;

// ────────────────────────────────────────────────
// 1. Core / Evergreen Activities – Parent-Child Activity Zone
// These are permanent activities, grouped under categories
// ────────────────────────────────────────────────
export const coreActivities: Activity[] = [
  // The Young Pen (Written Works)
  {
    id: 'short-story',
    title: 'Short Story Adventure',
    description: 'Write a short fiction or fantasy story with your own characters and ending.',
    category: 'young-pen',
    ageGroup: '7-8',           // changed from '7-12' → closest match
    imageId: 'activity-short-story',
    isSpecialChallenge: false,
  },
  {
    id: 'poetry-time',
    title: 'Poetry Time',
    description: 'Create your own poem – rhyming, free verse, or haiku style.',
    category: 'young-pen',
    ageGroup: '9-10',          // changed from '8-14' → closest match
    imageId: 'activity-poetry',
    isSpecialChallenge: false,
  },
  {
    id: 'book-review',
    title: 'Book Review Star',
    description: 'Read a book and write what you liked, what you learned, and who you recommend it to.',
    category: 'young-pen',
    ageGroup: '9-10',          // changed from '9-13' → closest match
    imageId: 'activity-book-review',
    isSpecialChallenge: false,
  },

  // Draw Your Dream (Visual Artworks)
  {
    id: 'drawing-freedom',
    title: 'Drawing Freedom',
    description: 'Draw or paint anything you imagine – no rules!',
    category: 'draw-dream',
    ageGroup: '5-6',           // changed from '4-10' → closest match (or use '2-4' if very young)
    imageId: 'activity-drawing',
    isSpecialChallenge: false,
  },
  {
    id: 'comic-strip',
    title: 'Comic Strip Creator',
    description: 'Make your own 4–8 panel comic strip with characters and speech bubbles.',
    category: 'draw-dream',
    ageGroup: '9-10',          // changed from '8-14' → closest match
    imageId: 'activity-comic',
    isSpecialChallenge: false,
  },
  {
    id: 'craft-recycle',
    title: 'Recycle Craft Challenge',
    description: 'Make something beautiful or useful from things you were going to throw away.',
    category: 'draw-dream',
    ageGroup: '7-8',           // changed from '6-11' → closest match
    imageId: 'activity-craft',
    isSpecialChallenge: false,
  },

  // Sing Dance Shine (Performing Arts)
  {
    id: 'sing-your-song',
    title: 'Sing Your Own Song',
    description: 'Sing a song you love or create your own tune and lyrics.',
    category: 'sing-dance-shine',
    ageGroup: '5-6',           // changed from '5-12' → closest match
    imageId: 'activity-singing',
    isSpecialChallenge: false,
  },
  {
    id: 'dance-freestyle',
    title: 'Freestyle Dance',
    description: 'Create your own dance moves to any music you like.',
    category: 'sing-dance-shine',
    ageGroup: '7-8',           // changed from '6-13' → closest match
    imageId: 'activity-dance',
    isSpecialChallenge: false,
  },

  // Kid Scientists (STEM & Innovation)
  {
    id: 'home-experiment',
    title: 'Home Science Experiment',
    description: 'Try a safe experiment (balloon rocket, walking water, etc.) and explain what happened.',
    category: 'kid-scientists',
    ageGroup: '7-8',           // changed from '7-12' → closest match
    imageId: 'activity-experiment',
    isSpecialChallenge: false,
  },
  {
    id: 'invention-drawing',
    title: 'My Future Invention',
    description: 'Draw and describe a gadget or invention that solves a problem.',
    category: 'kid-scientists',
    ageGroup: '9-10',          // changed from '8-14' → closest match
    imageId: 'activity-invention',
    isSpecialChallenge: false,
  },

  // Our Colourful Cultures
  {
    id: 'family-tradition',
    title: 'My Family Tradition',
    description: 'Tell us about a festival, food, dance or story from your culture/family.',
    category: 'colourful-cultures',
    ageGroup: '7-8',           // changed from '7-13' → closest match
    imageId: 'activity-tradition',
    isSpecialChallenge: false,
  },

  // Kindness Corner
  {
    id: 'kindness-act',
    title: 'Kindness Act Story',
    description: 'Share a real story of kindness – something you did or someone did for you.',
    category: 'kindness-corner',
    ageGroup: '7-8',           // changed from '6-12' → closest match
    imageId: 'activity-kindness',
    isSpecialChallenge: false,
  },
];

// ────────────────────────────────────────────────
// 2. Special / Weekly / Rotating Challenges – Resource Hub style
// These change often and are highlighted differently
// ────────────────────────────────────────────────
export const specialChallenges: Activity[] = [
  {
    id: 'kitchen-science-weekly',
    title: 'Kitchen Science Report',
    description: 'Try a safe kitchen experiment (lemon volcano, rainbow milk, dancing raisins...) and share photo + what you observed.',
    category: 'kid-scientists',
    ageGroup: '9-10',          // ← changed from '7-12' (middle of the range, suitable for science)
    imageId: 'challenge-kitchen-science',
    isSpecialChallenge: true,
    isCurrent: true,
  },
  {
    id: 'memory-map',
    title: 'Memory Map',
    description: 'Draw a map of your favorite memory (vacation, birthday, special day) with important places and people.',
    category: 'draw-dream',
    ageGroup: '7-8',           // ← changed from '6-11' (good for younger kids with memories)
    imageId: 'challenge-memory-map',
    isSpecialChallenge: true,
    isCurrent: true,
  },
  {
    id: 'emoji-story',
    title: 'Emoji Story Challenge',
    description: 'Write a short story or comic using only 5–8 emojis as your main inspiration.',
    category: 'young-pen',
    ageGroup: '9-10',          // ← changed from '8-13' (creative writing for tweens)
    imageId: 'challenge-emoji-story',
    isSpecialChallenge: true,
    isCurrent: true,
  },
  {
    id: 'finish-picture-weekly',
    title: 'Finish the Picture',
    description: 'Download the half-finished drawing and complete it with your own style and colors.',
    category: 'draw-dream',
    ageGroup: '5-6',           // ← changed from '5-10' (perfect for early drawing skills)
    imageId: 'challenge-finish-picture',
    isSpecialChallenge: true,
    isCurrent: true,
  },
];

// Combined list (useful for search / gallery when you want everything)
export const allActivities = [...coreActivities, ...specialChallenges];

// ────────────────────────────────────────────────
// Dummy realistic submissions (gallery content)
// ────────────────────────────────────────────────
export const featuredSubmissions: Submission[] = [
  // Young Pen
  { id: 's1', title: 'The Magic Library Door', author: 'Aarav, 9', authorId: 'u1', activityId: 'short-story', activityTitle: 'Short Story Adventure', imageId: 'sub-story-1', description: 'A boy finds a hidden door in his school library...', mediaType: 'text', createdAt: 1738000000000 },
  { id: 's2', title: 'Rainy Day Poem', author: 'Siya, 11', authorId: 'u2', activityId: 'poetry-time', activityTitle: 'Poetry Time', imageId: 'sub-poem-1', description: 'Pitter patter on my window, raindrops dancing slow...', mediaType: 'text', createdAt: 1737800000000 },

  // Draw Your Dream
  { id: 's3', title: 'Underwater City', author: 'Vihaan, 7', authorId: 'u3', activityId: 'drawing-freedom', activityTitle: 'Drawing Freedom', imageId: 'sub-draw-1', description: 'My dream city under the sea with mermaids and glowing fish.', mediaType: 'image', createdAt: 1737900000000 },
  { id: 's4', title: 'Robot Best Friend', author: 'Diya, 10', authorId: 'u4', activityId: 'comic-strip', activityTitle: 'Comic Strip Creator', imageId: 'sub-comic-1', description: '4-panel comic about a girl and her robot friend who saves the day.', mediaType: 'image', createdAt: 1738100000000 },

  // Sing Dance Shine
  { id: 's5', title: 'My Rain Song', author: 'Arjun, 8', authorId: 'u5', activityId: 'sing-your-song', activityTitle: 'Sing Your Own Song', imageId: 'sub-audio-1', description: 'I made up a happy song about rain and jumping in puddles.', mediaType: 'audio', createdAt: 1737950000000 },
  { id: 's6', title: 'Festival Dance', author: 'Riya, 12', authorId: 'u6', activityId: 'dance-freestyle', activityTitle: 'Freestyle Dance', imageId: 'sub-video-1', description: 'My own dance to a Bollywood song about celebration.', mediaType: 'video', createdAt: 1738200000000 },

  // Kid Scientists
  { id: 's7', title: 'Volcano Eruption!', author: 'Kian, 9', authorId: 'u7', activityId: 'home-experiment', activityTitle: 'Home Science Experiment', imageId: 'sub-science-1', description: 'Baking soda + vinegar = big red volcano!', mediaType: 'image', createdAt: 1737850000000 },
  { id: 's8', title: 'Flying Paper Helicopter', author: 'Anika, 11', authorId: 'u8', activityId: 'home-experiment', activityTitle: 'Home Science Experiment', imageId: 'sub-science-2', description: 'I made a helicopter from paper that spins when dropped.', mediaType: 'image', createdAt: 1738050000000 },

  // Special Challenges (current ones)
  { id: 's9', title: 'My Summer Memory Map', author: 'Reyansh, 8', authorId: 'u9', activityId: 'memory-map', activityTitle: 'Memory Map', imageId: 'sub-memory-1', description: 'Map of our beach vacation with ice-cream shop and sand castle.', mediaType: 'image', createdAt: 1738150000000 },
  { id: 's10', title: 'The Crying Emoji Adventure', author: 'Mira, 10', authorId: 'u10', activityId: 'emoji-story', activityTitle: 'Emoji Story Challenge', imageId: 'sub-emoji-1', description: 'Story about a sad raindrop who finds friends.', mediaType: 'text', createdAt: 1738250000000 },
];