import { Button } from "flowbite-react"
import { Link, Navigate } from "react-router-dom"
import Chart from "../Components/Chart/Chart"
import { monthSales, productsDetails } from "../Components/Chart/XAxisUser"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { FileInput, Label } from 'flowbite-react';

export default function Products() {
    const [productDetail,] = useState(productsDetails)
    let params = useParams()
    let findProduct = productDetail.find(item => item.id == params.id);
    let hasProduct = productDetail.some(item => item.id == params.id);
    return (
        <div className="w-[900px] mt-6 flex flex-col items-center">
            <div className="pb-9">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Products</h2>
                    <Link to={"/NewProduct"}>
                        <Button color="blue">Create</Button>
                    </Link>
                </div>
                <div className="flex items-center justify-center gap-x-10">
                    <div className="w-[430px]">
                        <Chart title={"Sale In Month"} pb={50} pt={10} data={monthSales} dataKey={"sales"} height={246.595} className="bg-black" />
                    </div>
                    {hasProduct ? <div
                        className=
                        "w-[430px] h-[247.5px] rounded-lg border border-gray-200 bg-white shadow-md p-5 mt-10">
                        <h2 className="font-bold text-xl text-gray-600 mb-2">Details</h2>
                        <div className="flex flex-col items-start pl-4">
                            <div className="flex products-menu items-center gap-x-3">
                                <img className="w-14 " src={findProduct.img} />
                                <span>LapTop</span>
                            </div>
                            <div className="w-[300px] pl-7 pt-4">
                                <ul className="products-menu">
                                    <li className="flex items-center justify-between text-start">
                                        <span>ID:</span>
                                        <span className="text-gray-500">{findProduct.id}</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span>name:</span>
                                        <span className="text-gray-500">{findProduct.title}</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span>Sales:</span>
                                        <span className="text-gray-500">${findProduct.price}</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span>Active:</span>
                                        <span className="text-gray-500">{findProduct.action}</span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span>In Stock:</span>
                                        <span className="text-gray-500">{findProduct.stock}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> : <Navigate to={"/"} />}
                </div>
            </div>
            <div className="w-[600px] justify-around rounded-lg border border-gray-200 bg-white shadow-md p-5 flex ">
                <div className="flex flex-col">
                    <input type="text" className="forms" placeholder="Product name" />
                    <h3 className="selectBox">Action</h3>
                    <select className="forms">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <h3 className="selectBox">In Stock</h3>
                    <select className="forms">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="flex items-center pt-5 flex-col">
                    <img src="/public/dell.jpg" className="w-20" />
                    <div className="mb-2 text-center">
                        <Label htmlFor="file-upload" value="Upload file" />
                    </div>
                    <FileInput id="file-upload" className="w-[250px]" />
                </div>

            </div>
        </div>
    )
}
