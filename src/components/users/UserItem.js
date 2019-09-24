import React from "react";

const UserItem = ({ user: { name, user_image } }) => {
  return (
    <div className="card text-center">
      <h1>{name}</h1>
      <img
        src={user_image}
        className="round-img"
        alt=""
        style={{ width: "60px" }}
      />
    </div>
  );
};

export default UserItem;
