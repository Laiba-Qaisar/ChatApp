import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useConversation } from "../context/UseConversation";
import useGetConversations from "../hooks/useGetConversations";

function SearchBar() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  useEffect(() => {
    if (search.length >= 3) {
      const conversation = conversations.find((c) =>
        c.fullName.toLowerCase().includes(search.toLowerCase())
      );

      if (conversation) {
        setSelectedConversation(conversation);
      }
    }
  }, [search, conversations, setSelectedConversation]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div
      style={{ marginBottom: "20px", display: "flex", flexDirection: "column" }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <SearchIcon style={{ fontSize: 24, color: "#888" }} />
        <input
          type="text"
          placeholder="Search..."
          style={{
            padding: "8px",

            width: "100%",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
          value={search}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}

export default SearchBar;
