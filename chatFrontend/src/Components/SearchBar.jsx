import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import useConversation from '../zustand/useConversation';
import useGetConversations from '../hooks/useGetConversations';
import toast from 'react-hot-toast';

function SearchBar() {
  const [search, setSearch] = useState('');
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
    <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px'  }}>
        <SearchIcon style={{ fontSize: 24, color: '#888' }} />
        <input
          type='text'
          placeholder='Search...'
          style={{
            padding: '8px',
            // width: '300px',
            width: '100%',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            
          }}
          value={search}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}

export default SearchBar;
/////////////////////////////////////////------------------------------------------///////////////////////////////
// import React, { useState, useEffect } from 'react';
// import SearchIcon from '@mui/icons-material/Search';
// import useConversation from '../zustand/useConversation';
// import useGetConversations from '../hooks/useGetConversations';

// function SearchBar() {
//   const [search, setSearch] = useState('');
//   const [matchedConversations, setMatchedConversations] = useState([]);
//   const { setSelectedConversation } = useConversation();
//   const { conversations } = useGetConversations();

//   useEffect(() => {
//     if (search.length >= 3) {
//       const matches = conversations.filter((c) =>
//         c.fullName.toLowerCase().includes(search.toLowerCase())
//       );
//       setMatchedConversations(matches);
//     } else {
//       setMatchedConversations([]);
//     }
//   }, [search, conversations]);

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value);
//   };

//   const handleSelectConversation = (conversation) => {
//     setSelectedConversation(conversation);
//     setSearch(''); // Clear search input after selection
//     setMatchedConversations([]); // Clear matched conversations after selection
//   };

//   return (
//     <div style={{ marginBottom: '20px' }}>
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//         <SearchIcon style={{ fontSize: 24, color: '#888', marginRight: '10px' }} />
//         <input
//           type='text'
//           placeholder='Search...'
//           style={{
//             flex: 1,
//             padding: '8px',
//             fontSize: '16px',
//             border: '1px solid #ccc',
//             borderRadius: '4px',
//           }}
//           value={search}
//           onChange={handleSearchChange}
//         />
//       </div>
//       {matchedConversations.length > 0 && (
//         <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
//           {matchedConversations.map((conversation) => (
//             <div
//               key={conversation.id}
//               style={{
//                 padding: '10px',
//                 borderBottom: '1px solid #ccc',
//                 cursor: 'pointer',
//               }}
//               onClick={() => handleSelectConversation(conversation)}
//             >
//               {conversation.fullName}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default SearchBar;
