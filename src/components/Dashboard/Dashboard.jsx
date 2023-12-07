import Sidebar from "./Sidebar";
import Content from "./Content"
const Dashboard = (setIsLoggedIn) => {
  return (
    <div className="flex">
      <Sidebar setIsLoggedIn={setIsLoggedIn}/>
      <Content />
    </div>
  );
};

export default Dashboard;
