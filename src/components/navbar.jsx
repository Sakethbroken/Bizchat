const tabs = [
  "All posts",
  "Business posts",
  "Product posts",
  "Service posts",
  "Offer posts",
];

export default function Tabsbar({ activeTab, onTabChange }) {
  return (
    <div className="relative bg-white pt-2">
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#962210]" />

      {/* Center on md+ screens, scroll on small */}
      <div className="w-full flex md:justify-center">
        {/* Scrollable on small, centered inside wrapper on md+ */}
        <div className="flex overflow-x-auto scrollbar-none md:overflow-visible overflow-y-hidden">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`relative px-6 py-3 text-sm whitespace-nowrap transition-all duration-200
                  ${isActive ? "font-normal text-black" : "text-gray-500 hover:text-gray-700"}`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 bottom-[-1px] border-t-2 border-l-2 border-r-2 border-[#962210] rounded-t-md bg-white" />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
