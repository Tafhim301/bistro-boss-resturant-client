
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center w-1/5 mx-auto ">
            <p className=" text-yellow-600 py-2 uppercase">---{ subHeading}---</p>
            <h3 className="text-3xl uppercase pb-4 border-y-4 ">{ heading}</h3>

        </div>
    );
};

export default SectionTitle;