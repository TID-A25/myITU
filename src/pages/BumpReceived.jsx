import React from "react";
import { mockProfileData } from "../data/mockProfiles.js";
import profilePicture from "../assets/Athena.jpg";
import otherProfilePicture from "../assets/Chad.jpg";
import confetti_orange from "../assets/Confetti_orange.svg";
import confetti_teal from "../assets/Confetti_teal.svg";
import buttonBig from "../assets/Button_Big.jsx";
import buttonBack from "../assets/Button_Back.jsx";
import buttonDecline from "../assets/Button_Decline.jsx";
import InterestCard from "../components/InterestCard.jsx";

export default function BumpReceived() {
  // load first and second element of mock data list, Athena and Chad
  const you = mockProfileData[0];
  const other = mockProfileData[1];

  return (
    <div>
      <img src={profilePicture} alt={you.name} width="100" />
      <img src={otherProfilePicture} alt={other.name} width="100" />

      <h1>{other.name} bumped into you!</h1>

      <p>You both like:</p>
      <InterestCard interest={you.interest} />
    </div>
  );
}
