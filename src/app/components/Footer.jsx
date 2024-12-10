import Image from 'next/image'
import React from 'react'
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='lg:flex block m-auto justify-between lg:w-full w-fit p-10 bg-[#fefcfd] pb-20'>
            <div className='lg:flex w-fit block gap-6'>
                <Image src="/logo.png" alt="Logo" width={100} height={100} className="sm:h-16 sm:w-36 object-cover m-auto h-auto w-35 mb-5" />
                <div className='flex flex-col mb-5'>
                    <h1 className='font-semibold'>INFOS PRATIQUES</h1>
                    <p>À propos</p>
                    <p>Livraisons & Reprises</p>
                    <p>Mode d’emploi</p>
                    <p>F.A.Q</p>
                </div>
                <div className='flex flex-col mb-5'>
                    <h1 className='font-semibold'>LÉGAL</h1>
                    <p>Mentions légales</p>
                    <p>CGU</p>
                    <p>CGV</p>
                    <p>Politique de confidentialité</p>
                </div>
                <div className='flex flex-col mb-5'>
                    <h1 className='font-semibold'>MON COMPTE</h1>
                    <p>Accéder à mon compte</p>
                    <p>Ma liste d’envie</p>
                    <p>Créer un compte</p>
                    <p>Mot de passe oublié</p>
                </div>
            </div>
            <div className='flex flex-col gap-2  mb-5'>
                <h1>NOUS SUIVRE</h1>
                <div className='flex gap-2'><FaSquareTwitter size={35} /> <FaInstagramSquare size={35} /> <FaFacebookSquare size={35} /></div>
            </div>
        </div>
    )
}

export default Footer
