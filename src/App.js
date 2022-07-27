import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .then((res) => {
        console.log(res.data);
        setComments(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      {comments.map((row, index) => (
        <p key={index}>
          {row.name} ---- {row.id}
        </p>
      ))}
    </div>
  );
}
