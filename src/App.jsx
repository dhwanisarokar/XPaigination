import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { Pagination } from "./components/pagination";

function App() {
  const [data, setdata] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 10;
  let startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  useEffect(() => {
    async function fetchAPIData() {
      await fetch(
        " https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      )
        .then((res) => res.json())
        .then((data) => setdata(data))
        .catch((err) => console.error("Error Fetching Data", err));
    }
    fetchAPIData();
  }, []);

  const handlePrevBtn = () => {
    if (currentPage <= 1) return;
    startIndex = startIndex - 10;
    setcurrentPage((prevState) => prevState - 1);
  };

  const handleNextBtn = () => {
    if (currentPage >= data.length / ITEMS_PER_PAGE) return;
    startIndex = startIndex + 10;
    setcurrentPage((prevState) => prevState + 1);
  };

  return (
    <>
      <h2>Employee Data Table</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(startIndex, startIndex + 10).map((item, idx) => (
              <tr key={idx}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        handleNextBtn={handleNextBtn}
        handlePrevBtn={handlePrevBtn}
      />
    </>
  );
}

export default App;
