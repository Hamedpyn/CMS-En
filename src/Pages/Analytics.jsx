import {useState} from 'react'
import Cards from '../Components/Cards/Cards'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import Chart from '../Components/Chart/Chart';
import { XAxis } from '../Components/Chart/XAxisUser';

export default function Analytics() {
    const [details,] = useState([
        { id: 1, title: "Revenue", price: "2,415", percent: "-11.4", logo: <FaArrowDown style={{ color: "red" }} /> },
        { id: 2, title: "Sales", price: "4,415", percent: "-1.4", logo: <FaArrowDown style={{ color: "red" }} /> },
        { id: 3, title: "Cost", price: "2,225", percent: "+2.4", logo: <FaArrowUp style={{ color: "#30db30" }} /> },
      ])
  return (
    <>
        <div className="flex gap-x-5">
        {details.map(item => (
          <Cards key={item.id} {...item} />
        ))}
      </div>
      <Chart grid title="Month Sale" data={XAxis} dataKey="Sale"/>
    </>
  )
}
