export default function Header() {  
    return (
        <header className="bg-rose-500 text-white px-2 py-1 text-center">            
            <ul className="flex flex-col sm:flex-row sm:space-x-4 text-xs items-center">
                <li className="bg-black py-1 px-2 rounded-sm m-1 hover:bg-white hover:text-black cursor-pointer">Matches (16)</li>
                <li className="bg-black py-1 px-2 rounded-sm m-1 hover:bg-white hover:text-black cursor-pointer">BBL (4)</li>
                <li className="bg-black py-1 px-2 rounded-sm m-1 hover:bg-white hover:text-black cursor-pointer">PSL (3)</li>
                <li className="bg-black py-1 px-2 rounded-sm m-1 hover:bg-white hover:text-black cursor-pointer">SL-U19 v BDESH-U19 (1)</li>
                <li className="bg-black py-1 px-2 rounded-sm m-1 hover:bg-white hover:text-black cursor-pointer">County DIV1 (3)</li>
                <li className="bg-black py-1 px-2 rounded-sm m-1 hover:bg-white hover:text-black cursor-pointer">County DIV2 (4)</li>
                <li className="bg-black py-1 px-2 rounded-sm m-1 hover:bg-white hover:text-black cursor-pointer">Womens Tri-Series (SL) (1)</li>
            </ul>
        </header>
    )
}