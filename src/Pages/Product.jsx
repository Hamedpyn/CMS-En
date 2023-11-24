import { Table } from 'flowbite-react';
import { allProducts } from '../Components/Chart/XAxisUser';
import { useState } from 'react';
import { MdDeleteOutline as MdDelete } from "react-icons/md"
import { TiEdit } from "react-icons/ti";
import { Link } from 'react-router-dom';

export default function Product() {
  const [allProduct,setAllProduct] = useState(allProducts)

  const removeUser = (userId) => {
    let filteredUser = allProduct.filter(item => item.id !== userId)
    setAllProduct(filteredUser)
  };

  return (
    <div className="overflow-x-auto mt-12 rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 p-5">
      <h2 className='font-bold text-xl pb-6 pl-5'>Products</h2>
      <Table hoverable className='w-[700px]'>
        <Table.Head>
          <Table.HeadCell className='text-center'>ID</Table.HeadCell>
          <Table.HeadCell className='text-center'>Product</Table.HeadCell>
          <Table.HeadCell className='text-center'>Price</Table.HeadCell>
          <Table.HeadCell className='pl-10'>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {allProduct.map(item => (
            <Table.Row key={item.id} className="bg-white text-center dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.id}
              </Table.Cell>
              <Table.Cell className='flex items-center justify-center gap-x-2'>
                <img className='w-10 rounded-full' src={item.img} alt="" />
                {item.title}
              </Table.Cell>
              <Table.Cell>${item.price}</Table.Cell>
              <Table.Cell className='flex items-center text-end gap-x-4'>
                <Link to={`/Products/${item.id}`}>
                <span className="font-medium text-xl border border-cyan-600 flex items-center justify-center w-8 h-8 transition-colors hover:bg-cyan-600 hover:text-white rounded-full cursor-pointer text-cyan-600 hover:underline dark:text-cyan-500">
                  <TiEdit />
                </span>
                </Link>
                <span onClick={() => removeUser(item.id)} className="font-medium text-xl border border-red-600 flex items-center justify-center w-8 h-8 transition-colors hover:bg-red-600 hover:text-white rounded-full cursor-pointer text-red-600 hover:underline dark:text-red-500">
                  <MdDelete />
                </span>
              </Table.Cell>
            </Table.Row>
          ))}

        </Table.Body>
      </Table>
    </div>
  );
}
