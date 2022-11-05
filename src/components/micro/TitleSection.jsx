
export default function TitleSection({ children }) {
    return (
        <div className="flex items-center h-[320px]">
            <h2 className="py-1 font-bold text-white/70 text-7xl">{children}</h2>
        </div>

    );
}