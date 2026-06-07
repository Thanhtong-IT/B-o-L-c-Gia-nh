import React, { useMemo } from 'react';
import './FallingPetals.css';

const LEAF_COLORS = ['#f6d365', '#f59e0b', '#d97706', '#b45309', '#92400e'];

export default function FallingPetals() {
  const leaves = useMemo(() => {
    return Array.from({ length: 30 }).map((_, index) => ({
      id: index,
      left: Math.random() * 100,
      size: 12 + Math.random() * 18,
      duration: 4 + Math.random() * 5,
      delay: -Math.random() * 8,
      drift: -160 + Math.random() * 320,
      rotate: 360 + Math.random() * 900,
      opacity: 0.25 + Math.random() * 0.35,
      color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
    }));
  }, []);

  return (
    <div className="falling-petals" aria-hidden="true">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="falling-petal"
          style={{
            '--left': `${leaf.left}vw`,
            '--size': `${leaf.size}px`,
            '--leaf-color': leaf.color,
            '--opacity': leaf.opacity,
            '--duration': `${leaf.duration}s`,
            '--delay': `${leaf.delay}s`,
            '--drift': `${leaf.drift}px`,
            '--rotate': `${leaf.rotate}deg`,
          }}
        >
          <div className="leaf-body" style={{ '--leaf-color': leaf.color }} />
        </div>
      ))}
    </div>
  );
}
