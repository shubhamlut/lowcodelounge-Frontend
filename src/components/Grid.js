// =============================

import React, { useEffect, useState } from "react";
import "../styles/Grid.css";
import EditModal from "./EditModal";
import Modal from "./Modal";
const Grid = ({ data, removeItemFromBag, AddToBag }) => {
  const [columns, setColumns] = useState("[{}]");
  const [columnReady, setColumnReady] = useState(false);
  const [editModalState, setEditModalState] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({});
  const [videoData, setVideoData] = useState({});

  //This is triggered on page load
  useEffect(() => {
    setColumns(createColumns(data[0]));
  }, []);

  //This function creates the header of the table
  const createColumns = (data) => {
    const columnsData = Object.keys(data).map((key) => {
      return {
        field: key,
        header: key.charAt(0).toUpperCase() + key.slice(1),
      };
    });
    setColumnReady(true);
    return columnsData;
  };

  //This function is used to create the table rows
  const renderTableCell = (row, col) => {
    if (col.field === "Edit") {
      return (
        <td>
          <div className="edit-row-button">
            <i
              data-key={row.VideoId}
              onClick={ModalState}
              class="fa-solid fa-pencil"
            ></i>
          </div>
        </td>
      );
    }

    return <td>{row[col.field]}</td>;
  };

  // This function set the  modalState to true and opens it
  const ModalState = (e) => {
    console.log(e.target.dataset.key);
    if (editModalState) {
      console.log(editModalState);
      setEditModalState(false);
    } else {
      setEditModalState(true);
      let video = data.filter((video) => {
        return video.VideoId === e.target.dataset.key;
      });
      setVideoData(video[0]);
    }
  };

  return (
    <>
      {columnReady && (
        <div className="grid">
          <table className="tableCore">
            <thead className="tableHeading">
              <tr className="tableHeaderRow">
                {columns.map((col) => (
                  <th>{col.header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="tableBody">
              {data.map((row) => (
                <tr>{columns.map((col) => renderTableCell(row, col))}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {editModalState && <EditModal videoData = {videoData} />}
    </>
  );
};

export default Grid;
