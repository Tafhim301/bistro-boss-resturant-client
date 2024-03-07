

const FoodCart = ({ item }) => {
    const {image,price,recipe,name} = item
    return (
        <div className="card rounded-none  bg-base-100 shadow-xl">
            <figure><img className="w-full" src={image} alt="Shoes" /></figure>
            <p className="text-center bg-black py-2 mt-2 text-white absolute right-0 mr-3 px-4">${price}</p>
            <div className="card-body bg-gray-100">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn text-yellow-600 uppercase border-yellow-600 border-x-0 border-t-0 border-b-2 hover:bg-black bg-gray-200">Add TO Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;