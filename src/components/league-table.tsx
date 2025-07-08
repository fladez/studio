"use client"

import Script from "next/script"

export function LeagueTable() {
  return (
    <>
      <div
        id="wg-api-football-standings"
        data-host="v3.football.api-sports.io"
        data-key="783e0bb49a8acefbd0c17a90fedf76b2"
        data-league="71"
        data-team="127"
        data-season="2025"
        data-theme=""
        data-show-errors="false"
        data-show-logos="true"
        className="wg_loader"
      ></div>
      <Script
        type="module"
        src="https://widgets.api-sports.io/2.0.3/widgets.js"
        strategy="lazyOnload"
      />
    </>
  )
}
