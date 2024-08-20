import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoIosAdd, F } from "react-icons/io";
import { FaEye } from "react-icons/fa";
//import cartcontext
import { CartContext } from '../contexts/CartContext';
const Product = ({ product }) => {

  const { addToCart} = useContext(CartContext)
  
  //destacture product
 const { id, image, category, title, price } = product
return (
<div className=''>
 <div className=' border border-[#e4e4e4] h-[300px] mb-4 mt-7 relative overflow-hidden group transition'>
      <div className='w-full h-full flex justify-center items-center '>
        {/*image*/}
        <div className='w-[200px] mx-auto flex justify-center items-center  '>
          <img className='max-h-[160px]  group-hover:scale-110  transition duration-300' src={image} alt={title} />

        </div>
        <div className='absolute top-6 -right-11 group-hover:right-4 bg-red-500/40 p-2   flex justify-center items-center
         flex-col gap-y-2 opacity-0 group-hover:opacity-100 translate-all duration-300'>
          <button onClick={()=>addToCart(product,id)}>
            <div className=' text-white w-12  h-12 bg-red-500 flex justify-center items-center flex-col gap-y-2 opacity-0 group-hover:opacity-100 '>
              <IoIosAdd className='text-3xl' />
            </div>
          </button>
          < Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
            <FaEye />
          </Link>
        </div>
      </div>
    </div>
    {/*category && tittle */}
    <div>
      <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
      <Link to={`/product/${id}`}>
        <h2 className='font-semibold mb-1 '>{title}</h2>
      </Link>

      <div className='font-semibold '> $ {price}</div>
    </div>
  </div>)
};

export default Product;
