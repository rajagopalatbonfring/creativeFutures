// import * as React from "react";

// interface FishIconProps extends React.SVGProps<SVGSVGElement> {}

// const FishIcon: React.FC<FishIconProps> = (props) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     xmlnsXlink="http://www.w3.org/1999/xlink"
//     viewBox="0 0 39 22"
//     width={39}
//     height={22}
//     preserveAspectRatio="xMidYMid meet"
//     style={{
//       width: "100%",
//       height: "100%",
//       transform: "translate3d(0px, 0px, 0px)",
//       contentVisibility: "visible",
//     }}
//     transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,0,0)"
//     {...props}
//   >
//     <defs>
//       <clipPath id="clip-fish">
//         <rect width={39} height={22} x={0} y={0} />
//       </clipPath>

//       <g id="fish-body">
//         <g opacity={1} style={{ display: "block" }}>
//           <path
//             fill="rgb(0,0,0)"
//             fillOpacity={1}
//             d=" M8.47,10.95 C8.47,10.95 4.84,16.89 4.84,16.89 C4.39,17.43 4.45,18.23 4.97,18.69 C5.51,19.15 6.3,19.08 6.75,18.55 C6.75,18.55 10.17,12.87 10.17,12.87 C13.34,16.07 17.34,17.82 21.58,17.82 C26.28,17.82 30.69,15.68 33.99,11.79 C34.39,11.31 34.39,10.61 33.99,10.13 C30.69,6.24 26.28,4.09 21.58,4.09 C17.34,4.09 13.34,5.84 10.17,9.04 C10.17,9.04 6.62,3.54 6.62,3.54 C6.05,2.9 5.08,3.2 4.84,3.4 C4.31,3.86 4.25,4.67 4.71,5.2 C4.71,5.2 8.47,10.95 8.47,10.95 C8.47,10.95 8.47,10.95 8.47,10.95z"
//           />
//           <g opacity={1} transform="matrix(-1,0,0,-1,34.2890625,17.96875)" />
//         </g>
//       </g>

//       <filter id="invert-alpha" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%">
//         <feComponentTransfer in="SourceGraphic">
//           <feFuncA type="table" tableValues="1.0 0.0" />
//         </feComponentTransfer>
//       </filter>

//       <mask id="fish-mask" mask-type="alpha">
//         <g filter="url(#invert-alpha)">
//           <rect width={39} height={22} x={0} y={0} fill="#ffffff" opacity={0} />
//           <use xlinkHref="#fish-body" />
//         </g>
//       </mask>
//     </defs>

//     <g clipPath="url(#clip-fish)">
//       {/* Pink fish body */}
//       <g opacity={1} style={{ display: "block" }}>
//         <g opacity={1} transform="matrix(-1,0,0,-1,34.2890625,17.96875)">
//           <path
//             fill="#ff69b4"           // hot pink ♡
//             // fill="#ec4899"        // alternative: tailwind pink-500
//             // fill="#db2777"        // alternative: more magenta pink
//             fillOpacity={1}
//             d=" M25.817075729370117,7.0142011642456055 C25.817075729370117,7.0142011642456055 29.450773239135742,1.0767464637756348 29.450773239135742,1.0767464637756348 C29.901996612548828,0.542732834815979 29.84018898010254,-0.26449695229530334 29.314790725708008,-0.7177875638008118 C28.783214569091797,-1.1772876977920532 27.992027282714844,-1.115193486213684 27.534622192382812,-0.5811797976493835 C27.534622192382812,-0.5811797976493835 24.117259979248047,5.095478057861328 24.117259979248047,5.095478057861328 C20.952516555786133,1.897605538368225 16.947139739990234,0.14653681218624115 12.706878662109375,0.14653681218624115 C8.009212493896484,0.14653681218624115 3.6020593643188477,2.2888009548187256 0.30133056640625,6.182132720947266 C-0.1004435271024704,6.660261154174805 -0.1004435271024704,7.3619303703308105 0.30133056640625,7.84005880355835 C3.6020593643188477,11.727181434631348 8.009212493896484,13.875655174255371 12.706878662109375,13.875655174255371 C16.947139739990234,13.875655174255371 20.952516555786133,12.1307954788208 24.117259979248047,8.926713943481445 C24.117259979248047,8.926713943481445 27.665708541870117,14.427314758300781 27.665708541870117,14.427314758300781 C28.234373092651367,15.073098182678223 29.204811096191406,14.768834114074707 29.445877075195312,14.563921928405762 C29.977455139160156,14.104422569274902 30.039262771606445,13.303401947021484 29.581859588623047,12.769388198852539 C29.581859588623047,12.769388198852539 25.817075729370117,7.0142011642456055 25.817075729370117,7.0142011642456055 C25.817075729370117,7.0142011642456055 25.817075729370117,7.0142011642456055 25.817075729370117,7.0142011642456055z"
//           />
//         </g>
//       </g>

//       {/* Optional: keep the black outline */}
//       <g mask="url(#fish-mask)" style={{ display: "block" }}>
//         <g opacity={1}>
//           <g opacity={1} transform="matrix(1,0,0,1,0,0)">
//             <path
//               fill="rgb(0,0,0)"
//               fillOpacity={0}
//               d=" M39,0 C39,0 39,22 39,22 C39,22 0,22 0,22 C0,22 0,0 0,0 C0,0 39,0 39,0z"
//             />
//           </g>
//           <g opacity={1} transform="matrix(-1,0,0,-1,34.2890625,17.96875)">
//             <path
//               strokeLinecap="square"
//               strokeLinejoin="miter"
//               fillOpacity={0}
//               strokeMiterlimit={4}
//               stroke="rgb(0,0,0)"
//               strokeOpacity={1}
//               strokeWidth={2}
//               d=" M25.817075729370117,7.0142011642456055 C25.817075729370117,7.0142011642456055 29.450773239135742,1.0767464637756348 29.450773239135742,1.0767464637756348 C29.901996612548828,0.542732834815979 29.84018898010254,-0.26449695229530334 29.314790725708008,-0.7177875638008118 C28.783214569091797,-1.1772876977920532 27.992027282714844,-1.115193486213684 27.534622192382812,-0.5811797976493835 C27.534622192382812,-0.5811797976493835 24.117259979248047,5.095478057861328 24.117259979248047,5.095478057861328 C20.952516555786133,1.897605538368225 16.947139739990234,0.14653681218624115 12.706878662109375,0.14653681218624115 C8.009212493896484,0.14653681218624115 3.6020593643188477,2.2888009548187256 0.30133056640625,6.182132720947266 C-0.1004435271024704,6.660261154174805 -0.1004435271024704,7.3619303703308105 0.30133056640625,7.84005880355835 C3.6020593643188477,11.727181434631348 8.009212493896484,13.875655174255371 12.706878662109375,13.875655174255371 C16.947139739990234,13.875655174255371 20.952516555786133,12.1307954788208 24.117259979248047,8.926713943481445 C24.117259979248047,8.926713943481445 27.665708541870117,14.427314758300781 27.665708541870117,14.427314758300781 C28.234373092651367,15.073098182678223 29.204811096191406,14.768834114074707 29.445877075195312,14.563921928405762 C29.977455139160156,14.104422569274902 30.039262771606445,13.303401947021484 29.581859588623047,12.769388198852539 C29.581859588623047,12.769388198852539 25.817075729370117,7.0142011642456055 25.817075729370117,7.0142011642456055 C25.817075729370117,7.0142011642456055 25.817075729370117,7.0142011642456055 25.817075729370117,7.0142011642456055z"
//             />
//           </g>
//         </g>
//       </g>
//     </g>
//   </svg>
// );

// export default FishIcon;














// import React, { useState, useEffect } from "react";

// interface FishIconProps extends React.SVGProps<SVGSVGElement> {
//   className?: string;
//   tailColor?: string;
//   bodyColor?: string;
//   animationDuration?: number; // in milliseconds, default 1800
// }

// const FishIcon: React.FC<FishIconProps> = ({
//   className,
//   tailColor = "#a3e635",
//   bodyColor = "#a3e635",
//   animationDuration = 1800,
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
    
//     const animationId = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationId);
//   }, [animationDuration]);

//   // Smooth easing function for natural movement
//   const easeInOutSine = (x: number): number => {
//     return -(Math.cos(Math.PI * x) - 1) / 2;
//   };

//   // Interpolate between keyframe values with easing
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

//   // Enhanced keyframes with more exaggerated movement
//   const topY = interpolate([
//     [0, 0, 2.5],
//     [0.25, 0, 0.5],
//     [0.5, 0, 2.5],
//     [0.75, 0, 0.5],
//     [1, 0, 2.5]
//   ], frame);

//   const bottomY = interpolate([
//     [0, 0, 13.2],
//     [0.25, 0, 15.0],
//     [0.5, 0, 13.2],
//     [0.75, 0, 15.0],
//     [1, 0, 13.2]
//   ], frame);

//   // Add movement to the middle control point (the wing under)
//   const midControlY = interpolate([
//     [0, 0, 0.337],
//     [0.25, 0, -0.5],
//     [0.5, 0, 0.337],
//     [0.75, 0, -0.5],
//     [1, 0, 0.337]
//   ], frame);

//   // Parallel coordinates that should move with the tail
//   const topCurveY1 = interpolate([
//     [0, 0, 1.461],
//     [0.25, 0, 0.3],
//     [0.5, 0, 1.461],
//     [0.75, 0, 0.3],
//     [1, 0, 1.461]
//   ], frame);

//   const topCurveY2 = interpolate([
//     [0, 0, 0.654],
//     [0.25, 0, -0.2],
//     [0.5, 0, 0.654],
//     [0.75, 0, -0.2],
//     [1, 0, 0.654]
//   ], frame);

//   const topCurveY3 = interpolate([
//     [0, 0, 0.200],
//     [0.25, 0, -0.6],
//     [0.5, 0, 0.200],
//     [0.75, 0, -0.6],
//     [1, 0, 0.200]
//   ], frame);

//   const topCurveY4 = interpolate([
//     [0, 0, -0.259],
//     [0.25, 0, -0.9],
//     [0.5, 0, -0.259],
//     [0.75, 0, -0.9],
//     [1, 0, -0.259]
//   ], frame);

//   const bottomCurveY1 = interpolate([
//     [0, 0, 14.312],
//     [0.25, 0, 15.7],
//     [0.5, 0, 14.312],
//     [0.75, 0, 15.7],
//     [1, 0, 14.312]
//   ], frame);

//   const bottomCurveY2 = interpolate([
//     [0, 0, 14.008],
//     [0.25, 0, 15.5],
//     [0.5, 0, 14.008],
//     [0.75, 0, 15.5],
//     [1, 0, 14.008]
//   ], frame);

//   const bottomCurveY3 = interpolate([
//     [0, 0, 13.803],
//     [0.25, 0, 15.3],
//     [0.5, 0, 13.803],
//     [0.75, 0, 15.3],
//     [1, 0, 13.803]
//   ], frame);

//   const bottomCurveY4 = interpolate([
//     [0, 0, 13.344],
//     [0.25, 0, 14.9],
//     [0.5, 0, 13.344],
//     [0.75, 0, 14.9],
//     [1, 0, 13.344]
//   ], frame);

//   const bottomCurveY5 = interpolate([
//     [0, 0, 12.543],
//     [0.25, 0, 14.2],
//     [0.5, 0, 12.543],
//     [0.75, 0, 14.2],
//     [1, 0, 12.543]
//   ], frame);

//   const bottomCurveY6 = interpolate([
//     [0, 0, 12.009],
//     [0.25, 0, 13.7],
//     [0.5, 0, 12.009],
//     [0.75, 0, 13.7],
//     [1, 0, 12.009]
//   ], frame);

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
//         <clipPath id="fish-clip">
//           <rect width="39" height="22" x="0" y="0" />
//         </clipPath>
//       </defs>

//       <g clipPath="url(#fish-clip)">
//         <g transform="matrix(-1, 0, 0, -1, 34.2890625, 17.96875)">
//           {/* Main body with animated tail */}
//           <path
//             fill={bodyColor}
//             fillOpacity="1"
//             d={`
//               M25.817,7.014
//               C25.817,7.014 29.927,${topY} 29.927,${topY}
//               C30.379,${topCurveY1} 30.317,${topCurveY2} 29.791,${topCurveY3}
//               C29.260,${topCurveY4} 28.469,-0.197 28.011,${midControlY}
//               C28.011,${midControlY} 24.117,5.095 24.117,5.095
//               C20.953,1.898 16.947,0.147 12.707,0.147
//               C8.009,0.147 3.602,2.289 0.301,6.182
//               C-0.100,6.660 -0.100,7.362 0.301,7.840
//               C3.602,11.727 8.009,13.876 12.707,13.876
//               C16.947,13.876 20.953,12.131 24.117,8.927
//               C24.117,8.927 28.025,${bottomY} 28.025,${bottomY}
//               C28.594,${bottomCurveY1} 29.564,${bottomCurveY2} 29.805,${bottomCurveY3}
//               C30.337,${bottomCurveY4} 30.399,${bottomCurveY5} 29.941,${bottomCurveY6}
//               C29.941,${bottomCurveY6} 25.817,7.014 25.817,7.014
//               C25.817,7.014 25.817,7.014 25.817,7.014z
//             `}
//           />
//         </g>

//         {/* Black outline - flipped to match the body */}
//         <g opacity="0.9" transform="matrix(-1, 0, 0, -1, 34.2890625, 17.96875)">
//           <path
//             stroke="#000000"
//             strokeWidth="1"
//             strokeLinecap="square"
//             strokeLinejoin="miter"
//             fill="none"
//             d={`
//               M25.817,7.014
//               C25.817,7.014 29.927,${topY} 29.927,${topY}
//               C30.379,${topCurveY1} 30.317,${topCurveY2} 29.791,${topCurveY3}
//               C29.260,${topCurveY4} 28.469,-0.197 28.011,${midControlY}
//               C28.011,${midControlY} 24.117,5.095 24.117,5.095
//               C20.953,1.898 16.947,0.147 12.707,0.147
//               C8.009,0.147 3.602,2.289 0.301,6.182
//               C-0.100,6.660 -0.100,7.362 0.301,7.840
//               C3.602,11.727 8.009,13.876 12.707,13.876
//               C16.947,13.876 20.953,12.131 24.117,8.927
//               C24.117,8.927 28.025,${bottomY} 28.025,${bottomY}
//               C28.594,${bottomCurveY1} 29.564,${bottomCurveY2} 29.805,${bottomCurveY3}
//               C30.337,${bottomCurveY4} 30.399,${bottomCurveY5} 29.941,${bottomCurveY6}
//               C29.941,${bottomCurveY6} 25.817,7.014 25.817,7.014
//               C25.817,7.014 25.817,7.014 25.817,7.014z
//             `}
//           />
//         </g>
//       </g>
//     </svg>
//   );
// };


















// import React, { useState, useEffect } from "react";

// interface FishIconProps extends React.SVGProps<SVGSVGElement> {
//   className?: string;
//   tailColor?: string;
//   bodyColor?: string;
//   animationDuration?: number; // in milliseconds, default 1800
// }

// const FishIcon: React.FC<FishIconProps> = ({
//   className,
//   tailColor = "#a3e635",
//   bodyColor = "#a3e635",
//   animationDuration = 3000,
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
    
//     const animationId = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationId);
//   }, [animationDuration]);

//   // Smooth easing function for natural movement
//   const easeInOutSine = (x: number): number => {
//     return -(Math.cos(Math.PI * x) - 1) / 2;
//   };

//   // Interpolate between keyframe values with easing
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

//   // Enhanced keyframes with subtle movement
//   const topY = interpolate([
//     [0, 0, 2.0],
//     [0.25, 0, 1.2],
//     [0.5, 0, 2.0],
//     [0.75, 0, 1.2],
//     [1, 0, 2.0]
//   ], frame);

//   const bottomY = interpolate([
//     [0, 0, 13.6],
//     [0.25, 0, 14.2],
//     [0.5, 0, 13.6],
//     [0.75, 0, 14.2],
//     [1, 0, 13.6]
//   ], frame);

//   // Add movement to the middle control point (the wing under)
//   const midControlY = interpolate([
//     [0, 0, 0.337],
//     [0.25, 0, 0.1],
//     [0.5, 0, 0.337],
//     [0.75, 0, 0.1],
//     [1, 0, 0.337]
//   ], frame);

//   // Parallel coordinates that should move with the tail
//   const topCurveY1 = interpolate([
//     [0, 0, 1.461],
//     [0.25, 0, 0.9],
//     [0.5, 0, 1.461],
//     [0.75, 0, 0.9],
//     [1, 0, 1.461]
//   ], frame);

//   const topCurveY2 = interpolate([
//     [0, 0, 0.654],
//     [0.25, 0, 0.3],
//     [0.5, 0, 0.654],
//     [0.75, 0, 0.3],
//     [1, 0, 0.654]
//   ], frame);

//   const topCurveY3 = interpolate([
//     [0, 0, 0.200],
//     [0.25, 0, -0.1],
//     [0.5, 0, 0.200],
//     [0.75, 0, -0.1],
//     [1, 0, 0.200]
//   ], frame);

//   const topCurveY4 = interpolate([
//     [0, 0, -0.259],
//     [0.25, 0, -0.5],
//     [0.5, 0, -0.259],
//     [0.75, 0, -0.5],
//     [1, 0, -0.259]
//   ], frame);

//   const bottomCurveY1 = interpolate([
//     [0, 0, 14.312],
//     [0.25, 0, 14.8],
//     [0.5, 0, 14.312],
//     [0.75, 0, 14.8],
//     [1, 0, 14.312]
//   ], frame);

//   const bottomCurveY2 = interpolate([
//     [0, 0, 14.008],
//     [0.25, 0, 14.5],
//     [0.5, 0, 14.008],
//     [0.75, 0, 14.5],
//     [1, 0, 14.008]
//   ], frame);

//   const bottomCurveY3 = interpolate([
//     [0, 0, 13.803],
//     [0.25, 0, 14.3],
//     [0.5, 0, 13.803],
//     [0.75, 0, 14.3],
//     [1, 0, 13.803]
//   ], frame);

//   const bottomCurveY4 = interpolate([
//     [0, 0, 13.344],
//     [0.25, 0, 13.9],
//     [0.5, 0, 13.344],
//     [0.75, 0, 13.9],
//     [1, 0, 13.344]
//   ], frame);

//   const bottomCurveY5 = interpolate([
//     [0, 0, 12.543],
//     [0.25, 0, 13.2],
//     [0.5, 0, 12.543],
//     [0.75, 0, 13.2],
//     [1, 0, 12.543]
//   ], frame);

//   const bottomCurveY6 = interpolate([
//     [0, 0, 12.009],
//     [0.25, 0, 12.6],
//     [0.5, 0, 12.009],
//     [0.75, 0, 12.6],
//     [1, 0, 12.009]
//   ], frame);

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
//         <clipPath id="fish-clip">
//           <rect width="39" height="22" x="0" y="0" />
//         </clipPath>
//       </defs>

//       <g clipPath="url(#fish-clip)">
//         <g transform="matrix(-1, 0, 0, -1, 34.2890625, 17.96875)">
//           {/* Main body with animated tail */}
//           <path
//             fill={bodyColor}
//             fillOpacity="1"
//             d={`
//               M25.817,7.014
//               C25.817,7.014 29.927,${topY} 29.927,${topY}
//               C30.379,${topCurveY1} 30.317,${topCurveY2} 29.791,${topCurveY3}
//               C29.260,${topCurveY4} 28.469,-0.197 28.011,${midControlY}
//               C28.011,${midControlY} 24.117,5.095 24.117,5.095
//               C20.953,1.898 16.947,0.147 12.707,0.147
//               C8.009,0.147 3.602,2.289 0.301,6.182
//               C-0.100,6.660 -0.100,7.362 0.301,7.840
//               C3.602,11.727 8.009,13.876 12.707,13.876
//               C16.947,13.876 20.953,12.131 24.117,8.927
//               C24.117,8.927 28.025,${bottomY} 28.025,${bottomY}
//               C28.594,${bottomCurveY1} 29.564,${bottomCurveY2} 29.805,${bottomCurveY3}
//               C30.337,${bottomCurveY4} 30.399,${bottomCurveY5} 29.941,${bottomCurveY6}
//               C29.941,${bottomCurveY6} 25.817,7.014 25.817,7.014
//               C25.817,7.014 25.817,7.014 25.817,7.014z
//             `}
//           />
//         </g>
//       </g>
//     </svg>
//   );
// };








import React, { useState, useEffect } from "react";

interface FishIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  tailColor?: string;
  bodyColor?: string;
  animationDuration?: number; // in milliseconds, default 1800
}

const FishIcon: React.FC<FishIconProps> = ({
  className,
  tailColor = "#ffb7f5",
  bodyColor = "#ffb7f5",
  animationDuration = 3000,
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
    
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [animationDuration]);

  // Smooth easing function for natural movement
  const easeInOutSine = (x: number): number => {
    return -(Math.cos(Math.PI * x) - 1) / 2;
  };

  // Interpolate between keyframe values with easing
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

  // Enhanced keyframes with subtle movement
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

  // Add movement to the middle control point (the wing under)
  const midControlY = interpolate([
    [0, 0, 0.337],
    [0.25, 0, 0.1],
    [0.5, 0, 0.337],
    [0.75, 0, 0.1],
    [1, 0, 0.337]
  ], frame);

  // Bottom wing opposite parallel - moves in opposite direction
  const midControlY2 = interpolate([
    [0, 0, 5.095],
    [0.25, 0, 5.4],
    [0.5, 0, 5.095],
    [0.75, 0, 5.4],
    [1, 0, 5.095]
  ], frame);

  // Parallel coordinates that should move with the tail
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
      {...props}
    >
      <defs>
        <clipPath id="fish-clip">
          <rect width="39" height="22" x="0" y="0" />
        </clipPath>
      </defs>

      <g clipPath="url(#fish-clip)">
        <g transform="matrix(-1, 0, 0, -1, 34.2890625, 17.96875)">
          {/* Main body with animated tail */}
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


export default FishIcon;