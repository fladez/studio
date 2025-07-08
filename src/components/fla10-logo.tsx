import Image from 'next/image';
import React from 'react';

export function Fla10Logo() {
  return (
    <div className="relative h-10 w-10">
      <Image
        src="https://i.imgur.com/I51Hfzu.png"
        alt="Fla10 News Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
