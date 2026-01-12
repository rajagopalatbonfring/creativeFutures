// 'use client';

// import React, { useState, useEffect, useRef } from 'react';

// // ── Animated Fish Icon ──────────────────────────────────────────────────
// interface FishIconProps extends React.SVGProps<SVGSVGElement> {
//   className?: string;
//   bodyColor?: string;
//   animationDuration?: number;
// }

// const FishIcon: React.FC<FishIconProps> = ({
//   className,
//   bodyColor = '#ffb7f5',
//   animationDuration = 2800,
//   ...props
// }) => {
//   const [frame, setFrame] = useState(0);

//   useEffect(() => {
//     const startTime = Date.now();

//     const animate = () => {
//       const elapsed = Date.now() - startTime;
//       const progress = (elapsed % animationDuration) / animationDuration;
//       setFrame(progress);
//       requestAnimationFrame(animate);
//     };

//     const id = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(id);
//   }, [animationDuration]);

//   const easeInOutSine = (x: number) => -(Math.cos(Math.PI * x) - 1) / 2;

//   const interpolate = (keyframes: [number, number, number][], p: number) => {
//     if (p <= 0) return keyframes[0][2];
//     if (p >= 1) return keyframes.at(-1)![2];

//     for (let i = 0; i < keyframes.length - 1; i++) {
//       const [t1, , v1] = keyframes[i];
//       const [t2, , v2] = keyframes[i + 1];
//       if (p >= t1 && p <= t2) {
//         const t = (p - t1) / (t2 - t1);
//         return v1 + (v2 - v1) * easeInOutSine(t);
//       }
//     }
//     return keyframes.at(-1)![2];
//   };

//   const topY = interpolate([[0, 0, 2.0], [0.15, 0.4, 0.8], [0.35, 0.4, 1.2], [0.5, 1, 2.0], [0.65, 0, 2.8], [0.85, 0, 1.6], [1, 0, 2.0]], frame);
//   const bottomY = interpolate([[0, 0, 13.6], [0.15, 0, 14.8], [0.35, 0, 14.4], [0.5, 0, 13.6], [0.65, 0, 12.4], [0.85, 0, 14.0], [1, 0, 13.6]], frame);
//   const midControlY = interpolate([[0, 0, 0.337], [0.15, 0, -0.2], [0.35, 0, 0.0], [0.5, 0, 0.337], [0.65, 0, 0.7], [0.85, 0, 0.2], [1, 0, 0.337]], frame);
//   const midControlY2 = interpolate([[0, 0, 5.095], [0.15, 0, 5.6], [0.35, 0, 5.4], [0.5, 0, 5.095], [0.65, 0, 4.7], [0.85, 0, 5.3], [1, 0, 5.095]], frame);
//   const topCurveY1 = interpolate([[0, 0, 1.461], [0.15, 0, 0.5], [0.35, 0, 0.8], [0.5, 0, 1.461], [0.65, 0, 2.0], [0.85, 0, 1.1], [1, 0, 1.461]], frame);
//   const topCurveY2 = interpolate([[0, 0, 0.654], [0.15, 0, 0.0], [0.35, 0, 0.2], [0.5, 0, 0.654], [0.65, 0, 1.1], [0.85, 0, 0.4], [1, 0, 0.654]], frame);
//   const topCurveY3 = interpolate([[0, 0, 0.2], [0.15, 0, -0.4], [0.35, 0, -0.2], [0.5, 0, 0.2], [0.65, 0, 0.7], [0.85, 0, 0.0], [1, 0, 0.2]], frame);
//   const topCurveY4 = interpolate([[0, 0, -0.259], [0.15, 0, -0.8], [0.35, 0, -0.6], [0.5, 0, -0.259], [0.65, 0, 0.2], [0.85, 0, -0.4], [1, 0, -0.259]], frame);
//   const bottomCurveY1 = interpolate([[0, 0, 14.312], [0.15, 0, 15.2], [0.35, 0, 14.9], [0.5, 0, 14.312], [0.65, 0, 13.4], [0.85, 0, 14.7], [1, 0, 14.312]], frame);
//   const bottomCurveY2 = interpolate([[0, 0, 14.008], [0.15, 0, 14.9], [0.35, 0, 14.6], [0.5, 0, 14.008], [0.65, 0, 13.1], [0.85, 0, 14.4], [1, 0, 14.008]], frame);
//   const bottomCurveY3 = interpolate([[0, 0, 13.803], [0.15, 0, 14.7], [0.35, 0, 14.4], [0.5, 0, 13.803], [0.65, 0, 12.9], [0.85, 0, 14.2], [1, 0, 13.803]], frame);
//   const bottomCurveY4 = interpolate([[0, 0, 13.344], [0.15, 0, 14.3], [0.35, 0, 14.0], [0.5, 0, 13.344], [0.65, 0, 12.4], [0.85, 0, 13.8], [1, 0, 13.344]], frame);
//   const bottomCurveY5 = interpolate([[0, 0, 12.543], [0.15, 0, 13.6], [0.35, 0, 13.2], [0.5, 0, 12.543], [0.65, 0, 11.5], [0.85, 0, 13.0], [1, 0, 12.543]], frame);
//   const bottomCurveY6 = interpolate([[0, 0, 12.009], [0.15, 0, 13.1], [0.35, 0, 12.7], [0.5, 0, 12.009], [0.65, 0, 11.0], [0.85, 0, 12.5], [1, 0, 12.009]], frame);

//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 39 22"
//       className={className}
//       preserveAspectRatio="xMidYMid meet"
//       style={{ width: '100%', height: '100%' }}
//       {...props}
//     >
//       <defs>
//         <clipPath id={`fish-clip-${Math.random()}`}>
//           <rect width="39" height="22" x="0" y="0" />
//         </clipPath>
//       </defs>
//       <g clipPath={`url(#fish-clip-${Math.random()})`}>
//         <g transform="matrix(-1, 0, 0, -1, 34.2890625, 17.96875)">
//           <path
//             fill={bodyColor}
//             d={`M25.817,7.014 C25.817,7.014 29.927,${topY} 29.927,${topY} C30.379,${topCurveY1} 30.317,${topCurveY2} 29.791,${topCurveY3} C29.260,${topCurveY4} 28.469,-0.197 28.011,${midControlY} C28.011,${midControlY} 24.117,${midControlY2} 24.117,${midControlY2} C20.953,1.898 16.947,0.147 12.707,0.147 C8.009,0.147 3.602,2.289 0.301,6.182 C-0.100,6.660 -0.100,7.362 0.301,7.840 C3.602,11.727 8.009,13.876 12.707,13.876 C16.947,13.876 20.953,12.131 24.117,8.927 C24.117,8.927 28.025,${bottomY} 28.025,${bottomY} C28.594,${bottomCurveY1} 29.564,${bottomCurveY2} 29.805,${bottomCurveY3} C30.337,${bottomCurveY4} 30.399,${bottomCurveY5} 29.941,${bottomCurveY6} C29.941,${bottomCurveY6} 25.817,7.014 25.817,7.014z`}
//           />
//         </g>
//       </g>
//     </svg>
//   );
// };

// // ── Section Fish Props ──────────────────────────────────────────────────
// interface SectionFishProps {
//   colorScheme?: string[];
// }

// export function SectionFish({ 
//   colorScheme = ['#ffb7f5', '#ff9bf5', '#ff69b4', '#db7093', '#c71585', '#ff1493']
// }: SectionFishProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const fishRefs = useRef<(HTMLDivElement | null)[]>([]);

//   // Create fish groups - max 7 fish per group, with varied sizes
//   const [fishGroups] = useState(() => {
//     const groups = [];
//     const totalGroups = Math.floor(Math.random() * 2) + 2; // 2-3 groups per section
    
//     for (let g = 0; g < totalGroups; g++) {
//       const groupSize = Math.floor(Math.random() * 4) + 4; // 4-7 fish per group
//       const groupDirection = Math.random() > 0.5 ? 'right' : 'left';
//       const groupY = 20 + (g * 30) + Math.random() * 10; // Distribute groups vertically
//       const groupDelay = g * 8; // Stagger group start times
      
//       const group = Array.from({ length: groupSize }, (_, i) => ({
//         id: `g${g}-f${i}`,
//         groupId: g,
//         groupDirection,
//         groupY,
//         groupDelay,
//         size: Math.random() * 0.8 + 0.5, // 0.5x to 1.3x - mix of small and big
//         speed: 0.6 + Math.random() * 0.3, // Slightly varied speeds within group
//         color: colorScheme[Math.floor(Math.random() * colorScheme.length)],
//         offsetX: (i % 3) * 60 + Math.random() * 30, // Horizontal offset in formation
//         offsetY: Math.floor(i / 3) * 40 + Math.random() * 20, // Vertical offset in formation
//         delay: Math.random() * 2, // Small individual delay within group
//       }));
      
//       groups.push(...group);
//     }
    
//     return groups;
//   });

//   useEffect(() => {
//     const animateFish = (fish: any, element: HTMLDivElement) => {
//       const containerWidth = containerRef.current?.offsetWidth ?? 1200;
      
//       // Schooling animation - groups swim together left to right or right to left
//       const groupDirection = fish.groupDirection;
//       const startX = groupDirection === 'right' ? -150 : containerWidth + 150;
//       const endX = groupDirection === 'right' ? containerWidth + 150 : -150;
//       const baseDuration = 50000 / fish.speed; // Slower swimming (50 seconds base)
      
//       let startTime: number | null = null;

//       const tick = (timestamp: number) => {
//         if (!startTime) startTime = timestamp - (fish.groupDelay + fish.delay) * 1000;
//         const elapsed = timestamp - startTime;
//         const progress = (elapsed % baseDuration) / baseDuration;
        
//         // Calculate position with group formation
//         const baseX = startX + (endX - startX) * progress;
//         const x = baseX + fish.offsetX;
        
//         // Add gentle wave motion for natural swimming
//         const waveY = Math.sin(progress * Math.PI * 5 + fish.id.charCodeAt(2)) * 8;
//         const y = fish.offsetY + waveY;
        
//         element.style.transform = `translate(${x}px, ${y}px) scale(${fish.size}) scaleX(${groupDirection === 'left' ? -1 : 1})`;
        
//         requestAnimationFrame(tick);
//       };
      
//       requestAnimationFrame(tick);
//     };

//     fishRefs.current.forEach((el, i) => el && animateFish(fishGroups[i], el));
//   }, [fishGroups]);

//   return (
//     <div
//       ref={containerRef}
//       className="absolute inset-0 pointer-events-none overflow-hidden"
//       style={{ 
//         clipPath: 'inset(0)' // Keep fish contained within section bounds
//       }}
//     >
//       {fishGroups.map((fish, i) => (
//         <div
//           key={fish.id}
//           ref={(el) => {fishRefs.current[i] = el}}
//           style={{
//             position: 'absolute',
//             top: `${fish.groupY}%`,
//             left: 0,
//             width: '48px',
//             height: '30px',
//             willChange: 'transform',
//             opacity: 0.4 + Math.random() * 0.3,
//           }}
//         >
//           <FishIcon 
//             bodyColor={fish.color} 
//             animationDuration={2200 + fish.speed * 600} 
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default SectionFish;









































// 'use client';

// import React, { useState, useEffect, useRef } from 'react';

// // ── Animated Fish Icon ──────────────────────────────────────────────────
// interface FishIconProps extends React.SVGProps<SVGSVGElement> {
//   className?: string;
//   bodyColor?: string;
//   animationDuration?: number;
// }

// const FishIcon: React.FC<FishIconProps> = ({
//   className,
//   bodyColor = '#ffb7f5',
//   animationDuration = 2800,
//   ...props
// }) => {
//   const [frame, setFrame] = useState(0);

//   useEffect(() => {
//     const startTime = Date.now();

//     const animate = () => {
//       const elapsed = Date.now() - startTime;
//       const progress = (elapsed % animationDuration) / animationDuration;
//       setFrame(progress);
//       requestAnimationFrame(animate);
//     };

//     const id = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(id);
//   }, [animationDuration]);

//   const easeInOutSine = (x: number) => -(Math.cos(Math.PI * x) - 1) / 2;

//   const interpolate = (keyframes: [number, number, number][], p: number) => {
//     if (p <= 0) return keyframes[0][2];
//     if (p >= 1) return keyframes.at(-1)![2];

//     for (let i = 0; i < keyframes.length - 1; i++) {
//       const [t1, , v1] = keyframes[i];
//       const [t2, , v2] = keyframes[i + 1];
//       if (p >= t1 && p <= t2) {
//         const t = (p - t1) / (t2 - t1);
//         return v1 + (v2 - v1) * easeInOutSine(t);
//       }
//     }
//     return keyframes.at(-1)![2];
//   };

//   const topY = interpolate([[0, 0, 2.0], [0.15, 0.4, 0.8], [0.35, 0.4, 1.2], [0.5, 1, 2.0], [0.65, 0, 2.8], [0.85, 0, 1.6], [1, 0, 2.0]], frame);
//   const bottomY = interpolate([[0, 0, 13.6], [0.15, 0, 14.8], [0.35, 0, 14.4], [0.5, 0, 13.6], [0.65, 0, 12.4], [0.85, 0, 14.0], [1, 0, 13.6]], frame);
//   const midControlY = interpolate([[0, 0, 0.337], [0.15, 0, -0.2], [0.35, 0, 0.0], [0.5, 0, 0.337], [0.65, 0, 0.7], [0.85, 0, 0.2], [1, 0, 0.337]], frame);
//   const midControlY2 = interpolate([[0, 0, 5.095], [0.15, 0, 5.6], [0.35, 0, 5.4], [0.5, 0, 5.095], [0.65, 0, 4.7], [0.85, 0, 5.3], [1, 0, 5.095]], frame);
//   const topCurveY1 = interpolate([[0, 0, 1.461], [0.15, 0, 0.5], [0.35, 0, 0.8], [0.5, 0, 1.461], [0.65, 0, 2.0], [0.85, 0, 1.1], [1, 0, 1.461]], frame);
//   const topCurveY2 = interpolate([[0, 0, 0.654], [0.15, 0, 0.0], [0.35, 0, 0.2], [0.5, 0, 0.654], [0.65, 0, 1.1], [0.85, 0, 0.4], [1, 0, 0.654]], frame);
//   const topCurveY3 = interpolate([[0, 0, 0.2], [0.15, 0, -0.4], [0.35, 0, -0.2], [0.5, 0, 0.2], [0.65, 0, 0.7], [0.85, 0, 0.0], [1, 0, 0.2]], frame);
//   const topCurveY4 = interpolate([[0, 0, -0.259], [0.15, 0, -0.8], [0.35, 0, -0.6], [0.5, 0, -0.259], [0.65, 0, 0.2], [0.85, 0, -0.4], [1, 0, -0.259]], frame);
//   const bottomCurveY1 = interpolate([[0, 0, 14.312], [0.15, 0, 15.2], [0.35, 0, 14.9], [0.5, 0, 14.312], [0.65, 0, 13.4], [0.85, 0, 14.7], [1, 0, 14.312]], frame);
//   const bottomCurveY2 = interpolate([[0, 0, 14.008], [0.15, 0, 14.9], [0.35, 0, 14.6], [0.5, 0, 14.008], [0.65, 0, 13.1], [0.85, 0, 14.4], [1, 0, 14.008]], frame);
//   const bottomCurveY3 = interpolate([[0, 0, 13.803], [0.15, 0, 14.7], [0.35, 0, 14.4], [0.5, 0, 13.803], [0.65, 0, 12.9], [0.85, 0, 14.2], [1, 0, 13.803]], frame);
//   const bottomCurveY4 = interpolate([[0, 0, 13.344], [0.15, 0, 14.3], [0.35, 0, 14.0], [0.5, 0, 13.344], [0.65, 0, 12.4], [0.85, 0, 13.8], [1, 0, 13.344]], frame);
//   const bottomCurveY5 = interpolate([[0, 0, 12.543], [0.15, 0, 13.6], [0.35, 0, 13.2], [0.5, 0, 12.543], [0.65, 0, 11.5], [0.85, 0, 13.0], [1, 0, 12.543]], frame);
//   const bottomCurveY6 = interpolate([[0, 0, 12.009], [0.15, 0, 13.1], [0.35, 0, 12.7], [0.5, 0, 12.009], [0.65, 0, 11.0], [0.85, 0, 12.5], [1, 0, 12.009]], frame);

//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 39 22"
//       className={className}
//       preserveAspectRatio="xMidYMid meet"
//       style={{ width: '100%', height: '100%' }}
//       {...props}
//     >
//       <defs>
//         <clipPath id={`fish-clip-${Math.random()}`}>
//           <rect width="39" height="22" x="0" y="0" />
//         </clipPath>
//       </defs>
//       <g clipPath={`url(#fish-clip-${Math.random()})`}>
//         <g transform="matrix(-1, 0, 0, -1, 34.2890625, 17.96875)">
//           <path
//             fill={bodyColor}
//             d={`M25.817,7.014 C25.817,7.014 29.927,${topY} 29.927,${topY} C30.379,${topCurveY1} 30.317,${topCurveY2} 29.791,${topCurveY3} C29.260,${topCurveY4} 28.469,-0.197 28.011,${midControlY} C28.011,${midControlY} 24.117,${midControlY2} 24.117,${midControlY2} C20.953,1.898 16.947,0.147 12.707,0.147 C8.009,0.147 3.602,2.289 0.301,6.182 C-0.100,6.660 -0.100,7.362 0.301,7.840 C3.602,11.727 8.009,13.876 12.707,13.876 C16.947,13.876 20.953,12.131 24.117,8.927 C24.117,8.927 28.025,${bottomY} 28.025,${bottomY} C28.594,${bottomCurveY1} 29.564,${bottomCurveY2} 29.805,${bottomCurveY3} C30.337,${bottomCurveY4} 30.399,${bottomCurveY5} 29.941,${bottomCurveY6} C29.941,${bottomCurveY6} 25.817,7.014 25.817,7.014z`}
//           />
//         </g>
//       </g>
//     </svg>
//   );
// };

// // ── Section Fish Props ──────────────────────────────────────────────────
// interface SectionFishProps {
//   colorScheme?: string[];
// }

// export function SectionFish({ 
//   colorScheme = ['#ffb7f5', '#ff9bf5', '#ff69b4', '#db7093', '#c71585', '#ff1493']
// }: SectionFishProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const fishRefs = useRef<(HTMLDivElement | null)[]>([]);

//   // Create ONE fish group per section - all same direction
//   const [fishGroup] = useState(() => {
//     const groupSize = 7; // Always 7 fish per group
//     const groupDirection = Math.random() > 0.5 ? 'right' : 'left';
//     const baseY = 45; // Center of section
    
//     return Array.from({ length: groupSize }, (_, i) => ({
//       id: `fish-${i}`,
//       groupDirection,
//       size: i === 0 ? 1.3 : (Math.random() * 0.6 + 0.6), // Leader is biggest
//       speed: 0.7,
//       color: colorScheme[i % colorScheme.length],
//       // Formation: triangular school pattern
//       offsetX: i === 0 ? 0 : ((i % 2 === 0 ? 1 : -1) * Math.ceil(i / 2) * 70),
//       offsetY: i === 0 ? 0 : (Math.ceil(i / 2) * 35),
//       delay: i * 0.3, // Small delay for wave effect
//     }));
//   });

//   useEffect(() => {
//     const animateFish = (fish: any, element: HTMLDivElement) => {
//       const containerWidth = containerRef.current?.offsetWidth ?? 1200;
      
//       // ONE group swimming together in same direction
//       const groupDirection = fish.groupDirection;
//       const startX = groupDirection === 'right' ? -200 : containerWidth + 200;
//       const endX = groupDirection === 'right' ? containerWidth + 200 : -200;
//       const baseDuration = 45000; // 45 seconds to cross (slower)
      
//       let startTime: number | null = null;

//       const tick = (timestamp: number) => {
//         if (!startTime) startTime = timestamp - fish.delay * 1000;
//         const elapsed = timestamp - startTime;
//         const progress = (elapsed % baseDuration) / baseDuration;
        
//         // All fish move together as one group
//         const baseX = startX + (endX - startX) * progress;
//         const x = baseX + fish.offsetX;
        
//         // Gentle synchronized wave motion
//         const waveY = Math.sin(progress * Math.PI * 4 + fish.id.charCodeAt(5) * 0.5) * 6;
//         const y = fish.offsetY + waveY;
        
//         element.style.transform = `translate(${x}px, ${y}px) scale(${fish.size}) scaleX(${groupDirection === 'left' ? -1 : 1})`;
        
//         requestAnimationFrame(tick);
//       };
      
//       requestAnimationFrame(tick);
//     };

//     fishRefs.current.forEach((el, i) => el && animateFish(fishGroup[i], el));
//   }, [fishGroup]);

//   return (
//     <div
//       ref={containerRef}
//       className="absolute inset-0 pointer-events-none overflow-hidden"
//     >
//       {fishGroup.map((fish, i) => (
//         <div
//           key={fish.id}
//           ref={(el) => {fishRefs.current[i] = el}}
//           style={{
//             position: 'absolute',
//             top: '45%',
//             left: 0,
//             width: '48px',
//             height: '30px',
//             willChange: 'transform',
//             opacity: 0.5 + Math.random() * 0.2,
//           }}
//         >
//           <FishIcon 
//             bodyColor={fish.color} 
//             animationDuration={2400 + fish.size * 400} 
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default SectionFish;
















'use client';

import React, { useState, useEffect, useRef } from 'react';

// ── Animated Fish Icon ──────────────────────────────────────────────────
interface FishIconProps {
  className?: string;
  tailColor?: string;
  bodyColor?: string;
  animationDuration?: number;
}

const FishIcon: React.FC<FishIconProps> = ({
  className,
  tailColor = "#ffb7f5",
  bodyColor = "#ffb7f5",
  animationDuration = 3000,
}) => {
  const [frame, setFrame] = useState(0);
  
  useEffect(() => {
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % animationDuration) / animationDuration;
      setFrame(progress);
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [animationDuration]);

  const easeInOutSine = (x: number): number => {
    return -(Math.cos(Math.PI * x) - 1) / 2;
  };

  const interpolate = (keyframes: [number, number, number][], progress: number) => {
    if (progress <= 0) return keyframes[0][2];
    if (progress >= 1) return keyframes[keyframes.length - 1][2];
    
    for (let i = 0; i < keyframes.length - 1; i++) {
      const [t1, , v1] = keyframes[i];
      const [t2, , v2] = keyframes[i + 1];
      
      if (progress >= t1 && progress <= t2) {
        const segmentProgress = (progress - t1) / (t2 - t1);
        const easedProgress = easeInOutSine(segmentProgress);
        return v1 + (v2 - v1) * easedProgress;
      }
    }
    return keyframes[keyframes.length - 1][2];
  };

  const topY = interpolate([
    [0, 0, 2.0],
    [0.23, 0.4, 1.6],
    [0.5, 1, 2.0],
    [0.75, 0, 1.2],
    [1, 0, 2.0]
  ], frame);

  const bottomY = interpolate([
    [0, 0, 13.6],
    [0.25, 0, 14.2],
    [0.5, 0, 13.6],
    [0.75, 0, 14.2],
    [1, 0, 13.6]
  ], frame);

  const midControlY = interpolate([
    [0, 0, 0.337],
    [0.25, 0, 0.1],
    [0.5, 0, 0.337],
    [0.75, 0, 0.1],
    [1, 0, 0.337]
  ], frame);

  const midControlY2 = interpolate([
    [0, 0, 5.095],
    [0.25, 0, 5.4],
    [0.5, 0, 5.095],
    [0.75, 0, 5.4],
    [1, 0, 5.095]
  ], frame);

  const topCurveY1 = interpolate([
    [0, 0, 1.461],
    [0.25, 0, 0.9],
    [0.5, 0, 1.461],
    [0.75, 0, 0.9],
    [1, 0, 1.461]
  ], frame);

  const topCurveY2 = interpolate([
    [0, 0, 0.654],
    [0.25, 0, 0.3],
    [0.5, 0, 0.654],
    [0.75, 0, 0.3],
    [1, 0, 0.654]
  ], frame);

  const topCurveY3 = interpolate([
    [0, 0, 0.200],
    [0.25, 0, -0.1],
    [0.5, 0, 0.200],
    [0.75, 0, -0.1],
    [1, 0, 0.200]
  ], frame);

  const topCurveY4 = interpolate([
    [0, 0, -0.259],
    [0.25, 0, -0.5],
    [0.5, 0, -0.259],
    [0.75, 0, -0.5],
    [1, 0, -0.259]
  ], frame);

  const bottomCurveY1 = interpolate([
    [0, 0, 14.312],
    [0.25, 0, 14.8],
    [0.5, 0, 14.312],
    [0.75, 0, 14.8],
    [1, 0, 14.312]
  ], frame);

  const bottomCurveY2 = interpolate([
    [0, 0, 14.008],
    [0.25, 0, 14.5],
    [0.5, 0, 14.008],
    [0.75, 0, 14.5],
    [1, 0, 14.008]
  ], frame);

  const bottomCurveY3 = interpolate([
    [0, 0, 13.803],
    [0.25, 0, 14.3],
    [0.5, 0, 13.803],
    [0.75, 0, 14.3],
    [1, 0, 13.803]
  ], frame);

  const bottomCurveY4 = interpolate([
    [0, 0, 13.344],
    [0.25, 0, 13.9],
    [0.5, 0, 13.344],
    [0.75, 0, 13.9],
    [1, 0, 13.344]
  ], frame);

  const bottomCurveY5 = interpolate([
    [0, 0, 12.543],
    [0.25, 0, 13.2],
    [0.5, 0, 12.543],
    [0.75, 0, 13.2],
    [1, 0, 12.543]
  ], frame);

  const bottomCurveY6 = interpolate([
    [0, 0, 12.009],
    [0.25, 0, 12.6],
    [0.5, 0, 12.009],
    [0.75, 0, 12.6],
    [1, 0, 12.009]
  ], frame);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 39 22"
      width={39}
      height={22}
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={{
        width: "100%",
        height: "100%",
        transform: "translate3d(0px, 0px, 0px)",
        contentVisibility: "visible",
      }}
    >
      <defs>
        <clipPath id="fish-clip">
          <rect width="39" height="22" x="0" y="0" />
        </clipPath>
      </defs>

      <g clipPath="url(#fish-clip)">
        <g transform="matrix(-1, 0, 0, -1, 34.2890625, 17.96875)">
          <path
            fill={bodyColor}
            fillOpacity="1"
            d={`
              M25.817,7.014
              C25.817,7.014 29.927,${topY} 29.927,${topY}
              C30.379,${topCurveY1} 30.317,${topCurveY2} 29.791,${topCurveY3}
              C29.260,${topCurveY4} 28.469,-0.197 28.011,${midControlY}
              C28.011,${midControlY} 24.117,${midControlY2} 24.117,${midControlY2}
              C20.953,1.898 16.947,0.147 12.707,0.147
              C8.009,0.147 3.602,2.289 0.301,6.182
              C-0.100,6.660 -0.100,7.362 0.301,7.840
              C3.602,11.727 8.009,13.876 12.707,13.876
              C16.947,13.876 20.953,12.131 24.117,8.927
              C24.117,8.927 28.025,${bottomY} 28.025,${bottomY}
              C28.594,${bottomCurveY1} 29.564,${bottomCurveY2} 29.805,${bottomCurveY3}
              C30.337,${bottomCurveY4} 30.399,${bottomCurveY5} 29.941,${bottomCurveY6}
              C29.941,${bottomCurveY6} 25.817,7.014 25.817,7.014
              C25.817,7.014 25.817,7.014 25.817,7.014z
            `}
          />
        </g>
      </g>
    </svg>
  );
};

// ── Section Fish Component ──────────────────────────────────────────────────
interface SectionFishProps {
  colorScheme?: string[];
  position?: 'top' | 'bottom';
  direction?: 'left-to-right' | 'right-to-left';
}

export default function SectionFish({
  colorScheme = ['#ffb7f5', '#ff9bf5', '#ff69b4', '#db7093', '#c71585', '#ff1493'],
  position = 'top',
  direction
}: SectionFishProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const fishRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [fishGroup] = useState(() => {
    const groupSize = Math.min(Math.max(colorScheme.length, 7), 8); // 7-8 fish
    const groupDirection = direction || (Math.random() > 0.5 ? 'left-to-right' : 'right-to-left');
    
    // Ensure we have enough colors by repeating if needed
    const extendedColors = [...colorScheme];
    while (extendedColors.length < 8) {
      extendedColors.push(...colorScheme);
    }
    const sortedColors = extendedColors.slice(0, 8);

    return Array.from({ length: groupSize }, (_, i) => {
      let offsetX = 0;
      let offsetY = 0;
      
      // Natural fish school formation - tight cluster with organic spacing
      // Real fish schools maintain close proximity and staggered positions
      if (i === 0) {
        // Leader fish
        offsetX = 0;
        offsetY = 0;
      } else if (i === 1) {
        // Just behind and slightly left
        offsetX = -35;
        offsetY = 25;
      } else if (i === 2) {
        // Just behind and slightly right
        offsetX = 40;
        offsetY = 30;
      } else if (i === 3) {
        // Middle left
        offsetX = -55;
        offsetY = 55;
      } else if (i === 4) {
        // Middle right, slightly back
        offsetX = 60;
        offsetY = 60;
      } else if (i === 5) {
        // Back left
        offsetX = -30;
        offsetY = 85;
      } else if (i === 6) {
        // Back right
        offsetX = 35;
        offsetY = 90;
      } else if (i === 7) {
        // Straggler - slightly off to the side
        offsetX = -10;
        offsetY = 115;
      }

      return {
        id: `fish-${i}`,
        groupDirection,
        size: i === 0 ? 1.3 : (1.15 - i * 0.05), // More uniform sizes, leader slightly bigger
        color: sortedColors[i],
        offsetX,
        offsetY,
        delay: i * 0.1, // Tighter timing for synchronized movement
        zIndex: groupSize - i,
      };
    });
  });

  useEffect(() => {
    const animateFish = (fish: any, element: HTMLDivElement) => {
      const containerWidth = containerRef.current?.offsetWidth ?? 1200;

      const groupDirection = fish.groupDirection;
      const startX = groupDirection === 'left-to-right' ? -250 : containerWidth + 250;
      const endX = groupDirection === 'left-to-right' ? containerWidth + 250 : -250;
      const baseDuration = 35000; // 35 seconds - natural swimming pace

      let startTime: number | null = null;

      const tick = (timestamp: number) => {
        if (!startTime) startTime = timestamp - fish.delay * 1000;
        const elapsed = timestamp - startTime;
        const progress = (elapsed % baseDuration) / baseDuration;

        // All fish move together as one cohesive group
        const baseX = startX + (endX - startX) * progress;
        const x = baseX + fish.offsetX;

        // Natural swimming motion - multiple wave frequencies for realism
        // Each fish has slightly different wave pattern based on position
        const primaryWave = Math.sin(progress * Math.PI * 8 + fish.id.charCodeAt(5) * 0.4) * 6;
        const secondaryWave = Math.sin(progress * Math.PI * 12 + fish.delay * 2) * 3;
        const waveY = primaryWave + secondaryWave;
        const y = fish.offsetY + waveY;

        // Flip fish based on direction
        const scaleX = groupDirection === 'left-to-right' ? 1 : -1;
        
        element.style.transform = `translate(${x}px, ${y}px) scale(${fish.size}) scaleX(${scaleX})`;
        element.style.zIndex = `${fish.zIndex}`;

        requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    fishRefs.current.forEach((el, i) => el && animateFish(fishGroup[i], el));
  }, [fishGroup]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: position === 'top' ? '10%' : 'auto',
        bottom: position === 'bottom' ? '10%' : 'auto',
        left: 0,
        width: '100%',
        height: '200px',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    >
      {fishGroup.map((fish, i) => (
        <div
          key={fish.id}
          ref={(el) => {
            fishRefs.current[i] = el;
          }}
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            width: '48px',
            height: '30px',
            willChange: 'transform',
            opacity: 0.4 + (i === 0 ? 0.4 : i * 0.08),
            zIndex: fish.zIndex,
          }}
        >
          <FishIcon bodyColor={fish.color} />
        </div>
      ))}
    </div>
  );
}