import { useEffect, useState } from "react";
import Card from "../Components/Card";
import banner from '../assets/banner.jpg';
import d_banner from '../assets/d_banner.jpg';
import d_banner1 from '../assets/d_banner1.jpg';


function Home() {

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

        <div className=" mb-12  mx-auto">
            <div className="w-full bg-[#ECF0F4] mx-auto ">
                <div className="w-[85.5%] flex justify-evenly items-center mx-auto flex-wrap">
                    <div className="order-2">
                        <img className="w-[100%]" src={banner} alt="" />
                    </div>

                    <div className="h-fit order-1">
                        <p className="font-bold">New Arrivals</p>
                        <h1 className="text-4xl font-bold">One For All</h1>
                        <h3 className="mt-3 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                            Explicabo nemo quaerat ipsam suscipit, consequatur itaque.</h3>
                        <button className="btn bg-red-400 text-white hover:text-black">Learn More</button>
                    </div>
                </div>
            </div>


            <div className="mt-10">
                <div className="w-[85.5%] mx-auto">
                    <h2 className="text-4xl font-bold pb-4">Feature Products</h2>
                    {/* <Link href='/'>
                        <p className="w-fit py-1 bg-red-400">See More</p>
                    </Link> */}
                    <div className="flex  h-[30rem] overflow-hidden flex-wrap gap-7 justify-center">
                        {product.map((allproducts, i) => (
                            <Card key={i} productInfo={allproducts} />))}
                    </div>
                </div>


                <div className="w-[85.5%] mx-auto flex gap-8 pt-10 pb-10">
                    <div>
                        <img src={d_banner} alt="" />
                    </div>

                    <div>
                        <img src={d_banner1} alt="" />
                    </div>
                </div>

                <div className="w-[85.5%] mx-auto">
                    <h2 className="text-4xl font-bold pb-4">Best Selling Products</h2>
                    {/* <Link href='/'>
                        <p className="w-fit py-1 bg-red-400">See More</p>
                    </Link> */}
                    <div className="flex  h-[60rem] overflow-hidden flex-wrap gap-7 justify-center">
                        {product.map((allproducts, i) => (
                            <Card key={i} productInfo={allproducts} />))}
                    </div>
                </div>

            </div>

        </div>



    )
}

export default Home