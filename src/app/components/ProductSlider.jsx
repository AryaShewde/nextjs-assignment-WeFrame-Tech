"use client"

import React, { useEffect, useRef, useState } from 'react'
import { IoAdd, IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { VscHeart } from "react-icons/vsc";
import { FcLike } from "react-icons/fc";
import Image from 'next/image';
import { GoDash } from 'react-icons/go';

const ProductSlider = () => {
    const items = [
        { id: 1, title: "Title 1" },
        { id: 2, title: "Title 2" },
        { id: 3, title: "Title 3" },
        { id: 4, title: "Title 4" },
        { id: 5, title: "Title 5" },
        { id: 6, title: "Title 6" },
        { id: 7, title: "Title 7" },
        { id: 8, title: "Title 8" },
        { id: 9, title: "Title 9" },
        { id: 10, title: "Title 10" },
    ];

    const [likedItems, setLikedItems] = useState([]);
    const [isHovered, setIsHovered] = useState(null);
    const sliderRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const duplicateItems = [...items, ...items, ...items];

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        const slider = sliderRef.current;
        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = `translateX(-20%)`;
        setTimeout(() => {
            slider.style.transition = "none";
            slider.appendChild(slider.firstElementChild);
            slider.style.transform = `translateX(0)`;
            setIsAnimating(false);
        }, 500);
    };

    const handlePrevious = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        const slider = sliderRef.current;
        slider.style.transition = "none";
        slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
        slider.style.transform = `translateX(-20%)`;

        setTimeout(() => {
            slider.style.transition = "transform 0.5s ease-in-out";
            slider.style.transform = `translateX(0)`;
            setIsAnimating(false);
        }, 0);
    };

    const toggleLike = (id) => {
        setLikedItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <div className=' bg-[#fbf9f8ab] mb-4 pb-3'>
            <div className='flex justify-between items-center sm:p-10 p-5'>
                <h1 className='lg:text-4xl text-xl'>Articles similaires</h1>
                <p className='text-gray-300 underline'>VOIR TOUTE LA COLLECTION</p>
            </div>
            <div className="relative w-full mx-auto mt-1 overflow-hidden">
                <div
                    ref={sliderRef}
                    className="flex 2xl:w-full lg:w-[150%] md:w-[200%] sm:w-[250%] w-[450%]"
                >
                    {duplicateItems.map((item, index) => (
                        <div
                            key={index}
                            className="w-1/5 px-2 flex-shrink-0"
                            style={{ flexBasis: "20%" }}
                        >
                            <div className="rounded-md text-center shadow-md overflow-hidden" onMouseEnter={() => setIsHovered(index)} onMouseLeave={() => setIsHovered(null)}>
                                <div className='bg-[#F9F7F5] flex justify-between items-center'>
                                    <button
                                        onClick={() => toggleLike(item.id)}
                                        className={`mt-4 px-4 py-2 rounded`}
                                    >
                                        {likedItems.includes(item.id) ? <FcLike size={30} /> : <VscHeart size={30} />}
                                    </button>
                                    <span className='mx-4 px-2 py-1 bg-white rounded-md'>ART DE LA TABLE</span>
                                </div>
                                <div className='overflow-hidden'>
                                    <Image src="/produits.png" alt="/produits.png" width={100} height={100} className={`w-full object-cover duration-200 ${isHovered === index && "scale-105"}`} />
                                </div>
                                {isHovered === index && (
                                    <div className='flex w-fit m-auto gap-8 px-2 py-1 justify-around items-center bg-white relative top-[-60px] mb-[-50px] rounded-md'>
                                        <div>QTE</div>
                                        <div className='flex sm:gap-10 gap-2 items-center border rounded-md p-2'>
                                            <button><GoDash /></button>
                                            0
                                            <button><IoAdd /></button>
                                        </div>
                                        <button className='px-3 py-2 bg-[#EE4197] text-white rounded-md'>Ajouter</button>
                                    </div>
                                )}
                                <div className={`flex justify-between items-center p-3 text-xl font-serif `}>
                                    <h3 className="text-lg font-bold">{item.title}</h3>
                                    <p>0€</p>
                                </div>
                                <div className='flex px-3 justify-between pb-4 items-center'>
                                    <div className='text-gray-400 sm:text-base text-sm'>0,35€/Piece.REF:VEBGN5</div>
                                    <span className='bg-gray-200 px-2 py-1 rounded-full text-sm'>20 pieces</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={handlePrevious}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#5CD2DD] text-white px-4 py-2 rounded-r shadow"
                >
                    <IoArrowBackOutline />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#5CD2DD] text-white px-4 py-2 rounded-l shadow"
                >
                    <IoArrowForward />
                </button>
            </div>
        </div>
    )
}

export default ProductSlider
