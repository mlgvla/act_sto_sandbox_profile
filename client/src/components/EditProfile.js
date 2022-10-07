import React, { useState, useEffect } from "react"

function EditProfile({ onUpdateProfilePic, onUpdateProfile, profile }) {
  const { first_name, last_name, email, user_id } = profile

  const [profileData, setProfileData] = useState({})

  const [profilePicData, setProfilePicData] = useState({
    profile_pic: "",
  })

  useEffect(() => {
    setProfileData({
      first_name: first_name,
      last_name: last_name,
      email: email,
      user_id: user_id
    })
  }, [profile, first_name, last_name, email, user_id])

  function handleChange(e) {
    setProfileData({ ...profileData, [e.target.name]: e.target.value })
  }

  function handleImageChange(e) {
    setProfilePicData({ ...profilePicData, [e.target.name]: e.target.files[0] })
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch(`/profiles/${profile.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(profileData)
    })
    .then(res => res.json())
    .then(data => onUpdateProfile(data))
  }

  function handleProfilePicSubmit(e) {
    e.preventDefault()
    const pic = new FormData()

    pic.append("profile_pic", profilePicData.profile_pic)
    pic.append("id", profile.id)

    fetch("/update_profile_pic", {
      method: "PATCH",
      body: pic,
    })
      .then((res) => res.json())
      .then((profile) => onUpdateProfilePic(profile.profile_pic_url))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          // placeholder="First Name"
          value={profileData.first_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="last_name"
          // placeholder="Last Name"
          value={profileData.last_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          // placeholder="Email"
          value={profileData.email}
          onChange={handleChange}
        />
        <button type="submit">Submit Profile</button>
      </form>

      <form onSubmit={handleProfilePicSubmit}>
        <input
          type="file"
          accept="image/*"
          multiple={false}
          name="profile_pic"
          filename={profilePicData.profile_pic}
          onChange={handleImageChange}
        />
        <button type="submit">Change Profile Picture</button>
      </form>
    </div>
  )
}

export default EditProfile
