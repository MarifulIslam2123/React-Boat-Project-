import { Link } from "react-router-dom";

function ShopCard({ productInfo }) {
    const { title, description, thumbnail, price, id } = productInfo;
    return (
        <div>
            <div className="card w-96 bg-orange-100 shadow-lg">
                <div className="w-full h-[15rem]">
                    <img className="w-full h-full rounded-md" src={thumbnail} alt="Shoes" />
                </div>

                <div className="card-body">
                    <h2 className="card-title truncate">{title}</h2>
                    <p className="truncate">{description}</p>
                    <div className="flex justify-between align-middle ">
                        <h4 className="fw-bolder ">BDT {price}</h4>
                        <Link to={`/shopProductDetails/${id}`}>
                            <button className="btn bg-red-400 text-white hover:text-black mt-10">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopCard