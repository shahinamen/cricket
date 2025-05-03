export default function Menu() {  
    return (
        <div className="bg-rose-600 text-white p-2 text-center">            
            <ul className="flex flex-col sm:flex-row sm:space-x-4 text-sm items-center">
                <li className="hover:bg-black py-1 px-2 cursor-pointer rounded-sm mt-1">Live Scores</li>
                <li className="hover:bg-black py-1 px-2 cursor-pointer rounded-sm mt-1">Series</li>
                <li className="hover:bg-black py-1 px-2 cursor-pointer rounded-sm mt-1">Team</li>
                <li className="hover:bg-black py-1 px-2 cursor-pointer rounded-sm mt-1">News</li>
                <li className="hover:bg-black py-1 px-2 cursor-pointer rounded-sm mt-1">Features</li>
                <li className="hover:bg-black py-1 px-2 cursor-pointer rounded-sm mt-1">Videos</li>
                <li className="hover:bg-black py-1 px-2 cursor-pointer rounded-sm mt-1">Statistics</li>
            </ul>
        </div>
    )
}