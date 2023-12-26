import React, { useEffect, useState } from "react";
import "../styles/coursesCardContainer.css";
import Card from "./Card";
const crudFunctions = require("../functions/crud");

const CoursesCardContainer = () => {
  //Hooks
  useEffect(() => {
    fetchAllCourses();
  }, []);

  const [coursesData, setCoursesData] = useState([]);

  // API Integration
  const fetchAllCourses = async () => {
    const courses = await crudFunctions.get(
      "http://localhost:5000/api/course/getCourses"
    );
    setCoursesData(courses);
  };

  //Sameple response
  // const coursesData = [{
  //     "_id": "65869cd6e006cf8383ab3389",
  //     "name": "Unqork Zero to Expert",
  //     "description": "Unqork is at the forefront of the no-code movement, empowering organizations to accelerate their digital transformation without relying on traditional software development methods. With Unqork,users, including business analysts and other non-developers, can design, build, and deploy sophisticated web applications through a visual interface.",
  //     "price": "Free Course",
  //     "thumbnail": "https://2829105.fs1.hubspotusercontent-na1.net/hubfs/2829105/Featured%20Image%20Homepage%20Logo%20ONLY.png",
  //     "addedOn": "2023-12-23T08:39:50.808Z",
  //     "__v": 0
  // }]

  //   Component JSX
  return (
    <div className="coursesCardContainer">
      <h1 className="heading">Recommended Courses</h1>
      <div className="coursesCardWrapper">
        {coursesData.map((courseData) => {
          return (
            <Card
              thumbnail={courseData.thumbnail}
              courseId={courseData._id}
              cardLabel={courseData.name}
              cardDesc={courseData.price}
              courseDesc={courseData.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CoursesCardContainer;
