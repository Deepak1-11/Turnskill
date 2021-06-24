const listOfBookmark = ({
    bookmarks,
    onAddBookmark,
    onDeleteBookmark,
    activeBookmark,
    setActiveBookmark,
    jumpToTimestamp,
  }) => {
    const sortedNotes = bookmarks.sort((a, b) => b.lastModified - a.lastModified);
  
    return (
      <div className="list-bookmarks">
        <div className="list-bookmarks-header">
          <h3>Your Bookmarks</h3>
          <button onClick={onAddBookmark}>Add</button>
        </div>
        <div className="list-bookmarks-note"  >
          {sortedNotes.map(({ id, time, display, body, lastModified }, i) => (
             <div className="list-bookmarks-oneentry" onClick={(t) => jumpToTimestamp(time)}>
                <div
                  className={`list-bookmarks-note ${id === activeBookmark && "active"}`}
                  onClick={() => setActiveBookmark(id)}
                >
                <div className="list-bookmarks-note-title">
                    <strong>{display}</strong>
                    <button onClick={(e) => onDeleteBookmark(id)}>Delete</button>
                </div>
   
                <p>{body && body.substr(0, 100) + "..."}</p>
                <small className="note-meta">
                  Last Modified{" "}
                  {new Date(lastModified).toLocaleDateString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default listOfBookmark;
  