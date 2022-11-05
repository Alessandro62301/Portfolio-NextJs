import { useState, useEffect } from 'react';
import ButtonRequest from '../micro/ButtonRequest'

export default function Menu() {

    const [items, setItems] = useState(['About', 'Skills', 'Projects', 'Contact'])


    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <>
            <div className="fixed z-50 flex items-center justify-center w-full h-14 bg-primaryOpacity backdrop-blur-xl">
                <div className="flex items-center justify-between w-11/12 sm:w-8/12">
                    <div>
                        <h1 className="font-bold text-white">
                            Alessandro Mello
                        </h1>
                    </div>
                    <nav>
                        <ul className="hidden w-full text-sm lg:flex">
                            {domLoaded &&
                                items.map((elem, index) => <li className="px-5 text-white hover:text-primaryBlue hover:bold ease-in duration-200" key={index}><a href={'#' + elem.toLocaleLowerCase()}>{elem}</a></li>)
                            }
                        </ul>
                    </nav>
                    <div>
                        <ButtonRequest>Project Request</ButtonRequest>
                    </div>
                </div>
            </div>
        </>
    )
}

