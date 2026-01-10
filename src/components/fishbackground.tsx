// 'use client';

// import React, { useState, useEffect, useRef } from "react";

// interface FishIconProps extends React.SVGProps<SVGSVGElement> {
//   className?: string;
//   tailColor?: string;
//   bodyColor?: string;
//   swimSpeed?: number;
// }

// const FishIcon: React.FC<FishIconProps> = ({
//   className,
//   tailColor = "#a3e635",
//   bodyColor = "#a3e635",
//   swimSpeed = 1,
//   ...props
// }) => {
//   const [frame, setFrame] = useState(0);
//   const animationRef = useRef<number>();
  
//   useEffect(() => {
//     const startTime = Date.now();
//     const tailDuration = 3000 / swimSpeed;
    
//     const animate = () => {
//       const elapsed = Date.now() - startTime;
//       const progress = (elapsed % tailDuration) / tailDuration;
//       setFrame(progress);
//       animationRef.current = requestAnimationFrame(animate);
//     };
    
//     animationRef.current = requestAnimationFrame(animate);
//     return () => {
//       if (animationRef.current) cancelAnimationFrame(animationRef.current);
//     };
//   }, [swimSpeed]);

//   const easeInOutSine = (x: number): number => {
//     return -(Math.cos(Math.PI * x) - 1) / 2;
//   };

//   const interpolate = (keyframes: [number, number, number][], progress: number) => {
//     if (progress <= 0) return keyframes[0][2];
//     if (progress >= 1) return keyframes[keyframes.length - 1][2];
    
//     for (let i = 0; i < keyframes.length - 1; i++) {
//       const [t1, , v1] = keyframes[i];
//       const [t2, , v2] = keyframes[i + 1];
      
//       if (progress >= t1 && progress <= t2) {
//         const segmentProgress = (progress - t1) / (t2 - t1);
//         const easedProgress = easeInOutSine(segmentProgress);
//         return v1 + (v2 - v1) * easedProgress;
//       }
//     }
//     return keyframes[keyframes.length - 1][2];
//   };

//   const topY = interpolate([[0, 0, 2.0], [0.25, 0, 1.2], [0.5, 0, 2.0], [0.75, 0, 1.2], [1, 0, 2.0]], frame);
//   const bottomY = interpolate([[0, 0, 13.6], [0.25, 0, 14.2], [0.5, 0, 13.6], [0.75, 0, 14.2], [1, 0, 13.6]], frame);
//   const midControlY = interpolate([[0, 0, 0.337], [0.25, 0, 0.1], [0.5, 0, 0.337], [0.75, 0, 0.1], [1, 0, 0.337]], frame);
//   const midControlY2 = interpolate([[0, 0, 5.095], [0.25, 0, 5.4], [0.5, 0, 5.095], [0.75, 0, 5.4], [1, 0, 5.095]], frame);
//   const topCurveY1 = interpolate([[0, 0, 1.461], [0.25, 0, 0.9], [0.5, 0, 1.461], [0.75, 0, 0.9], [1, 0, 1.461]], frame);
//   const topCurveY2 = interpolate([[0, 0, 0.654], [0.25, 0, 0.3], [0.5, 0, 0.654], [0.75, 0, 0.3], [1, 0, 0.654]], frame);
//   const topCurveY3 = interpolate([[0, 0, 0.200], [0.25, 0, -0.1], [0.5, 0, 0.200], [0.75, 0, -0.1], [1, 0, 0.200]], frame);
//   const topCurveY4 = interpolate([[0, 0, -0.259], [0.25, 0, -0.5], [0.5, 0, -0.259], [0.75, 0, -0.5], [1, 0, -0.259]], frame);
//   const bottomCurveY1 = interpolate([[0, 0, 14.312], [0.25, 0, 14.8], [0.5, 0, 14.312], [0.75, 0, 14.8], [1, 0, 14.312]], frame);
//   const bottomCurveY2 = interpolate([[0, 0, 14.008], [0.25, 0, 14.5], [0.5, 0, 14.008], [0.75, 0, 14.5], [1, 0, 14.008]], frame);
//   const bottomCurveY3 = interpolate([[0, 0, 13.803], [0.25, 0, 14.3], [0.5, 0, 13.803], [0.75, 0, 14.3], [1, 0, 13.803]], frame);
//   const bottomCurveY4 = interpolate([[0, 0, 13.344], [0.25, 0, 13.9], [0.5, 0, 13.344], [0.75, 0, 13.9], [1, 0, 13.344]], frame);
//   const bottomCurveY5 = interpolate([[0, 0, 12.543], [0.25, 0, 13.2], [0.5, 0, 12.543], [0.75, 0, 13.2], [1, 0, 12.543]], frame);
//   const bottomCurveY6 = interpolate([[0, 0, 12.009], [0.25, 0, 12.6], [0.5, 0, 12.009], [0.75, 0, 12.6], [1, 0, 12.009]], frame);

//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 39 22"
//       width={39}
//       height={22}
//       preserveAspectRatio="xMidYMid meet"
//       className={className}
//       style={{
//         width: "100%",
//         height: "100%",
//         transform: "translate3d(0px, 0px, 0px)",
//         contentVisibility: "visible",
//       }}
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
//             fillOpacity="1"
//             d={`M25.817,7.014 C25.817,7.014 29.927,${topY} 29.927,${topY} C30.379,${topCurveY1} 30.317,${topCurveY2} 29.791,${topCurveY3} C29.260,${topCurveY4} 28.469,-0.197 28.011,${midControlY} C28.011,${midControlY} 24.117,${midControlY2} 24.117,${midControlY2} C20.953,1.898 16.947,0.147 12.707,0.147 C8.009,0.147 3.602,2.289 0.301,6.182 C-0.100,6.660 -0.100,7.362 0.301,7.840 C3.602,11.727 8.009,13.876 12.707,13.876 C16.947,13.876 20.953,12.131 24.117,8.927 C24.117,8.927 28.025,${bottomY} 28.025,${bottomY} C28.594,${bottomCurveY1} 29.564,${bottomCurveY2} 29.805,${bottomCurveY3} C30.337,${bottomCurveY4} 30.399,${bottomCurveY5} 29.941,${bottomCurveY6} C29.941,${bottomCurveY6} 25.817,7.014 25.817,7.014 C25.817,7.014 25.817,7.014 25.817,7.014z`}
//           />
//         </g>
//       </g>
//     </svg>
//   );
// };

// interface FishData {
//   id: number;
//   y: number;
//   size: number;
//   speed: number;
//   direction: 'left' | 'right';
//   color: string;
//   delay: number;
//   floatAmount: number;
// }

// export function FishBackground() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const fishRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const [fishes] = useState<FishData[]>(() => {
//     const colors = ['#a3e635', '#84cc16', '#65a30d', '#4d7c0f', '#fbbf24', '#f59e0b'];
//     return Array.from({ length: 10 }, (_, i) => ({
//       id: i,
//       y: Math.random() * 70 + 15,
//       size: Math.random() * 1.5 + 0.6,
//       speed: Math.random() * 0.5 + 0.5,
//       direction: Math.random() > 0.5 ? 'left' : 'right' as 'left' | 'right',
//       color: colors[Math.floor(Math.random() * colors.length)],
//       delay: Math.random() * 8,
//       floatAmount: Math.random() * 15 + 10,
//     }));
//   });

//   useEffect(() => {
//     const animateFish = (fish: FishData, element: HTMLDivElement) => {
//       const containerWidth = containerRef.current?.offsetWidth || 1000;
//       const startX = fish.direction === 'right' ? -100 : containerWidth + 100;
//       const endX = fish.direction === 'right' ? containerWidth + 100 : -100;
//       const duration = (40000 / fish.speed) + fish.delay * 1000;
      
//       let startTime: number | null = null;
      
//       const animate = (timestamp: number) => {
//         if (!startTime) startTime = timestamp - (fish.delay * 1000);
//         const elapsed = timestamp - startTime;
//         const progress = (elapsed % duration) / duration;
        
//         const x = startX + (endX - startX) * progress;
//         const floatY = Math.sin(progress * Math.PI * 4) * fish.floatAmount;
        
//         element.style.transform = `translate(${x}px, ${floatY}px) scaleX(${fish.direction === 'left' ? -1 : 1})`;
        
//         requestAnimationFrame(animate);
//       };
      
//       requestAnimationFrame(animate);
//     };

//     fishRefs.current.forEach((ref, i) => {
//       if (ref) animateFish(fishes[i], ref);
//     });
//   }, [fishes]);

//   return (
//     <div 
//       ref={containerRef}
//       className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
//       style={{
//         background: '#7BD3EA',
//       }}
//     >
//       {fishes.map((fish, index) => (
//         <div
//           key={fish.id}
//           ref={el => { fishRefs.current[index] = el; }}
//           style={{
//             position: 'absolute',
//             top: `${fish.y}%`,
//             left: 0,
//             width: `${40 * fish.size}px`,
//             height: `${25 * fish.size}px`,
//             willChange: 'transform',
//             opacity: 0.3,
//           }}
//         >
//           <FishIcon bodyColor={fish.color} swimSpeed={fish.speed} />
//         </div>
//       ))}
//     </div>
//   );
// }





























// 'use client';

// import React, { useState, useEffect, useRef } from 'react';

// // ── Your improved animated FishIcon ───────────────────────────────
// interface FishIconProps extends React.SVGProps<SVGSVGElement> {
//   className?: string;
//   tailColor?: string;
//   bodyColor?: string;
//   animationDuration?: number; // in ms
// }

// const FishIcon: React.FC<FishIconProps> = ({
//   className,
//   tailColor = '#ffb7f5',
//   bodyColor = '#ffb7f5',
//   animationDuration = 2800, // ← feel free to tune (2200–3400 usually nicest)
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

//   // // ── Your original smooth keyframes (very nice!) ──
//   // const topY = interpolate(
//   //   [
//   //     [0, 0, 2.0],
//   //     [0.23, 0.4, 1.6],
//   //     [0.5, 1, 2.0],
//   //     [0.75, 0, 1.2],
//   //     [1, 0, 2.0],
//   //   ],
//   //   frame
//   // );

//   // const bottomY = interpolate(
//   //   [
//   //     [0, 0, 13.6],
//   //     [0.25, 0, 14.2],
//   //     [0.5, 0, 13.6],
//   //     [0.75, 0, 14.2],
//   //     [1, 0, 13.6],
//   //   ],
//   //   frame
//   // );

//   // const midControlY = interpolate(
//   //   [
//   //     [0, 0, 0.337],
//   //     [0.25, 0, 0.1],
//   //     [0.5, 0, 0.337],
//   //     [0.75, 0, 0.1],
//   //     [1, 0, 0.337],
//   //   ],
//   //   frame
//   // );

//   // const midControlY2 = interpolate(
//   //   [
//   //     [0, 0, 5.095],
//   //     [0.25, 0, 5.4],
//   //     [0.5, 0, 5.095],
//   //     [0.75, 0, 5.4],
//   //     [1, 0, 5.095],
//   //   ],
//   //   frame
//   // );

//   // const topCurveY1 = interpolate([[0, 0, 1.461], [0.25, 0, 0.9], [0.5, 0, 1.461], [0.75, 0, 0.9], [1, 0, 1.461]], frame);
//   // const topCurveY2 = interpolate([[0, 0, 0.654], [0.25, 0, 0.3], [0.5, 0, 0.654], [0.75, 0, 0.3], [1, 0, 0.654]], frame);
//   // const topCurveY3 = interpolate([[0, 0, 0.2],   [0.25, 0, -0.1], [0.5, 0, 0.2],   [0.75, 0, -0.1], [1, 0, 0.2]],   frame);
//   // const topCurveY4 = interpolate([[0, 0, -0.259],[0.25, 0, -0.5], [0.5, 0, -0.259],[0.75, 0, -0.5], [1, 0, -0.259]],frame);

//   // const bottomCurveY1 = interpolate([[0, 0, 14.312], [0.25, 0, 14.8], [0.5, 0, 14.312], [0.75, 0, 14.8], [1, 0, 14.312]], frame);
//   // const bottomCurveY2 = interpolate([[0, 0, 14.008], [0.25, 0, 14.5], [0.5, 0, 14.008], [0.75, 0, 14.5], [1, 0, 14.008]], frame);
//   // const bottomCurveY3 = interpolate([[0, 0, 13.803], [0.25, 0, 14.3], [0.5, 0, 13.803], [0.75, 0, 14.3], [1, 0, 13.803]], frame);
//   // const bottomCurveY4 = interpolate([[0, 0, 13.344], [0.25, 0, 13.9], [0.5, 0, 13.344], [0.75, 0, 13.9], [1, 0, 13.344]], frame);
//   // const bottomCurveY5 = interpolate([[0, 0, 12.543], [0.25, 0, 13.2], [0.5, 0, 12.543], [0.75, 0, 13.2], [1, 0, 12.543]], frame);
//   // const bottomCurveY6 = interpolate([[0, 0, 12.009], [0.25, 0, 12.6], [0.5, 0, 12.009], [0.75, 0, 12.6], [1, 0, 12.009]], frame);

//   // ── Enhanced tail wagging with more natural articulation ──
//   const topY = interpolate(
//     [
//       [0, 0, 2.0],
//       [0.15, 0.4, 0.8],
//       [0.35, 0.4, 1.2],
//       [0.5, 1, 2.0],
//       [0.65, 0, 2.8],
//       [0.85, 0, 1.6],
//       [1, 0, 2.0],
//     ],
//     frame
//   );

//   const bottomY = interpolate(
//     [
//       [0, 0, 13.6],
//       [0.15, 0, 14.8],
//       [0.35, 0, 14.4],
//       [0.5, 0, 13.6],
//       [0.65, 0, 12.4],
//       [0.85, 0, 14.0],
//       [1, 0, 13.6],
//     ],
//     frame
//   );

//   const midControlY = interpolate(
//     [
//       [0, 0, 0.337],
//       [0.15, 0, -0.2],
//       [0.35, 0, 0.0],
//       [0.5, 0, 0.337],
//       [0.65, 0, 0.7],
//       [0.85, 0, 0.2],
//       [1, 0, 0.337],
//     ],
//     frame
//   );

//   const midControlY2 = interpolate(
//     [
//       [0, 0, 5.095],
//       [0.15, 0, 5.6],
//       [0.35, 0, 5.4],
//       [0.5, 0, 5.095],
//       [0.65, 0, 4.7],
//       [0.85, 0, 5.3],
//       [1, 0, 5.095],
//     ],
//     frame
//   );

//   const topCurveY1 = interpolate([[0, 0, 1.461], [0.15, 0, 0.5], [0.35, 0, 0.8], [0.5, 0, 1.461], [0.65, 0, 2.0], [0.85, 0, 1.1], [1, 0, 1.461]], frame);
//   const topCurveY2 = interpolate([[0, 0, 0.654], [0.15, 0, 0.0], [0.35, 0, 0.2], [0.5, 0, 0.654], [0.65, 0, 1.1], [0.85, 0, 0.4], [1, 0, 0.654]], frame);
//   const topCurveY3 = interpolate([[0, 0, 0.2],   [0.15, 0, -0.4], [0.35, 0, -0.2], [0.5, 0, 0.2],   [0.65, 0, 0.7], [0.85, 0, 0.0], [1, 0, 0.2]],   frame);
//   const topCurveY4 = interpolate([[0, 0, -0.259],[0.15, 0, -0.8], [0.35, 0, -0.6], [0.5, 0, -0.259],[0.65, 0, 0.2], [0.85, 0, -0.4], [1, 0, -0.259]],frame);

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
//         <clipPath id="fish-clip">
//           <rect width="39" height="22" x="0" y="0" />
//         </clipPath>
//       </defs>

//       <g clipPath="url(#fish-clip)">
//         <g transform="matrix(-1, 0, 0, -1, 34.2890625, 17.96875)">
//           <path
//             fill={bodyColor}
//             d={`
//               M25.817,7.014
//               C25.817,7.014 29.927,${topY} 29.927,${topY}
//               C30.379,${topCurveY1} 30.317,${topCurveY2} 29.791,${topCurveY3}
//               C29.260,${topCurveY4} 28.469,-0.197 28.011,${midControlY}
//               C28.011,${midControlY} 24.117,${midControlY2} 24.117,${midControlY2}
//               C20.953,1.898 16.947,0.147 12.707,0.147
//               C8.009,0.147 3.602,2.289 0.301,6.182
//               C-0.100,6.660 -0.100,7.362 0.301,7.840
//               C3.602,11.727 8.009,13.876 12.707,13.876
//               C16.947,13.876 20.953,12.131 24.117,8.927
//               C24.117,8.927 28.025,${bottomY} 28.025,${bottomY}
//               C28.594,${bottomCurveY1} 29.564,${bottomCurveY2} 29.805,${bottomCurveY3}
//               C30.337,${bottomCurveY4} 30.399,${bottomCurveY5} 29.941,${bottomCurveY6}
//               C29.941,${bottomCurveY6} 25.817,7.014 25.817,7.014z
//             `}
//           />
//         </g>
//       </g>
//     </svg>
//   );
// };

// // ── Fish Background ───────────────────────────────────────────────
// interface FishData {
//   id: number;
//   y: number;
//   size: number;
//   speed: number;        // now only affects horizontal speed
//   direction: 'left' | 'right';
//   color: string;
//   delay: number;
//   floatAmount: number;
// }

// export function FishBackground() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const fishRefs = useRef<(HTMLDivElement | null)[]>([]);

//   const [fishes] = useState<FishData[]>(() => {
//     const colors = ['#a3e635', '#84cc16', '#65a30d', '#4d7c0f', '#fbbf24', '#f59e0b', '#38bdf8', '#0284c7'];
//     return Array.from({ length: 12 }, (_, i) => ({
//       id: i,
//       y: Math.random() * 70 + 15,
//       size: Math.random() * 1.6 + 0.5,
//       speed: Math.random() * 0.7 + 0.4,
//       direction: Math.random() > 0.5 ? 'left' : 'right',
//       color: colors[i % colors.length],
//       delay: Math.random() * 10,
//       floatAmount: Math.random() * 18 + 8,
//     }));
//   });

//   useEffect(() => {
//     const animateFish = (fish: FishData, element: HTMLDivElement) => {
//       const containerWidth = containerRef.current?.offsetWidth ?? 1200;
//       const startX = fish.direction === 'right' ? -120 : containerWidth + 120;
//       const endX = fish.direction === 'right' ? containerWidth + 120 : -120;
//       const baseDuration = 38000 / fish.speed;

//       let startTime: number | null = null;

//       const tick = (timestamp: number) => {
//         if (!startTime) startTime = timestamp - fish.delay * 1000;
//         const elapsed = timestamp - startTime;
//         const progress = (elapsed % baseDuration) / baseDuration;

//         const x = startX + (endX - startX) * progress;
//         const floatY = Math.sin(progress * Math.PI * 5) * fish.floatAmount;

//         element.style.transform = `translate(${x}px, ${floatY}px) scale(${fish.size}) scaleX(${fish.direction === 'left' ? -1 : 1})`;

//         requestAnimationFrame(tick);
//       };

//       requestAnimationFrame(tick);
//     };

//     fishRefs.current.forEach((el, i) => {
//       if (el) animateFish(fishes[i], el);
//     });
//   }, [fishes]);

//   return (
//     <div
//       ref={containerRef}
//       className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden"
//       style={{ background: 'linear-gradient(165deg, #7bd3ea 0%, #4facfe 100%)' }}
//     >
//       {fishes.map((fish, i) => (
//         <div
//           key={fish.id}
//           ref={(el) => {
//             fishRefs.current[i] = el;
//           }}
//           style={{
//             position: 'absolute',
//             top: `${fish.y}%`,
//             left: 0,
//             width: '48px', // base size – real size comes from scale()
//             height: '30px',
//             willChange: 'transform',
//             opacity: 0.35 + Math.random() * 0.25,
//           }}
//         >
//           <FishIcon bodyColor={fish.color} animationDuration={1800 + fish.speed * 400} />
//         </div>
//       ))}
//     </div>
//   );
// }















'use client';

import React, { useState, useEffect, useRef } from 'react';

// ── Animated Fish Icon Component ────────────────────────────────────────
interface FishIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  bodyColor?: string;
  animationDuration?: number; // ms
}

const FishIcon: React.FC<FishIconProps> = ({
  className,
  bodyColor = '#ffb7f5', // nice pink default!
  animationDuration = 2800,
  ...props
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

    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [animationDuration]);

  const easeInOutSine = (x: number) => -(Math.cos(Math.PI * x) - 1) / 2;

  const interpolate = (keyframes: [number, number, number][], p: number) => {
    if (p <= 0) return keyframes[0][2];
    if (p >= 1) return keyframes.at(-1)![2];

    for (let i = 0; i < keyframes.length - 1; i++) {
      const [t1, , v1] = keyframes[i];
      const [t2, , v2] = keyframes[i + 1];
      if (p >= t1 && p <= t2) {
        const t = (p - t1) / (t2 - t1);
        return v1 + (v2 - v1) * easeInOutSine(t);
      }
    }
    return keyframes.at(-1)![2];
  };

  // Enhanced natural tail wag (your latest version)
  const topY = interpolate(
    [
      [0, 0, 2.0],
      [0.15, 0.4, 0.8],
      [0.35, 0.4, 1.2],
      [0.5, 1, 2.0],
      [0.65, 0, 2.8],
      [0.85, 0, 1.6],
      [1, 0, 2.0],
    ],
    frame
  );

  const bottomY = interpolate(
    [
      [0, 0, 13.6],
      [0.15, 0, 14.8],
      [0.35, 0, 14.4],
      [0.5, 0, 13.6],
      [0.65, 0, 12.4],
      [0.85, 0, 14.0],
      [1, 0, 13.6],
    ],
    frame
  );

  const midControlY = interpolate(
    [
      [0, 0, 0.337],
      [0.15, 0, -0.2],
      [0.35, 0, 0.0],
      [0.5, 0, 0.337],
      [0.65, 0, 0.7],
      [0.85, 0, 0.2],
      [1, 0, 0.337],
    ],
    frame
  );

  const midControlY2 = interpolate(
    [
      [0, 0, 5.095],
      [0.15, 0, 5.6],
      [0.35, 0, 5.4],
      [0.5, 0, 5.095],
      [0.65, 0, 4.7],
      [0.85, 0, 5.3],
      [1, 0, 5.095],
    ],
    frame
  );

  const topCurveY1 = interpolate([[0, 0, 1.461], [0.15, 0, 0.5], [0.35, 0, 0.8], [0.5, 0, 1.461], [0.65, 0, 2.0], [0.85, 0, 1.1], [1, 0, 1.461]], frame);
  const topCurveY2 = interpolate([[0, 0, 0.654], [0.15, 0, 0.0], [0.35, 0, 0.2], [0.5, 0, 0.654], [0.65, 0, 1.1], [0.85, 0, 0.4], [1, 0, 0.654]], frame);
  const topCurveY3 = interpolate([[0, 0, 0.2],   [0.15, 0, -0.4], [0.35, 0, -0.2], [0.5, 0, 0.2],   [0.65, 0, 0.7], [0.85, 0, 0.0], [1, 0, 0.2]],   frame);
  const topCurveY4 = interpolate([[0, 0, -0.259],[0.15, 0, -0.8], [0.35, 0, -0.6], [0.5, 0, -0.259],[0.65, 0, 0.2], [0.85, 0, -0.4], [1, 0, -0.259]],frame);

  const bottomCurveY1 = interpolate([[0, 0, 14.312], [0.15, 0, 15.2], [0.35, 0, 14.9], [0.5, 0, 14.312], [0.65, 0, 13.4], [0.85, 0, 14.7], [1, 0, 14.312]], frame);
  const bottomCurveY2 = interpolate([[0, 0, 14.008], [0.15, 0, 14.9], [0.35, 0, 14.6], [0.5, 0, 14.008], [0.65, 0, 13.1], [0.85, 0, 14.4], [1, 0, 14.008]], frame);
  const bottomCurveY3 = interpolate([[0, 0, 13.803], [0.15, 0, 14.7], [0.35, 0, 14.4], [0.5, 0, 13.803], [0.65, 0, 12.9], [0.85, 0, 14.2], [1, 0, 13.803]], frame);
  const bottomCurveY4 = interpolate([[0, 0, 13.344], [0.15, 0, 14.3], [0.35, 0, 14.0], [0.5, 0, 13.344], [0.65, 0, 12.4], [0.85, 0, 13.8], [1, 0, 13.344]], frame);
  const bottomCurveY5 = interpolate([[0, 0, 12.543], [0.15, 0, 13.6], [0.35, 0, 13.2], [0.5, 0, 12.543], [0.65, 0, 11.5], [0.85, 0, 13.0], [1, 0, 12.543]], frame);
  const bottomCurveY6 = interpolate([[0, 0, 12.009], [0.15, 0, 13.1], [0.35, 0, 12.7], [0.5, 0, 12.009], [0.65, 0, 11.0], [0.85, 0, 12.5], [1, 0, 12.009]], frame);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 39 22"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', height: '100%' }}
      {...props}
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
              C29.941,${bottomCurveY6} 25.817,7.014 25.817,7.014z
            `}
          />
        </g>
      </g>
    </svg>
  );
};

// ── Bubble Interface ────────────────────────────────────────────────────
interface Bubble {
  id: number;
  x: number;           // horizontal position %
  size: number;        // px
  speed: number;       // px/s
  wobble: number;      // sway amplitude
  delay: number;       // seconds
  opacity: number;
  startY: number;      // starting Y position (0-100%)
}

// ── Main Background Component ──────────────────────────────────────────
export function FishBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fishRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bubbleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sunraysRef = useRef<HTMLDivElement>(null);
  const bubbleAnimationRef = useRef<number>();

  // Fish data
  const [fishes] = useState(() => {
    const colors = [
      '#ffb7f5', // pink
      '#ff9bf5',
      '#ff69b4',
      '#db7093',
      '#c71585',
      '#ff1493',
      '#d946ef',
      '#a78bfa',
    ];
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      y: Math.random() * 70 + 15,
      size: Math.random() * 1.6 + 0.5,
      speed: Math.random() * 0.7 + 0.4,
      direction: Math.random() > 0.5 ? 'left' : 'right',
      color: colors[i % colors.length],
      delay: Math.random() * 10,
      floatAmount: Math.random() * 18 + 8,
    }));
  });

  // Bubble data - COMPLETELY FIXED VERSION
  const [bubbles] = useState<Bubble[]>(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 8 + 4,       // 4–12px
      speed: Math.random() * 40 + 30,    // 30–70px/s
      wobble: Math.random() * 20 + 5,
      delay: Math.random() * 20,        // Max 20 second delay
      opacity: Math.random() * 0.4 + 0.2,
      startY: Math.random() * 100,      // Start at different heights
    }))
  );

  // Fish swimming animation
  useEffect(() => {
    const animateFish = (fish: any, element: HTMLDivElement) => {
      const containerWidth = containerRef.current?.offsetWidth ?? 1200;
      const startX = fish.direction === 'right' ? -120 : containerWidth + 120;
      const endX = fish.direction === 'right' ? containerWidth + 120 : -120;
      const baseDuration = 38000 / fish.speed;

      let startTime: number | null = null;

      const tick = (timestamp: number) => {
        if (!startTime) startTime = timestamp - fish.delay * 1000;
        const elapsed = timestamp - startTime;
        const progress = (elapsed % baseDuration) / baseDuration;

        const x = startX + (endX - startX) * progress;
        const floatY = Math.sin(progress * Math.PI * 5) * fish.floatAmount;

        element.style.transform = `translate(${x}px, ${floatY}px) scale(${fish.size}) scaleX(${fish.direction === 'left' ? -1 : 1})`;

        requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    fishRefs.current.forEach((el, i) => el && animateFish(fishes[i], el));
  }, [fishes]);

  // Bubble rising animation - SIMPLIFIED AND WORKING VERSION
  useEffect(() => {
    const startTimes = bubbles.map(() => Date.now() + Math.random() * 20000);

    const animateBubbles = () => {
      const now = Date.now();
      
      bubbles.forEach((bubble, i) => {
        const el = bubbleRefs.current[i];
        if (!el) return;

        const elapsed = now - startTimes[i];
        if (elapsed < bubble.delay * 1000) {
          el.style.opacity = '0';
          return;
        }

        const effectiveTime = (elapsed - bubble.delay * 1000) / 1000;
        const containerHeight = containerRef.current?.offsetHeight || 800;
        
        // Calculate vertical position (rising up)
        const riseDistance = effectiveTime * bubble.speed;
        const y = containerHeight - (riseDistance % (containerHeight + 100));
        
        // Calculate horizontal sway
        const sway = Math.sin(effectiveTime * 0.8 + bubble.id) * bubble.wobble;
        
        // Calculate opacity with fade in/out
        let opacity = bubble.opacity;
        if (y > containerHeight * 0.8) {
          // Fade in near bottom
          opacity = bubble.opacity * ((containerHeight - y) / (containerHeight * 0.2));
        } else if (y < containerHeight * 0.2) {
          // Fade out near top
          opacity = bubble.opacity * (y / (containerHeight * 0.2));
        }

        el.style.transform = `translate(${sway}px, ${y}px)`;
        el.style.opacity = Math.max(0, Math.min(1, opacity)).toString();
      });

      bubbleAnimationRef.current = requestAnimationFrame(animateBubbles);
    };

    bubbleAnimationRef.current = requestAnimationFrame(animateBubbles);

    return () => {
      if (bubbleAnimationRef.current) {
        cancelAnimationFrame(bubbleAnimationRef.current);
      }
    };
  }, [bubbles]);

  // Sunlight rays animation
  useEffect(() => {
    const animateSunrays = () => {
      const container = sunraysRef.current;
      if (!container) return;

      const time = Date.now() / 1000;
      const intensity = 0.3 + 0.1 * Math.sin(time * 0.5); // Gentle pulsing
      
      container.style.opacity = intensity.toString();
    };

    const interval = setInterval(animateSunrays, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden"
      style={{
        background: 'linear-gradient(165deg, #7bd3ea 0%, #4facfe 100%)',
      }}
    >
      {/* Sunlight Rays Effect */}
      <div
        ref={sunraysRef}
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.1) 20%,
              rgba(255, 255, 255, 0.25) 50%,
              rgba(255, 255, 255, 0.1) 80%,
              rgba(255, 255, 255, 0) 100%
            ),
            radial-gradient(
              ellipse at 50% 0%,
              rgba(255, 255, 200, 0.3) 0%,
              rgba(255, 255, 200, 0.1) 30%,
              transparent 70%
            )
          `,
          opacity: 0.4,
          mixBlendMode: 'overlay',
          pointerEvents: 'none',
        }}
      >
        {/* Moving light caustics */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                ${45 + i * 30}deg,
                rgba(255, 255, 255, 0.03) 0%,
                rgba(255, 255, 255, 0.08) 10%,
                rgba(255, 255, 255, 0.03) 20%,
                transparent 30%
              )`,
              animation: `moveCaustics ${15 + i * 3}s linear infinite`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Bubbles – behind fish */}
      <div className="absolute inset-0">
        {bubbles.map((bubble, i) => (
          <div
            key={bubble.id}
            ref={(el) => {(bubbleRefs.current[i] = el)}}
            style={{
              position: 'absolute',
              left: `${bubble.x}%`,
              bottom: '100%', // Start off-screen at bottom
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(173,216,230,0.5) 60%, transparent 80%)',
              boxShadow: '0 0 8px rgba(255,255,255,0.6), inset 0 0 4px rgba(255,255,255,0.3)',
              willChange: 'transform, opacity',
              opacity: 0,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>

      {/* Fish */}
      {fishes.map((fish, i) => (
        <div
          key={fish.id}
          ref={(el) => {(fishRefs.current[i] = el)}}
          style={{
            position: 'absolute',
            top: `${fish.y}%`,
            left: 0,
            width: '48px',
            height: '30px',
            willChange: 'transform',
            opacity: 0.4 + Math.random() * 0.3,
            zIndex: 2,
          }}
        >
          <FishIcon bodyColor={fish.color} animationDuration={1800 + fish.speed * 500} />
        </div>
      ))}

      {/* CSS for caustics animation */}
      <style jsx>{`
        @keyframes moveCaustics {
          0% {
            transform: translateX(-100%) translateY(-100%);
          }
          100% {
            transform: translateX(100%) translateY(100%);
          }
        }
      `}</style>
    </div>
  );
}

export default FishBackground;