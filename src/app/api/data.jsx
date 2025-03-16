import React from "react";

const Data = async () => {
  const res = await fetch("http://localhost:5000/bannerImages");
  const bannerImages = await res.json();
  console.log(bannerImages);
  return <div></div>;
};

export default Data;
