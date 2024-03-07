import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (

    
        <div className="Featured-item bg-fixed  text-white">
         <section className='mb-20  bg-black bg-opacity-60'>
              <SectionTitle subHeading={'Check it Out'} heading={"From Our Menu"}></SectionTitle>
              <div className="md:flex justify-center items-center  pb-20 pt-10 px-36 ">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where Can I get Some</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum esse ex eveniet vitae corrupti? Voluptatum provident vero amet laborum, tempora fugiat iste velit perspiciatis repellendus quibusdam quas ipsa, eius ut optio tempore sunt. Nisi, doloremque sapiente! Voluptatibus, unde? Ipsam, quam.</p>
                    <button className="btn text-white border-0 border-b-2 btn-outline">Order Now</button>
                </div>
              </div>

        </section>
       </div> 

    

    );
};

export default Featured;