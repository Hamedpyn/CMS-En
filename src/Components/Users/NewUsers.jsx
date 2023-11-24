import { MdVisibility } from "react-icons/md";
import { newUsers } from "../Chart/XAxisUser";

export default function NewUsers() {
    return (
        <div className="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 w-auto h-[433px]">
            <h2 className="text-xl font-bold p-6">New Members</h2>
            <ul className="list-none">
                {newUsers.map(item => (
                    <li key={item.id} className="flex justify-between items-center mb-12 px-5">
                        <img className="w-10 rounded-full" src={item.avatar} />
                        <div className="flex flex-col items-center mx-9">
                            <span className="">{item.title}</span>
                            <span className="text-sm text-gray-500">{item.job}</span>
                        </div>
                        <button className="w-10 h-10 flex items-center justify-center rounded bg-gray-300 hover:bg-gray-400 transition-colors">
                        <MdVisibility className="w-6 h-6 cursor-pointer"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
