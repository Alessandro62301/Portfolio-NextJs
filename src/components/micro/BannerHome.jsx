import ButtonRequest from './ButtonRequest';

export default function BannerHome() {

    return (
        <div className="">
            <div className="flex justify-center w-full h-screen bg-tercDark">
                <div className="items-end justify-center hidden w-8/12 lg:flex">
                    <div className="relative">
                        <img className="" src="/img/macpro.png" alt="max" />
                        <div className='absolute top-0 flex flex-col items-center justify-center w-full h-full pb-8 text-white'>
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
};