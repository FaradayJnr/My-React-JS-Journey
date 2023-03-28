import React from "react";
import Img from "./../images/img.jpg";

const user = {
  name: "Ransford",
  imageUrl: Img,
  imageSize: 90,
};

function AddImage() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

export default AddImage;
