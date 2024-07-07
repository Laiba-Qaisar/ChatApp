import React from "react";
import SearchBar from "./SearchBar";
import Conversations from "./Conversations";
import LogoutButton from "./Logout";

function AppSidebar() {
  const sidebarStyle = {
    border: "2px solid #ddd",
    borderRadius: 10,
    padding: 20,
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9",
    marginTop: "8px",
  };

  return (
    <div style={sidebarStyle}>
      <SearchBar />
      <Conversations />
      <LogoutButton />
    </div>
  );
}

export default AppSidebar;
