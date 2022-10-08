import React from "react"
import ProfileCard from "./ProfileCard"

function Profiles({ profiles }) {
  const profileCards = profiles.map((profile) => (
    <ProfileCard key={profile.id} profile={profile} />
  ))
  return <div className="profiles-container">{profileCards}</div>
}

export default Profiles
