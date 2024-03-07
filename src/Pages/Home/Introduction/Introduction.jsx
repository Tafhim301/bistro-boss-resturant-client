import intoImg from '../../../assets/home/chef-service.jpg'
const Introduction = () => {
    return (
        
            <div style={{ backgroundImage: `url(${intoImg})` }} className=' bg-no-repeat mx-20 px-16 py-36'>
                <div className='text-center py-28 bg-white'>
                    <h3 className="text-3xl font-bold mb-4 italic">Bistro Boss</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
     
    );
};

export default Introduction;