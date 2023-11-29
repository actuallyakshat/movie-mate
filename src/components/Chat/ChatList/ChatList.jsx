import { Component } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaEllipsis } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import ChatListItems from "./ChatListItems";
export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://i.pinimg.com/564x/5f/26/b0/5f26b0de987b29763f3aff21dc606c01.jpg",
      id: 1,
      name: "Akshat Aggarwal",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://i.pinimg.com/564x/f2/d9/2d/f2d92d88ec6c94c995c64c78790d2748.jpg",
      id: 2,
      name: "Vishesh Shah",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://i.pinimg.com/564x/5e/44/56/5e44569d4f6c6e3ad62340e61da7a577.jpg",
      id: 3,
      name: "Om Sharma",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://i.pinimg.com/564x/c5/3b/13/c53b1363b75bb34c56cee9bbfe47426d.jpg",
      id: 4,
      name: "Nehal Dubey",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://i.pinimg.com/564x/43/af/9a/43af9ab2cc9103b5fe65a29590db90ff.jpg",
      id: 5,
      name: "Dhruv Kaushik",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://i.pinimg.com/564x/4b/6f/48/4b6f48ef90bc78a6d9cda9bdd1bbefa8.jpg",
      id: 6,
      name: "Avni Das",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://i.pinimg.com/564x/41/1d/7d/411d7d25b21d9295279fd0bcd6251504.jpg",
      id: 7,
      name: "Abhishek Mishra",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://i.pinimg.com/564x/73/f8/ca/73f8caa5eb7a6fe452f140188c8a1171.jpg",
      id: 8,
      name: "Aryan Naik",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://i.pinimg.com/564x/0f/ab/5e/0fab5e9c3a7e18231d55a92c15f7f529.jpg",
      id: 9,
      name: "Khushi Mahajan",
      active: false,
      isOnline: true,
    },
    {
      image: "https://i.pinimg.com/564x/16/9e/1e/169e1e5702d87898675d533d3b0ca95b.jpg",
      id: 10,
      name: "Sakshi Pandey",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="flex flex-col gap-4 px-2">
        <button className="flex gap-2 w-[85%] items-center bg-white border-[none] outline-none cursor-pointer py-2 pr-3 pl-2 text-[1.1rem] rounded-md shadow-md shadow-[rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out hover:bg-darkGreen hover:text-white">
          <FaPlus className="flex h-full w-fit pr-2 border-r-[2px] scale-[0.7] items-center justify-center" />
          <span className="text-[1rem]">New Conversation</span>
        </button>
        <div className="flex justify-between items-center mt-2">
          <h2 className="text-[1.5rem] font-Kanit font-[500] uppercase">
            Chats
          </h2>
          <button>
            <FaEllipsis className="text-gray-700" />
          </button>
        </div>
        <div>
          <div className="bg-white bg-opacity-60 flex gap-3 text-darkGreen rounded-lg p-2 shadow-md shadow-[rgba(0,0,0,0.2)]">
            <input
              type="text"
              placeholder="Search Here"
              required
              className="bg-transparent outline-none text-[1.1rem] px-2"
            />
            <button>
              <FaSearch className="text-xl w-fit pr-2 text-darkGreen" />
            </button>
          </div>
        </div>
        <div className="mt-[30px] overflow-auto scrollbar" id="style-4">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
