'use client';

interface PhilosophyItem {
  icon: string;
  title: string;
  description: string;
}

interface PhilosophyStat {
  label: string;
  value: string;
}

interface PhilosophyProps {
  title: string;
  description: string;
  items: PhilosophyItem[];
  stats: PhilosophyStat[];
}

export function PhilosophySection({ title, description, items, stats }: PhilosophyProps) {
  // Helper to handle the highlighted word in title
  const renderTitle = () => {
    const parts = title.split('Dubai');
    if (parts.length > 1) {
      return (
        <>
          {parts[0]}
          <span className="text-primary-500">Dubai</span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <section className="flex pb-18 sm:pb-14 lg:pb-18">
      <div className="flex flex-col max-w-7xl mx-auto gap-12 sm:gap-8 lg:gap-12">
        {/* Section Title */}
        <div className="flex flex-col text-center gap-2">
          <h2 className="text-3xl tracking-[-0.8px] self-stretch font-lexend font-bold text-light-green-500">
            {renderTitle()}
          </h2>
          <p className="text-base self-stretch font-lexend font-normal text-dark-green-200 mx-auto">
            {description}
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-3 md:gap-6 lg:gap-6">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="group py-7 sm:py-5 lg:py-7 hover:p-5 active:p-5 rounded-2xl transition-all duration-300 hover:bg-white active:bg-white hover:shadow-2xl active:shadow-2xl border border-transparent hover:border-gray-100 active:border-gray-100 cursor-pointer"
              >
                <div className="gradient-border w-14 h-14 flex items-center justify-center mb-5">
                  <img src={item.icon} alt={item.title} className="" />
                </div>
                <h3 className="text-2xl lg:text-xl tracking-[-0.8px] self-stretch font-lexend font-semibold text-dark-green mb-3">{item.title}</h3>
                <p className="text-dark-green text-sm font-normal self-stretch overflow-hidden text-ellipsis ">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="stats-divider grid grid-cols-1 sm:grid-cols-4 sm:divide-x divide-y sm:divide-y-0 divide-gray-200">
          {stats.map((stat, i) => (
            <div key={i} className="text-center py-16 sm:py-12 lg:py-16">
              <p className="text-dark-green-200 text-base font-lexend font-normal font-normal mb-2">{stat.label}</p>
              <p className="text-light-green-500 text-2xl font-lexend font-semibold font-normal">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
