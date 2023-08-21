import { useEffect, useState } from 'react';
import './PropertyDetailsSearchBar.css';

function PropertyDetailsSearchBar({ property, setCityProperties }) {
  
    const [minBedroom, setMinBedroom] = useState('');
    const [minBathroom, setMinBathroom] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [homeType, setHomeType] = useState('');

  
    useEffect(() => {
      const filteredProperties = property.filter(prop =>
        (minBedroom === '' || prop.bedroom_count >= parseInt(minBedroom)) &&
        (minBathroom === '' || prop.bathroom_count >= parseInt(minBathroom)) &&
        (maxPrice === '' || prop.rent <= parseInt(maxPrice)) &&
        (homeType === '' || prop.property_type === homeType)
      );

      setCityProperties(filteredProperties);

    }, [minBedroom, minBathroom, maxPrice, homeType]);

  return (
    <div className='property-details-search-bar-container'>
      <div className='property-details-search-bar-section-container'>
        <p className='property-details-search-bar-title'>Min Bedroom</p>
        <select value={minBedroom} onChange={(e) => setMinBedroom(e.target.value)}>
            <option value=''>Any bedroom</option>
            {Array.from(new Set(property.map((prop) => prop.bedroom_count)))
                .sort((a, b) => a - b)
                .map((count) => (
            <option key={count} value={count}>
                {count}
            </option>
            ))}
        </select>
      </div>
      <div className='property-details-search-bar-section-container'>
        <p className='property-details-search-bar-title'>Min Bathroom</p>
        <select value={minBathroom} onChange={(e) => setMinBathroom(e.target.value)}>
            <option value=''>Any Bathroom</option>
            {Array.from(new Set(property.map((prop) => prop.bathroom_count)))
                .sort((a, b) => a - b)
                .map((count) => (
            <option key={count} value={count}>
                {count}
            </option>
            ))}
        </select>
      </div>
      <div className='property-details-search-bar-section-container'>
        <p className='property-details-search-bar-title'>Max Price</p>
        <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
            <option value=''>Any price</option>
            {Array.from(new Set(property.map((prop) => prop.rent)))
                .sort((a, b) => a - b)
                .map((count) => (
            <option key={count} value={count}>
                {count}
            </option>
            ))}
        </select>
      </div>
      <div className='property-details-search-bar-section-container'>
        <p className='property-details-search-bar-title'>Home Type</p>
        <select value={homeType} onChange={(e) => setHomeType(e.target.value)}>
            <option value=''>Any type</option>
            {Array.from(new Set(property.map((prop) => prop.property_type))).map((type) => (
            <option key={type} value={type}>
                {type}
            </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default PropertyDetailsSearchBar;
