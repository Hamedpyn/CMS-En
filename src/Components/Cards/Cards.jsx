import { Card } from 'flowbite-react';
import propTypes from 'prop-types';
import { MdAttachMoney } from "react-icons/md";

export default function Cards(props) {
    return (
        <Card className="w-[345px]">
            <h3 className='text-2xl text-gray-600'>{props.title}</h3>
            <h5 className="font-bold text-gray-900 dark:text-white flex items-center gap-x-10">
                <div className="flex items-center">
                    <MdAttachMoney className='text-[40px] ml-[-10px]' />
                    <span className='tracking-widest text-4xl'>{props.price}</span>
                </div>
                <div className="flex font-normal items-center gap-x-2">
                    <span>{props.percent}</span>
                    <span className='text-2xl'>{props.logo}</span>
                </div>
            </h5>
            <p className="font-normal text-gray-500 dark:text-gray-400">
                Compare to last month
            </p>
        </Card>
    );
}


Cards.propTypes = {
    title: propTypes.any,
    price: propTypes.any,
    logo: propTypes.any,
    percent: propTypes.any,
}