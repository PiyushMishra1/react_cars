import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(response => {
                setCar(response.data);
            })
            .catch(error => console.error('Error fetching car details:', error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCar(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = () => {
        axios.put(`https://dummyjson.com/products/${id}`, car)
            .then(response => {
                console.log('Car details updated:', response.data);
            })
            .catch(error => console.error('Error updating car details:', error));
    };

    if (!car) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Car Details</h1>
            <div>
                <label className="block mb-2">Title:</label>
                <input
                    className="border p-2 mb-4 w-full"
                    type="text"
                    name="title"
                    value={car.title}
                    onChange={handleChange}
                />
                <label className="block mb-2">Description:</label>
                <textarea
                    className="border p-2 mb-4 w-full"
                    name="description"
                    value={car.description}
                    onChange={handleChange}
                />
                <label className="block mb-2">Price:</label>
                <input
                    className="border p-2 mb-4 w-full"
                    type="text"
                    name="price"
                    value={car.price}
                    onChange={handleChange}
                />
                <button className="bg-blue-500 text-white px-4 py-2" onClick={handleSave}>Save</button>
                <button className="bg-gray-500 text-white px-4 py-2 ml-2" onClick={() => navigate('/')}>Back</button>
            </div>
        </div>
    );
};

export default CarDetails;
