import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
 
function Tags() {
  const [count, setCount] = useState(1); // Start with count = 1
  const [selects, setSelects] = useState([{ id: 1 }]); // Start with one select element

  function add() {
    setCount((prevCount) => prevCount + 1);
    setSelects((prevSelects) => [...prevSelects, { id: count + 1 }]);
  }

  function deltag() {
    if (selects.length > 1) {
      setSelects((prevSelects) => prevSelects.slice(0, -1));
    }
  }

  return (
    <div className="tag-section d-flex align-items-center gap-2">
      {/* <h3>Choose the tags that suit your experience...</h3> */}

      <div id="multipleSelects" className="d-flex flex-wrap gap-2 flex-row">
        {selects.map((select) => (
          <div key={select.id}>
            <select
              id={`choice${select.id}`}
              className="form-select tom-select"
            >
              <option value="Mountains">Mountains</option>
              <option value="Deserts">Deserts</option>
              <option value="Beaches">Beaches</option>
              <option value="Pilgrimage">Pilgrimage</option>
            </select>
          </div>
        ))}
      </div>
      <button type="button" className="border-0 bg-transparent" onClick={add}>
        <i className="las la-plus-circle fs-4"></i>
      </button>
      <button
          type="button"
          className="remove-button border-0 bg-transparent"
          onClick={deltag}
          disabled={selects.length <= 1}
        >
          <i className="las la-minus-circle fs-4"></i>
        </button>
    </div>
  );
}

export default Tags;
