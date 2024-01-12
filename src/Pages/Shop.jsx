import { useEffect, useState } from "react";
import ShopCard from "../Components/ShopCard";
import shop_header from '../assets/shop_header.jpg';

function Shop() {

    const [product, setProduct] = useState([]);

    const getProduct = () => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => setProduct(data.products))
    };

    console.log(product);

    useEffect(() => {
        getProduct();
    }, []);

    return (

        <div >
            <div className="w-[85.2%] mx-auto mt-7">
                <img className="w-[100%] rounded-lg" src={shop_header} alt="" />
            </div>
            <div className="flex flex-wrap gap-7 justify-center pb-10 pt-7">
                {
                    product.map((allproducts, i) => (
                        <ShopCard key={i} productInfo={allproducts} />))
                }
            </div>

        </div>


    )
}

export default Shop