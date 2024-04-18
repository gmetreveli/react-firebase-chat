import "./userInfo.css";
import { useUserStore } from "../../../lib/userStore";

const UserInfo = () => {
  const { currentUser } = useUserStore();

  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} alt="avatarPic" />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="morePic" />
        <img src="./video.png" alt="videoPic" />
        <img src="./edit.png" alt="editPic" />
      </div>
    </div>
  );
};

export default UserInfo;
