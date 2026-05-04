'use client';


export function TestimonialsSection() {
  // const clientAvatars = [
  //   { id: 1, src: '/unsplash_mEZ3PoFGs_k.svg', className: 'absolute top-[58px] left-0' },
  //   { id: 2, src: '/unsplash_3TLl_97HNJo.svg', className: 'absolute top-0 left-[137px]' },
  //   { id: 3, src: '/unsplash_et_78QkMMQs.svg', className: 'absolute top-[63px] right-[45px]' },
  //   { id: 4, src: '/unsplash_6anudmpILw4.svg', className: 'absolute top-[149px] right-0' },
  //   { id: 5, src: '/unsplash_W7b3eDUb_2I.svg', className: 'absolute bottom-[60px] right-[54px]' },
  //   { id: 6, src: '/unsplash_OhKElOkQ3RE.svg', className: 'absolute bottom-0 left-[98px]' },
  //   { id: 7, src: '/unsplash_d1UPkiFd04A.svg', className: 'absolute bottom-[84px] left-0' },
  // ];

  return (
    <section className="">
      <div className="mx-auto flex flex-col gap-12 pb-18">
        {/* Section Title */}
        <div className="text-center gap-2 flex flex-col">
          <h2 className="text-[30px] leading-normal tracking-[-0.8px] self-stretch font-lexend font-bold text-light-green-500">
            What our happy <span className="text-primary-500">client say</span>
          </h2>
          <p className="text-[14px] leading-[26px] self-stretch font-lexend font-normal text-light-green-500">
            Several selected clients, who already believe in our service.
          </p>
        </div>



        {/* Happy Clients - Matthew Paul Feature */}
        <div className="mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">


            {/* Left - Main Image */}
            <div className="relative flex justify-center lg:justify-start">
              {/* Main Image Container */}
              <div className="">
                <img
                  src="/Frame 6839 1.png"
                  alt="Matthew Paul"
                  className=""
                />
              </div>
            </div>


            {/* Middle - Testimonial Text */}
            <div className="flex flex-col justify-start items-start">
              <h3 className="text-[30px] leading-[-0.8px] font-lexend font-bold text-light-green-500 mb-5">
                Matthew Paul
              </h3>
              <p className="text-light-green-500 text-[20px] leading-normal mb-8 font-lexend">
                Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.
              </p>

              {/* Carousel Indicators */}
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-3 bg-primary-500 rounded-full" />
                <div className="w-3 h-3 bg-[#FFF9EB] rounded-full" />
                <div className="w-3 h-3 bg-[#FFF9EB] rounded-full" />
                <div className="w-3 h-3 bg-[#FFF9EB] rounded-full" />
                <div className="w-3 h-3 bg-[#FFF9EB] rounded-full" />
              </div>
            </div>



            {/* Right - Avatar Cluster */}
            <div className="flex items-center justify-center">


              <img src="/Frame 71.png" alt="" className="w-[397px] h-[355px] object-cover overflow-visible!" />


              {/* Center Image */}
              {/* <div className="relative">
                <img
                  src="/unsplash_O3ymvT7Wf9U.svg"
                  alt="Client"
                  className=""
                />
              </div> */}

              {/* Orbiting Images */}
              {/* {clientAvatars.map((client) => (
                <div key={client.id} className={client.className}>
                  <img src={client.src} alt="Client" className="" />
                </div>
              ))} */}
            </div>


          </div>
        </div>





      </div>
    </section>
  );
}
