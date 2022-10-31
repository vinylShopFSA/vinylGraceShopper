import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewVinyl } from "../vinyl/vinylSlice";
import { useNavigate } from "react-router-dom";
const AddRecord = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [year, setYear] = useState(1919)
  const [price, setPrice] = useState(0.0)
  const [imageUrl, setImageUrl] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [artist, setArtist] = useState("")
  const [description, setDescription] = useState("")
  const [genre, setGenre] = useState("")
  const [label, setLabel] = useState("")
  const [vinylName, setVinylName] = useState("")

  //add all the handlers 
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setState((state) => ({ ...state, [name]: value }));
  // };


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNewVinyl({year, price,imageUrl,quantity,artist,description,genre,label,vinylName,}));
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
              onChange={(e) => setVinylName(e.target.value)}
              value={vinylName}
              name="vinylName"
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
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              value={description}
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
