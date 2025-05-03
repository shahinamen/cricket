export default function Header() {  
    return (
        <header className="bg-sky-500 text-white p-2 text-center">            
            <ul className="flex flex-col sm:flex-row sm:space-x-4 text-xs items-center">
                <li className="bg-black py-1 px-2 rounded-sm mt-1">Matches (16)</li>
                <li className="bg-black py-1 px-2 rounded-sm mt-1">BBL (4)</li>
                <li className="bg-black py-1 px-2 rounded-sm mt-1">PSL (3)</li>
                <li className="bg-black py-1 px-2 rounded-sm mt-1">SL-U19 v BDESH-U19 (1)</li>
                <li className="bg-black py-1 px-2 rounded-sm mt-1">County DIV1 (3)</li>
                <li className="bg-black py-1 px-2 rounded-sm mt-1">County DIV2 (4)</li>
                <li className="bg-black py-1 px-2 rounded-sm mt-1">Womens Tri-Series (SL) (1)</li>
            </ul>
            <div>
                <h1 className="text-4xl font-bold py-2">Cricket Scoreboard</h1>
                <p className="text-sm">Live Scores, News, Stats, Videos, Schedule, Fixtures</p>
            </div> 
        </header>
    )
}