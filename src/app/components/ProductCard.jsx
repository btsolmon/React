export const ProductCard = ({
    name,
    gender,
    bgImage,
    email,
    studentCode,
}) =>{
    return (
        <div className="bg-white flex justify-center items-center h-screen">
      <div className="bg-[#85d7e2] h-[400px] w-[650px] flex flex-col gap-0 rounded-3xl">
        <p className="text-[#2c8274] text-[55px] font-semibold ml-20">
          STUDENT
        </p>
        <p className="bg-[#2c8274] h-1 w-[570px] items-center ml-10"></p>
        <div className="flex justify-around">
          <div className="flex flex-col gap-3 font-semibold text-[20px]">
            <p className="text-white text-[27px] ml-15">IDENTITY CARD</p>
            <div>
              <p className="text-[#2c8274]">Name</p>
              <p>[name]</p>
            </div>
            <div>
              <p className="text-[#2c8274]">Gender</p>
              <p>[gender]</p>
            </div>
            <div>
              <p className="text-[#2c8274]">Email</p>
              <p>[email]</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end mt-4">
            <img className="w-[200px]" src="./Screenshot.png" alt="" />
            <p className="font-semibold text-[1px]">Student Code</p>
            <p>[studentCode]</p>
          </div>
        </div>
      </div>
    </div>
    );
}