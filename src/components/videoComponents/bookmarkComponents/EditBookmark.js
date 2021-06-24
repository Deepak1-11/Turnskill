const EditNotes = ({ activeBookmark, onUpdateBookmark }) => {
    const onEditField = (field, value) => {
      onUpdateBookmark({
        ...activeBookmark,
        [field]: value,
        lastModified: Date.now(),
      });
    };
  
    if (!activeBookmark) return <div className="no-active-note">Select a bookmark to edit it.</div>;
  
    return (
      <div className="edit-bookmark">
        
          <h3>Edit Selected Bookmark</h3>
          <div className="edit-bookmark-title">
            <div>Timestamp : {activeBookmark.display}</div>
            <div>Last Modified On :  {new Date(activeBookmark.lastModified).toLocaleDateString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}</div>         
          </div>
          <textarea
            id="body"
            placeholder="Write your note here..."
            value={activeBookmark.body}
            onChange={(e) => onEditField("body", e.target.value)}
          />
     
       
      </div>
    );
  };
  
  export default EditNotes;
  