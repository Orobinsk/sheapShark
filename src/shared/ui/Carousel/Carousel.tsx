import { FC, ReactNode, useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";


interface CarouselType {
    slides: ReactNode[]
}

const Carousel: FC<CarouselType> = ({ slides }) => {
    const [slideIndex, setSlideIndex] = useState(0)
    const [animation, setAnimation] = useState(true)

    useEffect(() => {
        setAnimation(false);
        const timeout = setTimeout(() => {
            setAnimation(true);
        }, 0);
        return () => {
            clearTimeout(timeout);
        };
    }, [slideIndex])

    const changeSlide = (direction: string) => {
        switch (direction) {
            case "next":
                if (slideIndex === slides.length - 1) {
                    setSlideIndex(0);
                } else {
                    setSlideIndex((prev) => prev + 1);
                }
                break;
            case "back":
                if (slideIndex === 0) {
                    setSlideIndex(slides.length - 1);
                } else {
                    setSlideIndex((prev) => prev - 1);
                    break;
                }
        }
    }


    return (
        <div className='flex flex-col item-center'>
            {animation &&
                <div className="animate-[pulse_.5s_ease-in-out] max-h-96 m-auto">
                    {slides[slideIndex]}
                </div>
            }

            <div className="flex justify-center mt-4">
                <button
                    onClick={() => changeSlide('back')}
                    className="rounded-full flex me-3 items-center justify-center h-6 w-6 bg-primary-text hover:bg-primary hover:animate-spring hover:scale-110"
                >
                    <ChevronLeftIcon className="h-5 w-5 text-white font-3" />
                </button>
                <div className='max-h-96'>
                    <div className="flex flex-row justify-center align-center space-x-2 pt-2">
                        {slides.map((_, index) =>
                            <button
                                onClick={() => setSlideIndex(index)}
                                className={((index === slideIndex) ? "bg-primary-text" : "bg-secondary-text") + ' transition-colors duration-300 ease-in-out w-6 h-2 rounded hover:bg-primary'}
                                key={index} />)}
                    </div>
                </div>
                <button
                    data-testid='btn-right'
                    onClick={() => changeSlide('next')}
                    className=" rounded-full flex ms-3 items-center justify-center h-6 w-6 bg-primary-text hover:animate-spring hover:scale-110 hover:bg-primary"
                >
                    <ChevronRightIcon className="h-5 w-5 text-white" />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
