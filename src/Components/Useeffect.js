import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Useeffect() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setComments(response.data);  
      });
  }, []);  

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {comments.map((url) => (
          <li key={url.id}>{url.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Useeffect;