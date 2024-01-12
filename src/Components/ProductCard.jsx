const ProductCard = ({ single }) => {
    const { title, description, thumbnail, price, discountPercentage, stock, rating, brand } = single;
    return (
        <div className="h-[85vh]">
            <div className="card card-side bg-base-100 shadow-lg mt-8 mb-8 w-[80%] mx-auto">
                <div className="w-[30%] h-[20rem] p-10">
                    <img className="w-full h-full" src={thumbnail} alt="Movie" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{title} <span className="text-xs">(<span>{brand}</span>)</span></h2>
                    <p>Rating:&nbsp;{rating}</p>
                    <p>Stock:&nbsp;{stock}</p>

                    <p><span>BDT&nbsp;</span>{price}/-</p>
                    <p><span>Discount BDT&nbsp;</span>{discountPercentage}</p>
                    <p>{description}</p>

                    <div className="card-actions justify-end">
                        <button className="btn bg-red-400 text-white hover:text-black">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;