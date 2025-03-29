import React from 'react'
import { useLanguages } from '@/utils/hooks/useLanguages';

const PortfolioItem = React.forwardRef((props: any, ref: any) => {
  const { project } = props;
  const { swLanguages } = useLanguages();

  return (
    <div className="relative w-full h-full" ref={ref}>
      <div className="w-full h-full">
        <div className="relative w-full h-full p-4">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-gray-100"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-[#f80] mb-3">{project.title}</h2>
              <p className="text-gray-600 leading-relaxed">{project.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 h-full mb-6 items-center">
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{swLanguages('project.market')}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.stats}</p>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-[80%] overflow-hidden rounded-tl-lg rounded-tr-lg shadow-lg border-[5px] border-[#7c7c7c]">
                  <img
                    src={project.image.src}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 h-full mb-6 items-center">
              <div className="relative">
                <div className="w-full h-[80%] overflow-hidden rounded-tl-lg rounded-tr-lg shadow-lg border-[5px] border-[#7c7c7c]">
                  <img
                    src={project.image.src}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">
                    {swLanguages('project.engine_tech')}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag: any, idx: number) => (
                      <span key={idx} className="px-4 py-2 bg-orange-100 text-[#f80] rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 h-full mb-6 items-center">
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{swLanguages('project.main_features')}</h3>
                  <ul className=" gap-3">
                    {project.features.map((feature: any, idx: number) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-[80%] overflow-hidden rounded-tl-lg rounded-tr-lg shadow-lg border-[5px] border-[#7c7c7c]">
                  <img
                    src={project.image.src}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 h-full items-center">
              <div className="relative">
                <div className="w-full h-[80%] overflow-hidden rounded-tl-lg rounded-tr-lg shadow-lg border-[5px] border-[#7c7c7c]">
                  <img
                    src={project.image.src}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">{swLanguages('project.languages')}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {project.languages.map((lang: string, idx: number) => (
                      <span key={idx} className="px-4 py-2 bg-orange-100 text-[#f80] rounded">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
});

export default PortfolioItem;
