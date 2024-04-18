import { auth } from "../../lib/firebase";
import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="avatarPic" />
        <h2>Jane Doe</h2>
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
        <button>Block User</button>
        <button className="logout" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
