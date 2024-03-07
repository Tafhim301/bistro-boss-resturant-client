import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import coverImg from '../../../assets/home/chef-service.jpg'
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Cover from "../../Shared/Cover/Cover";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
                <Banner></Banner>
            <div className="mx-20">
                <Category></Category>
                <Cover img={coverImg} title={'Bostro Boss'}></Cover>
                <PopularMenu></PopularMenu>
                <Contact></Contact>
                <Featured></Featured>
                <Testimonials></Testimonials>
            </div>


        </div>
    );
};

export default Home;