import React from "react";
import verifiedBadge from "../assets/Verified.svg";
import { mockProfileData } from "../data/mockProfiles.js";
import coverPhoto from "../assets/Coverpicture.jpg";
import profilePicture from "../assets/Chad.jpg";
import globe from "../assets/Globe.svg";
import hat from "../assets/Graduation_hat.svg";
import settingsIcon from "../assets/Settings.svg";
import InterestCard from "../components/InterestCard.jsx";
import { Link } from "react-router-dom";

export default function OtherUserProfile() {
  {
    /*We load the first element in the mock data list*/
  }
  const profile = mockProfileData[1];

  return (
    <div>
      {/* Header photo and cover photo */}

      <div className="header-wrap">
        <div className="cover-photo-header">
          <img src={coverPhoto} alt="Cover" />
        </div>

        <div className="profile-picture-header">
          <img
            src={profilePicture}
            alt="Profile Picture"
            className="profile-img"
          />
          <Link to="/bump-sent">
            <button className="bump-button">Bump</button>
          </Link>
        </div>
      </div>

      {/* Profile info on the page */}
      <div className="profile-info">
        <div className="name-row">
          <h3>{profile.name}</h3>
          <img src={verifiedBadge} className="badge" alt="Verified badge" />
        </div>

        <div className="info-row">
          <img src={hat} className="hat" alt="Graduation hat" />
          <p>
            {profile.degree}, {profile.semester}
          </p>
        </div>

        <div className="info-row">
          <img src={globe} className="globe" alt="Globus" />
          <p>{profile.country}</p>
        </div>
      </div>

      {/* Interests row*/}
      <div className="interests-row">
        <h3>Interests</h3>
        <InterestCard interest={profile.interest} />
      </div>
    </div>
  );
}
