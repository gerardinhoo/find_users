import React from "react";

const UserItem = ({ user: { name, picture, nat } }) => {
  return (
    <div className="card text-center">
      <img
        src={picture.thumbnail}
        className="round-img"
        alt="pic"
        style={{ width: "60px" }}
      />
      <h3>
        <span className="profile-info">Full Name:</span>
        {name.first.toUpperCase()} {name.last.toUpperCase()}
      </h3>
      <span className="profile-info">Nationality:</span> {nat}
    </div>
  );
};

export default UserItem;
