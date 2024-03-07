import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, coverImg }) => {

    return (
        <div className=" pt-8 my-10">
            {
                title && <Cover img={coverImg} title={title}></Cover>
            }
            <div className="grid md:grid-cols-2 gap-10 mt-16">
                {
                    items && items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center">
                <Link to={`/order/${title}`}>
                    <button className="btn border-0 border-b-2 btn-outline">Order Now</button>
                </Link>
            </div>


        </div>
    );
};

export default MenuCategory;