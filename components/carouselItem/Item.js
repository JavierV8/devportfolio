import React from "react";

const Item = props => {
    const { item } = props

    const moving = imagenes => {
        let images = [...imagenes];
        let randoom1 = null;
        let randoom2 = null;
        images.map(image => {
            randoom1 = image;
            randoom2 = images[Math.floor(Math.random() * 5) + 0];
            transform(randoom1, randoom2);
        });
    };

    const transform = (randoom1, randoom2) => {
        let image1 = document.getElementById(randoom1);
        let image2 = document.getElementById(randoom2);
        var transform1 = image1.style.transform;
        var transform2 = image2.style.transform;
        let transformLeft1 = 0;
        let transformTop1 = 0;
        let transformLeft2 = 0;
        let transformTop2 = 0;
        if (transform1 != "") {
            let numbers = transform1.match(/[+-]?\d+(?:\.\d+)?/g).map(Number);
            transformLeft1 = numbers[0];
            transformTop1 = numbers[1];
        }
        if (transform2 != "") {
            let numbers2 = transform2.match(/[+-]?\d+(?:\.\d+)?/g).map(Number);
            transformLeft2 = numbers2[0];
            transformTop2 = numbers2[1];
        }
        let image1Left = document.getElementById(randoom1).offsetLeft;
        let image1Top = document.getElementById(randoom1).offsetTop;
        let image2Left = document.getElementById(randoom2).offsetLeft;
        let image2Top = document.getElementById(randoom2).offsetTop;

        let result1Left = image2Left - image1Left + transformLeft2;
        let result1Top = image2Top - image1Top + transformTop2;
        let result2Left = image1Left - image2Left + transformLeft1;
        let result2Top = image1Top - image2Top + transformTop1;
        image1.style.transform = `translate(${result1Left}px, ${result1Top}px)`;
        image2.style.transform = `translate(${result2Left}px, ${result2Top}px)`;
    }

    return (
        <div>
            <h1 className="skills-title">{item.title}</h1>
            <div className="containerSkills" onMouseLeave={() => moving([...item.images])} onMouseEnter={() => moving([...item.images])} onClick={() => moving([...item.images])}>
                <img
                    className="image-move"
                    id={item.images[0]}
                    src={`../../static/images/logos/${item.images[0]}.png`}
                />
                <img
                    className="image-move"
                    id={item.images[1]}
                    src={`../../static/images/logos/${item.images[1]}.png`}
                />
                <img
                    className="image-move"
                    id={item.images[2]}
                    src={`../../static/images/logos/${item.images[2]}.png`}
                />
                <img
                    className="image-move"
                    id={item.images[3]}
                    src={`../../static/images/logos/${item.images[3]}.png`}
                />
                <img
                    className="image-move"
                    id={item.images[4]}
                    src={`../../static/images/logos/${item.images[4]}.png`}
                />
                <img
                    className="image-move"
                    id={item.images[5]}
                    src={`../static/images/logos/${item.images[5]}.png`}
                />
            </div>
        </div>

    )
}

export default Item