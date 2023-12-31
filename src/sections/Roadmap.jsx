import Title from "components/Title";



function Roadmap() {
  return (
    <section className="relative z-10 ">
   

      <div className="container-wrapper mb-14">
        <Title className="text-center text-[#000] mb-10 pt-8">GARBAGE STORY</Title>

        {/* <img src="/images/roadmap.png" className="w-full" alt="" /> */}

        <div className="flex justify-between flex-col sm:flex-row gap-5">
        <img src="images/st-1.png" alt="" />
        <img src="images/st-2.png" alt="" />
        <img src="images/st-3.png" alt="" />

        
        </div>

        <div className="flex justify-between flex-col sm:flex-row gap-5">
        <img src="images/st-4.png" alt="" />
        <img src="images/st-5.png" alt="" />
        <img src="images/st-6.png" alt="" />

        
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
