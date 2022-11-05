
export default function CardSmall({ IconSvg }) {


    return (
        <div className="w-[180px] h-[180px] bg-primary rounded-[28px]">
            <div className="flex items-center justify-center w-full h-full">
                <IconSvg />
            </div>
        </div>
    )
}