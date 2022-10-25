import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchSingleVinyl } from "../../features/vinyl/singleVinylSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";


const SingleVinyl = ({vinylName, description, quantity, price, imageUrl}) => {
       
        const {id} = useParams()
        const dispatch = useDispatch();
        const vinyl = useSelector((state) => {
            console.log("state", state);
           return state.SingleVinyl
          });
        
          useEffect(() => {
            dispatch(fetchSingleVinyl(id));
          }, []);
        
          return (
            <>
            <div>
                <h1>Album Name {vinyl.vinylName}</h1>
            </div>
            <div className="container">{vinyl.imageUrl}</div>
            <div>About:</div>
            <p>
                {vinyl.description}
            </p>
            <p>
                 Items in Stock :{vinyl.quantity}
            </p>
            <p>
               Buy today for the low price of ${vinyl.price}
            </p>
            </>
            )
}
export default SingleVinyl;