import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchVinyls } from "../vinyl/vinylSlice";
import {Button} from "@mui/material";

function SearchBar() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const vinyls = useSelector((state) => state.vinyl);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVinyls());
  }, []);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = vinyls.filter((value) => {
      return (
        value.vinylName.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.description.toLowerCase().includes(searchWord.toLowerCase()) ||value.genre.toLowerCase().includes(searchWord.toLowerCase())||value.artist.toLowerCase().includes(searchWord.toLowerCase())  
      );
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

return (
    <div >
  <div>
      <div>
        <input
          onChange={handleFilter}
          value={wordEntered}
          name="name"
          placeholder= "New music waiting ..."
        />
         {filteredData.length != 0 && (
          <div>
            {filteredData.slice(0, 5).map((value) => {
              return (
                <a
                  onClick={() => {
                    clearInput;
                  }}
                  key={value.id}
                  href={`/singleVinyl/${value.id}`}
                >
                  <p>
                    {value.vinylName} 
                  </p>
                </a>
              );
            })}
          </div>
        )}
      </div>
      <div>
        {filteredData.length === 0 ? (
        <div> Search for favorite music </div>
        ) : (
          <button onClick={clearInput}>Clear Search </button>
        )}
      </div>
    </div>
        </div>
)
}

  export default SearchBar;