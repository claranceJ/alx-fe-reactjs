// src/components/Profile.jsx
import React from "react";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <nav>
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
};

const ProfileRoutes = () => (
  <Routes>
    <Route path="/" element={<Profile />} >
      <Route path="details" element={<ProfileDetails />} />
      <Route path="settings" element={<ProfileSettings />} />
    </Route>
  </Routes>
);

export default ProfileRoutes;
