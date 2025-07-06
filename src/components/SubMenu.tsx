import { HiChevronRight } from "react-icons/hi2";

export default function Menu() {  
    return (
        <div className="text-grey-400 p-2 text-center mb-1">            
            <ul className="flex flex-col sm:flex-row sm:space-x-4 text-sm items-center">
                <li className="hover:bg-black hover:text-white flex items-center ring-1 py-1 px-2 cursor-pointer rounded-full mt-1">Ban men fixtures <HiChevronRight /></li>
                <li className="hover:bg-black hover:text-white flex items-center ring-1 py-1 px-2 cursor-pointer rounded-full mt-1">Ban women fixtures <HiChevronRight /></li>
                <li className="hover:bg-black hover:text-white flex items-center ring-1 py-1 px-2 cursor-pointer rounded-full mt-1">Ask Cricket Info <HiChevronRight /></li>
                <li className="hover:bg-black hover:text-white flex items-center ring-1 py-1 px-2 cursor-pointer rounded-full mt-1">ICC player rankings <HiChevronRight /></li>
                <li className="hover:bg-black hover:text-white flex items-center ring-1 py-1 px-2 cursor-pointer rounded-full mt-1">ICC country rankings <HiChevronRight /></li>
            </ul>
        </div>
    )
}