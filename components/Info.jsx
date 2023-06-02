'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap, Power1 } from 'gsap';

const Info = () => {
    const badgeRef = useRef(null);
    const infoImageRef = useRef(null);
    const leafImageRef = useRef(null);
    const greenImageRefTextDiv = useRef(null);
    const greenImageRefImageDiv = useRef(null);

    useEffect(() => {
        // Animate the leaf and green image continuously with rotation
        gsap.to(leafImageRef.current, {
            rotation: 360,
            repeat: -1,
            duration: 5,
            ease: Power1.easeInOut,
        });
        gsap.to(greenImageRefTextDiv.current, {
            rotation: 360,
            repeat: -1,
            duration: 4,
            ease: Power1.easeInOut,
        });
        gsap.to(greenImageRefImageDiv.current, {
            rotation: 360,
            repeat: -1,
            duration: 4,
            ease: Power1.easeInOut,
        });
        // Animate badge and info image zoom on scroll
        const badgeElement = badgeRef.current;
        const infoImageElement = infoImageRef.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.info__card',
                start: 'top center',
            },
        });

        tl.fromTo(
            badgeElement,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1 }
        ).fromTo(
            infoImageElement,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1 },
            '-=0.5'
        );


    }, []);

    return (
        <section className="w-11/12 h-screen ml-16 mt-20 info__card bg-orange-100 flex flex-row justify-center">
            <div className="text__div w-1/2 ml-16 mt-44 flex flex-col">
                <div>
                    <div>
                        <h3>Built out of frustration</h3>
                        <h1 className="head_text">Meet the ahead app</h1>
                    </div>
                    <div className="flex flex-row relative">
                        <div className="mt-14 ml-10 -rotate-12">
                            <Image
                                ref={badgeRef}
                                src="/assets/images/badge.png"
                                alt="apple"
                                width={75}
                                height={75}
                                className="object-contain rounded-full absolute rotate-12"
                                style={{ left: '140px', zIndex: 2 }}
                            />
                            <Image
                                ref={infoImageRef}
                                src="/assets/images/info.png"
                                alt="apple"
                                width={300}
                                height={300}
                                className="object-contain rounded-full"
                            />

                            <Image
                                src="/assets/images/dot.png"
                                alt="apple"
                                width={30}
                                height={30}
                                className="object-contain rounded-full absolute left-96 top-72"
                            />
                            <div className=" relative left-80">
                                <Image
                                    ref={greenImageRefTextDiv}
                                    src="/assets/images/green.png"
                                    alt="apple"
                                    width={75}
                                    height={75}
                                    className="object-contain rounded-full"
                                />
                            </div>

                            <Image
                                src="/assets/images/pulse.png"
                                alt="apple"
                                width={75}
                                height={75}
                                className="object-contain rounded-full relative left-64 bottom-10"
                            />

                        </div>
                    </div>
                </div>
            </div>
            <div className="image__div w-1/2">
                <div className=" relative left-96 bottom-10">
                    <Image
                        ref={leafImageRef}
                        src="/assets/images/leaf.png"
                        alt="apple"
                        width={100}
                        height={100}
                        className="object-contain rounded-full"
                    />
                </div>
                <div className=" relative left-80 bottom-10">
                    <Image
                        ref={greenImageRefImageDiv}
                        src="/assets/images/green.png"
                        alt="apple"
                        width={75}
                        height={75}
                        className="object-contain rounded-full"
                    />
                </div>
                <div className="">
                    <p className="font-normal text-2xl">
                        A personalized pocket coach that provides bite- <br /> sized, science-driven tools to boost emotional <br /> intelligence.
                        <br />
                    </p>
                    <p className="font-normal text-2xl mt-10">
                        Think of it as a pocket cheerleader towards a <br /> better, more fulfilling life.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Info;
