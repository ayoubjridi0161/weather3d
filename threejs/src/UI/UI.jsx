import React from 'react';
import './index.css';

export default function Main() {
  return (
    <div className='main-container w-[1440px] h-[1024px] bg-[#696969] relative overflow-hidden mx-auto my-0'>
      <div className='w-[1395px] h-[357px] relative z-[73] mt-0 mr-0 mb-0 ml-[45px]'>
        <div className='w-[256px] h-[255px] bg-[url(../assets/images/d99b9c34-03d5-4054-ac77-489f60369c29.png)] bg-cover bg-no-repeat absolute top-0 left-[1139px] z-[73]'>
          <span className="flex w-[31px] h-[45px] justify-center items-end font-['Poppins'] text-[30px] font-normal opacity-40 leading-[45px] text-[#fff] absolute top-[105px] left-[111px] text-center whitespace-nowrap z-[74]">
            °c
          </span>
        </div>
        <div className='w-[600px] h-[60px] bg-[#dadada] rounded-[50px] absolute top-[60px] left-[375px] overflow-hidden z-[1]'>
          <div className='w-[35px] h-[35px] absolute top-[13px] left-[537px] overflow-hidden z-[3]'>
            <div className='w-[27.75px] h-[27.75px] bg-[url(../assets/images/7060cb60-cdb0-4c9a-b5bf-05045a859dbb.png)] bg-[length:100%_100%] bg-no-repeat relative z-[4] mt-[3.625px] mr-0 mb-0 ml-[3.625px]' />
          </div>
          <span className="flex h-[30px] justify-start items-start font-['Poppins'] text-[20px] font-normal leading-[30px] text-[#838383] absolute top-[15px] left-[51px] text-left whitespace-nowrap z-50">
            Search Location
          </span>
        </div>
        <span className="flex h-[30px] justify-start items-start font-['Akira_Expanded'] text-[32px] font-extrabold leading-[30px] text-[#fff] absolute top-[75px] left-0 text-left whitespace-nowrap z-[2]">
          3D Horizon
        </span>
        <button className='w-[125px] h-[125px] bg-[rgba(217,217,217,0.5)] rounded-[25px] border-none absolute top-[232px] left-0 z-[6] pointer'>
          <div className='w-[40px] h-[40px] relative overflow-hidden z-[67] mt-[29px] mr-0 mb-0 ml-[19px]'>
            <div className='w-[31.5px] h-[31.499px] bg-[url(../assets/images/8a37afcb-e8eb-41be-8611-236ec8156dfe.png)] bg-[length:100%_100%] bg-no-repeat relative z-[68] mt-[4.251px] mr-0 mb-0 ml-[4.25px]' />
          </div>
          <span className="block h-[30px] font-['Poppins'] text-[20px] font-normal leading-[30px] text-[#cdcdcd] relative text-left whitespace-nowrap z-[51] mt-[8px] mr-0 mb-0 ml-[15px]">
            Rain Rate
          </span>
        </button>
        <button className='w-[125px] h-[125px] bg-[rgba(217,217,217,0.5)] rounded-[25px] border-none absolute top-[232px] left-[145px] z-[7] pointer'>
          <div className='w-[40px] h-[40px] bg-[url(../assets/images/57b75b9d-3f69-4563-bddd-55249f0e97e5.png)] bg-cover bg-no-repeat relative overflow-hidden z-[69] mt-[29px] mr-0 mb-0 ml-[19px]' />
          <span className="block h-[30px] font-['Poppins'] text-[20px] font-normal leading-[30px] text-[#cdcdcd] relative text-left whitespace-nowrap z-[58] mt-[8px] mr-0 mb-0 ml-[17px]">
            Humidity
          </span>
        </button>
        <span className="flex h-[123px] justify-start items-start font-['Poppins'] text-[82px] font-normal leading-[123px] text-[#fff] absolute top-[232px] left-[1101px] text-left whitespace-nowrap z-[47]">
          18 °c
        </span>
      </div>
      <div className='w-[1382px] h-[1187px] relative z-[49] mt-[-2px] mr-0 mb-0 ml-[45px]'>
        <button className='w-[240px] h-[52px] bg-[#d9d9d9] rounded-[25px] opacity-50 border-none absolute top-0 left-[1082px] z-[48] pointer' />
        <span className="flex h-[36px] justify-start items-start font-['Poppins'] text-[24px] font-normal leading-[36px] text-[#cdcdcd] absolute top-[8px] left-[1111px] text-left whitespace-nowrap z-[49]">
          Tunisia, Sousse
        </span>
        <button className='w-[125px] h-[125px] bg-[rgba(217,217,217,0.5)] rounded-[25px] border-none absolute top-[22px] left-0 z-[33] pointer'>
          <div className='w-[40px] h-[40px] bg-[url(../assets/images/1a5ee577-6763-462a-b0ff-e607898b31a3.png)] bg-cover bg-no-repeat relative overflow-hidden z-[70] mt-[29px] mr-0 mb-0 ml-[19px]' />
          <span className="block h-[30px] font-['Poppins'] text-[20px] font-normal leading-[30px] text-[#cdcdcd] relative text-left whitespace-nowrap z-[52] mt-[8px] mr-0 mb-0 ml-[16px]">
            Feels Like
          </span>
        </button>
        <button className='w-[125px] h-[125px] bg-[rgba(217,217,217,0.5)] rounded-[25px] border-none absolute top-[22px] left-[145px] z-[34] pointer'>
          <div className='flex w-[40px] h-[40px] pt-[8px] pr-[8px] pb-[8px] pl-[8px] flex-col gap-[8px] justify-center items-center flex-nowrap relative z-[71] mt-[29px] mr-0 mb-0 ml-[19px]'>
            <div className='w-[25.353px] h-[19px] shrink-0 bg-[url(../assets/images/b3380bd9-41cd-4d9f-aa89-dddb86179f0d.png)] bg-cover bg-no-repeat relative z-[72]' />
          </div>
          <span className="block h-[30px] font-['Poppins'] text-[20px] font-normal leading-[30px] text-[#cdcdcd] relative text-left whitespace-nowrap z-[57] mt-[8px] mr-0 mb-0 ml-[16px]">
            NW
          </span>
        </button>
        <div className='w-[401px] h-[401px] bg-[url(../assets/images/5912a6beb2c9fea8164553513c7a44420e4fa5d8.png)] bg-cover bg-no-repeat absolute top-[52px] left-[475px] z-[5]' />
        <button className='w-[125px] h-[125px] bg-[rgba(217,217,217,0.5)] rounded-[25px] border-none absolute top-[167px] left-0 z-[35] pointer'>
          <div className='flex w-[40px] h-[40px] pt-[8px] pr-[8px] pb-[8px] pl-[8px] gap-[8px] justify-center items-center flex-nowrap relative z-[36] mt-[29px] mr-0 mb-0 ml-[19px]'>
            <div className='w-[24px] h-[25px] shrink-0 bg-[url(../assets/images/96e285f0-12e3-47d7-a33a-4083e529d73c.png)] bg-cover bg-no-repeat relative z-[37]' />
          </div>
          <span className="block h-[30px] font-['Poppins'] text-[20px] font-normal leading-[30px] text-[#cdcdcd] relative text-left whitespace-nowrap z-[53] mt-[8px] mr-0 mb-0 ml-[19px]">
            UV Index
          </span>
        </button>
        <button className='w-[125px] h-[125px] bg-[rgba(217,217,217,0.5)] rounded-[25px] border-none absolute top-[167px] left-[145px] z-[38] pointer'>
          <div className='flex w-[40px] h-[40px] pt-[8px] pr-[8px] pb-[8px] pl-[8px] flex-col gap-[8px] justify-center items-center flex-nowrap relative z-[39] mt-[29px] mr-0 mb-0 ml-[19px]'>
            <div className='w-[25px] h-[17px] shrink-0 bg-[url(../assets/images/fff605e9-a739-42f8-a5e2-3cba4aa2c597.png)] bg-cover bg-no-repeat relative z-40' />
          </div>
          <span className="block h-[30px] font-['Poppins'] text-[20px] font-normal leading-[30px] text-[#cdcdcd] relative text-left whitespace-nowrap z-[56] mt-[8px] mr-0 mb-0 ml-[11px]">
            Air Quality
          </span>
        </button>
        <div className='w-[392px] h-[398px] bg-[rgba(217,217,217,0.5)] rounded-[25px] absolute top-[254px] left-[990px] z-[8]'>
          <div className='w-[334px] h-[51.227px] relative z-[24] mt-[28px] mr-0 mb-0 ml-[32px]'>
            <div className='w-[19.5%] h-full bg-[url(../assets/images/c5acb5db-42e3-4cd9-8ada-a34bb1cb1326.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[38.92%] z-[22]' />
            <span className="flex h-[30px] justify-start items-start font-['Poppins'] text-[20px] font-normal leading-[30px] text-[#fff] absolute top-[11px] left-0 text-left whitespace-nowrap z-[23]">
              12/5
            </span>
            <span className="flex h-[30px] justify-start items-start font-['Poppins'] text-[20px] font-normal leading-[30px] text-[#fff] absolute top-[11px] left-[285px] text-left whitespace-nowrap z-[24]">
              22 °c
            </span>
          </div>
          <div className='w-[335px] h-[50px] relative z-[26] mt-[16.773px] mr-0 mb-0 ml-[32px]'>
            <div className='w-[50px] h-[50px] bg-[url(../assets/images/144b39a2-a134-4136-b4f2-07b4363efa40.png)] bg-cover bg-no-repeat absolute top-0 left-[139px] z-[21]' />
            <span className="flex h-[30px] justify-start items-start font-['Poppins'] text-[20px] font-normal leading-[30px] text-[#fff] absolute top-[10px] left-0 text-left whitespace-nowrap z-[25]">
              13/5
            </span>
            <span className="flex h-[30px] justify-start items-start font-['Poppins'] text-[20px] font-normal leading-[30px] text-[#fff] absolute top-[10px] left-[285px] text-left whitespace-nowrap z-[26]">
              28 °c
            </span>
          </div>
          <div className='w-[335px] h-[51.511px] relative z-[28] mt-[16px] mr-0 mb-0 ml-[32px]'>
            <div className='w-[46.302px] h-[43.601px] bg-[#ffee9a] rounded-[94px] absolute top-0 left-[147.698px] z-[17]' />
            <div className='w-[40.129px] h-[40.129px] bg-[url(../assets/images/aeb571a0-a56b-474e-8aab-27d420d6c5f2.png)] bg-cover bg-no-repeat absolute top-[5.209px] left-[150.785px] z-[18]' />
            <span className="flex h-[30px] justify-start items-start font-['Poppins'] text-[20px] font-normal leading-[30px] text-[#fff] absolute top-[11px] left-0 text-left whitespace-nowrap z-[27]">
              14/5
            </span>
            <span className="flex h-[30px] justify-start items-start font-['Poppins'] text-[20px] font-normal leading-[30px] text-[#fff] absolute top-[11px] left-[285px] text-left whitespace-nowrap z-[28]">
              20 °c
            </span>
            <div className='w-[54.598px] h-[32.412px] bg-[url(../assets/images/0825f06c-319d-4ae8-b87d-93f9cf06727c.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[19.1px] left-[134px] z-20' />
          </div>
          <div className='w-[323px] h-[47px] relative z-[62] mt-[9.489px] mr-0 mb-0 ml-[32px]'>
            <div className='w-[42.444px] h-[42.444px] bg-[url(../assets/images/db8c4c9d-34c5-4b63-8b36-dd3695bafff4.png)] bg-cover bg-no-repeat absolute top-0 left-[151.556px] z-[60]' />
            <div className='w-[54.598px] h-[32.412px] bg-[url(../assets/images/6ef92225-1b45-4b08-9f1f-5846fcfa4563.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[12.733px] left-[134px] z-[62]' />
            <span className="flex h-[30px] justify-start items-start font-['Poppins'] text-[20px] font-normal leading-[30px] text-[#fff] absolute top-[17px] left-0 text-left whitespace-nowrap z-[29]">
              15/5
            </span>
            <span className="flex h-[30px] justify-start items-start font-['Poppins'] text-[20px] font-normal leading-[30px] text-[#fff] absolute top-[17px] left-[285px] text-left whitespace-nowrap z-30">
              17°c
            </span>
          </div>
          <div className='w-[46.302px] h-[6.752px] bg-[#00bbff] rounded-[31px] relative z-[66] mt-[-2.82px] mr-0 mb-0 ml-[171.209px]' />
          <div className='flex w-[32.412px] h-[9.453px] justify-between items-center relative z-[65] mt-[-0.39px] mr-0 mb-0 ml-[177.19px]'>
            <div className='w-[44.367px] h-[48.453px] shrink-0 bg-[url(../assets/images/ac4d63ff-46ae-4c07-a39a-9e0bddf1c006.png)] bg-cover bg-no-repeat relative z-[63]' />
            <div className='w-[44.367px] h-[48.453px] shrink-0 bg-[url(../assets/images/ad830af6-3e67-4837-a1b0-04dd0f168cf1.png)] bg-cover bg-no-repeat relative z-[65]' />
          </div>
          <div className='w-[44.367px] h-[48.453px] bg-[url(../assets/images/5ac2506b-35c5-4e5a-a93d-07bfce90cf2a.png)] bg-cover bg-no-repeat relative z-[64] mt-[-4.823px] mr-0 mb-0 ml-[171.695px]' />
          <div className='w-[330px] h-[35.618px] relative z-[32] mt-[-22.63px] mr-0 mb-0 ml-[32px]'>
            <div className='w-[60px] h-[35.618px] bg-[url(../assets/images/391cc38c-62ce-4c35-baac-c0aade713c45.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[133px] z-[11]' />
            <span className="flex h-[30px] justify-start items-start font-['Poppins'] text-[20px] font-normal leading-[30px] text-[#fff] absolute top-[3px] left-0 text-left whitespace-nowrap z-[31]">
              16/5
            </span>
            <span className="flex h-[30px] justify-start items-start font-['Poppins'] text-[20px] font-normal leading-[30px] text-[#fff] absolute top-[3px] left-[285px] text-left whitespace-nowrap z-[32]">
              16 °c
            </span>
          </div>
          <div className='w-[49.108px] h-[9.554px] bg-[#ffec8d] rounded-[54px] relative z-[13] mt-[-6.383px] mr-0 mb-0 ml-[170.35px]' />
          <div className='w-[29.264px] h-[25.127px] relative z-[15] mt-[-3.153px] mr-0 mb-0 ml-[177.611px]'>
            <div className='w-[16.624px] h-[25.127px] bg-[url(../assets/images/6697ad03-c7c4-4228-b490-e120c03e0429.png)] bg-cover bg-no-repeat absolute top-0 left-[8.981px] z-[12]' />
            <div className='w-[5.188px] h-[5.188px] bg-[url(../assets/images/877a79ee-f87a-4338-bab8-76387e6ef156.png)] bg-cover bg-no-repeat absolute top-[3.153px] left-0 z-[15]' />
            <div className='w-[22.723px] h-[24.955px] bg-[url(../assets/images/862d51a9-bac1-49c3-9be7-ac140a1d8ba7.png)] bg-cover bg-no-repeat absolute top-[17.675px] left-[15.309px] z-[14]' />
          </div>
        </div>
        <div className='w-[895px] h-[895px] bg-[url(../assets/images/bc5e0c3829fb5b854ffd0f53aeb49a5251916f14.png)] bg-cover bg-no-repeat absolute top-[292px] left-[228px]' />
        <button className='w-[125px] h-[125px] bg-[rgba(217,217,217,0.5)] rounded-[25px] border-none absolute top-[312px] left-0 z-[41] pointer'>
          <div className='flex w-[40px] h-[40px] pt-[8px] pr-[8px] pb-[8px] pl-[8px] gap-[8px] justify-center items-center flex-nowrap relative z-[42] mt-[29px] mr-0 mb-0 ml-[19px]'>
            <div className='w-[25px] h-[25.207px] shrink-0 bg-[url(../assets/images/e688ea6c-a588-42e4-97e6-c913776e40aa.png)] bg-cover bg-no-repeat relative z-[43]' />
          </div>
          <span className="block h-[30px] font-['Poppins'] text-[20px] font-normal leading-[30px] text-[#cdcdcd] relative text-left whitespace-nowrap z-[54] mt-[8px] mr-0 mb-0 ml-[25px]">
            Sunrise
          </span>
        </button>
        <button className='w-[125px] h-[125px] bg-[rgba(217,217,217,0.5)] rounded-[25px] border-none absolute top-[312px] left-[145px] z-[44] pointer'>
          <div className='flex w-[40px] h-[40px] pt-[8px] pr-[8px] pb-[8px] pl-[8px] flex-col gap-[8px] justify-center items-center flex-nowrap relative z-[45] mt-[29px] mr-0 mb-0 ml-[19px]'>
            <div className='w-[25px] h-[25px] shrink-0 bg-[url(../assets/images/f7130e20-e90c-46b7-8cde-015c10de28e3.png)] bg-cover bg-no-repeat relative z-[46]' />
          </div>
          <span className="block h-[30px] font-['Poppins'] text-[20px] font-normal leading-[30px] text-[#cdcdcd] relative text-left whitespace-nowrap z-[55] mt-[8px] mr-0 mb-0 ml-[28px]">
            Sunset
          </span>
        </button>
      </div>
    </div>
  );
}
