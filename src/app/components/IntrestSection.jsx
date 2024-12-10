"use client"

import Image from 'next/image';
import React, { useState } from 'react'
import { FcLike } from 'react-icons/fc';
import { GoDash } from 'react-icons/go';
import { IoAdd } from 'react-icons/io5';
import { VscHeart } from 'react-icons/vsc';

const IntrestSection = () => {
    const [likedItems, setLikedItems] = useState([]);
    const [isHovered, setIsHovered] = useState(null);
    const items = [
        { id: 1, title: "Title 1" },
        { id: 2, title: "Title 2" },
        { id: 3, title: "Title 3" },
    ];
    const toggleLike = (id) => {
        setLikedItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };
    return (
        <div className='p-5'>
            <div className='flex justify-between items-center sm:p-10 p-5'>
                <h1 className='lg:text-4xl text-xl'>Ces produits pourraient vous intéresser</h1>
                <p className='text-gray-300 text-xl underline'>Voir toute la collection</p>
            </div>
            <div className='lg:flex block w-full'>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="lg:w-2/6 w-full px-2 mb-3"
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
        </div>
    )
}

export default IntrestSection
