import React from "react";

const UserItem = ({ user: { name } }) => {
  return (
    <div className="card text-center">
      <h3>
        {name.title} {name.first} {name.last}
      </h3>
      <img
        src={name.thumbnail}
        className="round-img"
        alt="pic"
        style={{ width: "60px" }}
      />

      {/* <img
        src={user_image}
        className="round-img"
        alt=""
        style={{ width: "60px" }}
      /> */}
    </div>
  );
};

export default UserItem;
