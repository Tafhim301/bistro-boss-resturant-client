import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";



const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert') 
    const soup = menu.filter(item => item.category === 'soup') 
    const offered = menu.filter(item => item.category === 'offered') 
    const pizza = menu.filter(item => item.category === 'pizza') 
    const salad = menu.filter(item => item.category === 'salad') 
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"}></Cover>
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's offer"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title={'Deserts'} coverImg={desertImg}></MenuCategory>
            <MenuCategory items={pizza} title={'Pizzas'} coverImg={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={'Salads'} coverImg={saladImg}></MenuCategory>
            <MenuCategory items={soup} title={'Soups'} coverImg={soupImg}></MenuCategory>
            
            
        </div>
    );
};

export default Menu;