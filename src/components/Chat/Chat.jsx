import ChatList from "./ChatList/ChatList";
import ChatContent from "./ChatBody/ChatContent";

const Chat = () => {
  return (
    <div className="bg-[#dcdade] flex flex-grow px-[1rem] pb-[1.2rem] pt-10 rounded-[10px] h-[85vh] w-[90vw] mt-24 mx-auto mb-10">
      <ChatList />
      <ChatContent />
    </div>
  );
};

export default Chat;
