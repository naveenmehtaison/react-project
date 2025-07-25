import React from "react";

const Card = ({ icon, name, color }) => {
  var img = `https://cdn.simpleicons.org/${icon}`;
  console.log(img);
  return (
    <div className=" grid-cols-2 m-3 p-2 w-30 lg:m-3 lg:p-3 flex justify-center  mt-4  shadow-lg rounded-lg   hover:bg-gray-700 transition duration-300 ease-in-out">
      <img class="w-28 sm:w-28 m-[0.15] lg:p-4 " src={img} alt={name} />

      {/* {name} */}
    </div>
  );
};

export default Card;
