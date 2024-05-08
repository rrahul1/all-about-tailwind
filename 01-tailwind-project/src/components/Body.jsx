import React from "react";

const Body = () => {
   return (
      <div className="space-y-4 lg:flex ">
         <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
            <img
               src="./assets/Blue-Shape.svg"
               alt="main-image1"
               className="-rotate-[45deg] h-64 md:h-72 lg:h-[400px]"
            />
            <img
               src="./assets/Pink-Shape.svg"
               alt="main-image2"
               className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]"
            />
            <img
               src="./assets/Purple-Shape.svg"
               alt="main-image3"
               className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]"
            />
            <img
               src="./assets/Hero-Model.png"
               alt="model-img"
               className="absolute h-64 md:h-72 lg:h-[400px]"
            />
         </div>
         <div className="lg:flex-1 lg:order-1">
            <h1 className="text-5xl font-bold font-playfair leading-tight">
               Host your website in less than 5 minutes
            </h1>
            <p className="font-lato text-gray-400">
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Voluptatibus praesentium repudiandae ut odio doloremque, facilis
               itaque laudantium alias sint mollitia asperiores, ex reiciendis
               est sequi maxime excepturi tenetur ipsa sapiente!
            </p>
            <form className="flex flex-col gap-4 md:flex-row">
               <input
                  type="email"
                  placeholder="Enter Email"
                  className="rounded-md px-4 py-3 placeholder:text-gray-400"
               />
               <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">
                  Join Waitlist
               </button>
            </form>
            <div className="flex gap-2">
               <img src="./assets/Checkmark.svg" alt="check" />
               <p className="font-lato text-gray-400">
                  No spam , ever, Unsubscribe anytime
               </p>
            </div>
         </div>
      </div>
   );
};

export default Body;
