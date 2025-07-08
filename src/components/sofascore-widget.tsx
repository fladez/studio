
'use client';

import React from 'react';

export function SofascoreWidget() {
  return (
    <div className="mx-auto w-full max-w-[768px]">
      <iframe
        id="sofa-standings-embed-83-72034"
        src="https://widgets.sofascore.com/embed/tournament/83/season/72034/standings/Brasileiro%20Serie%20A%202025?widgetTitle=Brasileiro%20Serie%20A%202025&showCompetitionLogo=true"
        style={{ height: '1123px' }}
        className="w-full border-0"
        scrolling="no"
        title="Sofascore standings widget"
      ></iframe>
      <div className="text-xs font-sans text-left mt-1 text-muted-foreground">
        Standings provided by <a target="_blank" rel="noopener noreferrer" href="https://www.sofascore.com/tournament/football/brazil/brasileirao-serie-a/325#id:72034" className="underline text-primary">Sofascore</a>
      </div>
    </div>
  );
}
