import { Table, Button } from 'flowbite-react';
import propTypes from 'prop-types';
import { TransActions } from '../Chart/XAxisUser';
export default function TrActions() {
    return (
        <div className='rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 w-auto h-auto p-6'>
        <h2 className='font-bold text-xl pb-6'>Transactions</h2>
            <Table hoverable>
            <Table.Head>
                <Table.HeadCell className='text-[14px]'>Customer</Table.HeadCell>
                <Table.HeadCell className='text-[14px]'>Date</Table.HeadCell>
                <Table.HeadCell className='text-[14px]'>Amount</Table.HeadCell>
                <Table.HeadCell className='text-[14px]'>Status</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {TransActions.map(item => (
                    <Table.Row key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex items-center gap-x-3">
                        <img className='w-10 rounded-full' src={item.avatar} />
                        {item.title}
                    </Table.Cell>
                    <Table.Cell>{item.date}</Table.Cell>
                    <Table.Cell>${item.amount}</Table.Cell>
                    <Table.Cell>
                        <Button color={item.type} pill className='!text-[14px] w-24 h-10'>{item.btnTitle}</Button>
                    </Table.Cell>
                </Table.Row>
                ))}

            </Table.Body>
        </Table>
        </div>
    );
}

TrActions.propTypes = {
    title: propTypes.any,
    amount: propTypes.any,
    date: propTypes.any,
    type: propTypes.any,
    btnTitle: propTypes.any,
}