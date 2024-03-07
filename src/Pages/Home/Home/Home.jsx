import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import Introduction from "../Introduction/Introduction";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Introduction></Introduction>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Featured></Featured>
            <Testimonials></Testimonials>

            
        </div>
    );
};

export default Home;