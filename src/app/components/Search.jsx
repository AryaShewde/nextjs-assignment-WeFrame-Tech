"use client"
import React from 'react'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GoArrowUpLeft } from "react-icons/go";



const Search = () => {
    const [mounted, setMounted] = useState(false);
    const [Input, setInput] = useState(false);
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [isSuggestionsVisible, setSuggestionsVisible] = useState(false);
    const inputRef = useRef(null);
    const mockData = [
        "fourchettes",
        "fourchette grande",
        "fourchette Prianha",
        "fourchette",
        "fourchettes",
        "Sport addict",
        "Grape",
        "Honeydew",
        "Kiwi",
        "Lemon",
    ];

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value.trim() === "") {
            setSuggestions([]);
            setSuggestionsVisible(false);
        } else {
            const filteredData = mockData.filter((item) =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredData);
            setSuggestionsVisible(true);
        }
    };
    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion);
        setSuggestionsVisible(false);
    };

    const input = () => {
        setInput(!Input)
    }

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setSuggestionsVisible(false);
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    if (!mounted) return null;
    return (
        <div>
            <div className="flex items-center w-[70vw] sm:[23rem] relative lg:w-[40rem]" onClick={() => input()}>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Rechercher un produit"
                    ref={inputRef}
                    className={`w-full p-2 sm:p-3 pr-0 rounded-md bg-gray-100 focus:outline-none ${Input ? "border-2 border-[#0093D0]" : "border-none"} `}
                />
                <button
                    type="submit"
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                    <CiSearch size={25} className={`text-gray-400 ${Input ? "bg-[#0093D0] h-10 sm:h-12 w-12 p-3 rounded-r-md text-white" : "bg-inherit mr-3"}`} />
                </button>
            </div>
            <div className="absolute w-auto">
                {isSuggestionsVisible && (
                    <ul className="border bg-white flex shadow-lg w-auto rounded-lg mt-2 h-auto overflow-y-auto">
                        <div>
                            <span className="ml-2 mt-2 text-gray-300">Suggestion</span>
                            {suggestions.length > 0 ? (
                                suggestions.map((suggestion, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleSuggestionClick(suggestion)}
                                        className="p-2 w-full gap-24 flex items-center justify-between hover:bg-blue-100 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-2">
                                            <CiSearch />
                                            <div className="text-md font-semibold">{suggestion}</div>
                                        </div>
                                        <GoArrowUpLeft />
                                    </li>
                                ))
                            ) : (
                                <li className="p-2 text-gray-500">No results found</li>
                            )}
                        </div>
                        <div className="hidden lg:block">
                            <span className="ml-2 mt-2 text-gray-300">Produits</span>
                            <div className="flex flex-col gap-5">
                                <div className="flex gap-4">
                                    <div className="w-fit">
                                        <Image src="/produits1.png" alt="Logo" width={200} height={200} className="object-cover mr-2 h-auto w-52" />
                                        <span className="text-xs text-gray-300">ART DE LA TABLE</span>
                                        <p>Produit Simple</p>
                                        <div>7€<span className="text-gray-300">/20 piecies</span></div>
                                    </div>
                                    <div className="w-fit">
                                        <Image src="/produits2.png" alt="Logo" width={200} height={200} className="object-cover mr-2 h-auto w-52" />
                                        <span className="text-xs text-gray-300">ART DE LA TABLE</span>
                                        <p>Produit Simple</p>
                                        <div>7€<span className="text-gray-300">/20 piecies</span></div>
                                    </div>
                                    <div className="w-fit">
                                        <Image src="/produits3.png" alt="Logo" width={200} height={200} className="object-cover mr-2 h-auto w-52" />
                                        <span className="text-xs text-gray-300">ART DE LA TABLE</span>
                                        <p>Produit Simple</p>
                                        <div>7€<span className="text-gray-300">/20 piecies</span></div>
                                    </div>
                                    <div className="w-fit">
                                        <Image src="/produits4.png" alt="Logo" width={200} height={200} className="object-cover mr-2 h-auto w-52" />
                                        <span className="text-xs text-gray-300">ART DE LA TABLE</span>
                                        <p>Produit Simple</p>
                                        <div>7€<span className="text-gray-300">/20 piecies</span></div>
                                    </div>
                                </div>
                                <button className="p-3 font-semibold border rounded-md border-gray-300 m-2">Voir tous les resultats</button>
                            </div>
                        </div>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Search
