import React from "react";
import { useInView } from "react-intersection-observer";

const Card = ({ icon, name, color }) => {
  const img = `https://cdn.simpleicons.org/${icon}`;

  // 👇 useInView inside the component
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.99,
  });

  return (
    <div
      ref={ref}
      className={`grid-cols-2 m-4 p-2 w-30 lg:m-3 lg:p-3 flex justify-center mt-4 rounded-lg bg-gray-700 transition duration-300 ease-in-out shadow-lg lg:shadow-lg hover:shadow-pink-600 ${
        inView ? "shadow-blue-300 lg:shadow-blue-300" : ""
      }`}
    >
      <img className="w-28 sm:w-28 m-[0.15] lg:p-4" src={img} alt={name} />
    </div>
  );
};

export default Card;
