// import React from 'react'
// import SearchBar from './SearchBar'
// import pp from "../assets/pp.png"
// import pp2 from "../assets/pp2.jpg"
// import pp3 from "../assets/pp3.jpg"
 
// import { CircularProgress } from '@mui/material'
// function Chat() {
  
//   return (
//     <div>
      
//     <h1 style={{ marginTop: "2px"   }}>Recent Chats</h1>
//     <SearchBar/>
//     <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
//       <img src={pp} alt="User Avatar" style={{ width: "60px", height: "60px", borderRadius: "50%", marginRight: "10px" }} />
//       <div>
//         <h3 style={{ margin: "0", fontSize: "18px" }}>John Doe</h3>
//         <p style={{ margin: "0", fontSize: "16px", color: "#888" }}>Hey, how are you?</p>
//       </div>
//     </div>
//     <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
//       <img src={pp2} alt="User Avatar" style={{ width: "60px", height: "60px", borderRadius: "50%", marginRight: "10px"  }} />
//       <div>
//         <h3 style={{ margin: "0", fontSize: "18px" }}>Jane Smith</h3>
//         <p style={{ margin: "0", fontSize: "16px", color: "#888" }}>Meeting at 2 PM</p>
//       </div>
//     </div>
//     <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
//       <img src={pp3} alt="User Avatar" style={{ width: "60px", height: "60px", borderRadius: "50%", marginRight: "10px" }} />
//       <div>
//         <h3 style={{ margin: "0", fontSize: "18px" }}>Alex Johnson</h3>
//         <p style={{ margin: "0", fontSize: "16px", color: "#888" }}>Let's catch up later</p>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Chat

import useConversation from "../../zustand/useConversation";

const Chat = ({ conversation, lastIdx  }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

	return (
		<>
			<div
				className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				${isSelected ? "bg-sky-500" : ""}
			`}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className={`avatar ${isOnline ? "online" : ""}`}>
					<div className='w-12 rounded-full'>
						<img src={conversation.profilePic} alt='user avatar' />
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>{conversation.fullName}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>

			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
		</>
	);
};
export default Chat;