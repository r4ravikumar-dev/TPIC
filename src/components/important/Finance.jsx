import React from "react";
import coordinator from "../../assets/bhashkar.jpg";
function Finance() {
  return (
    <>
      <div className="max-w-screen-lg mx-auto flex flex-wrap justify-center item-center mt-10">
        <div className="flex flex-wrap flex-col justify-center item-center text-center">
          <div className="flex flex-wrap flex-col justify-center items-center text-center">
            <h1 className="text-base3 font-SFPro text-[20px] sm:text-[24px] font-bold leading-[135%]">
              Finance
            </h1>
            <div className="text-center mt-4 inline-block h-[2px] w-[160px] bg-base2 rounded-lg"></div>
          </div>
          {/* <img src={team} alt="statrtup" width={1200} height={1200} className="w-[360px] items-center" /> */}
          <p className="mt-4 text-white text-justify text-[14px] sm:text-[18px] -tracking-tight leading-[135%]">
          The Finance Department is the backbone of the cell's operations, ensuring the financial health and sustainability of its initiatives. By managing budgets, allocating resources efficiently, and overseeing financial planning, the department supports the cell’s growth and innovation goals. It plays a crucial role in securing funding, managing sponsorships, and ensuring transparency in financial processes. Through careful monitoring and analysis, the Finance Department helps in maintaining financial stability, while providing strategic insights that aid in decision-making. Its efforts not only support ongoing projects and events but also foster long-term success by aligning financial strategies with the e-cell's mission and objectives.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap flex-col w-full justify-center items-center ">
          <p className="text-base3 font-semibold text-[16px] sm:text-[18px] mb-4">
            Student Co-ordinators
          </p>
          <img
            src={coordinator}
            alt="Research and Development"
            width={240}
            height={240}
            className="w-[120px] sm:w-[160px] rounded-md mb-2 "
          />
          <p className="text-base2 font-semibold text-[16px] sm:text-[20px]">
            Bhashkar Singh Rawat
          </p>
          <p className="text-base font-semibold text-[14px] sm:text-[16px] -mt-1">
            Co-ordinator
          </p>
        </div>
      </div>
    </>
  );
}

export default Finance;
