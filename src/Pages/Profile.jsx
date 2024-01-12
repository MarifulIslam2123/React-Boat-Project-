import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";


function Profile() {
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
        <>
            <ProductCard single={singleProduct} />
        </>
    )
}

export default Profile