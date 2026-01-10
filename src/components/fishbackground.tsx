'use client';

import React, { useState, useEffect, useRef } from "react";

interface FishIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  tailColor?: string;
  bodyColor?: string;
  swimSpeed?: number;
}

const FishIcon: React.FC<FishIconProps> = ({
  className,
  tailColor = "#a3e635",
  bodyColor = "#a3e635",
  swimSpeed = 1,
  ...props
}) => {
  const [frame, setFrame] = useState(0);
  const animationRef = useRef<number>();
  
  useEffect(() => {
    const startTime = Date.now();
    const tailDuration = 3000 / swimSpeed;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % tailDuration) / tailDuration;
      setFrame(progress);
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [swimSpeed]);

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

  const topY = interpolate([[0, 0, 2.0], [0.25, 0, 1.2], [0.5, 0, 2.0], [0.75, 0, 1.2], [1, 0, 2.0]], frame);
  const bottomY = interpolate([[0, 0, 13.6], [0.25, 0, 14.2], [0.5, 0, 13.6], [0.75, 0, 14.2], [1, 0, 13.6]], frame);
  const midControlY = interpolate([[0, 0, 0.337], [0.25, 0, 0.1], [0.5, 0, 0.337], [0.75, 0, 0.1], [1, 0, 0.337]], frame);
  const midControlY2 = interpolate([[0, 0, 5.095], [0.25, 0, 5.4], [0.5, 0, 5.095], [0.75, 0, 5.4], [1, 0, 5.095]], frame);
  const topCurveY1 = interpolate([[0, 0, 1.461], [0.25, 0, 0.9], [0.5, 0, 1.461], [0.75, 0, 0.9], [1, 0, 1.461]], frame);
  const topCurveY2 = interpolate([[0, 0, 0.654], [0.25, 0, 0.3], [0.5, 0, 0.654], [0.75, 0, 0.3], [1, 0, 0.654]], frame);
  const topCurveY3 = interpolate([[0, 0, 0.200], [0.25, 0, -0.1], [0.5, 0, 0.200], [0.75, 0, -0.1], [1, 0, 0.200]], frame);
  const topCurveY4 = interpolate([[0, 0, -0.259], [0.25, 0, -0.5], [0.5, 0, -0.259], [0.75, 0, -0.5], [1, 0, -0.259]], frame);
  const bottomCurveY1 = interpolate([[0, 0, 14.312], [0.25, 0, 14.8], [0.5, 0, 14.312], [0.75, 0, 14.8], [1, 0, 14.312]], frame);
  const bottomCurveY2 = interpolate([[0, 0, 14.008], [0.25, 0, 14.5], [0.5, 0, 14.008], [0.75, 0, 14.5], [1, 0, 14.008]], frame);
  const bottomCurveY3 = interpolate([[0, 0, 13.803], [0.25, 0, 14.3], [0.5, 0, 13.803], [0.75, 0, 14.3], [1, 0, 13.803]], frame);
  const bottomCurveY4 = interpolate([[0, 0, 13.344], [0.25, 0, 13.9], [0.5, 0, 13.344], [0.75, 0, 13.9], [1, 0, 13.344]], frame);
  const bottomCurveY5 = interpolate([[0, 0, 12.543], [0.25, 0, 13.2], [0.5, 0, 12.543], [0.75, 0, 13.2], [1, 0, 12.543]], frame);
  const bottomCurveY6 = interpolate([[0, 0, 12.009], [0.25, 0, 12.6], [0.5, 0, 12.009], [0.75, 0, 12.6], [1, 0, 12.009]], frame);

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
        <clipPath id={`fish-clip-${Math.random()}`}>
          <rect width="39" height="22" x="0" y="0" />
        </clipPath>
      </defs>
      <g clipPath={`url(#fish-clip-${Math.random()})`}>
        <g transform="matrix(-1, 0, 0, -1, 34.2890625, 17.96875)">
          <path
            fill={bodyColor}
            fillOpacity="1"
            d={`M25.817,7.014 C25.817,7.014 29.927,${topY} 29.927,${topY} C30.379,${topCurveY1} 30.317,${topCurveY2} 29.791,${topCurveY3} C29.260,${topCurveY4} 28.469,-0.197 28.011,${midControlY} C28.011,${midControlY} 24.117,${midControlY2} 24.117,${midControlY2} C20.953,1.898 16.947,0.147 12.707,0.147 C8.009,0.147 3.602,2.289 0.301,6.182 C-0.100,6.660 -0.100,7.362 0.301,7.840 C3.602,11.727 8.009,13.876 12.707,13.876 C16.947,13.876 20.953,12.131 24.117,8.927 C24.117,8.927 28.025,${bottomY} 28.025,${bottomY} C28.594,${bottomCurveY1} 29.564,${bottomCurveY2} 29.805,${bottomCurveY3} C30.337,${bottomCurveY4} 30.399,${bottomCurveY5} 29.941,${bottomCurveY6} C29.941,${bottomCurveY6} 25.817,7.014 25.817,7.014 C25.817,7.014 25.817,7.014 25.817,7.014z`}
          />
        </g>
      </g>
    </svg>
  );
};

interface FishData {
  id: number;
  y: number;
  size: number;
  speed: number;
  direction: 'left' | 'right';
  color: string;
  delay: number;
  floatAmount: number;
}

export function FishBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fishRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [fishes] = useState<FishData[]>(() => {
    const colors = ['#a3e635', '#84cc16', '#65a30d', '#4d7c0f', '#fbbf24', '#f59e0b'];
    return Array.from({ length: 10 }, (_, i) => ({
      id: i,
      y: Math.random() * 70 + 15,
      size: Math.random() * 1.5 + 0.6,
      speed: Math.random() * 0.5 + 0.5,
      direction: Math.random() > 0.5 ? 'left' : 'right' as 'left' | 'right',
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 8,
      floatAmount: Math.random() * 15 + 10,
    }));
  });

  useEffect(() => {
    const animateFish = (fish: FishData, element: HTMLDivElement) => {
      const containerWidth = containerRef.current?.offsetWidth || 1000;
      const startX = fish.direction === 'right' ? -100 : containerWidth + 100;
      const endX = fish.direction === 'right' ? containerWidth + 100 : -100;
      const duration = (40000 / fish.speed) + fish.delay * 1000;
      
      let startTime: number | null = null;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp - (fish.delay * 1000);
        const elapsed = timestamp - startTime;
        const progress = (elapsed % duration) / duration;
        
        const x = startX + (endX - startX) * progress;
        const floatY = Math.sin(progress * Math.PI * 4) * fish.floatAmount;
        
        element.style.transform = `translate(${x}px, ${floatY}px) scaleX(${fish.direction === 'left' ? -1 : 1})`;
        
        requestAnimationFrame(animate);
      };
      
      requestAnimationFrame(animate);
    };

    fishRefs.current.forEach((ref, i) => {
      if (ref) animateFish(fishes[i], ref);
    });
  }, [fishes]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        background: '#7BD3EA',
      }}
    >
      {fishes.map((fish, index) => (
        <div
          key={fish.id}
          ref={el => { fishRefs.current[index] = el; }}
          style={{
            position: 'absolute',
            top: `${fish.y}%`,
            left: 0,
            width: `${40 * fish.size}px`,
            height: `${25 * fish.size}px`,
            willChange: 'transform',
            opacity: 0.3,
          }}
        >
          <FishIcon bodyColor={fish.color} swimSpeed={fish.speed} />
        </div>
      ))}
    </div>
  );
}