import React from "react";
import "./ProductCart.css";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const ProductCart = ({ product }) => {
    
    return (
        <section className="max-w-lg">
            <div className="max-w-lg container relative   rounded-xl  overflow-hidden ">
                <div className="border-2 border-black rounded-xl overflow-hidden">
                    <img
                        src={product.image}
                        alt="Product"
                        className="w-full  rounded-xl h-66 object-cover"
                    />
                </div>
                <Link to={product.links} target="_blank" rel="noopener noreferrer">
                <div className="absolute cursor-pointer hover:bg-zinc-200 flex justify-between items-center bg-[#f0f0f0] f1 z-30 md:text-sm text-xs text-black font-medium  bottom-[8px] 2xl:h-10 md:h-11  2xl:w-[195px] md:w-[38%] sm:w-[135px] xs:w-[145px] w-[37%]  right-0 rounded-lg p-2 ">
                    <div>
                        {product.title}
                    </div>
                    <div className="flex gap-4">
                        <FaLink />
                    </div>
                </div>
                
                </Link>
                <div className="m "></div>
            </div>
            <div className="grid  gap-4 mt-4 f4 text-white  2xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-3">
                {product.skills.map((skill, index) => (
                    <div key={index} className=" border text-center border-white py-2 px-3 rounded-full text-xs">
                        {skill}
                    </div>
                ))}
            </div>

        </section>
    );
};

export default ProductCart;
