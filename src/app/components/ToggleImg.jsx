"use client"

import Image from 'next/image';
import React, { useState } from 'react'

const ToggleImg = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        "/produits1.png",
        "/produits2.png",
        "/produits3.png",
        "/produits4.png",
    ];

    const handleImageChange = (index) => {
        setCurrentImage(index);
    };
    return (
        <div className='flex flex-col gap-8'>
            <div className="flex">
                <div className="flex sm:gap-4 gap-0 mt-4 flex-col w-fit absolute">
                    {images.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => handleImageChange(index)}
                            className={`px-4 sm:py-2 py-1 rounded-full`}
                        >
                            <Image src={img} alt={`Image ${index + 1}`} width={60} height={60} className={`border sm:h-auto sm:w-auto h-10 w-10 object-cover rounded-md ${currentImage === index
                                ? "opacity-100"
                                : "opacity-40"
                                }`}/>
                        </button>
                    ))}
                </div>
                <Image src={images[currentImage]} alt={`Image ${currentImage + 1}`} width={100} height={100} className="w-full object-cover border rounded-lg shadow-md" />
            </div>
            <div>
                <h1 className='text-lg'>Description Produit</h1>
                <p className='text-gray-300'>Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".</p>
            </div>
        </div>
    )
}

export default ToggleImg
