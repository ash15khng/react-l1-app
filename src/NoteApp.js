import React, {useState, useEffect} from "react";

const Note = ({title, body}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <br/>
      
    </div>
  );
}

const NoteApp = () => {
  let notesData = JSON.parse(localStorage.getItem("notes"));
  let [title, setTitle] = useState("");
  let [body, setBody] = useState("");
  let [notes, setNotes] = useState(notesData || []);

  function titleChange(e) {
    setTitle(e.target.value);
  } 
  function bodyChange(e) {
    setBody(e.target.value);
  }
  function addNote(e) {
    e.preventDefault();
    setNotes([...notes, { // spread operator
      title, body
    }]);
    setTitle("");
    setBody("");
  }
  function removeNote(noteIndex) {
    return () => {
      setNotes(notes.filter((item, index) => index !== noteIndex));
    }
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]); // only runs when notes changes not when anything changes

  return (
    <div>
      <h1>NoteApp</h1>
      <form onSubmit={addNote}>
        <label>Title: </label>
        <input type="text" value={title} onChange={titleChange}></input>
        <label>Body: </label>
        <textarea value={body} onChange={bodyChange}></textarea>
        <br />
        <button>Add note</button>
      </form>

      <div>
        {
          notes.map((note, index, arr) => {
            return (
            <div key={index}>
              <Note title={note.title} body={note.body} />
              <button onClick={removeNote(index)}>Remove note</button>
            </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default NoteApp;