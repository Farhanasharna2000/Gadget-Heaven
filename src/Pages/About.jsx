import  img1  from "../assets/1.png";
import  img2  from "../assets/2.png";
import  img3  from "../assets/3.png";
import  img4  from "../assets/4.png";

const About = () => {
  
  return (
    <>
    <div className="carousel w-full mt-3">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={img4}
      className="w-full h-96 " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={img2}
      className="w-full h-96 " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={img3}
      className="w-full h-96 " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={img1}
      className="w-full h-96 " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
      <div className="py-10 container mx-auto ">
<p className="text-justify mb-16">Gadget Heaven is a modern e-commerce platform showcasing the latest tech gadgets and accessories. Designed with a clean, user-friendly interface, it allows users to browse detailed product information, add items to a cart or wishlist, and view pricing and specifications. Features include dynamic cart and wishlist management, intuitive sorting by price, and convenient checkout with a modal confirmation that clears local storage and resets counters. Gadget Heaven is built with React and Tailwind CSS, using react-router-dom for seamless navigation and a custom context API for efficient cart and wishlist handling.</p>
<div className="text-center space-y-3 mb-16">
<p className="text-xl text-purple-800 font-bold cursor-pointer">GadgetHeaven.com</p>
<p >All of GadgetHeaven, now at your fingertips</p>
</div>
<div className="text-center space-y-3">
  <h2 className="text-3xl font-semibold">Always Here for You</h2>
  <p className="w-10/12 mx-auto">GadgetHeaven is dedicated to ensuring your complete satisfaction, and we are always happy to hear from you. If you have any questions or comments, or just want share your thoughts.</p>
  <p>Call our customer service hotline at <span className="text-red-600 font-bold cursor-pointer">10000</span></p>
  <p>Email us at <span className="text-red-600 font-bold cursor-pointer">info@gadgetheaven.com</span></p>
</div>
      </div>
    </>
  );
};

export default About;