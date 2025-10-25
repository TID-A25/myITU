// src/pages/ProfilesPage.jsx
import React from 'react';
import { profilesByInterest } from './data/mockProfiles';
import ProfileSection from './components/ProfileSection';

// This is the main scrollable Profiles Page
// It renders the header, profile sections and the bottom nav

export default function ProfilesPage() {
  return (
    <div>
      {/* Top Header with page tabs - mock version */}
      <header className="app-header">
        <h1>mITU</h1>
        <nav>
          <span className="active">Profiles</span>
          <span>|</span>
          <span>Events</span>
        </nav>
      </header>

      {/* Render all interest-based sections */}
      {Object.entries(profilesByInterest).map(([interest, profiles]) => (
        <ProfileSection key={interest} title={interest} profiles={profiles} />
      ))}

      {/* Bottom navigation bar - mock version */}
      <footer className="bottom-nav">
        <span>Notifications</span>
        <span>Home</span>
        <span>Profile</span>
      </footer>
    </div>
  );
}