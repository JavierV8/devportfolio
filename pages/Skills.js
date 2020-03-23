import React, { useState, useEffect } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/shared/BasePage";
import Spinner from '../components/Spinner/Spinner';

import Item from '../components/carouselItem/Item'
import {
    Carousel,
    CarouselControl,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';

const items = [
    {
        title: 'Front-End',
        images: ["html", "css3", "javascript", "boostrap", "react", "redux",],
    },
    {
        title: 'Back-end',
        images: ["nodejs", "express", "webpack", "nextjs", "mysql", "mongoDB"],
    },
    {
        title: 'IOT',
        images: ["node-red", "arduino", "mqtt", "api", "TCP", "ssh"],
    },
    {
        title: 'Controls Systems',
        images: ["siemens", "codesys", "rockwell", "mod-bus", "hmi", "opcua",],
    }
];

const Skills = props => {
    const { auth } = props;
    const [activeIndex, setActiveIndex] = useState(0);
    const [isIniciated, setIsIniciated] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', resizeFunction);
        return () => {
            window.removeEventListener('resize', resizeFunction);
        };
    }, []);

    const resizeFunction = () => {
        items.map(item => {
            item.images.map(elem => {
                const image = document.getElementById(elem);
                image.style.transform = `translate(0px, 0px)`;
            })
        })
    }

    const next = () => {
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        setActiveIndex(newIndex);
    }

    const slides = items.map((item, index) => {
        return (
            <CarouselItem className="carouselItem" key={index}>
                <Item item={item} index={index} />
            </CarouselItem>
        )
    });

    const pageloaded = () => {
        document.getElementById("carrousel-id").classList.add("bounceInRight");
        document.getElementById("carrousel-id").style.display = "inline";
        setIsIniciated(true);
    }

    let render = null;
    isIniciated ? render = null : render = <Spinner />;
    console.log(slides)
    return (
        <BaseLayout auth={auth}>
            <BasePage>
                {render}

                <div id="carrousel-id" onLoad={pageloaded}>
                    <Carousel className="carruselBot bounceInRight" activeIndex={activeIndex} next={next} previous={previous} interval={false}>
                        <CarouselIndicators className="carruselIndicator" items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl className="CarouselControl-prev" direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl className="CarouselControl-next" direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </div>
            </BasePage>
        </BaseLayout>
    )
};

export default Skills;