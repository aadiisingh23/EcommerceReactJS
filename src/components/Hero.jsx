import React from "react";

const Hero = () => {
  return (
    <div className="max-w-300 mx-auto flex justify-center mt-28">
      <div className="flex gap-4 item-center h-screen flex-col md:flex-row border">
        {/* Left */}
        <div className="flex-1 w-full h-full flex flex-col justify-center">
          <h2>Where Designs Meet Couture</h2>
          <h1>Effortlessy Style Your Self With Premium Collection</h1>
          <p>
            From everyday essentials to statement pieces, redefine your style
            with fashion
          </p>
        </div>
        {/* right  */}
        <div className="flex-1 w-full ">
          <img src="https://img.freepik.com/premium-photo/3d-mockup-black-oversized-tshirt_725455-1875.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
