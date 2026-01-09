import {
    FaChild,
    FaPaintBrush,
    FaMusic,
    FaFlask,
    FaGlobe,
    FaHeart,
    FaBook,
    FaPencilAlt,
    FaRobot,
    FaPalette,
    FaGraduationCap,
    FaMicrophone,
    FaGamepad,
    FaUpload
  } from 'react-icons/fa';
  import { GiBookCover } from 'react-icons/gi';
  import { IoIosColorPalette, IoIosPlanet } from 'react-icons/io';
  
  export const ageGroups = [
      { range: '2-4', name: 'Little Explorers', icon: <FaChild />, color: '#FF9EAA', bgColor: '#FFF0F2' },
      { range: '5-6', name: 'Creative Starters', icon: <FaPencilAlt />, color: '#7BD3EA', bgColor: '#F0FAFF' },
      { range: '7-8', name: 'Junior Thinkers', icon: <FaBook />, color: '#FFD166', bgColor: '#FFF9E6' },
      { range: '9-10', name: 'Curious Minds', icon: <FaRobot />, color: '#83D9B0', bgColor: '#F0FFF5' },
      { range: '11-12', name: 'Young Creators', icon: <FaPalette />, color: '#A78BFA', bgColor: '#F5F3FF' },
      { range: '13-14', name: 'Growing Scholars', icon: <FaGraduationCap />, color: '#FF8E8F', bgColor: '#FFF0F0' },
      { range: '15-16', name: 'Teen Journalists', icon: <FaMicrophone />, color: '#4F46E5', bgColor: '#F0F3FF' }
  ];
  
  export const categories = [
      { id: 'writing', name: 'Story Time', icon: <GiBookCover />, color: '#FF9EAA', bgColor: '#FFF0F2', activities: ['Short Stories', 'Poems', 'Journal Entries', 'Book Reviews'] },
      { id: 'art', name: 'Art Fun', icon: <IoIosColorPalette />, color: '#7BD3EA', bgColor: '#F0FAFF', activities: ['Drawings', 'Comics', 'Crafts', 'Photos'] },
      { id: 'performing', name: 'Show Time', icon: <FaMusic />, color: '#FFD166', bgColor: '#FFF9E6', activities: ['Singing', 'Dancing', 'Theatre', 'Instruments'] },
      { id: 'stem', name: 'Science Fun', icon: <FaFlask />, color: '#83D9B0', bgColor: '#F0FFF5', activities: ['Experiments', 'Puzzles', 'Math Games', 'DIY Projects'] },
      { id: 'culture', name: 'World Explorers', icon: <IoIosPlanet />, color: '#A78BFA', bgColor: '#F5F3FF', activities: ['Festivals', 'Languages', 'Traditions', 'Stories'] },
      { id: 'kindness', name: 'Kindness Club', icon: <FaHeart />, color: '#FF8E8F', bgColor: '#FFF0F0', activities: ['Kind Acts', 'Helping Others', 'Sharing Stories'] }
  ];
  
  export const resources = [
      {
          title: "Kitchen Science",
          description: "Try safe kitchen experiments like lemon volcanoes and rainbow milk.",
          icon: <FaFlask />,
          color: "var(--soft-green)"
      },
      {
          title: "Memory Map",
          description: "Draw a map of your favorite memory with emotions and events.",
          icon: <FaPalette />,
          color: "var(--soft-pink)"
      },
      {
          title: "Emoji Stories",
          description: "Create a story using only emojis! Can others guess it?",
          icon: <FaGamepad />,
          color: "var(--soft-yellow)"
      },
      {
          title: "Finish the Picture",
          description: "We give you half a drawing - you complete it!",
          icon: <FaPencilAlt />,
          color: "var(--soft-blue)"
      }
  ];
  
  export const submissionSteps = [
      {
          number: "1",
          title: "Pick Activity",
          description: "Choose what you want to create",
          icon: <FaBook />,
          color: "var(--soft-pink)"
      },
      {
          number: "2",
          title: "Create Something",
          description: "Use your imagination and make something amazing",
          icon: <FaPaintBrush />,
          color: "var(--soft-blue)"
      },
      {
          number: "3",
          title: "Share & Shine",
          description: "Upload your work and get featured",
          icon: <FaUpload />,
          color: "var(--soft-yellow)"
      }
  ];
  
