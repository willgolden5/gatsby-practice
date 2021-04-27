// src/pages/account.js
import React from "react"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import { Link } from "gatsby"
import NycSilhouette from "../assets/nycsvg.svg"


const Home = ({ user }) => {
  return <p>Hi, {user.name ? user.name : "friend"}!</p>
}
const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <>
      <nav>
        <Link to="/account/">Home</Link>{" "}
        <Link to="/account/settings/">Settings</Link>{" "}
        <Link to="/account/billing/">Billing</Link>{" "}
        <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a>
      </nav>
      <div id="Clouds">
              <div class="Cloud Foreground"></div>
              <div class="Cloud Background"></div>
              <div class="Cloud Foreground"></div>
              <div class="Cloud Background"></div>
              <div class="Cloud Foreground"></div>
              <div class="Cloud Background"></div>
              <div class="Cloud Background"></div>
              <div class="Cloud Foreground"></div>
              <div class="Cloud Background"></div>
              <div class="Cloud Background"></div>
              {/* <svg viewBox="0 0 40 24" class="Cloud">
                <use xlink:href="#Cloud"></use>
              </svg> */}
        </div>
      <NycSilhouette />
      <Router>
        <Home path="/account/" user={user} />
        <Settings path="/account/settings" />
        <Billing path="/account/billing" />
      </Router>
    </>
  )
}

export default Account