import ProductCart from "./ProductCart";
import { productData } from "../../../jsFile/index";

const LiveProducts = () => {
  return (
    <section className="live-products-section py-12 sm:py-16 md:py-20">
      <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-10">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white f1 text-center">
          Live Products
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg f4 text-gray-300 text-center max-w-xl">
          Explore some of the live products I've developed.
        </p>

        {/* Products Grid */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10">
          {productData.map((product, index) => (
            <ProductCart key={index} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default LiveProducts;
