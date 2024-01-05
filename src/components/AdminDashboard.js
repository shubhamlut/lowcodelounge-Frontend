import React from "react";
import Grid from "./Grid";

import "../styles/AdminDashboard.css";

const AdminDashboard = () => {

   
  const data = [
    {
      Name: "Unqork Zero to Expert | Primary Fields in Module | Part 1 #3",
      Description:
        "Unqork is a no-code platform that enables the creation of custom enterprise software applications without requiring any coding knowledge. The platform provides a visual interface for building and managing complex applications, workflows, and integrations.",
      Duration: "26 Mins",
      VideoId: "sAHX5sWiNNE",
      ThumbnailURL:
        "https://i.ytimg.com/vi/sAHX5sWiNNE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDloPLq7zUr_TPHyKJz-3QMYE26EA",
      CourseId: "65869cd6e006cf8383ab3389",
      VideoIndex: 3,
      Edit: <i class="fa-solid fa-pencil"></i>,
    },
  ];
  return (
    <div className="admindashboard">
      <h2>Admin Dashboard</h2>
      <Grid data={data} />
    </div>
  );
};

export default AdminDashboard;
