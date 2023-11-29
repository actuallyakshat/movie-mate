import React, { Component, useState, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../ChatList/Avatar";
import ChatItem from "./ChatItem";
import { FaPaperPlane } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "https://i.pinimg.com/736x/71/31/24/7131240f4430f53f86bf834498d71982.jpg",
      type: "",
      msg: "So, we are meeting for the movie tonight right?",
    },
    {
      key: 2,
      image:
        "https://i.pinimg.com/564x/5f/26/b0/5f26b0de987b29763f3aff21dc606c01.jpg",
      type: "other",
      msg: "Yes, I am in",
    },
    {
      key: 3,
      image:
        "https://i.pinimg.com/564x/5f/26/b0/5f26b0de987b29763f3aff21dc606c01.jpg",
      type: "other",
      msg: "I'll see you at 7?",
    },
    {
      key: 4,
      image:
        "https://i.pinimg.com/736x/71/31/24/7131240f4430f53f86bf834498d71982.jpg",
      type: "",
      msg: "Great! That works :)",
    },
    {
      key: 5,
      image:
        "https://i.pinimg.com/564x/5f/26/b0/5f26b0de987b29763f3aff21dc606c01.jpg",
      type: "other",
      msg: "Alright, I can't wait for this movie. I've been waiting for this for so long",
    },
    {
      key: 6,
      image:
        "https://i.pinimg.com/736x/71/31/24/7131240f4430f53f86bf834498d71982.jpg",
      type: "",
      msg: "IKR? Me too!",
    },
    {
      key: 7,
      image:
        "https://i.pinimg.com/564x/5f/26/b0/5f26b0de987b29763f3aff21dc606c01.jpg",
      type: "other",
      msg: "Haha, Alright. I'll see you tonight. Bye!",
    },
    {
      key: 8,
      image:
        "https://i.pinimg.com/736x/71/31/24/7131240f4430f53f86bf834498d71982.jpg",
      type: "",
      msg: "Bye!",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
              "https://i.pinimg.com/736x/71/31/24/7131240f4430f53f86bf834498d71982.jpg",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://i.pinimg.com/564x/5f/26/b0/5f26b0de987b29763f3aff21dc606c01.jpg"
              />
              <p>Akshat Aggarwal</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body scrollbar" id="style-4">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles flex justify-center items-center">
              <FaPaperclip />
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg flex justify-center items-center" id="sendMsgBtn">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
