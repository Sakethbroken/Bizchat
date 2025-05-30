import nasalogo from "../assets/nasalogo.webp";
import like from "../assets/Like.png";
import share from "../assets/Share.png";
import whatsapp from "../assets/Whatsapp.png";
import repost from "../assets/Repost.png";
import comment from "../assets/Comment.png";
import blogo from "../assets/Ellipse.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import menuIcon from "../assets/icons/icons.png";

export default function Cards({ image, title, description }) {
  const socialIcons = [whatsapp, like, comment, share, repost];

  return (
    <div className="bg-white rounded-xl pb-10 shadow-md p-4 space-y-4 w-full">
      {/* Header Section */}
      <div className="w-full">
        {/* Small Screens */}
        <div className="flex flex-col gap-2 md:hidden">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <img src={nasalogo} alt="nasaimg" className="w-12 h-12 rounded-full" />
              <div className="flex flex-col">
                <h1 className="font-semibold text-sm">Parvathi Vallabha Motors</h1>
                <h3 className="text-xs text-gray-500">24 October 2025</h3>
              </div>
            </div>
            <button className="flex-shrink-0">
              <img src={menuIcon} alt="menu" className="w-6 h-6" />
            </button>
          </div>
          <button className="w-fit ml-14 text-sm font-semibold text-red-800">
            + CONNECT
          </button>
        </div>

        {/* Large Screens */}
        <div className="hidden md:flex flex-row justify-between items-start">
          <div className="flex items-start">
            <img src={nasalogo} alt="nasaimg" className="w-14 h-14 rounded-full object-cover" />
            <div className="ml-4 flex flex-col">
              <div className="flex items-center">
                <h1 className="font-semibold text-lg">Parvathi Vallabha Motors</h1>
              </div>
              <h3 className="text-sm text-gray-500">Business profile info comes here</h3>
              <h3 className="text-sm text-gray-500">24 October 2025</h3>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-red-800 text-sm font-semibold mr-1 mt-2" >+ CONNECT</button>
            <button className="flex-shrink-0 mr-3 mt-2">
              <img src={menuIcon} alt="menu" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Image */}
      {image && (
        <div className="flex justify-center">
          <img src={image} alt="card content" className="rounded-md w-full" />
        </div>
      )}

      {/* Title and Description */}
      <div className="mt-2">
        <h1 className="font-bold text-lg">Headline for the post comes here</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laculis odio mi, sed pharetra lacus iaculis vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed finibus lacerat maleusu...{" "}
          <span className="text-red-700 cursor-pointer">Show more info...</span>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="bg-red-800 text-white px-5 cursor-pointer py-2 rounded text-sm">
          RFQ
        </button>
        <button className="border border-red-800 text-red-800 px-5 cursor-pointer py-2 rounded text-sm">
          Send Proposal
        </button>
      </div>

      {/* Likes & Comments Count */}
      <div className="flex text-xs text-gray-500 justify-between">
        <p className="hidden lg:block">Liked by Achyutam motors and 34 others</p>
        <div className="hidden lg:flex gap-4 ml-auto">
          <p>5 comments</p>
          <p>• 5 reposts</p>
        </div>
      </div>

      <hr className="border-t border-gray-300 my-2" />

      {/* Social Icons */}
     {/* Social Icons */}
<div className="w-full flex justify-between py-3">
  {socialIcons.map((icon, idx) => (
    <button
      key={`icon-${idx}`}
      className="transition-transform hover:scale-110 flex flex-col items-center justify-center"
    >
      <img
        src={icon}
        alt="social icon"
        className="w-[120px] h-[50px] object-contain"
      />
      
    </button>
  ))}
</div>

      {/* Comment Input */}
      <div className="relative w-full">
  {/* Profile Image */}
  <img
    src={blogo}
    className="absolute left-3 top-3 w-6 h-6 rounded-full"
    alt="User Avatar"
  />

  {/* Action Icons */}
  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-3">
    {[icon3, icon2, icon1].map((icon, idx) => (
      <button key={idx} className="w-5 h-5">
        <img src={icon} alt={`action-${idx}`} className="w-full h-full object-contain" />
      </button>
    ))}
  </div>

  {/* Textarea */}
  <textarea
    placeholder="Comment as Achyutam motors"
    className="w-full min-h-[48px] pl-12 pr-28 py-3 border border-gray-300 rounded-full text-sm resize-none placeholder-gray-500 focus:outline-none"
    rows={1}
    onInput={(e) => {
      e.target.style.height = "auto"
      e.target.style.height = e.target.scrollHeight + "px"
    }}
  ></textarea>
</div>

    </div>
  );
}