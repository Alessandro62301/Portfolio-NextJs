import Image from 'next/image'


function ButtonRequest(props) {


    return (
        <div className="flex items-center px-3 py-1 text-sm font-semibold rounded-lg bg-secondaryDark hover:bg-primaryBlue text-primaryBlue hover:text-white ease-in duration-200">
            <button>
                {props.children}
            </button>
            <div className="flex items-center ml-2 hover:pl-2">
                <Image src="/images/arrow.svg" alt="arrow" width="6.5" height="12.033" />
            </div>
        </div>
    )
}

export default ButtonRequest;