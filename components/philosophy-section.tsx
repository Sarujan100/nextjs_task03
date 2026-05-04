'use client';

export function PhilosophySection() {
  const philosophies = [
    {
      icon: '/feather_activity.svg',
      title: 'OUR PHILOSHOPY',
      description: 'Our vision is to offer exclusive after-sales client services which helps our company to create well-established client network in our key markets.',
    },
    {
      icon: '/feather_trending-up.svg',
      title: 'OUR VISION & MISSION',
      description: 'Our vision is to offer exclusive after-sales client services which helps our company to create well-established client network in our key markets.',
    },
    {
      icon: '/feather_command.svg',
      title: 'OUR EXPERTISE',
      description: 'What truly differentiates us from the competition is our commitment to providing premium and comprehensive after-sales client services.',
    },
    {
      icon: '/feather_navigation.svg',
      title: 'PROPERTY ONSULTANT',
      description: 'Buyown House Properties is currently seeking talented individuals to join our thriving team as Property Consultants.',
    },
  ];

  return (
    <section className="flex pb-18">
      <div className="flex flex-col max-w-7xl mx-auto gap-12">
        {/* Section Title */}
        <div className="flex flex-col text-center gap-2">
          <h2 className="text-[30px] leading-normal tracking-[-0.8px] self-stretch font-lexend font-bold text-light-green-500">
            Latest offplan projects in <span className="text-primary-500">Dubai</span>
          </h2>
          <p className="text-[16px] leading-[26px] self-stretch font-lexend font-normal text-dark-green-200 mx-auto">
            Whether you're selling, renting, buying, or seeking property valuation services, we are here to assist you every step of the way. Contact us today for exceptional real estate solutions.
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {philosophies.map((item, index) => {
            return (
              <div
                key={index}
                className="group py-7 hover:p-5 active:p-5 rounded-2xl transition-all duration-300 hover:bg-white active:bg-white hover:shadow-2xl active:shadow-2xl border border-transparent hover:border-gray-100 active:border-gray-100 cursor-pointer"
              >
                <div className="gradient-border w-14 h-14 flex items-center justify-center mb-5">
                  <img src={item.icon} alt={item.title} className="" />
                </div>
                <h3 className="text-[24px] lg:text-[20px] leading-normal tracking-[-0.8px] self-stretch font-lexend font-semibold text-dark-green mb-3">{item.title}</h3>
                <p className="text-dark-green text-[14px] font-normal self-stretch overflow-hidden text-ellipsis ">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="stats-divider grid grid-cols-1 md:grid-cols-4 md:divide-x divide-y md:divide-y-0 divide-gray-200">
          <div className="text-center py-16">
            <p className="text-dark-green-200 text-[16px] leading-[26px] font-lexend font-normal font-normal mb-2">PRODUCT</p>
            <p className="text-light-green-500 text-[24px] leading-[-0.8px] font-lexend font-semibold font-normal">10,0000+</p>
          </div>
          <div className="text-center py-16">
            <p className="text-dark-green-200 text-[16px] leading-[26px] font-lexend font-normal font-normal mb-2">LIKES</p>
            <p className="text-light-green-500 text-[24px] leading-[-0.8px] font-lexend font-semibold font-normal">45600</p>
          </div>
          <div className="text-center py-16">
            <p className="text-dark-green-200 text-[16px] leading-[26px] font-lexend font-normal font-normal mb-2">SALE</p>
            <p className="text-light-green-500 text-[24px] leading-[-0.8px] font-lexend font-semibold font-normal">576864</p>
          </div>
          <div className="text-center py-16">
            <p className="text-dark-green-200 text-[16px] leading-[26px] font-lexend font-normal font-normal mb-2">CUSTOMERS</p>
            <p className="text-light-green-500 text-[24px] leading-[-0.8px] font-lexend font-semibold font-normal">947444</p>
          </div>
        </div>
      </div>
    </section>
  );
}
