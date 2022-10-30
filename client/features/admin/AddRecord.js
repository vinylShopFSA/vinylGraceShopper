import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewVinyl } from "../vinyl/vinylSlice";
import { useNavigate } from "react-router-dom";
const AddRecord = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState({
    year:1900,
    price:"",
    imageUrl: "",
    quantity:0,
    artist:"",
    description:"",
    genre:"",
    label:"",
    vinylName:"",
});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNewVinyl(state));
    navigate("/");
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h2> Add New Vinyl Record </h2>
          <div>
          <div>
            <label htmlFor="title"></label>
            <input
              onChange={handleChange}
              name="vinylName"
              value={state.vinylName}
              placeholder="record name"
              required />
          </div>
          </div>
          <div>
            <label htmlFor="price"></label>
            <input
              onChange={handleChange}
              name="price"
              value={state.price}
              placeholder="Price"
              required />
          </div>
          <div>
            <label htmlFor="year"></label>
            <input
              onChange={handleChange}
              name="year"
              value={state.year}
              placeholder="Release year"
              required/>
          </div>
          <div>
            <label htmlFor="artist"></label>
            <input
              onChange={handleChange}
              name="artist"
              value={state.artist}
              placeholder="Artist/s"
              required
            />
          </div>
          <div >
            <label htmlFor="image"></label>
            <input
              onChange={handleChange}
              name="imageUrl"
              value={state.imageUrl}
              placeholder="Album Artwork"
            />
          </div>
          <div>
            <label htmlFor="description"></label>
            <input
              onChange={handleChange}
              name="description"
              value={state.description}
              placeholder="Description"
              required
            />
          </div>
          <div>
            <label htmlFor="genre"></label>
            <input
              onChange={handleChange}
              name="genre"
              value={state.genre}
              placeholder="Music Genre"
              required
            />
          </div>
          <div>
            <label htmlFor="label"></label>
            <input
              onChange={handleChange}
              name="label"
              value={state.label}
              placeholder="Record Label"
            />
          </div>
          <div>
            <label htmlFor="quantity"></label>
            <input
              onChange={handleChange}
              name="quantity"
              value={state.quantity}
              placeholder="Quantity"
              required
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecord;
