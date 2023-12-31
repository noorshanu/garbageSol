import { FaFacebookF, FaDiscord, FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";



function JoinCommunity() {
  return (
    <section className="py-10 relative z-10 overflow-hidden bg-[#000] ">
      <div className="container-wrapper">
        
<div className=" flex justify-center gap-5 pb-16">
  <a href="/" className=" text-black bg-white rounded-full p-2 text-4xl "> <FaTelegramPlane /></a>
  <a href="/" className="text-black bg-white rounded-full p-2 text-4xl"><FaInstagram/></a>
  <a href="/" className="text-black bg-white rounded-full p-2 text-4xl"><FaYoutube /></a>
 
  
 
  <a href="/" className="text-black bg-white rounded-full p-2 text-4xl"><FaTwitter /></a>
  <a href="/" className="text-black bg-white rounded-full p-2 text-4xl"><FaDiscord/></a>
</div>
      

<div className=" py-4">
  <img src="images/line.png" alt=""  className=" mx-auto"/>
</div>
       
      </div>
    </section>
  );
}

export default JoinCommunity;
