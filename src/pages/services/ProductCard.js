import { useContext, useEffect, useState } from "react";
import SkeletonGallarey from "../../assets/SkeletonGallarey";
import { ShopContext } from "../../context/ShoppingContext";

const ProductCard = ({data}) => {
  const {addToCart, cartItems} = useContext(ShopContext);
  const [isLoading, setIsLoading] = useState(true);
  const cartItemAmount = cartItems[data.id]?.quantity || 0;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000)
  }, [])

  return (
    <div className="card-wrapper">
      {isLoading ? (
        <SkeletonGallarey/>
      ) : (
        <div className="card">
          <img src={data.src} alt="" />
          <div className="card-gradient-layer">
            <p>{data.title}</p>
            <div className="star-rating">
              <i className="fa-solid fa-star"></i>
              <b>{data.rating}</b>
            </div>
            <span><b>$ {data.price}</b></span>
            <button
              onClick={() => addToCart(data.id)}
            >Add to cart<i className="fa-solid fa-cart-shopping"></i>
            {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
            <a href={data.src} download={data.src}>download image<i className="fa-solid fa-download"></i>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
 
export default ProductCard;