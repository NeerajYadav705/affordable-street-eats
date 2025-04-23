// components/CityCard.jsx
import Link from "next/link";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";

const CityCard = ({ city }) => {
  return (
    <Link 
      href={`/explore/${city.slug}`}
      className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
    >
      <div className="h-64 relative">
        <Image
          src={city.image}
          alt={`Street food in ${city.name}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-1">{city.name}</h3>
        <div className="flex items-center text-sm mb-2">
          <FiMapPin className="mr-1" />
          {city.foodCount}+ food spots
        </div>
        <div className="flex flex-wrap gap-2">
          {city.specialties.slice(0, 3).map((item, index) => (
            <span 
              key={index}
              className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs"
            >
              {item}
            </span>
          ))}
          {city.specialties.length > 3 && (
            <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
              +{city.specialties.length - 3} more
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CityCard;