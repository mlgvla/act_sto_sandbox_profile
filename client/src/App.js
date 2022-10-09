import "./App.css"
import EditProfile from "./components/EditProfile"
import CurrentProfile from "./components/CurrentProfile"
import React, { useState, useEffect } from "react"
import NavBar from "./components/NavBar"
// import Profiles from "./components/Profiles"

function App() {
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useState({
    profile: {},
  })
  const [profiles, setProfiles] = useState([])
  const [currentProfile, setCurrentProfile] = useState({})

  useEffect(() => {
    fetch("/users/1")
      .then((r) => r.json())
      .then((user) => {
        setCurrentUser(user)
        setCurrentProfile(user.profile)
      })
  }, [])

  useEffect(() => {
    fetch("/profiles")
      .then((r) => r.json())
      .then(setProfiles)
  }, [currentProfile])

  console.log(profiles)
  console.log(currentProfile)

  function handleUpdateProfilePicUrl(profile_pic_url) {
    const newProfileObj = { ...currentProfile }
    newProfileObj.profile_pic_url = profile_pic_url
    setCurrentProfile(newProfileObj)
  }

  function handleUpdateProfile(profileData) {
    const newProfileObj = { ...currentProfile }
    newProfileObj.first_name = profileData.first_name
    newProfileObj.last_name = profileData.last_name
    newProfileObj.email = profileData.email
    newProfileObj.user_id = profileData.user_id
    setCurrentProfile(newProfileObj)
  }

  return (
    <div className="App">
      <NavBar profile={currentProfile} />
      <EditProfile
        onUpdateProfilePic={handleUpdateProfilePicUrl}
        onUpdateProfile={handleUpdateProfile}
        profile={currentProfile}
      />
      <CurrentProfile profile={currentProfile} />
    </div>
  )
}

export default App
