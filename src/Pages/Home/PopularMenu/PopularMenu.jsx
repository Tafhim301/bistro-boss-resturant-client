import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setData(popularItems)
            })
    }, [])
    return (
        <section className='mb-20 mx-20 '>
            <SectionTitle subHeading={'Check it Out'} heading={"From Our Menu"}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    data && data.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="btn border-0 border-b-2 btn-outline">View Full Menu</button>
            </div>

        </section>
    );
};

export default PopularMenu;