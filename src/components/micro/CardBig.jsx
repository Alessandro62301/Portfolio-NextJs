export default function CardBig({ p1, p2, p3 }) {


    return (
        <div className={`w-full h-full bg-primary rounded-[28px]`}>
            <div className="w-full h-full p-8 text-xl text-white">
                <p className="text-xl leading-6">
                    {p1}
                </p>
                <p className="mt-6 text-xl leading-6">
                    {p2}
                </p>
                <p className="mt-6 text-xl leading-6">
                    {p3}
                </p>
            </div>
        </div>
    )
}