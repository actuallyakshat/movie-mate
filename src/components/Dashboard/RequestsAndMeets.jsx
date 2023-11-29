import ChatRequest from "./ChatRequest";
import UpcomingMeets from "./UpcomingMeets";
const RequestsAndMeets = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <ChatRequest />
      <UpcomingMeets />
    </div>
  );
};

export default RequestsAndMeets;
