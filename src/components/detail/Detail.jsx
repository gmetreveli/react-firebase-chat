import { toast } from "react-toastify";
import { useChatStore } from "../../lib/chatStore";
import { auth, db } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import "./detail.css";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

const Detail = () => {
  const { ChatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } =
    useChatStore();
  const { currentUser } = useUserStore();

  const handleBlock = async () => {
    if (!user) return;
    const userDoRef = doc(db, "users", currentUser.id);

    try {
      await updateDoc(userDoRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock();
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="detail">
      <div className="user">
        <img src={user?.avatar || "./avatar.png"} alt="avatarPic" />
        <h2>{user?.username}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="arrowUpPic" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="arrowUpPic" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="arrowDownPic" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/12784130/pexels-photo-12784130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="altPic"
                />
                <span>photo_2024_7.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/12784130/pexels-photo-12784130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="altPic"
                />
                <span>photo_2024_7.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/12784130/pexels-photo-12784130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="altPic"
                />
                <span>photo_2024_7.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/12784130/pexels-photo-12784130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="altPic"
                />
                <span>photo_2024_7.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="arrowUpPic" />
          </div>
        </div>
        <button onClick={handleBlock}>
          {isCurrentUserBlocked
            ? "You are Blocked"
            : isReceiverBlocked
            ? "User Blocked"
            : "Block User"}
        </button>
        <button className="logout" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
