type Props = {
    pic: string;
};
const CardFooter = ({ pic }: Props) => {
    return (
        <div className="flex items-center gap=4 ">
            <span className="flex items-center gap-2">
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
            <img
                src={pic}
                className="c rounded-full w-full h-full object-cover"
                alt="profile pic"
            />
            </div>
                <small className="text-[#97989F] text-[12px] font-semibold">
                    John Doe
                </small>
            </span>
                <small className="text-[#97989F] text-[12px] font-semibold ml-3">
                    12 November, 2024
                </small>
        </div>
    );
};
export default CardFooter;
