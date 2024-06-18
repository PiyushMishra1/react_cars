import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CarListing = () => {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(response => {
                setCars(response.data.products);
            })
            .catch(error => console.error('Error fetching car data:', error));
    }, []);

    const handleClick = (car) => {
        navigate(`/details/${car.id}`);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Car Listing</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cars.map(car => (
                    <div key={car.id} className="border p-4 rounded" onClick={() => handleClick(car)}>
                        <h2 className="text-xl font-semibold">{car.title}</h2>
                        <p>{car.description}</p>
                        <p className="font-bold">${car.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarListing;
