import React from "react";
import InterestCard from "./InterestCard";

export default function InterestScroller({ profiles }) {
  
/**
 * Interest scroller component
 * Displays interests from a profile as cards in a horizontal scroll layout,
 * on a single profile page
 */

  const interests = profiles.map((profile) => profile.interest);

  return (
    <div className="horizontal-scroll">
      {interests.map((interest, i) => (
        <InterestCard key={i} interest={interest} />
      ))}
    </div>
  );
}