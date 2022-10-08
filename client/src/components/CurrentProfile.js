import React from "react"
import "../App.css"

function CurrentProfile({ profile }) {
  const { profile_pic_url, first_name } = profile
  return (
    <div className="profile-container">
      <div className="card">
        <img src={profile_pic_url} alt="" style={{ width: "100%" }} />
        <div className="container">
          <h4>
            <b>{first_name}</b>
          </h4>
        </div>
      </div>
    </div>
  )
}

export default CurrentProfile
