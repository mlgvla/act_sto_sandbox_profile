import React from "react"
import { Navbar, Dropdown } from 'flowbite-react'


function NavBar({ profile }) {
  const { first_name, last_name, email, profile_pic_url } = profile

  return (
    <>
<Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<img class="w-10 h-10 rounded-full" src={profile_pic_url} alt="Rounded avatar"/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          {first_name} {last_name}
        </span>
        <span className="block truncate text-sm font-medium">
          {email}
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Dashboard
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>

      {/* <div className="navbar">
        <div>Active Storage User/Profile Demo</div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div>Hi, {first_name}</div>
          <img className="avatar" src={profile_pic_url} alt="" />
        </div>
      </div>
      <hr /> */}
    </>
  )
}

export default NavBar
