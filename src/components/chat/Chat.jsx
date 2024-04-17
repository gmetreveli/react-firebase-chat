import { useRef, useState, useEffect } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="avatarPic" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="phonePic" />
          <img src="./video.png" alt="videoPic" />
          <img src="./info.png" alt="infoPic" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="avatarPic" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              aut maiores voluptates cupiditate, esse blanditiis doloremque.
              Quia unde qui, ea sequi obcaecati totam asperiores dolorum
              perferendis?
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              aut maiores voluptates cupiditate, esse blanditiis doloremque.
              Quia unde qui, ea sequi obcaecati totam asperiores dolorum
              perferendis?
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="avatarPic" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              aut maiores voluptates cupiditate, esse blanditiis doloremque.
              Quia unde qui, ea sequi obcaecati totam asperiores dolorum
              perferendis?
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              aut maiores voluptates cupiditate, esse blanditiis doloremque.
              Quia unde qui, ea sequi obcaecati totam asperiores dolorum
              perferendis?
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="avatarPic" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              aut maiores voluptates cupiditate, esse blanditiis doloremque.
              Quia unde qui, ea sequi obcaecati totam asperiores dolorum
              perferendis?
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="avatarPic" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              aut maiores voluptates cupiditate, esse blanditiis doloremque.
              Quia unde qui, ea sequi obcaecati totam asperiores dolorum
              perferendis?
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <img
              src="https://images.pexels.com/photos/19155212/pexels-photo-19155212/free-photo-of-roof-on-a-yellow-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="altPic"
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              aut maiores voluptates cupiditate, esse blanditiis doloremque.
              Quia unde qui, ea sequi obcaecati totam asperiores dolorum
              perferendis?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="imgPic" />
          <img src="./camera.png" alt="cameraPic" />
          <img src="./mic.png" alt="micPic" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt="emojiPic"
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
