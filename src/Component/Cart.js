import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Util/CartSlice";

const Cart =()=>{

  const cartItems = useSelector((store)=> store.cart.items);
  console.log(cartItems);
  
  const dispatch = useDispatch();

  const HandleClearCart = ()=>{
    dispatch(clearCart());
  };

  return (
  <div className="relative text-center mt-10 pt-20 pb-10">
    <button className="absolute top-12 right-0 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700 mt-4 mr-4" onClick={HandleClearCart}>
      ClearCart
    </button>
    <h1 className="text-2xl font-bold">Cart</h1>
    {cartItems.length === 0 && (
  <h1 className="text-center text-2xl font-semibold text-gray-600 mt-10">
    🛒 Your Cart Is Empty.
  </h1>
)}
    <div className="bg-gray-200 mb-3 mt-5 p-4 ml-[250px] mr-[250px] rounded-lg shadow-m">
      <ItemList items={cartItems } />
    </div>
  </div>
  
)}

export default Cart;