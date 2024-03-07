
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center w-1/5 mx-auto my-10">
            <p className=" text-yellow-600 py-2 ">---{ subHeading}---</p>
            <h3 className="text-3xl uppercase py-4 border-y-4 ">{ heading}</h3>

        </div>
    );
};

export default SectionTitle;