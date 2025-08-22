import React, { useState } from "react";

function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = () => {
    if (title && content) {
      setNotes([...notes, { title, content }]);
      setTitle(""); setContent("");
    }
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3>Notes</h3>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
      <button onClick={addNote}>Add Note</button>
      {notes.map((n, i) => (
        <div key={i}>
          <h4>{n.title}</h4>
          <p>{n.content}</p>
          <button onClick={() => deleteNote(i)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
export default NotesApp;
