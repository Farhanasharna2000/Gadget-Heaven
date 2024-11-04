import { Link } from "react-router-dom";
import bannerImg from "../assets/banner.jpg";
const Banner = () => {
    return (
        <div className="mb-96 ">
           <div className="hero bg-[#9538E2] min-h-screen relative">
  <div className="hero-content text-center pb-32 ">
    <div className="">
      <h1 className="lg:text-5xl font-bold text-white lg:w-10/12 mx-auto">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="py-6 text-white text-base lg:w-8/12 mx-auto">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <Link to={'/dashboard'} className="btn text-[#9538E2] rounded-3xl">Shop Now</Link >
    </div>
  </div>
</div> 
<div>
<img className="w-3/4 rounded-xl  absolute top-[80%] left-[50%] translate-x-[-50%] outline outline-white shadow-lg outline-offset-8  h-[500px]" src={bannerImg} alt="" />
</div>
        </div>
    );
};

export default Banner;