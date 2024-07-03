import React from "react";
import SearchBar from "./SearchBar";
import Conversations from "./Conversations";
import LogoutButton from "./logout";

function AppSidebar() {
 
  const sidebarStyle = {
    border: "2px solid #ddd", // Adding a solid border with a light gray color
    borderRadius: 10, // Adding border radius for a softer look
    padding: 20, // Adding padding inside the sidebar
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Adding a subtle shadow for depth
    backgroundColor: "#f9f9f9", // Setting a light background color
    marginTop: '8px'
  //  width: '100%', // Adjusted to take full width of the parent container
 // height: '100%', // Adjusted to take full height of the parent container

 
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
