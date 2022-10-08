import React from "react"
import "../App.css"

function CurrentProfile({ profile }) {
  const { profile_pic_url, first_name } = profile
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", margin: "1rem" }}>
        <img src={profile_pic_url} style={{ width: "25%" }} alt="" />
      </div>
      <div>{first_name}</div>
    </>
  )
}

export default CurrentProfile
