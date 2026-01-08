import React from 'react'
import Hero from '../components/Hero'

const HomePage = () => {
  return (
    <div>
      <Hero/>
    </div>
  )
}

export default HomePage




// import React from 'react'

// const HomePage = () => {
//   return (
//  <div className="max-w-7xl w-full mx-auto px-4 min-h-screen">
//       {" "}
//       {/* Changed max-w-300 to max-w-screen-xl for proper responsiveness and added px-4 for horizontal padding */}
//       <div className="mt-12 md:mt-2 flex flex-col md:flex-row items-center justify-center gap-6 py-10 md:py-20">
//         {" "}
//         {/* Improved spacing and layout responsiveness */}
//         {/* Left section */}
//         <div className="flex-1 text-center md:text-left">
//           {" "}
//           {/* Added text-center for mobile and md:text-left for desktop */}
//           <h2 className="text-lg md:text-2xl font-medium mb-3">
//             {" "}
//             {/* Adjusted base text size for better readability */}
//             Where Designs Meet Couture
//           </h2>
//           <h5 className="text-2xl md:text-5xl leading-tight font-semibold mb-4">
//             {" "}
//             {/* Increased bottom margin for spacing */}
//             Effortlessly Style Yourself With Premium Collection
//           </h5>
//           <p className="text-base md:text-lg text-gray-600">
//             {" "}
//             {/* Changed text-sm to text-base for better mobile readability */}
//             From everyday essentials to statement pieces, redefine your style
//             with fashion that’s as bold and unique as you are.
//           </p>
//         </div>
//         {/* Right Section */}
//         <div className="flex-1 w-full max-w-md md:max-w-none">
//           {" "}
//           {/* Added max-width for image on smaller screens */}
//           <img
//             src="https://img.freepik.com/premium-photo/blank-color-cloth-tshirt-3d-renderer_756748-2046.jpg"
//             alt="Premium fashion collection"
//             className="w-full h-auto rounded-2xl object-cover"
//             //  {/* Added h-auto and object-cover for responsive image scaling */}
//           />
//         </div>
//       </div>
//       {/* Shop by Category */}
//       <div className="bg-gray-400/40 p-4">
//         <h2 className="text-3xl text-center mb-6 font-semibold">
//           Shop by Category
//         </h2>
//         {/* Images */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 w-full">
//           {/* Each image is rounded and responsive */}
//           <img
//             src="https://i.pinimg.com/736x/d7/91/c1/d791c1d5718a47722534416ed1ae0b45.jpg"
//             alt=""
//             className="rounded-full object-top object-cover h-38 w-38 mx-auto border"
//           />

//           <img
//             src="https://www.mgfilmproductions.com/uploads/1/4/5/8/145812880/389783587_8.jpg"
//             alt=""
//             className="rounded-full object-top object-cover h-38 w-38 mx-auto border"
//           />

//           <img
//             src="https://i.pinimg.com/originals/e9/98/48/e998483ead12f67835595b8b9f6b96c1.jpg"
//             alt=""
//             className="rounded-full object-top object-cover h-38 w-38 mx-auto border"
//           />

//           <img
//             src="https://www.siammodels.com/wp-content/uploads/2024/08/first-siam-models-bangkok-agency-female-thai-model-21.jpg"
//             alt=""
//             className="rounded-full object-top object-cover h-38 w-38 mx-auto border"
//           />

//           <img
//             src="https://i.pinimg.com/736x/d7/91/c1/d791c1d5718a47722534416ed1ae0b45.jpg"
//             alt=""
//             className="rounded-full object-top object-cover h-38 w-38 mx-auto border"
//           />
//         </div>


//       {/* Cards */}
//       <div className="text-center text-3xl my-4">
//         <h1>Our collection</h1>
//       </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-3 gap-2">
//         {/* Card */}

//         <div className="flex flex-col gap-2 justify-center  items-center text-center p-3 rounded-2xl bg-white">
//           <img
//             src="https://i.pinimg.com/originals/17/4b/5e/174b5ea6085ee061c43c7b93059e7ac5.jpg"
//             alt=""
//             className="w-[80%] object-cover rounded-xl bg-gray-400"
//           />
//           {/* Content */}
//           <div className="space-y-1.5 text-center">
//             <h5>Simple Mens Gray T-Shirt</h5>
//             <p>$34</p>
//                  <button className="px-5 py-2 border border-yellow-300">Add to Cart</button>
//           </div>
//         </div>

//         <div className="flex flex-col gap-2 justify-center  items-center text-center p-3 rounded-2xl bg-white">
//           <img
//             src="https://i.pinimg.com/originals/17/4b/5e/174b5ea6085ee061c43c7b93059e7ac5.jpg"
//             alt=""
//             className="w-[80%] object-cover rounded-xl bg-gray-400"
//           />
//           {/* Content */}
//           <div className="space-y-1.5 text-center">
//             <h5>Simple Mens Gray T-Shirt</h5>
//             <p>$34</p>
//                      <button className="px-5 py-2 border border-yellow-300">Add to Cart</button>
//           </div>
//         </div>

//         <div className="flex flex-col gap-2 justify-center  items-center text-center p-3 rounded-2xl bg-white">
//           <img
//             src="https://i.pinimg.com/originals/17/4b/5e/174b5ea6085ee061c43c7b93059e7ac5.jpg"
//             alt=""
//             className="w-[80%] object-cover rounded-xl bg-gray-400"
//           />
//           {/* Content */}
//           <div className="space-y-1.5 text-center">
//             <h5>Simple Mens Gray T-Shirt</h5>
//             <p>$34</p>
//                      <button className="px-5 py-2 border border-yellow-300">Add to Cart</button>
//           </div>
//         </div>

//         <div className="flex flex-col gap-2 justify-center  items-center text-center p-3 rounded-2xl bg-white">
//           <img
//             src="https://i.pinimg.com/originals/17/4b/5e/174b5ea6085ee061c43c7b93059e7ac5.jpg"
//             alt=""
//             className="w-[80%] object-cover rounded-xl bg-gray-400"
//           />
//           {/* Content */}
//           <div className="space-y-1.5 text-center">
//             <h5>Simple Mens Gray T-Shirt</h5>
//             <p>$34</p>
//             <button className="px-5 py-2 border border-yellow-300">Add to Cart</button>
//           </div>
//         </div>
//       </div>
//       </div>
//       {/* Our Collection */}
//       {/* Cards */}

//     </div>
//   )
// }

// export default HomePage
