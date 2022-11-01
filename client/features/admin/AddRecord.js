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


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNewVinyl({year, price,imageUrl,quantity,artist,description,genre,label,vinylName}));
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
              onChange={(e) => setPrice(e.target.value)}
              name="price"
              value={price}
              placeholder="Price"
              required />
          </div>
          <div>
            <label htmlFor="year"></label>
            <input
              onChange={(e) => setYear(e.target.value)}
              name="year"
              value={year}
              placeholder="Release year"
              required/>
          </div>
          <div>
            <label htmlFor="artist"></label>
            <input
              onChange={(e) => setArtist(e.target.value)}
              name="artist"
              value={artist}
              placeholder="Artist/s"
              required
            />
          </div>
          <div >
            <label htmlFor="image"></label>
            <input
             onChange={(e) => setImageUrl(e.target.value)}
              name="imageUrl"
              value={imageUrl}
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
              onChange={(e) => setGenre(e.target.value)}
              name="genre"
              value={genre}
              placeholder="Music Genre"
              required
            />
          </div>
          <div>
            <label htmlFor="label"></label>
            <input
              onChange={(e) => setLabel(e.target.value)}
              name="label"
              value={label}
              placeholder="Record Label"
            />
          </div>
          <div>
            <label htmlFor="quantity"></label>
            <input
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
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
