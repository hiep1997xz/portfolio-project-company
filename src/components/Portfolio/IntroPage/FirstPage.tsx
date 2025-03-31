import { images } from '@/assets/image-bases';
import { IconAddress, IconPhone, IconWebsite } from '@/assets/svgs/icon';
import { useLanguages } from '@/utils/hooks/useLanguages';
import Image from 'next/image';

const FirstPage = () => {
  const { swLanguages } = useLanguages();

  return (
    <div className="relative w-full h-full">
      <div className="relative z-10 p-8 flex flex-col h-full">
        <div className="flex justify-end">
          <Image src={images.logoCompany} alt="logo" className="w-[134px] h-[34px]" />
        </div>
        <div className="flex flex-col items-end justify-center mt-[200px]">
          <h1 className="text-[100px] font-bold text-[#ffa23b] mb-4 text-right">INISOFT</h1>
          <div className="text-black max-w-2xl mb-8 flex justify-end items-end mt-[40px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis mi lacus, non
            aliquam est elementum id. Etiam at odio sed nibh lacinia eleifend non eget elit.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis mi lacus, non aliquam
            est elementum id. Etiam at odio sed nibh lacinia eleifend non eget elit.
          </div>
        </div>
        <div className="flex gap-4 justify-end items-end text-black text-sm mt-[150px]">
          <div className="flex items-center gap-2">
            <span>TT02 Mon City, Mỹ Đình, Nam Từ Liêm, Hà Nội, Việt Nam</span>
            <div className="w-[28px] h-[28px] flex items-center justify-center bg-[#ffa23b] rounded-[50%]">
              <IconAddress />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>(+84)936-200-593</span>
            <div className="w-[28px] h-[28px] flex items-center justify-center bg-[#ffa23b] rounded-[50%]">
              <IconPhone />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>https://inisoft.vn/vi</span>
            <div className="w-[28px] h-[28px] flex items-center justify-center bg-[#ffa23b] rounded-[50%]">
              <IconWebsite />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
