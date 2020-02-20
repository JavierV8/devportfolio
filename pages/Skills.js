import React, { } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/shared/BasePage";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
const [activeIndex, setActiveIndex] = useState(0);
const [animating, setAnimating] = useState(false);

const Skills = props => {
  const { auth } = props;

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item, index) => {
    return (
      <CarouselItem className="carouselItem" onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={index}>
        <h1 className="skills-title">{item.title}</h1>
        <div className="containerSkills" onClick={() => moving([...item.images])}>
          <img
            className="image-move"
            id={item.images[0]}
            src={`../static/images/logos/${item.images[0]}.png`}
          />
          <img
            className="image-move"
            id={item.images[1]}
            src={`../static/images/logos/${item.images[1]}.png`}
          />
          <img
            className="image-move"
            id={item.images[2]}
            src={`../static/images/logos/${item.images[2]}.png`}
          />
          <img
            className="image-move"
            id={item.images[3]}
            src={`../static/images/logos/${item.images[3]}.png`}
          />
          <img
            className="image-move"
            id={item.images[4]}
            src={`../static/images/logos/${item.images[4]}.png`}
          />
          <img
            className="image-move"
            id={item.images[5]}
            src={`../static/images/logos/${item.images[5]}.png`}
          />
        </div>
      </CarouselItem>
    );
  });
  return (
    <BaseLayout auth={auth}>
      <BasePage>
        <Carousel className="carruselBot bounceInRight" activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators className="carruselIndicator" items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl className="CarouselControl-prev" direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl className="CarouselControl-next" direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </BasePage>
    </BaseLayout>
  );
};

export default Skills;
