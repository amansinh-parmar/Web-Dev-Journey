import "./DataList.css";
import { useEffect, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export default function DataList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1 className="title">Fetch Data from URL</h1>
        <div className="container">
          {data.map((card) => {
            return (
              <div key={card.id} className="card">
                <h2 key={card.id}>{card.title}</h2>
                <p>{card.body}</p>
                <span> By UserID - {card.userId}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// function DataList() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch(BASE_URL);
//       const data = await res.json();
//       setData(data);
//     }
//     fetchData();
//   }, []);

//   return (
//     <>
//       <h1>FETCH INFORMATION FORM URL</h1>
//       <div className="container">
//         {data.map((card) => {
//           return (
//             <div key={card.id} className="card">
//               <h2 key={card.id}>{card.title}</h2>
//               <p>{card.body}</p>
//               <span> By UserID - {card.userId}</span>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default DataList;
