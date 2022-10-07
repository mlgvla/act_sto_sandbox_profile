import "./App.css"
import EditProfile from "./components/EditProfile"
import Profile from "./components/Profile"
import React, { useState, useEffect } from "react"
import Navbar from "./components/Navbar"

function App() {
  const [currentUser, setCurrentUser] = useState({
    profile: {},
  })
  const [currentProfile, setCurrentProfile] = useState({})

  useEffect(() => {
    fetch("/users/3")
      .then((r) => r.json())
      .then((user) => {
        setCurrentUser(user)
        setCurrentProfile(user.profile)
      })
  }, [])

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
      <Navbar profile={currentProfile}/>
      <EditProfile
        onUpdateProfilePic={handleUpdateProfilePicUrl}
        onUpdateProfile={handleUpdateProfile}
        profile={currentProfile}
      />
      <Profile profile={currentProfile} />
    </div>
  )
}

export default App
