import React from 'react';
import Image from 'next/image';
import { LiaLightbulb } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import Search from './Search';


const Navbar = () => {

    const category = [
        "ART DE LA TABLE",
        "MOBILIER",
        "NAPPAGE",
        "MATÉRIEL DE SALLE",
        "CUISINE",
        "BARBECUE",
        "TENTE",
        "CHAUFFAGE",
        "PODIUM - PISTE DE DANSE",
        "SON ET LUMIÈRE",
        "PACKS",
        "CONSOMMABLES",
    ]

    return (
        <>
            <div className="bg-gray-100 sticky top-0 left-0 z-50">
                <nav className="bg-white border-b-1 border-gray-300">
                    <div className="w-full px-4 py-4 flex items-center justify-between sm:gap-7 gap-0">
                        <div className="flex items-center xl:w-3/5 w-full gap-5">
                            <Image src="/logo.png" alt="Logo" width={100} height={100} className="sm:h-16 sm:w-36 object-cover mr-2 h-auto w-11" />
                            <Search />
                        </div>
                        <div className="space-x-6 flex items-center">
                            <a href="#" className="xl:flex hidden items-center gap-2 text-base font-medium text-gray-700 hover:text-blue-500">
                                <LiaLightbulb size={25} />
                                Inspirations
                            </a>
                            <a href="#" className="xl:flex hidden items-center gap-2 text-base font-medium text-gray-700 hover:text-blue-500">
                                <CiHeart size={25} />
                                Mes favoris
                                <div className="bg-gray-200 text-xs px-2 py-0 rounded-lg h-fit">24</div>
                            </a>
                            <a href="#" className="xl:flex hidden items-center gap-2 text-base font-medium bg-sky-600 text-white px-4 py-3 rounded-md">
                                <FiShoppingCart size={20} />
                                Panier
                            </a>
                            <div className='hidden gap-3 sm:flex'>
                                <div className='bg-gray-200 p-5 rounded-full'></div>
                                <div className='flex items-center'>FR <RiArrowDownSLine /></div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b-2">
                        <div className="mx-auto px-4 justify-around flex space-x-4 overflow-x-auto">
                            {category.map((item, index) => (
                                <a
                                    key={index}
                                    className="text-sm font-medium text-gray-700 whitespace-nowrap hover:border-b-2 py-3 hover:border-sky-600 hover:text-sky-600"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
