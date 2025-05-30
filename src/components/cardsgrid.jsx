import Cards from "./card";
import Masonry from "react-responsive-masonry";
import bike from "../assets/bike.png";
import scooty from "../assets/scooty.png";
import scooty1 from "../assets/scooty2.png";
import { useState, useEffect } from "react";

export default function Cardsgrid({ activeTab }) {
  // State to track window width
  const [columnCount, setColumnCount] = useState(2);

  // Update column count based on screen size
  useEffect(() => {
    const handleResize = () => {
      // Set to 1 column for screens smaller than 768px (md breakpoint)
      if (window.innerWidth < 768) {
        setColumnCount(1);
      } else {
        setColumnCount(2);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let cardsData = [
    {
      image: bike,
      title: "Bike from Bajaj Motors",
      //description: "High mileage and smooth performance for city roads.",
    },
    {
      // image removed
      title: "New Scooter Launch",
      description: "Stylish and economical, great for everyday commute.",
    },
    {
      image: scooty1,
      title: "Family SUV Deal",
      description: "Spacious, comfortable and equipped with modern features.",
    },
    {
      image: bike,
      title: "Another Bajaj Bike",
      description: "Robust and durable, perfect for daily rides.",
    },
    {
      // image removed
      title: "Urban Commuter Scooter",
      description: "Designed for style and comfort.",
    },
    {
      image: scooty1,
      title: "SUV Deal Extended",
      description: "Great deals on spacious SUVs this month.",
    },
  ];

  // Reorder based on activeTab
  if (activeTab === "Business posts") {
    cardsData = [cardsData[5], cardsData[0], cardsData[3], cardsData[1], cardsData[2], cardsData[4]];
  } else if (activeTab === "Product posts") {
    cardsData = [cardsData[2], cardsData[3], cardsData[4], cardsData[1], cardsData[0], cardsData[5]];
  }

  return (
    <div className="p-4 w-full sm:p-4 md:ml-11 md:mr-1 md:w-auto">

      <Masonry 
        className=""
        columnsCount={columnCount} 
        gutter="16px"
      >
        {cardsData.map((card, index) => (
          <Cards
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </Masonry>
    </div>
  );
}