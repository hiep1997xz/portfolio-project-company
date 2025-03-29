import { useLanguages } from '@/utils/hooks/useLanguages';

const FirstPage = () => {
  const { swLanguages } = useLanguages();
  return (
    <>
      <div className="absolute top-[15%] w-full flex justify-center">
        {/* <img 
        src={images.logo} 
        alt="INISOFT Logo"
        className="w-48 h-48 object-contain"
      /> */}
        LOGO
      </div>

      <div className="absolute top-[45%] w-full text-center px-8">
        <h1 className="text-5xl font-bold mb-4 text-[#f80]">
          <span className="block">{swLanguages('project.company_name')}</span>
        </h1>
        <p className="text-2xl text-gray-600 mb-8">{swLanguages('project.sub_name')}</p>

        <div className="flex justify-center gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-[#f80] font-bold mb-2">{swLanguages('project.vision')}</h3>
            <p className="text-gray-600">{swLanguages('project.vision_desc')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-[#f80] font-bold mb-2">{swLanguages('project.mission')}</h3>
            <p className="text-gray-600">{swLanguages('project.mission_desc')}</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[10%] w-full flex justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-2">{swLanguages('project.contact')}</p>
          <p className="text-[#f80] font-medium">{swLanguages('project.email')}</p>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
