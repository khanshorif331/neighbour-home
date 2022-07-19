import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("card.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <h2 className="uppercase font-bold text-3xl text-green-400 my-10">
        Our Trending Courses
      </h2>
      <div className=" bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-20">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {courses.map((course) => (
            <Card course={course} key={course._id}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
