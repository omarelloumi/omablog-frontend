type Props = {
    category: string;
};
const Badge = ({ category }: Props) => {
    return (
        <span className="px-2 py-[3px] text-[12px] font-semibold bg-[#4B6BFB] text-[#FFFFFF] rounded-sm self-start">
            {category}
        </span>
    );
};
export default Badge;
