import React from 'react';
import ProfileCard from './ProfileCard';
import './HorizontalScroller.css';

export default function HorizontalScroller({ profiles }) {
  return (
    <div className="horizontal-scroller">
      {profiles.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
    </div>
  );
}