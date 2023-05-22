import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='font-semibold text-3xl text-center'>Menu</h1>
            <p className=' text-l text-center'>There are menu of some
                food that we provides. Considering customers health we always provide fresh
                food.</p>
            <div className='grid grid-cols-3 gap-4 w-4/5 my-9 mx-auto'>
                {
                    services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;