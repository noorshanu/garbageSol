import { FaFacebookF, FaDiscord, FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



function JoinCommunity() {
  return (
    <section className="py-10 relative z-10 overflow-hidden bg-[#000] ">
      <div className="container-wrapper">
        
<div className=" flex justify-center gap-5">
  <a href="/" className="text-[#fff]"> <FaFacebookF/></a>
  <a href="/" className="text-[#fff]"><FaDiscord/></a>
  <a href="/" className="text-[#fff]"><FaInstagram/></a>
  <a href="/" className="text-[#fff]"><FaYoutube /></a>
  <a href="/" className="text-[#fff]"><FaTwitter /></a>
</div>
      

<div className=" py-4">
  <img src="images/line.png" alt=""  className=" mx-auto"/>
</div>
       
      </div>
    </section>
  );
}

export default JoinCommunity;
