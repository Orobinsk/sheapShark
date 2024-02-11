import { FC, ReactNode, useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import classes from './Carousel.module.scss'


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
        <div className={classes.layout}>
            {animation &&
                <div className={classes.slides}>
                    {slides[slideIndex]}
                </div>
            }

            <div className={classes.navigation}>
                <button
                    onClick={() => changeSlide('back')}
                    className={classes.change_slide_button}
                >
                    <ChevronLeftIcon className={classes.arrow} />
                </button>
                <div className={classes.slides_wrapper}>  
                        {slides.map((_, index) =>
                          <button
                          onClick={() => setSlideIndex(index)}
                          className={`${classes.slide} ${index === slideIndex && classes.active}`}
                          key={index} />
                      
                        )}
                </div>
                <button
                    data-testid='btn-right'
                    onClick={() => changeSlide('next')}
                    className={classes.change_slide_button}
                >
                    <ChevronRightIcon className={classes.arrow} />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
