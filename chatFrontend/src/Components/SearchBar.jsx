import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

function SearchBar() {
  const handleSearch = (e) => {
    // Handle search functionality here
    console.log("Searching for:", e.target.value);
  };

  const handleButton1Click = () => {
    // Handle button 1 click
    console.log("Button 1 clicked");
  };

  const handleButton2Click = () => {
    // Handle button 2 click
    console.log("Button 2 clicked");
  };

  return (
    <div style={{ marginBottom: "20px", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <SearchIcon style={{ fontSize: 24, color: "#888" }} />
   
        <input
          type="text"
          placeholder="Search..."
          style={{
            padding: "8px",
            width: "300px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            
          }}
          onChange={handleSearch}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="outlined"
          style={{
            padding: "8px 16px",
            fontSize: "10px",
            color: "#818589",
            marginRight: "10px",
            borderRadius: "4px",
            borderColor:"black",
              marginLeft:"20px"
          }}
          onMouseEnter={(e) => e.target.style.background = "#D3D3D3"}
          onMouseLeave={(e) => e.target.style.background = "transparent"}
          onClick={handleButton1Click}
        >
          Read
        </Button>
        <Button
          variant="outlined"
          style={{
            padding: "8px 16px",
            fontSize: "10px",
            color: "#818589",
            borderRadius: "4px",
             borderColor:"black",
             
          }}
          onMouseEnter={(e) => e.target.style.background = "#D3D3D3"}
          onMouseLeave={(e) => e.target.style.background = "transparent"}
          onClick={handleButton2Click}
        >
        Unread
        </Button>
      </div>
    </div>
  );
}

export default SearchBar;
