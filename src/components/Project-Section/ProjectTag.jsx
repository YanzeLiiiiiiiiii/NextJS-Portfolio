export default function ProjectTag({ name, onClick, isSelected }) {

    const buttonStyles = isSelected ? "text-white border-secondary-200" : "text-[#ADB7BE] border-slate-600 hover:border-secondary-200";
    return (
        <button
            className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
    );
}
