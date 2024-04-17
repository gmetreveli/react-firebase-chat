import "./userInfo.css";

const UserInfo = () => {
  return (
    <div className="userInfo">
      <div className="user">
        <img src="./avatar.png" alt="avatarPic" />
        <h2>John Doek</h2>
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
