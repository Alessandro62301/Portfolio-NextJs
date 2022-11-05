import Arrow from '/public/img/arrow.svg'
export default function ButtonRequest(props) {


    return (
        <div className="flex items-center justify-around text-sm font-semibold rounded-lg py-[4px] px-[14px] bg-secondaryDark hover:bg-primaryBlue text-primaryBlue hover:text-white ease-in duration-200 group">
            <span className=''>
                {props.children}
            </span>
            <span className="flex items-center ml-2 group-hover:translate-x-[8px] ease-in duration-200">
                <Arrow className=" group-hover:fill-white fill-primaryBlue ease-in duration-200" ></Arrow>
            </span>
        </div >
    )
}
