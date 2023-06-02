'use client'
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Card = ({ data }) => {
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollX, setScrollX] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        const cards = container.querySelectorAll(".card-container > div");

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const totalWidth = Array.from(cards).reduce((acc, card) => acc + card.offsetWidth, 0);
            const maxScrollX = totalWidth - containerWidth;

            let normalizedScrollX = scrollX + (scrollY - scrollX) % totalWidth;

            if (normalizedScrollX < -containerWidth) {
                normalizedScrollX += totalWidth;
            }

            if (normalizedScrollX > maxScrollX) {
                normalizedScrollX = normalizedScrollX % totalWidth;
            }

            gsap.to(cards, {
                x: -normalizedScrollX,
                duration: 0.5,
                ease: "power1.out",
            });

            setScrollX(normalizedScrollX);
        };


        const handleMouseDown = (e) => {
            setIsDragging(true);
            setStartX(e.pageX - container.offsetLeft);
        };

        const handleMouseMove = (e) => {
            if (!isDragging) return;
            const x = e.pageX - container.offsetLeft;
            const scrollX = x - startX;
            container.scrollLeft = -scrollX;
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            setScrollX(-container.scrollLeft);
        };

        const handleResize = () => {
            setContainerWidth(container.offsetWidth);
        };

        window.addEventListener("scroll", handleScroll);
        container.addEventListener("mousedown", handleMouseDown);
        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseup", handleMouseUp);
        container.addEventListener("mouseleave", handleMouseUp);
        window.addEventListener("resize", handleResize);

        setContainerWidth(container.offsetWidth);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            container.removeEventListener("mousedown", handleMouseDown);
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseup", handleMouseUp);
            container.removeEventListener("mouseleave", handleMouseUp);
            window.removeEventListener("resize", handleResize);
        };
    }, [isDragging, startX, scrollX, containerWidth]);

    return (
        <div ref={containerRef} className="flex overflow-x-hidden card-container py-6 gap-4">
            {data.map((item, index) => (
                <div
                    key={index}
                    className={`flex-shrink-0 w-96 px-8 py-6 mx-2 ${item.backgroundColor} rounded-lg`}
                >
                    <img src={item.image} alt="Card" className=" w-10 h-10 mb-8 object-cover rounded-full" />
                    <h2 className="text-xl font-semibold mt-4">{item.heading}</h2>
                    <p className="mt-2">{item.description}</p>
                    {/* {console.log(index)} */}
                </div>

            ))}
        </div>
    );
};

export default Card;
