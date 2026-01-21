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
// export const featuredSubmissions: Submission[] = [
//   { id: 's1', title: 'The Lost Treasure Map', author: 'Aarav, 9', authorId: 'u1', activityId: 'story-telling', activityTitle: 'Story Telling', imageId: 'sub-story-1', description: 'A pirate adventure in my backyard...', mediaType: 'text', createdAt: 1738000000000 },
//   { id: 's2', title: 'Harry Potter Review', author: 'Siya, 11', authorId: 'u2', activityId: 'book-review', activityTitle: 'Book Review', imageId: 'sub-book-1', description: 'I loved the magic and friendship!', mediaType: 'text', createdAt: 1737800000000 },
//   { id: 's3', title: 'My Dream House', author: 'Vihaan, 6', authorId: 'u3', activityId: 'drawing', activityTitle: 'Drawing', imageId: 'sub-draw-1', description: 'A house with rainbow roof and flying car.', mediaType: 'image', createdAt: 1737900000000 },
//   { id: 's4', title: 'Lego Spaceship', author: 'Diya, 10', authorId: 'u4', activityId: 'model-photos', activityTitle: 'Model Photos', imageId: 'sub-model-1', description: 'My spaceship model from 500 Lego pieces.', mediaType: 'image', createdAt: 1738100000000 },
//   { id: 's5', title: 'Paper Flower Bouquet', author: 'Arjun, 8', authorId: 'u5', activityId: 'craft', activityTitle: 'Craft', imageId: 'sub-craft-1', description: 'Made from recycled paper and sticks.', mediaType: 'image', createdAt: 1737950000000 },
//   { id: 's6', title: 'Happy Birthday Song', author: 'Riya, 7', authorId: 'u6', activityId: 'singing', activityTitle: 'Singing', imageId: 'sub-audio-1', description: 'My own version for my little brother.', mediaType: 'audio', createdAt: 1738200000000 },
//   { id: 's7', title: 'Rain Dance', author: 'Kian, 9', authorId: 'u7', activityId: 'dancing', activityTitle: 'Dancing', imageId: 'sub-video-1', description: 'Dance moves inspired by raindrops.', mediaType: 'video', createdAt: 1737850000000 },
//   { id: 's8', title: 'Sudoku Master', author: 'Anika, 11', authorId: 'u8', activityId: 'math-puzzles', activityTitle: 'Math Puzzles Solving', imageId: 'sub-math-1', description: 'I solved a hard 9x9 Sudoku in 10 minutes!', mediaType: 'image', createdAt: 1738050000000 },
//   { id: 's9', title: 'Volcano Magic', author: 'Reyansh, 10', authorId: 'u9', activityId: 'science-experiments', activityTitle: 'Science Experiments', imageId: 'sub-science-1', description: 'Baking soda + vinegar eruption!', mediaType: 'image', createdAt: 1738150000000 },
//   { id: 's10', title: 'Flying Backpack Idea', author: 'Mira, 13', authorId: 'u10', activityId: 'new-idea', activityTitle: 'New Idea Telling', imageId: 'sub-idea-1', description: 'A backpack with mini propellers to fly short distances.', mediaType: 'text', createdAt: 1738250000000 },
// ];




export const featuredSubmissions: Submission[] = [
  { 
    id: 's1', 
    title: 'The Lost Treasure Map', 
    author: 'Aarav, 9', 
    authorId: 'u1', 
    activityId: 'story-telling', 
    activityTitle: 'Story Telling', 
    imageId: 'sub-story-1', 
    description: 'A thrilling pirate adventure that takes place in my own backyard! Join Captain Redbeard as he searches for the legendary golden compass hidden somewhere near the old oak tree. Along the way, he meets friendly squirrels who offer clues, avoids the neighbor\'s grumpy cat Mr. Whiskers, and discovers that the real treasure was the adventure itself. This story taught me that imagination can turn any ordinary place into something extraordinary and magical!', 
    mediaType: 'text', 
    createdAt: 1738000000000,
    likes: 127,
    views: 543,
    tags: ['Adventure', 'Pirates', 'Imagination', 'Backyard Fun'],
    difficulty: 'Easy',
    ageGroup: '7-10 years'
  },
  { 
    id: 's2', 
    title: 'Harry Potter Review', 
    author: 'Siya, 11', 
    authorId: 'u2', 
    activityId: 'book-review', 
    activityTitle: 'Book Review', 
    imageId: 'sub-book-1', 
    description: 'Harry Potter and the Philosopher\'s Stone is an absolutely amazing book that transported me to a magical world full of wonder! I loved how Harry, Ron, and Hermione became best friends despite their differences and challenges. The story teaches us important lessons about bravery, loyalty, and standing up for what\'s right even when it\'s scary. My favorite part was when they worked together as a team to stop Voldemort and save the stone. This book made me believe that true friendship and courage can overcome any challenge!', 
    mediaType: 'text', 
    createdAt: 1737800000000,
    likes: 215,
    views: 892,
    tags: ['Book Review', 'Fantasy', 'Friendship', 'Magic'],
    difficulty: 'Medium',
    ageGroup: '9-12 years'
  },
  { 
    id: 's3', 
    title: 'My Dream House', 
    author: 'Vihaan, 6', 
    authorId: 'u3', 
    activityId: 'drawing', 
    activityTitle: 'Drawing', 
    imageId: 'sub-draw-1', 
    description: 'I drew my ultimate dream house with a rainbow-colored roof that magically changes colors depending on the weather! It has a special flying car garage high up in the fluffy clouds, a super fun slide that goes from my bedroom all the way down to the kitchen, and a friendly pet dragon named Sparky living in the backyard. There\'s also a chocolate fountain in every single room and a bouncy trampoline floor in the playroom. I used all my favorite colored pencils and crayons to make it super bright, colorful and happy!', 
    mediaType: 'image', 
    createdAt: 1737900000000,
    likes: 189,
    views: 721,
    tags: ['Drawing', 'Creativity', 'Architecture', 'Fantasy'],
    difficulty: 'Easy',
    ageGroup: '5-8 years'
  },
  { 
    id: 's4', 
    title: 'Lego Spaceship', 
    author: 'Diya, 10', 
    authorId: 'u4', 
    activityId: 'model-photos', 
    activityTitle: 'Model Photos', 
    imageId: 'sub-model-1', 
    description: 'I built this incredible spaceship model using over 500 colorful Lego pieces! It took me three whole days to complete, but it was so worth it. The spaceship has working wings that can fold, a cockpit with a mini astronaut pilot, rocket boosters on the back, and even a tiny cargo bay for space supplies. I designed it to look like something that could travel to Mars and beyond. Building with Legos helps me think creatively and solve problems when pieces don\'t fit perfectly!', 
    mediaType: 'image', 
    createdAt: 1738100000000,
    likes: 301,
    views: 1205,
    tags: ['Lego', 'Building', 'Space', 'Engineering'],
    difficulty: 'Hard',
    ageGroup: '9-12 years'
  },
  { 
    id: 's5', 
    title: 'Paper Flower Bouquet', 
    author: 'Arjun, 8', 
    authorId: 'u5', 
    activityId: 'craft', 
    activityTitle: 'Craft', 
    imageId: 'sub-craft-1', 
    description: 'I created this beautiful bouquet of colorful flowers using only recycled paper, wooden sticks, and glue! Each flower has different colored petals - red roses, yellow sunflowers, and pink tulips. I learned how to fold and shape the paper to make the petals look real and three-dimensional. The best part is that these flowers will never wilt or die! I made this special gift for my mom on her birthday, and she loved it so much she put it in a vase on our dining table. Recycling can create such amazing things!', 
    mediaType: 'image', 
    createdAt: 1737950000000,
    likes: 167,
    views: 634,
    tags: ['Crafts', 'Recycling', 'Flowers', 'Eco-Friendly'],
    difficulty: 'Medium',
    ageGroup: '7-10 years'
  },
  { 
    id: 's6', 
    title: 'Happy Birthday Song', 
    author: 'Riya, 7', 
    authorId: 'u6', 
    activityId: 'singing', 
    activityTitle: 'Singing', 
    imageId: 'sub-audio-1', 
    description: 'I wrote and sang my very own special version of Happy Birthday for my little brother\'s fifth birthday party! Instead of the regular words, I added funny lines about his favorite things like dinosaurs, ice cream, and his pet hamster named Fluffy. Everyone at the party laughed and clapped along! I practiced singing it many times to get the tune just right and to not feel shy. Music makes celebrations even more special and memorable. My brother smiled so big when I sang it for him!', 
    mediaType: 'audio', 
    createdAt: 1738200000000,
    duration: '1:45',
    likes: 143,
    views: 456,
    tags: ['Singing', 'Music', 'Birthday', 'Original Song'],
    difficulty: 'Easy',
    ageGroup: '6-9 years'
  },
  { 
    id: 's7', 
    title: 'Rain Dance', 
    author: 'Kian, 9', 
    authorId: 'u7', 
    activityId: 'dancing', 
    activityTitle: 'Dancing', 
    imageId: 'sub-video-1', 
    description: 'I choreographed this special dance routine inspired by the movement and rhythm of falling raindrops! Each move represents something different - the gentle patter of light rain, the splash of puddles, the swaying of trees in the wind, and the joy of playing outside after a storm. I practiced for two weeks to get all the movements smooth and flowing. Dancing makes me feel free and happy, and I love expressing emotions through movement. I performed this at my school\'s talent show and won second place!', 
    mediaType: 'video', 
    createdAt: 1737850000000,
    duration: '3:20',
    likes: 278,
    views: 1034,
    tags: ['Dancing', 'Performance', 'Nature', 'Choreography'],
    difficulty: 'Medium',
    ageGroup: '8-11 years'
  },
  { 
    id: 's8', 
    title: 'Sudoku Master', 
    author: 'Anika, 11', 
    authorId: 'u8', 
    activityId: 'math-puzzles', 
    activityTitle: 'Math Puzzles Solving', 
    imageId: 'sub-math-1', 
    description: 'I successfully solved a really challenging 9x9 Sudoku puzzle in just 10 minutes and 23 seconds! This was one of the hardest difficulty levels, marked as "Expert" in my puzzle book. I used advanced strategies like X-wing technique and hidden pairs to figure out the tricky numbers. Solving puzzles like this helps me improve my logical thinking and concentration skills. Math puzzles are like fun brain workouts! I\'ve been practicing Sudoku every day for three months, and I can really see my improvement in speed and accuracy.', 
    mediaType: 'image', 
    createdAt: 1738050000000,
    likes: 192,
    views: 678,
    tags: ['Math', 'Puzzles', 'Logic', 'Problem Solving'],
    difficulty: 'Hard',
    ageGroup: '10-13 years'
  },
  { 
    id: 's9', 
    title: 'Volcano Magic', 
    author: 'Reyansh, 10', 
    authorId: 'u9', 
    activityId: 'science-experiments', 
    activityTitle: 'Science Experiments', 
    imageId: 'sub-science-1', 
    description: 'I created an amazing erupting volcano experiment using simple household ingredients - baking soda and vinegar! I built the volcano shape using clay and painted it to look realistic with red, orange, and brown colors. When I poured the vinegar into the baking soda, it created a fantastic fizzing eruption that looked just like real lava flowing down! The chemical reaction between the acid and base produces carbon dioxide gas, which creates all the bubbles. Science experiments like this help me understand how the world works in such a fun and exciting way!', 
    mediaType: 'image', 
    createdAt: 1738150000000,
    likes: 334,
    views: 1456,
    tags: ['Science', 'Experiments', 'Chemistry', 'Volcano'],
    difficulty: 'Easy',
    ageGroup: '8-11 years'
  },
  { 
    id: 's10', 
    title: 'Flying Backpack Idea', 
    author: 'Mira, 13', 
    authorId: 'u10', 
    activityId: 'new-idea', 
    activityTitle: 'New Idea Telling', 
    imageId: 'sub-idea-1', 
    description: 'I came up with an innovative idea for a backpack equipped with mini propellers that could help you fly short distances, like crossing a river or reaching high places! It would have safety features like automatic landing sensors and adjustable speed controls. The propellers would fold away when not in use so it looks like a regular backpack. It could be solar-powered to be eco-friendly and would have a weight limit for safety. While this might sound like science fiction, many of today\'s amazing inventions started as simple ideas in someone\'s imagination. Who knows - maybe one day this could be real!', 
    mediaType: 'text', 
    createdAt: 1738250000000,
    likes: 421,
    views: 1823,
    tags: ['Innovation', 'Invention', 'Technology', 'Future'],
    difficulty: 'Medium',
    ageGroup: '11-14 years'
  },
];




// At the bottom of constants.ts
export function isValidAgeGroup(age: string | null | undefined): age is AgeGroup {
  return !!age && ageGroupData.some(g => g.age === age);
}