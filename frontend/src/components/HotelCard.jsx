import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const HotelCard = ({ room, index }) => {
  // Ensure room is defined to avoid runtime errors
  if (!room) {
    return <div>Error: Room data is missing</div>;
  }

  // Use fallback image if room.images[0] is undefined
  const imageSrc = room.images?.[0] || 'default-image.jpg';

  return (
    <Link
      to={'/rooms/' + room._id}
      onClick={() => window.scrollTo(0, 0)} // Ensure smooth scrolling to the top
      className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
    >
      <img
        src={imageSrc}
        alt={room.hotel?.name || 'Hotel Image'}
        className="w-full h-48 object-cover"
      />

      {/* Display "Best Seller" badge for even-indexed cards */}
      {index % 2 === 0 && (
        <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full">
          Best Seller
        </p>
      )}

      <div className="p-4 pt-5">
        {/* Hotel Name and Rating */}
        <div className="flex items-center justify-between">
          <p className="font-playfair text-xl font-medium text-gray-800">
            {room.hotel?.name || 'Unknown Hotel'}
          </p>
          <div className="flex items-center gap-1">
            <img src={assets.starIconFilled} alt="star-icon" className="w-4 h-4" />
            <span>4.5</span>
          </div>
        </div>

        {/* Hotel Address */}
        <div className="flex items-center justify-between text-sm mt-2">
          <img src={assets.locationIcon} alt="location-icon" className="w-4 h-4" />
          <span>{room.hotel?.address || 'Unknown Address'}</span>
        </div>

        {/* Price and Book Now Button */}
        <div className="flex items-center justify-between mt-4">
          <p>
            <span className="text-xl text-gray-800">${room.pricePerNight || 'N/A'}</span> /night
          </p>
          <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;