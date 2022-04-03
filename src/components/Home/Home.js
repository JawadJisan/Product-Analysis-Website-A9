import React from 'react';

const Home = () => {
    return (
        <div className='flex md:px-16 py-8'>
            <div className='w-100%'>
                <img className='w-100%' src='headphone.jpg'></img>
            </div>

            <div className=''>
                <h2 className='text-xl text-gray-700 font-mono p-2'>MH40 WIRELESS</h2>
                <h1 className='text-2xl text-gray-800 p-3 m-2'>Wireless Over-Ear Headphones</h1>
                <p>299€</p>
                <p ></p>

                <button className='py-2 px-3 text-white mt-3 rounded-full bg-cyan-600'>BUY NOW</button>

            </div>
        </div>
    );
};

export default Home;