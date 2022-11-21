import React, { useState } from "react";
import { Link } from "react-router-dom";
import Users from "../data/Users";

const App = () => {
  const [query, setQuery] = useState("");

  
  return (
    <div className="container mt-5 me-5">
      <Link to="/filter">category filter</Link>
      <div className="col-6">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>
      <div className="col-6">
        <ul className="list-group">
          {Users.filter(u=>u.title.toLocaleLowerCase().includes(query)).map((fd, i) => (
            <li key={i} className="list-group-item">
              {fd.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
