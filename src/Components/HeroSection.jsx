import React from "react";

const HeroSection = () => {
  return (
    <div className="carousel w-full">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full h-64 md:h-96">
        <img
          src="https://themewagon.github.io/ashion/img/categories/category-1.jpg"
          className="w-full h-full object-cover"
          alt="Women’s fashion"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white">
            Women’s fashion
          </h2>
          <p className="text-sm md:text-md lg:text-lg text-white mt-2 max-w-2xl">
            Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
            incidid-unt labore edolore magna aliquapendisse ultrices gravida.
          </p>
          <button className="mt-4 bg-[#4A90E2] hover:bg-[#357ABD] text-white px-4 py-2 rounded-lg text-sm md:text-md lg:text-lg">
            Shop Now
          </button>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full h-64 md:h-96">
        <img
          src="https://themewagon.github.io/ashion/img/categories/category-2.jpg"
          className="w-full h-full object-cover"
          alt="Men’s fashion"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white">
            Men’s fashion
          </h2>
          <p className="text-sm md:text-md lg:text-lg text-white mt-2 max-w-2xl">
            358 items
          </p>
          <button className="mt-4 bg-[#4A90E2] hover:bg-[#357ABD] text-white px-4 py-2 rounded-lg text-sm md:text-md lg:text-lg">
            Shop Now
          </button>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full h-64 md:h-96">
        <img
          src="https://themewagon.github.io/ashion/img/categories/category-3.jpg"
          className="w-full h-full object-cover"
          alt="Men’s fashion"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white">
            Men’s fashion
          </h2>
          <p className="text-sm md:text-md lg:text-lg text-white mt-2 max-w-2xl">
            358 items
          </p>
          <button className="mt-4 bg-[#4A90E2] hover:bg-[#357ABD] text-white px-4 py-2 rounded-lg text-sm md:text-md lg:text-lg">
            Shop Now
          </button>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full h-64 md:h-96">
        <img
          src="https://themewagon.github.io/ashion/img/categories/category-4.jpg"
          className="w-full h-full object-cover"
          alt="Men’s fashion"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white">
            Men’s fashion
          </h2>
          <p className="text-sm md:text-md lg:text-lg text-white mt-2 max-w-2xl">
            358 items
          </p>
          <button className="mt-4 bg-[#4A90E2] hover:bg-[#357ABD] text-white px-4 py-2 rounded-lg text-sm md:text-md lg:text-lg">
            Shop Now
          </button>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
