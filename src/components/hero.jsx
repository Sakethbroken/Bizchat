import twobikes from "../assets/Add post.png";
import nasa from "../assets/nasalogo.webp";

export default function Hero() {
  return (
    <div className="relative px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 flex flex-col items-start gap-2 sm:gap-4">
      {/* Back to feed button */}
      <button className="text-red-800 cursor-pointer font-semibold decoration-red-800">
        <div className="flex items-center">
          <span className="mr-1">&larr;</span>
          <div className="underline underline-offset-4">Back to feed</div>
        </div>
      </button>

      {/* Image section */}
      <div className="relative rounded-lg sm:rounded-2xl w-full h-fit shadow-md overflow-hidden">
        {/* Main image */}
        <img
          src={twobikes}
          alt="Bikes"
          className="w-full h-auto object-cover"
        />

        {/* NASA logo overlay */}
        <div className="absolute top-4 left-4">
         
        </div>

        {/* Hero content */}
        <div className="p-4 sm:p-6 md:ml-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
            <h1 className="font-bold text-xl sm:text-2xl font-proxima">Parvathi Vallabha Motors</h1>
            <button className="border border-red-800 text-red-800 px-4 py-1 mt-2 sm:mt-0 rounded-sm text-sm cursor-pointer self-start sm:self-auto">
              + Connect
            </button>
          </div>
          
          <p className="text-sm text-gray-700 mt-1">
            Internet Marketplace Platform, Hyderabad · 7K followers, 50 business partners
          </p>
          
          <div className="mt-2 max-w-2xl">
            <p className="text-xs sm:text-sm md:text-[14px]">
              At eWheelers Mobility Solutions, we are redefining the future of mobility commerce through cutting-edge technology. As a leading provider of innovative commerce SaaS platforms tailored for the electric vehicle industry, our mission is to empower businesses to thrive in the evolving mobility landscape.
            </p>
          </div>
          
          <button className="mt-4 bg-red-800 text-white px-4 py-1 rounded-sm text-sm cursor-pointer">
            Visit B2BMart marketplace
          </button>
        </div>
      </div>
    </div>
  );
}