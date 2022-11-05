
import Image from 'next/image'
import ButtonRequest from './ButtonRequest';

function BannerHome() {

    return (
        <div className="">
            <div className="flex justify-center w-full h-screen bg-tercDark">
                <div className="items-end justify-center hidden w-8/12 lg:flex">
                    <div className="relative">
                        <Image className="" src="/images/macpro.png" alt='mac' width="1016" height="800"></Image>
                        <div className='absolute top-0 flex flex-col items-center justify-center w-full h-full pb-8'>
                            <h3 className="py-1 text-2xl font-semibold">Alessandro Mello</h3>
                            <h4 className="py-1 text-6xl font-bold">Front End Developer</h4>
                            <div className="w-40 pt-2">
                                <ButtonRequest>Project Resquest</ButtonRequest>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerHome;