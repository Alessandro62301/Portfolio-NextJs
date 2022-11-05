import { useState } from 'react';
import ButtonRequest from './ButtonRequest'

function Header() {

    const [items, setItems] = useState(['About', 'Skills', 'Projects', 'Contact'])

    return (
        <>
            <div className="fixed flex items-center justify-center w-full h-14 bg-primaryOpacity">
                <div className="flex items-center justify-between w-11/12 sm:w-8/12">
                    <div>
                        <h1 className="font-bold">
                            Alessandro Mello
                        </h1>
                    </div>
                    <nav>
                        <ul className="hidden w-full text-sm lg:flex">
                            {
                                items.map((elem, index) => <li className="px-5 hover:text-primaryBlue hover:bold ease-in duration-200" key={index}><a href={'#' + elem.toLocaleLowerCase()}>{elem}</a></li>)
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


export default Header;