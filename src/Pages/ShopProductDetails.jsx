import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopProductDetailsCard from "../Components/ShopProductDetailsCard";

function ShopProductDetails() {

    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState({});

    const getSingleProduct = () => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setSingleProduct(data));

    };
    console.log(singleProduct);

    useEffect(() => {
        getSingleProduct();
    }, []);

    return (
        <div>
            <ShopProductDetailsCard single={singleProduct} />
        </div>
    )
}

export default ShopProductDetails