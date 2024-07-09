import React from "react";
import AliceCarousel from "react-alice-carousel";

function ImageCoursal() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <img
      className="w-full md:h-[500px] object-cover rounded-2xl  "
      src="/demo.jpg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="w-full md:h-[500px] object-cover rounded-2xl  "
      src="/phone.jpg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
      className="w-full md:h-[500px] object-cover rounded-2xl  "
      src="/watch.jpg"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img
    className="w-full md:h-[500px] object-cover rounded-2xl  "
    src="/shoe.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl sm:text-5xl text-center capitalize text-black  font-bold mb-3">
        trending products
      </h1>
      
      <AliceCarousel
        autoPlay
        infinite
        autoPlayInterval={1000}
        disableButtonsControls
        mouseTracking
        items={items}
      />
      ;
    </div>
  );
}

export default ImageCoursal;
