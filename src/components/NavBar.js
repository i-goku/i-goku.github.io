import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

const NavBar = () => {
  return (
    <header className="bg-yellow-400">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-yellow-100 hover:text-blue-800 text-4xl font-bold cursive tracking-widest"
          >
            Sunny
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-green-200 bg-yellow-500"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-100 hover:text-blue-800"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-green-200 bg-yellow-500"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-100 hover:text-blue-800"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-green-200 bg-yellow-500"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-100 hover:text-blue-800"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/i-sunny/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.github.com/i-goku/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  )
}

export default NavBar
