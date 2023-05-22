import React from 'react';
import img1 from '../../../assets/images/img2.jpg'
import img2 from '../../../assets/images/img3.jpeg'
import img3 from '../../../assets/images/img4.jpg'
import img4 from '../../../assets/images/img5.jpg'
const Banner = () => {
    return (
        <div className='w-4/5 my-9 mx-auto'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div></div>
                    <div><img className='rounded-md' src={img1} />
                        <h1></h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-2/4">
                        <h1 className='text-6xl font-bold text-white '>Delicious <br />
                            Freash & Healthy<br />
                            Food from Daisy's cooking
                        </h1>

                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div><img className='rounded-md' src={img2} /></div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div><img className='rounded-md' src={img3} /></div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div><img className='rounded-md' src={img4} /></div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;