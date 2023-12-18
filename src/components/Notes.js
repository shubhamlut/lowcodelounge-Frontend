import React, { useState } from "react";
import "../styles/Notes.css";
const Notes = () => {
  // ****INTEGRATION IS PENDING*****
  // Sample API response
  const notesData = [
    {
      note: "This is my note",
      userId: 12121212,
      videoId: 3434343,
    },
    {
      note: "This is second note",
      userId: 12121212,
      videoId: 3434343,
    },
    {
      note: "This is third note",
      userId: 12121212,
      videoId: 3434343,
    },
    {
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsum magnam ea ex minus modi unde quis eveniet dolorum, quia libero, facilis velit laboriosam voluptate exercitationem quos soluta numquam reiciendis!",
      userId: 12121212,
      videoId: 3434343,
    },
    {
      note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsum magnam ea ex minus modi unde quis eveniet dolorum, quia libero, facilis velit laboriosam voluptate exercitationem quos soluta numquam reiciendis!",
      userId: 12121212,
      videoId: 3434343,
    },
  ];
  //component Hooks
  const [writeNote, setWriteNote] = useState("");
  const [notesList, setNotesList] = useState(notesData);

  //*****ACTIONS FUNCTIONS********

  //   This function is used to handle different action buttons
  const handleButtonClick = (action) => {
    if (action === "addnote") {
      let newNote = {
        note: writeNote,
        userId: 12121212,
        videoId: 3434343,
      };
      setNotesList((notesList) => [...notesList, newNote]);
      setWriteNote("")
    } else if (action === "addComment") {
        //This would be removed in refactoring process
    }
  };

  //   This function is used set the textArea which whatever written in the box
  const handleTextAreaOnChange = (e) => {
    setWriteNote(e.target.value);
  };

  // Component JSX
  return (
    <div className="Notes">
      <div className="notesTextArea">
        <h2 className="notestextareaHeader">Notes</h2>
        <textarea
          id="myTextarea"
          name="myTextarea"
          rows="4"
          cols="50"
          value={writeNote}
          onChange={handleTextAreaOnChange}
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
              return <li>{noteData.note}</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Notes;
