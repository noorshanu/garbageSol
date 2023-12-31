function Hero() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#FFE600]">
      <div className="container-wrapper lg:h-[90vh]  pt-6 pb-12 lg:pt-0 lg:pb-0 lg:drop-shadow-[0_0_10rem_white]">
       
        <div className=" text-center mt-16 sm:mt-0">
          <h1 className="text-center text-[#000] text-2xl sm:text-3xl lg:text-8xl font-potta uppercase pb-2"> garbage-sol</h1>
          <p className=" font-potta">Never underestimate the value of useless shit garbage!</p>
       
        </div>
        <div className=" flex justify-between items-center">
          <img src="images/hero-img.png" alt=""  className="h-full w-full"/>
          <img src="images/hero-img1.png" alt="" className="h-full w-full" />
          <img src="images/hero-img2.png" alt="" className="h-full w-full" />
        </div>
        <div className="   flex  justify-center items-center gap-6 mt-7 sm:mt-8">
          <div className=" relative">
            <a
              href="/"
              className="  btn-main  font-bold text-sm sm:text-xl rounded-full px-12 py-2"
            >
            Trade
            </a>
          </div> 
          <div className="relative">
            <a href="https://t.me/solana_son" target="_blank" className="btn-main   font-bold text-sm sm:text-xl rounded-full px-12 py-2">
              COMMUNITY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
