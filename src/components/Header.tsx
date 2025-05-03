export default function Header() {  
    return (
        <header className="bg-sky-500 text-white p-2 text-center">            
            <ul className="flex flex-col sm:flex-row sm:space-x-4 text-xs items-center">
                <li className="bg-black py-1 px-2 rounded-sm mt-1 cursor-pointer">Matches (16)</li>
                <li className="bg-black py-1 px-2 rounded-sm mt-1 cursor-pointer">BBL (4)</li>
                <li className="bg-black py-1 px-2 rounded-sm mt-1 cursor-pointer">PSL (3)</li>
                <li className="bg-black py-1 px-2 rounded-sm mt-1 cursor-pointer">SL-U19 v BDESH-U19 (1)</li>
                <li className="bg-black py-1 px-2 rounded-sm mt-1 cursor-pointer">County DIV1 (3)</li>
                <li className="bg-black py-1 px-2 rounded-sm mt-1 cursor-pointer">County DIV2 (4)</li>
                <li className="bg-black py-1 px-2 rounded-sm mt-1 cursor-pointer">Womens Tri-Series (SL) (1)</li>
            </ul>
        </header>
    )
}