// components/FoodItemCard.jsx
import { FiStar, FiMapPin, FiClock } from "react-icons/fi";

const FoodItemCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border">
      <div className="relative h-48">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium shadow-sm">
          {item.price}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{item.name}</h3>
          <div className="flex items-center bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm">
            <FiStar className="mr-1" />
            {item.rating} ({item.reviewCount})
          </div>
        </div>
        
        <p className="text-gray-600 mb-3">{item.description}</p>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <FiMapPin className="mr-1" />
          <span className="mr-4">{item.vendor}, {item.location}</span>
          <FiClock className="mr-1" />
          <span>10am-8pm</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodItemCard;