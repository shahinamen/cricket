import Header from "@/components/Header";
import Menu from "@/components/Menu";
import SubMenu from "@/components/SubMenu";
import BannerAd from "@/components/BannerAd";
import BannerAdTwo from "@/components/BannerAdTwo";
import { HiChevronRight } from "react-icons/hi2";

export default function Home() {
  return (
    <div>
      <Header />
      <Menu />
      <SubMenu />
      <div className="bg-red-100 p-2 text-center flex flex-col md:flex-row items-center">
        <BannerAd />
        <div className="max-w-md">
          <h1 className="text-2xl text-left font-bold mb-2 cursor-pointer">Tanvir five-for helps Bangladesh draw level</h1>
          <div className="flex items-center justify-between space-x-2 text-sm bg-red-300 p-1 rounded-sm">
            <div className="flex items-center cursor-pointer"><HiChevronRight /> BAN won by 6 runs</div>
            <HiChevronRight />
          </div>
          <p className="text-sm text-justify text-gray-600 mt-2 cursor-pointer">
            Bangladesh levelled the three-match T20I series against New Zealand with a 24-run win in the second game at the Shere Bangla National Stadium in Mirpur on Friday. 
            Left-arm spinner Tanvir Islam took five wickets for 22 runs, helping Bangladesh defend their total of 141 runs.
          </p>
        </div>
        <BannerAdTwo />
      </div>
      <div>
        <h2 className="text-xl font-bold text-center mt-4">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <ul className="list-disc list-inside p-4">
          <li className="mb-2 cursor-pointer hover:text-blue-600">Bangladesh's historic win against New Zealand</li>
          <li className="mb-2 cursor-pointer hover:text-blue-600">ICC announces new player rankings</li>
          <li className="mb-2 cursor-pointer hover:text-blue-600">Upcoming fixtures for the Bangladesh cricket team</li>
        </ul>
        <ul className="list-disc list-inside p-4">
          <li className="mb-2 cursor-pointer hover:text-blue-600">Bangladesh's historic win against New Zealand</li>
          <li className="mb-2 cursor-pointer hover:text-blue-600">ICC announces new player rankings</li>
          <li className="mb-2 cursor-pointer hover:text-blue-600">Upcoming fixtures for the Bangladesh cricket team</li>
        </ul>
        <ul className="list-disc list-inside p-4">
          <li className="mb-2 cursor-pointer hover:text-blue-600">Bangladesh's historic win against New Zealand</li>
          <li className="mb-2 cursor-pointer hover:text-blue-600">ICC announces new player rankings</li>
          <li className="mb-2 cursor-pointer hover:text-blue-600">Upcoming fixtures for the Bangladesh cricket team</li>
        </ul>
        </div>

      </div>
      
    </div>
  );
}
