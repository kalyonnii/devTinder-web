import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { Socket } from "socket.io-client";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Chat = () => {
  const { toUserId } = useParams();
  const [messages, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState();
  console.log(toUserId);
  const user = useSelector((store) => store.user);
  console.log(user);
  const userId = user?._id;

  const fetchChatMessages = async () => {
    try {
      const chat = await axios.get(BASE_URL + "/chat/" + toUserId, {
        withCredentials: true
      });

      console.log(chat.data.messages);

      const chatMessages = chat.data.messages.map((msg) => {
        return {
          firstName: msg.senderId.firstName,
          lastName: msg.senderId.lastName,
          text: msg.text
        };
      });

      setMessage(chatMessages);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchChatMessages();
  }, []);
  useEffect(() => {
    if (!userId) {
      return;
    }
    const socket = createSocketConnection();
    // as soon as the page loaded the socket connection is made and joinChat event is emitted
    socket.emit("joinChat", {
      firstName: user.firstName,
      lastName: user.lastName,
      userId,
      toUserId
    });
    socket.on("messageReceived", ({ firstName, lastName, text }) => {
      console.log("Received:", firstName, lastName, text);
      setMessage((messages) => [...messages, { firstName, lastName, text }]);
    });
    return () => {
      socket.disconnect();
    };
  }, [userId, toUserId]);

  const sendMessage = () => {
    const socket = createSocketConnection();

    socket.emit("sendMessage", {
      firstName: user.firstName,
      lastName: user.lastName,
      userId,
      toUserId,
      text: newMessage
    });
    setNewMessage("");
  };
  return (
    <div className="w-3/4 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col">
      <h1 className="p-5 border-b border-gray-600 ">Chat</h1>
      <div className="flex-1 overflow-scroll p-5">
        {messages.map((msg, index) => {
          return (
            <>
              <div
                key={index}
                className={
                  "chat " +
                  (user.firstName == msg?.firstName ? "chat-end" : "chat-start")
                }
              >
                <div className="chat-header">
                  {`${msg?.firstName} ${msg?.lastName}`}
                  <time className="text-xs opacity-50">2 hours ago</time>
                </div>
                <div className="chat-bubble">{msg.text}</div>
                <div className="chat-footer opacity-50">Seen</div>
              </div>
            </>
          );
        })}
      </div>
      <div className="p-5 border-t border-gray-600 flex items-center gap-2">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border border-gray-600 text-white rounded p-2"
        ></input>
        <button onClick={sendMessage} className="btn btn-secondary">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
