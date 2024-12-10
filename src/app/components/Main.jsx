import React from 'react'
import ToggleImg from './ToggleImg'
import { CiHeart } from 'react-icons/ci'
import { TfiRulerAlt } from "react-icons/tfi";
import { LuCircleSlash2 } from "react-icons/lu";
import { IoAdd } from "react-icons/io5";
import { GoDash } from "react-icons/go";

const Main = () => {
    return (
        <div>
            <div className='p-2 flex items-center gap-3'>Home <div className='w-1 h-1 bg-gray-300 rounded-full'></div><span className='text-gray-300'>Art de la table</span></div>
            <div className='lg:flex w-full gap-4 justify-around block'>
                <div className='p-6 lg:w-[45%] w-full'>
                    <ToggleImg />
                </div>
                <div className='lg:w-[45%] w-full p-6 flex flex-col justify-between'>
                    <div>
                        <div className='flex justify-between items-center'>
                            <div className='text-2xl font-semibold font-serif'>Cheese – appareil à raclette 1/2 roue</div>
                            <CiHeart size={30} />
                        </div>
                        <div className='text-2xl mb-4'>39,50€ <span className='text-lg text-gray-300'>/piece</span></div>
                        <hr />
                        <div className='flex justify-between items-center p-3'>
                            <div className='flex gap-3 items-center text-xl'>
                                <TfiRulerAlt /> 20cm
                                <LuCircleSlash2 /> 50cm
                            </div>
                            <p className='text-gray-300'>REF: VABGN5</p>
                        </div>
                        <hr />
                        <div>
                            Location appareil à raclette - Raclette traditionnelle 1/2 roue <br /> Réglable en hauteur <br /> Appareil à raclette professionnel <br /> Boîtier de chauffe horizontal réglable en hauteur <br /> - <br /> 220V <br /> 900W
                        </div>
                    </div>
                    <div>
                        <hr />
                        <div className='flex gap-2 mt-2'>
                            <div className='flex sm:gap-10 gap-2 items-center border rounded-md p-2'>
                                <button><GoDash /></button>
                                1
                                <button><IoAdd /></button>
                            </div>
                            <button className='w-full bg-[#5CD2DD] p-2 text-white text-lg font-semibold rounded-md'>Ajouter au panier</button>
                        </div>
                        <div className='mt-8'>
                            <div className='flex justify-between px-2 py-4 rounded-md bg-gray-200 items-center'>
                                <div>LIVRAISONS</div>
                                <IoAdd />
                            </div>
                            <div className='flex justify-between px-2 py-4 rounded-md bg-gray-200 items-center'>
                                <div>QUESTIONS</div>
                                <IoAdd />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
