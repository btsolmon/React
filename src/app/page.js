import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#f5f5f7]">
      <div className="bg-white flex justify-center items-center gap-9 text-xs">
        <img src="./logo.svg"></img>
        <p>Store</p>
        <p>Mac</p>
        <p>iPad</p>
        <p>iPhone</p>
        <p>Watch</p>
        <p>Vision</p>
        <p>Airpods</p>
        <p>TV & Home</p>
        <p>Entertainment</p>
        <p>Accessories</p>
        <p>Support</p>
        <img src="./search-icon.svg"></img>
        <img src="./shop-icon.svg"></img>
      </div>
      <div className="flex flex-col gap-5">
        <div className=" bg-[#f5f5f7] flex justify-center text-6xl gap-5 mt-10">
          <p>MacBook Neo</p>
        </div>
        <div className=" bg-[#f5f5f7] flex justify-center text-3xl">
          <p>Amazing Mac. Surprising price.</p>
        </div>
        <div className=" bg-[#f5f5f7] flex justify-center text-2xl gap-5 text-[17px]">
          <p className="text-white bg-blue-500 w-32 h-12 rounded-full flex justify-center items-center">
            Learn more
          </p>
          <p className=" text-blue-500 w-20 h-12 rounded-full border-2 px-4 flex justify-center items-center">
            Buy
          </p>
        </div>
      </div>
      <div className="bg-[url('img/neo.png')] w-full h-screen bg-center bg-no-repeat "></div>
    </div>
  );
}
