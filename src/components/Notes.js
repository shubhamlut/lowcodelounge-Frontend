import React, { useEffect, useState } from "react";
import "../styles/Notes.css";

const crudFunctions = require("../functions/crud");
const Notes = ({ videoId }) => {
  // ****INTEGRATION*****
  // Sample API response
  // const notesData = [
  //   {
  //     note: "This is my note",
  //     userId: 12121212,
  //     videoId: 3434343,
  //   },
  //   {
  //     note: "This is second note",
  //     userId: 12121212,
  //     videoId: 3434343,
  //   },
  //   {
  //     note: "This is third note",
  //     userId: 12121212,
  //     videoId: 3434343,
  //   },
  //   {
  //     note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsum magnam ea ex minus modi unde quis eveniet dolorum, quia libero, facilis velit laboriosam voluptate exercitationem quos soluta numquam reiciendis!",
  //     userId: 12121212,
  //     videoId: 3434343,
  //   },
  //   {
  //     note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsum magnam ea ex minus modi unde quis eveniet dolorum, quia libero, facilis velit laboriosam voluptate exercitationem quos soluta numquam reiciendis!",
  //     userId: 12121212,
  //     videoId: 3434343,
  //   },
  // ];
  //component Hooks
  const [writeNote, setWriteNote] = useState("");
  const [notesList, setNotesList] = useState([]);
  const [editedNote, setEditedNote] = useState("");
  const [activeNoteId, setActiveNoteId] = useState(null);

  useEffect(() => {
    fetchVideoNotes();
  }, []);

  //*****ACTIONS FUNCTIONS********

  //   This function is used to handle different action buttons
  const handleButtonClick = (action) => {
    let newNote = {
      note: writeNote,
      userId: userId,
      videoId: videoId,
    };
    //Updating the UI
    setNotesList((notesList) => [...notesList, newNote]);
    setWriteNote("");

    //Updating the DB

    crudFunctions.create("http://localhost:5000/api/notes/addNote", newNote);
  };

  //Updating the note in DB

  const updateNote = async (noteId) => {
    let updatedNote = {
      note: editedNote,
    };
    await crudFunctions.update(
      `http://localhost:5000/api/notes/updateNote/${noteId}`,
      updatedNote,
      localStorage.getItem("token")
    );
    setActiveNoteId(null);
    fetchVideoNotes();
  };
  //   This function is used set the textArea which whatever written in the box
  const handleTextAreaOnChange = (e) => {
    setWriteNote(e.target.value);
  };

  const handleEditNoteOnChange = (e) => {
    setEditedNote(e.target.value);
  };
  const handleEditNoteClick = (action, noteId, note) => {
    if (action === "edit") {
      setActiveNoteId(noteId);
      setEditedNote(note);
    } else if (action === "save") {
      updateNote(noteId);
    } else {
      setActiveNoteId(null);
    }
  };

  const userId = localStorage.getItem("userId");
  const fetchVideoNotes = async () => {
    const response = await crudFunctions.get(
      `http://localhost:5000/api/notes/getNotes/${videoId}/${userId}`
    );
    setNotesList(response);
  };

  // Component JSX
  return (
    <div className="Notes">
      <div className="notesTextArea">
        <h2 className="notestextareaHeader">Notes</h2>
        <textarea
          id="myTextarea"
          name="notesArea"
          rows="4"
          cols="50"
          value={writeNote}
          onChange={handleTextAreaOnChange}
          placeholder="Note down important points"
        ></textarea>
      </div>
      <div className="addNotes">
        <button
          onClick={() => {
            handleButtonClick("addnote");
          }}
        >
          Add Note
        </button>
      </div>
      <div className="notesAdded">
        <p className="addedNotesTitle">Added Notes:</p>
        <div className="addedNotesList">
          <ol>
            {notesList.map((noteData) => {
              return (
                <>
                  {/* List Notes */}
                  <li>
                    {noteData.note}{" "}
                    <span className="notesEditIcon">
                      <i
                        onClick={() => {
                          handleEditNoteClick(
                            "edit",
                            noteData._id,
                            noteData.note
                          );
                        }}
                        class="fa-solid fa-pencil"
                      ></i>
                    </span>
                  </li>

                  {/* Edit note */}
                  {activeNoteId === noteData._id && (
                    <div className="noteEditContainer">
                      <div className="noteEditArea">
                        <textarea
                          name=""
                          value={editedNote}
                          onChange={handleEditNoteOnChange}
                          id=""
                          cols="30"
                          rows="2"
                        ></textarea>
                      </div>
                      <div className="noteUpdateBtn">
                        <i
                          class="fa-solid fa-check"
                          onClick={() => {
                            handleEditNoteClick("save", noteData._id, null);
                          }}
                        ></i>
                      </div>
                      <div className="noteCancelButton">
                        {" "}
                        <i
                          onClick={() => {
                            handleEditNoteClick("", null, null);
                          }}
                          class="fa-solid fa-xmark"
                        ></i>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Notes;
