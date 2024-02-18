import { useState, useRef, useEffect, useMemo } from "react";
import '../Slider.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import img1 from "../assets/hairdresser/herobg.webp";
import img2 from "../assets/hairdresser/location.webp";
import img3 from "../assets/hairdresser/p1.webp";
import img4 from "../assets/hairdresser/p2.webp";

const Slider = () => {
    const [active, setActive] = useState(0);
    const [prev, setPrev] = useState(0);

    // Refs
    const contentRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const nameRef = useRef("");

    const sliderContent = useMemo(() => [
        {
            img: img1,
            name: "Hair Style 1",
        },
        {
            img: img2,
            name: "Hair Style 2",
        },
        {
            img: img3,
            name: "Hair Style 3",
        },
        {
            img: img4,
            name: "Hair Style 4",
        },
    ], []);

    const Slide = (type) => {
        let local;
        if (type === "next") {
            local = active + 1;
            sliderContent.length - 1 < local ? setActive(0) : setActive(local);
        }
        if (type === "prev") {
            local = active - 1;
            local < 0 ? setActive(sliderContent.length - 1) : setActive(local);
        }
        setPrev(active);
    };

    useEffect(() => {
        contentRef.current.style.bottom = "-100%";
        prevRef.current.style.left = "-10%";
        nextRef.current.style.right = "-10%";
        setTimeout(() => {
            nameRef.current.innerText = sliderContent[active].name;
            contentRef.current.style.bottom = "0%";
            prevRef.current.style.left = "0%";
            nextRef.current.style.right = "0%";
        }, 1000);
    }, [active, sliderContent]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            Slide("next");
        },  8000); // every 8 seconds
    
        // Clear the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, [active]);    

    return (
        <div>
            <div className="rounded-xl relative shadow-lg overflow-hidden">
                <div className="w-[600px] h-[400px] relative">
                    {sliderContent.map((slide, i) => {
                        return (
                            <img
                                src={slide.img}
                                key={i}
                                alt="slideImg"
                                className={`h-full w-full absolute object-cover inset-0 duration-[2.5s] ease-out transition-[clip-path] ${i === active ? "clip-visible" : "clip-hidden"
                                    }`}
                            />
                        );
                    })}
                    <img
                        src={sliderContent[prev].img}
                        alt="previmg"
                        className="w-full h-full  object-cover"
                    />
                </div>
                <div>
                    <button id="back" ref={prevRef} onClick={() => Slide("prev")}>
                        <ChevronLeftIcon size="large" />
                    </button>
                    <button
                        id="forward"
                        ref={nextRef}
                        className="right-0"
                        onClick={() => Slide("next")}
                    >
                        <ChevronRightIcon size="large" />
                    </button>
                </div>
                <div className="content" ref={contentRef}>
                    <h1 ref={nameRef}>{sliderContent[0].name}</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
                        porro.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Slider;