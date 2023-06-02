import Card from "./Card"
import Image from "next/image";

const Carousel = () => {
    const cardData = [
        {
            image: "/assets/images/promotion.png",
            heading: "You get a promotion at work",
            description: "You question yourself and wonder when they will realize you're an unqualified imposter instead of trusting yourself and your abilities.",
            backgroundColor: "bg-indigo-600 text-white -rotate-6 !important",
        },
        {
            image: "/assets/images/eyebrow.jfif",
            heading: "You attend a class reunion",
            description: "You compare yourself with your peers' achievements, instead of making you self-judgement more independent of others.",
            backgroundColor: "bg-orange-100",
        }, {
            image: "/assets/images/sideeye.png",
            heading: "You are at a lively dinner party",
            description: "You play on your phone instead of confidently approaching strangers, and striking up a chat.",
            backgroundColor: "bg-amber-100",
        },
        {
            image: "/assets/images/frown.jpg",
            heading: "You argue with a colleague",
            description: "You get angry and defesive instead of staying open and workingtowards common ground.",
            backgroundColor: "bg-violet-100",
        },
        {
            image: "/assets/images/teeth.jfif",
            heading: "You hit dead end in a negotiation",
            description: "You get nervous, frazzled, and frustrated, instead of staying optimistic and solution-oriented.",
            backgroundColor: "bg-teal-50",
        }, {
            image: "/assets/images/promotion.png",
            heading: "You get a promotion at work",
            description: "You question yourself and wonder when they will realize you're an unqualified imposter instead of trusting yourself and your abilities.",
            backgroundColor: "bg-indigo-600 text-white -rotate-6 !important",
        },
        {
            image: "/assets/images/eyebrow.jfif",
            heading: "You attend a class reunion",
            description: "You compare yourself with your peers' achievements, instead of making you self-judgement more independent of others.",
            backgroundColor: "bg-orange-100",
        }, {
            image: "/assets/images/sideeye.png",
            heading: "You are at a lively dinner party",
            description: "You play on your phone instead of confidently approaching strangers, and striking up a chat.",
            backgroundColor: "bg-amber-100",
        },
        {
            image: "/assets/images/frown.jpg",
            heading: "You argue with a colleague",
            description: "You get angry and defesive instead of staying open and workingtowards common ground.",
            backgroundColor: "bg-violet-100",
        },
        {
            image: "/assets/images/teeth.jfif",
            heading: "You hit dead end in a negotiation",
            description: "You get nervous, frazzled, and frustrated, instead of staying optimistic and solution-oriented.",
            backgroundColor: "bg-teal-50",
        },
    ];

    return (
        <div className="h-4/5 mt-24">
            <div className="flex gap-20 ml-20 text-5xl font-semibold">
                Does this sound familiar... <Image src="/assets/images/familiar.png"
                    alt="chibi"
                    width={100}
                    height={150}
                    className='object-contain rounded-xl relative bottom-10' />
            </div>
            <div className="flex justify-center mt-16">
                <Card data={cardData} />
            </div>
        </div>
    );
};

export default Carousel