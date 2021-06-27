export const columns = [
    { id: 'feedbackid', label: 'Feedback ID', minWidth: 170 },
    { id: 'userid', label: 'User ID', minWidth: 100 },
    { id: 'videoid', label: 'Video ID', minWidth: 100 },
    { id: 'text', label: 'Feedback Text', minWidth: 100 },
    { id: 'sentiment', label: 'Sentiment Analyzed', minWidth: 100 },
    
  ];
  function createData(feedbackid,userid,videoid,text,sentiment ) {
  
    return {feedbackid,userid,videoid,text,sentiment};
  }
export const rows = [

    createData('1', 'username1','video1','Good video','Positive'),
    createData('2', 'username3','video3','Poor video','Negative'),
    createData('3', 'username5','video3','Good video','Positive'),
    createData('4', 'username2','video1','Good video','Positive'),
    createData('5', 'username1','video1','Good video','Positive'),
    
  ];
