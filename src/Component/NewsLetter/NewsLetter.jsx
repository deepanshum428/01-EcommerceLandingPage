import React from "react";
import newsLatter from "../../assets/newslatter.jpg";

const NewsLetter = (props) => {
  return (
    <>
      <div className="bg-gray-100 ">
        <div className="mx-3 my-1.5 ">
          <img src={newsLatter} alt="" />
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
