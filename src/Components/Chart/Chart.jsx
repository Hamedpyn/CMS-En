import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, Tooltip } from 'recharts';
import propTypes from "prop-types"

export default function Chart({ title,dataKey, data, grid,height,pb,pt }) {
    return (
        <div className={`rounded-lg border border-gray-200 bg-white shadow-md p-5 mt-10`} style={{height:`${height}px`}} >
            <h3 className='text-xl text-gray-600 font-bold mb-3' style={{paddingBottom:`${pb}px`,paddingTop:`${pt}px`}}>{title}</h3>
            <ResponsiveContainer aspect={4} width={"100%"}>
                <LineChart width={600} height={300} data={data}>
                    <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
                    <XAxis dataKey="name" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

Chart.propTypes = {
    title: propTypes.any,
    data: propTypes.any,
    dataKey: propTypes.any,
    grid: propTypes.any,
    height: propTypes.any,
    pb: propTypes.any,
    pt: propTypes.any,
}