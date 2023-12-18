import React from "react";
import "../styles/coursesCardContainer.css";
import Card from "./Card";

const coursesCardContainer = () => {
  // PENDING API Integration

  //Sameple response
  const coursesData = [
    {
      courseId: 1,
      courseName: "Unqork Zero to Expert",
      coursePrice: "Free Course",
      courseDesc:
        "Unqork is at the forefront of the no-code movement, empowering organizations to accelerate their digital transformation without relying on traditional software development methods. With Unqork,users, including business analysts and other non-developers, can design, build, and deploy sophisticated web applications through a visual interface.",
    },
    {
      courseId: 1,
      courseName: "Unqork Zero to Expert",
      coursePrice: "Free Course",
      courseDesc:
        "Unqork is at the forefront of the no-code movement, empowering organizations to accelerate their digital transformation without relying on traditional software development methods. With Unqork,users, including business analysts and other non-developers, can design, build, and deploy sophisticated web applications through a visual interface.",
    },
    {
      courseId: 1,
      courseName: "Unqork Zero to Expert",
      coursePrice: "Free Course",
      courseDesc:
        "Unqork is at the forefront of the no-code movement, empowering organizations to accelerate their digital transformation without relying on traditional software development methods. With Unqork,users, including business analysts and other non-developers, can design, build, and deploy sophisticated web applications through a visual interface.",
    },
    {
      courseId: 1,
      courseName: "Unqork Zero to Expert",
      coursePrice: "Free Course",
      courseDesc:
        "Unqork is at the forefront of the no-code movement, empowering organizations to accelerate their digital transformation without relying on traditional software development methods. With Unqork,users, including business analysts and other non-developers, can design, build, and deploy sophisticated web applications through a visual interface.",
    },
    {
      courseId: 1,
      courseName: "Unqork Zero to Expert",
      coursePrice: "Free Course",
      courseDesc:
        "Unqork is at the forefront of the no-code movement, empowering organizations to accelerate their digital transformation without relying on traditional software development methods. With Unqork,users, including business analysts and other non-developers, can design, build, and deploy sophisticated web applications through a visual interface.",
    },
    {
      courseId: 1,
      courseName: "Unqork Zero to Expert",
      coursePrice: "Free Course",
      courseDesc:
        "Unqork is at the forefront of the no-code movement, empowering organizations to accelerate their digital transformation without relying on traditional software development methods. With Unqork,users, including business analysts and other non-developers, can design, build, and deploy sophisticated web applications through a visual interface.",
    },
    {
      courseId: 1,
      courseName: "Unqork Zero to Expert",
      coursePrice: "Free Course",
      courseDesc:
        "Unqork is at the forefront of the no-code movement, empowering organizations to accelerate their digital transformation without relying on traditional software development methods. With Unqork,users, including business analysts and other non-developers, can design, build, and deploy sophisticated web applications through a visual interface.",
    },
    {
      courseId: 1,
      courseName: "Unqork Zero to Expert",
      coursePrice: "Free Course",
      courseDesc:
        "Unqork is at the forefront of the no-code movement, empowering organizations to accelerate their digital transformation without relying on traditional software development methods. With Unqork,users, including business analysts and other non-developers, can design, build, and deploy sophisticated web applications through a visual interface.",
    },
    {
      courseId: 1,
      courseName: "Unqork Zero to Expert",
      coursePrice: "Free Course",
      courseDesc:
        "Unqork is at the forefront of the no-code movement, empowering organizations to accelerate their digital transformation without relying on traditional software development methods. With Unqork,users, including business analysts and other non-developers, can design, build, and deploy sophisticated web applications through a visual interface.",
    },
    {
      courseId: 1,
      courseName: "Unqork Zero to Expert",
      coursePrice: "Free Course",
      courseDesc:
        "Unqork is at the forefront of the no-code movement, empowering organizations to accelerate their digital transformation without relying on traditional software development methods. With Unqork,users, including business analysts and other non-developers, can design, build, and deploy sophisticated web applications through a visual interface.",
    },
    {
      courseId: 1,
      courseName: "Unqork Zero to Expert",
      coursePrice: "Free Course",
      courseDesc:
        "Unqork is at the forefront of the no-code movement, empowering organizations to accelerate their digital transformation without relying on traditional software development methods. With Unqork,users, including business analysts and other non-developers, can design, build, and deploy sophisticated web applications through a visual interface.",
    },
    {
      courseId: 1,
      courseName: "Unqork Zero to Expert",
      coursePrice: "Free Course",
      courseDesc:
        "Unqork is at the forefront of the no-code movement, empowering organizations to accelerate their digital transformation without relying on traditional software development methods. With Unqork,users, including business analysts and other non-developers, can design, build, and deploy sophisticated web applications through a visual interface.",
    },
    {
      courseId: 1,
      courseName: "Unqork Zero to Expert",
      coursePrice: "Free Course",
      courseDesc:
        "Unqork is at the forefront of the no-code movement, empowering organizations to accelerate their digital transformation without relying on traditional software development methods. With Unqork,users, including business analysts and other non-developers, can design, build, and deploy sophisticated web applications through a visual interface.",
    },
    {
      courseId: 1,
      courseName: "Unqork Zero to Expert",
      coursePrice: "Free Course",
      courseDesc:
        "Unqork is at the forefront of the no-code movement, empowering organizations to accelerate their digital transformation without relying on traditional software development methods. With Unqork,users, including business analysts and other non-developers, can design, build, and deploy sophisticated web applications through a visual interface.",
    },
    {
      courseId: 1,
      courseName: "Unqork Zero to Eklklkxpert",
      coursePrice: "Free Course",
      courseDesc:
        "Unqork is at the forefront of the no-code movement, empowering organizations to accelerate their digital transformation without relying on traditional software development methods. With Unqork,users, including business analysts and other non-developers, can design, build, and deploy sophisticated web applications through a visual interface.",
    },
  ];

  //   Component JSX
  return (
    <div className="coursesCardContainer">
      <h1 className="heading">Recommended Courses</h1>
      <div className="coursesCardWrapper">
        {coursesData.map((courseData) => {
          return (
            <Card
              courseId={courseData.courseId}
              cardLabel={courseData.courseName}
              cardDesc={courseData.coursePrice}
              courseDesc={courseData.courseDesc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default coursesCardContainer;
