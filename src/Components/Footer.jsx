
const Footer = () => {
    return (
        <footer className="  p-10">
           <div className="text-center space-y-2">
           <h1 className="text-3xl font-bold">Gadget Heaven</h1>
           <p className="text-gray-500 text-base">Leading the way in cutting-edge technology and innovation.</p>
           </div>
           <div className="divider"></div>
       <div className="flex justify-around">
       <nav className="flex flex-col items-center">
          <h6 className="font-bold text-lg">Services</h6>
          <a className="link link-hover text-gray-500">Product Support</a>
          <a className="link link-hover text-gray-500">Order Tracking</a>
          <a className="link link-hover text-gray-500">Shipping & Delivery</a>
          <a className="link link-hover text-gray-500">Returns</a>
        </nav>
        <nav className="flex flex-col items-center">
          <h6 className="font-bold text-lg">Company</h6>
          <a className="link link-hover text-gray-500">About us</a>
          <a className="link link-hover text-gray-500">Careers</a>
          <a className="link link-hover text-gray-500">Contact</a>
        </nav>
        <nav className="flex flex-col items-center">
          <h6 className="font-bold text-lg">Legal</h6>
          <a className="link link-hover text-gray-500">Terms of Service</a>
          <a className="link link-hover text-gray-500">Privacy policy</a>
          <a className="link link-hover text-gray-500">Cookie policy</a>
        </nav>
       </div>
      </footer>
    );
};

export default Footer;