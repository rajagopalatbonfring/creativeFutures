// // lib/constants.ts
// import type { Activity, Submission } from './types';

// // ────────────────────────────────────────────────
// // Category definitions (used for colors, badges, filtering)
// // ────────────────────────────────────────────────
// export const ActivityCategories = {
//   'young-pen':          'The Young Pen (Written Works)',
//   'draw-dream':         'Draw Your Dream (Visual Artworks)',
//   'sing-dance-shine':   'Sing Dance Shine (Performing Arts)',
//   'kid-scientists':     'Kid Scientists (STEM & Innovation)',
//   'colourful-cultures': 'Our Colourful Cultures (Language & Culture)',
//   'kindness-corner':    'Kindness Corner',
// } as const;

// export type ActivityCategory = keyof typeof ActivityCategories;

// // ────────────────────────────────────────────────
// // 1. Core / Evergreen Activities – Parent-Child Activity Zone
// // These are permanent activities, grouped under categories
// // ────────────────────────────────────────────────
// export const coreActivities: Activity[] = [
//   // The Young Pen (Written Works)
//   {
//     id: 'short-story',
//     title: 'Short Story Adventure',
//     description: 'Write a short fiction or fantasy story with your own characters and ending.',
//     category: 'young-pen',
//     ageGroup: '7-8',           // changed from '7-12' → closest match
//     imageId: 'activity-short-story',
//     isSpecialChallenge: false,
//   },
//   {
//     id: 'poetry-time',
//     title: 'Poetry Time',
//     description: 'Create your own poem – rhyming, free verse, or haiku style.',
//     category: 'young-pen',
//     ageGroup: '9-10',          // changed from '8-14' → closest match
//     imageId: 'activity-poetry',
//     isSpecialChallenge: false,
//   },
//   {
//     id: 'book-review',
//     title: 'Book Review Star',
//     description: 'Read a book and write what you liked, what you learned, and who you recommend it to.',
//     category: 'young-pen',
//     ageGroup: '9-10',          // changed from '9-13' → closest match
//     imageId: 'activity-book-review',
//     isSpecialChallenge: false,
//   },

//   // Draw Your Dream (Visual Artworks)
//   {
//     id: 'drawing-freedom',
//     title: 'Drawing Freedom',
//     description: 'Draw or paint anything you imagine – no rules!',
//     category: 'draw-dream',
//     ageGroup: '5-6',           // changed from '4-10' → closest match (or use '2-4' if very young)
//     imageId: 'activity-drawing',
//     isSpecialChallenge: false,
//   },
//   {
//     id: 'comic-strip',
//     title: 'Comic Strip Creator',
//     description: 'Make your own 4–8 panel comic strip with characters and speech bubbles.',
//     category: 'draw-dream',
//     ageGroup: '9-10',          // changed from '8-14' → closest match
//     imageId: 'activity-comic',
//     isSpecialChallenge: false,
//   },
//   {
//     id: 'craft-recycle',
//     title: 'Recycle Craft Challenge',
//     description: 'Make something beautiful or useful from things you were going to throw away.',
//     category: 'draw-dream',
//     ageGroup: '7-8',           // changed from '6-11' → closest match
//     imageId: 'activity-craft',
//     isSpecialChallenge: false,
//   },

//   // Sing Dance Shine (Performing Arts)
//   {
//     id: 'sing-your-song',
//     title: 'Sing Your Own Song',
//     description: 'Sing a song you love or create your own tune and lyrics.',
//     category: 'sing-dance-shine',
//     ageGroup: '5-6',           // changed from '5-12' → closest match
//     imageId: 'activity-singing',
//     isSpecialChallenge: false,
//   },
//   {
//     id: 'dance-freestyle',
//     title: 'Freestyle Dance',
//     description: 'Create your own dance moves to any music you like.',
//     category: 'sing-dance-shine',
//     ageGroup: '7-8',           // changed from '6-13' → closest match
//     imageId: 'activity-dance',
//     isSpecialChallenge: false,
//   },

//   // Kid Scientists (STEM & Innovation)
//   {
//     id: 'home-experiment',
//     title: 'Home Science Experiment',
//     description: 'Try a safe experiment (balloon rocket, walking water, etc.) and explain what happened.',
//     category: 'kid-scientists',
//     ageGroup: '7-8',           // changed from '7-12' → closest match
//     imageId: 'activity-experiment',
//     isSpecialChallenge: false,
//   },
//   {
//     id: 'invention-drawing',
//     title: 'My Future Invention',
//     description: 'Draw and describe a gadget or invention that solves a problem.',
//     category: 'kid-scientists',
//     ageGroup: '9-10',          // changed from '8-14' → closest match
//     imageId: 'activity-invention',
//     isSpecialChallenge: false,
//   },

//   // Our Colourful Cultures
//   {
//     id: 'family-tradition',
//     title: 'My Family Tradition',
//     description: 'Tell us about a festival, food, dance or story from your culture/family.',
//     category: 'colourful-cultures',
//     ageGroup: '7-8',           // changed from '7-13' → closest match
//     imageId: 'activity-tradition',
//     isSpecialChallenge: false,
//   },

//   // Kindness Corner
//   {
//     id: 'kindness-act',
//     title: 'Kindness Act Story',
//     description: 'Share a real story of kindness – something you did or someone did for you.',
//     category: 'kindness-corner',
//     ageGroup: '7-8',           // changed from '6-12' → closest match
//     imageId: 'activity-kindness',
//     isSpecialChallenge: false,
//   },
// ];

// // ────────────────────────────────────────────────
// // 2. Special / Weekly / Rotating Challenges – Resource Hub style
// // These change often and are highlighted differently
// // ────────────────────────────────────────────────
// export const specialChallenges: Activity[] = [
//   {
//     id: 'kitchen-science-weekly',
//     title: 'Kitchen Science Report',
//     description: 'Try a safe kitchen experiment (lemon volcano, rainbow milk, dancing raisins...) and share photo + what you observed.',
//     category: 'kid-scientists',
//     ageGroup: '9-10',          // ← changed from '7-12' (middle of the range, suitable for science)
//     imageId: 'challenge-kitchen-science',
//     isSpecialChallenge: true,
//     isCurrent: true,
//   },
//   {
//     id: 'memory-map',
//     title: 'Memory Map',
//     description: 'Draw a map of your favorite memory (vacation, birthday, special day) with important places and people.',
//     category: 'draw-dream',
//     ageGroup: '7-8',           // ← changed from '6-11' (good for younger kids with memories)
//     imageId: 'challenge-memory-map',
//     isSpecialChallenge: true,
//     isCurrent: true,
//   },
//   {
//     id: 'emoji-story',
//     title: 'Emoji Story Challenge',
//     description: 'Write a short story or comic using only 5–8 emojis as your main inspiration.',
//     category: 'young-pen',
//     ageGroup: '9-10',          // ← changed from '8-13' (creative writing for tweens)
//     imageId: 'challenge-emoji-story',
//     isSpecialChallenge: true,
//     isCurrent: true,
//   },
//   {
//     id: 'finish-picture-weekly',
//     title: 'Finish the Picture',
//     description: 'Download the half-finished drawing and complete it with your own style and colors.',
//     category: 'draw-dream',
//     ageGroup: '5-6',           // ← changed from '5-10' (perfect for early drawing skills)
//     imageId: 'challenge-finish-picture',
//     isSpecialChallenge: true,
//     isCurrent: true,
//   },
// ];

// // Combined list (useful for search / gallery when you want everything)
// export const allActivities = [...coreActivities, ...specialChallenges];

// // ────────────────────────────────────────────────
// // Dummy realistic submissions (gallery content)
// // ────────────────────────────────────────────────
// export const featuredSubmissions: Submission[] = [
//   // Young Pen
//   { id: 's1', title: 'The Magic Library Door', author: 'Aarav, 9', authorId: 'u1', activityId: 'short-story', activityTitle: 'Short Story Adventure', imageId: 'sub-story-1', description: 'A boy finds a hidden door in his school library...', mediaType: 'text', createdAt: 1738000000000 },
//   { id: 's2', title: 'Rainy Day Poem', author: 'Siya, 11', authorId: 'u2', activityId: 'poetry-time', activityTitle: 'Poetry Time', imageId: 'sub-poem-1', description: 'Pitter patter on my window, raindrops dancing slow...', mediaType: 'text', createdAt: 1737800000000 },

//   // Draw Your Dream
//   { id: 's3', title: 'Underwater City', author: 'Vihaan, 7', authorId: 'u3', activityId: 'drawing-freedom', activityTitle: 'Drawing Freedom', imageId: 'sub-draw-1', description: 'My dream city under the sea with mermaids and glowing fish.', mediaType: 'image', createdAt: 1737900000000 },
//   { id: 's4', title: 'Robot Best Friend', author: 'Diya, 10', authorId: 'u4', activityId: 'comic-strip', activityTitle: 'Comic Strip Creator', imageId: 'sub-comic-1', description: '4-panel comic about a girl and her robot friend who saves the day.', mediaType: 'image', createdAt: 1738100000000 },

//   // Sing Dance Shine
//   { id: 's5', title: 'My Rain Song', author: 'Arjun, 8', authorId: 'u5', activityId: 'sing-your-song', activityTitle: 'Sing Your Own Song', imageId: 'sub-audio-1', description: 'I made up a happy song about rain and jumping in puddles.', mediaType: 'audio', createdAt: 1737950000000 },
//   { id: 's6', title: 'Festival Dance', author: 'Riya, 12', authorId: 'u6', activityId: 'dance-freestyle', activityTitle: 'Freestyle Dance', imageId: 'sub-video-1', description: 'My own dance to a Bollywood song about celebration.', mediaType: 'video', createdAt: 1738200000000 },

//   // Kid Scientists
//   { id: 's7', title: 'Volcano Eruption!', author: 'Kian, 9', authorId: 'u7', activityId: 'home-experiment', activityTitle: 'Home Science Experiment', imageId: 'sub-science-1', description: 'Baking soda + vinegar = big red volcano!', mediaType: 'image', createdAt: 1737850000000 },
//   { id: 's8', title: 'Flying Paper Helicopter', author: 'Anika, 11', authorId: 'u8', activityId: 'home-experiment', activityTitle: 'Home Science Experiment', imageId: 'sub-science-2', description: 'I made a helicopter from paper that spins when dropped.', mediaType: 'image', createdAt: 1738050000000 },

//   // Special Challenges (current ones)
//   { id: 's9', title: 'My Summer Memory Map', author: 'Reyansh, 8', authorId: 'u9', activityId: 'memory-map', activityTitle: 'Memory Map', imageId: 'sub-memory-1', description: 'Map of our beach vacation with ice-cream shop and sand castle.', mediaType: 'image', createdAt: 1738150000000 },
//   { id: 's10', title: 'The Crying Emoji Adventure', author: 'Mira, 10', authorId: 'u10', activityId: 'emoji-story', activityTitle: 'Emoji Story Challenge', imageId: 'sub-emoji-1', description: 'Story about a sad raindrop who finds friends.', mediaType: 'text', createdAt: 1738250000000 },
// ];


















// lib/constants.ts
import type { Activity, Submission, AgeGroup } from './types';

// ────────────────────────────────────────────────
// Global Age Group Data (used in participant-category page & anywhere)
// ────────────────────────────────────────────────
export const ageGroupData = [
  { age: '2-4' as AgeGroup, stage: 'Little Explorers', activity: 'Drawing, colouring, object recognition', emoji: '🐣', color: 'bg-yellow-200', gradient: 'from-yellow-400 to-yellow-200' },
  { age: '5-6' as AgeGroup, stage: 'Creative Starters', activity: 'Tracing, story starters, picture-based Q&A', emoji: '🌱', color: 'bg-green-200', gradient: 'from-green-400 to-green-200' },
  { age: '7-8' as AgeGroup, stage: 'Junior Thinkers', activity: 'Simple poems, "My Day" journal, puzzles', emoji: '🎈', color: 'bg-blue-200', gradient: 'from-blue-400 to-blue-200' },
  { age: '9-10' as AgeGroup, stage: 'Curious Minds', activity: 'Short stories, mini-essays, word search, science facts', emoji: '🔍', color: 'bg-purple-200', gradient: 'from-purple-400 to-purple-200' },
  { age: '11-12' as AgeGroup, stage: 'Young Creators', activity: 'Experiments, opinion writing, creative challenges', emoji: '💡', color: 'bg-pink-200', gradient: 'from-pink-400 to-pink-200' },
  { age: '13-14' as AgeGroup, stage: 'Growing Scholars', activity: 'Articles, comic strips, logic puzzles', emoji: '📚', color: 'bg-orange-200', gradient: 'from-orange-400 to-orange-200' },
  { age: '15-16' as AgeGroup, stage: 'Teen Journalists', activity: 'Essays, social issues, innovation topics', emoji: '✨', color: 'bg-red-200', gradient: 'from-red-400 to-red-200' },
] as const;

// ────────────────────────────────────────────────
// 10 Core / Evergreen Activities (no categories)
// ────────────────────────────────────────────────
export const coreActivities: Activity[] = [
  {
    id: 'story-telling',
    title: 'Story Telling',
    description: 'Create and share your own original story.',
    ageGroups: ['7-8', '9-10', '11-12', '13-14', '15-16'],
    imageId: 'activity-story-telling',
    isSpecialChallenge: false,
  },
  {
    id: 'book-review',
    title: 'Book Review',
    description: 'Share your thoughts about a book you read.',
    ageGroups: ['9-10', '11-12', '13-14', '15-16'],
    imageId: 'activity-book-review',
    isSpecialChallenge: false,
  },
  {
    id: 'drawing',
    title: 'Drawing',
    description: 'Express yourself through drawings and paintings.',
    ageGroups: ['2-4', '5-6', '7-8', '9-10', '11-12', '13-14', '15-16'],
    imageId: 'activity-drawing',
    isSpecialChallenge: false,
  },
  {
    id: 'model-photos',
    title: 'Model Photos',
    description: 'Take photos of models, sculptures or creations you made.',
    ageGroups: ['2-4', '5-6', '7-8', '9-10', '11-12', '13-14', '15-16'],
    imageId: 'activity-model-photos',
    isSpecialChallenge: false,
  },
  {
    id: 'craft',
    title: 'Craft',
    description: 'Make creative crafts using various materials.',
    ageGroups: ['2-4', '5-6', '7-8', '9-10', '11-12', '13-14', '15-16'],
    imageId: 'activity-craft',
    isSpecialChallenge: false,
  },
  {
    id: 'singing',
    title: 'Singing',
    description: 'Record yourself singing a song.',
    ageGroups: ['5-6', '7-8', '9-10', '11-12', '13-14', '15-16'],
    imageId: 'activity-singing',
    isSpecialChallenge: false,
  },
  {
    id: 'dancing',
    title: 'Dancing',
    description: 'Show your dance moves in a video.',
    ageGroups: ['5-6', '7-8', '9-10', '11-12', '13-14', '15-16'],
    imageId: 'activity-dancing',
    isSpecialChallenge: false,
  },
  {
    id: 'math-puzzles',
    title: 'Math Puzzles Solving',
    description: 'Solve and share math puzzles or riddles.',
    ageGroups: ['7-8', '9-10', '11-12', '13-14', '15-16'],
    imageId: 'activity-math-puzzles',
    isSpecialChallenge: false,
  },
  {
    id: 'science-experiments',
    title: 'Science Experiments',
    description: 'Perform and document simple science experiments.',
    ageGroups: ['9-10', '11-12', '13-14', '15-16'],
    imageId: 'activity-science-experiments',
    isSpecialChallenge: false,
  },
  {
    id: 'new-idea',
    title: 'New Idea Telling',
    description: 'Share your original invention or creative idea.',
    ageGroups: ['9-10', '11-12', '13-14', '15-16'],
    imageId: 'activity-new-idea',
    isSpecialChallenge: false,
  },
];

// ────────────────────────────────────────────────
// 4 Special / Weekly Challenges (exactly as requested)
// ────────────────────────────────────────────────
export const specialChallenges: Activity[] = [
  {
    id: 'kitchen-science-weekly',
    title: 'Kitchen Science Report',
    description: 'Try a safe kitchen experiment (like lemon volcanoes or rainbow milk) and submit a photo + observation.',
    ageGroups: ['9-10', '11-12', '13-14', '15-16'],
    imageId: 'challenge-kitchen-science',
    isSpecialChallenge: true,
    isCurrent: true,
  },
  {
    id: 'memory-map',
    title: 'Memory Map',
    description: 'Kids draw or describe a favourite memory as a map.',
    ageGroups: ['5-6', '7-8', '9-10'],
    imageId: 'challenge-memory-map',
    isSpecialChallenge: true,
    isCurrent: true,
  },
  {
    id: 'emoji-story',
    title: 'Write a Story from This Emoji',
    description: 'Let your imagination run wild and write a story based on a single emoji prompt.',
    ageGroups: ['9-10', '11-12', '13-14', '15-16'],
    imageId: 'challenge-emoji-story',
    isSpecialChallenge: true,
    isCurrent: true,
  },
  {
    id: 'finish-picture-weekly',
    title: 'Finish the Picture Challenge',
    description: 'We provide a starting sketch, you finish the masterpiece!',
    ageGroups: ['2-4', '5-6', '7-8'],
    imageId: 'challenge-finish-picture',
    isSpecialChallenge: true,
    isCurrent: true,
  },
];

// Combined list for gallery, search, etc.
export const allActivities: Activity[] = [...coreActivities, ...specialChallenges];

// Helper to get eligible activities for a given age group
export function getEligibleActivities(ageGroup: AgeGroup): Activity[] {
  return allActivities.filter(act => act.ageGroups.includes(ageGroup));
}

// ────────────────────────────────────────────────
// Dummy realistic submissions (updated to match new activities)
// ────────────────────────────────────────────────
export const featuredSubmissions: Submission[] = [
  { id: 's1', title: 'The Lost Treasure Map', author: 'Aarav, 9', authorId: 'u1', activityId: 'story-telling', activityTitle: 'Story Telling', imageId: 'sub-story-1', description: 'A pirate adventure in my backyard...', mediaType: 'text', createdAt: 1738000000000 },
  { id: 's2', title: 'Harry Potter Review', author: 'Siya, 11', authorId: 'u2', activityId: 'book-review', activityTitle: 'Book Review', imageId: 'sub-book-1', description: 'I loved the magic and friendship!', mediaType: 'text', createdAt: 1737800000000 },
  { id: 's3', title: 'My Dream House', author: 'Vihaan, 6', authorId: 'u3', activityId: 'drawing', activityTitle: 'Drawing', imageId: 'sub-draw-1', description: 'A house with rainbow roof and flying car.', mediaType: 'image', createdAt: 1737900000000 },
  { id: 's4', title: 'Lego Spaceship', author: 'Diya, 10', authorId: 'u4', activityId: 'model-photos', activityTitle: 'Model Photos', imageId: 'sub-model-1', description: 'My spaceship model from 500 Lego pieces.', mediaType: 'image', createdAt: 1738100000000 },
  { id: 's5', title: 'Paper Flower Bouquet', author: 'Arjun, 8', authorId: 'u5', activityId: 'craft', activityTitle: 'Craft', imageId: 'sub-craft-1', description: 'Made from recycled paper and sticks.', mediaType: 'image', createdAt: 1737950000000 },
  { id: 's6', title: 'Happy Birthday Song', author: 'Riya, 7', authorId: 'u6', activityId: 'singing', activityTitle: 'Singing', imageId: 'sub-audio-1', description: 'My own version for my little brother.', mediaType: 'audio', createdAt: 1738200000000 },
  { id: 's7', title: 'Rain Dance', author: 'Kian, 9', authorId: 'u7', activityId: 'dancing', activityTitle: 'Dancing', imageId: 'sub-video-1', description: 'Dance moves inspired by raindrops.', mediaType: 'video', createdAt: 1737850000000 },
  { id: 's8', title: 'Sudoku Master', author: 'Anika, 11', authorId: 'u8', activityId: 'math-puzzles', activityTitle: 'Math Puzzles Solving', imageId: 'sub-math-1', description: 'I solved a hard 9x9 Sudoku in 10 minutes!', mediaType: 'image', createdAt: 1738050000000 },
  { id: 's9', title: 'Volcano Magic', author: 'Reyansh, 10', authorId: 'u9', activityId: 'science-experiments', activityTitle: 'Science Experiments', imageId: 'sub-science-1', description: 'Baking soda + vinegar eruption!', mediaType: 'image', createdAt: 1738150000000 },
  { id: 's10', title: 'Flying Backpack Idea', author: 'Mira, 13', authorId: 'u10', activityId: 'new-idea', activityTitle: 'New Idea Telling', imageId: 'sub-idea-1', description: 'A backpack with mini propellers to fly short distances.', mediaType: 'text', createdAt: 1738250000000 },
];



// At the bottom of constants.ts
export function isValidAgeGroup(age: string | null | undefined): age is AgeGroup {
  return !!age && ageGroupData.some(g => g.age === age);
}