import React, {useState} from 'react';

import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/solid";

const Carousel = ({props}) => {
    const [slide, setSlide] = useState(0)
    const slides = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg?w=1380&t=st=1698352324~exp=1698352924~hmac=5e6ad6764a4cae521569e5aa6e7a1a0e087aca60cc806424fae0161b4ec856e1",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ];

    const changeSlide = (direction: string): void => {
        switch (direction) {
            case "next":
                if (slide === slides.length - 1) {
                    setSlide(0)
                } else {
                    setSlide((prev) => prev + 1)
                }
                break
            case "back":
                if (slide === 0) {
                    setSlide(slides.length - 1)
                } else {
                    setSlide((prev) => prev - 1)
                }
                break
        }
    }

    return (
        <div className='flex flex-col item-center'>
            <div className="flex items-center justify-center">
                <button
                    onClick={() => changeSlide('back')}
                    className="h-full hover:bg-sky-700"
                >
                    <ChevronLeftIcon className="h-14 w-14 text-gray-500"/>
                </button>
                <div className='max-h-96 '>
                    <img src={slides[slide]} className='max-h-96 m-auto'/>
                </div>
                <div onClick={() => changeSlide('next')}>
                    <ChevronRightIcon className="h-14 w-14 text-gray-500"/>
                </div>
            </div>
            <div className="flex flex-row justify-center align-center space-x-2 pt-2">
                {slides.map((item, index) =>
                    <button
                        onClick={() => setSlide(index)}
                        className={'hover:bg-green-700 w-6 h-4 rounded ' + ((index === slide) ? "bg-indigo-700" : "bg-indigo-500")}
                        key={item}></button>)}
            </div>
        </div>
    );
};

export default Carousel;
