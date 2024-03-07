
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";



const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
   
    return (
        <section className='mb-20 mx-20 '>
            <SectionTitle subHeading={'Check it Out'} heading={"From Our Menu"}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular && popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="btn border-0 border-b-2 btn-outline">View Full Menu</button>
            </div>

        </section>
    );
};

export default PopularMenu;