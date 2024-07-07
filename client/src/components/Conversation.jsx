import { useSocketContext } from "../context/SocketContext";
import { useConversation } from "../context/UseConversation";

const Conversation = ({ conversation }) => {
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
        <div
          className={`flex flex-col flex-1 ${
            isSelected ? "sidebar-single-chat-selected" : "sidebar-single-chat"
          }`}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <div className={`avatar ${isOnline ? "online" : ""}`}>
              <div className="rounded-full">
                <img
                  src={conversation.profilePic}
                  alt="user avatar"
                  width="auto"
                  height="60px"
                />
              </div>
            </div>
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Conversation;
