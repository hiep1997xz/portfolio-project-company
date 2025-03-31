import { IconAllow } from '@/assets/svgs/icon';

const data = [
  {
    title: 'Các giải pháp phù hợp với giá cả hợp lý',
    description:
      'Inisoft mang đến các giải pháp công nghệ phù hợp với nhu cầu của từng doanh nghiệp, kết hợp với giá cả hợp lý nhằm tối ưu hóa chi phí. Chúng tôi hiểu rằng mỗi doanh nghiệp đều có đặc thù riêng, vì vậy các giải pháp được thiết kế linh hoạt, đảm bảo hiệu quả cao mà vẫn nằm trong ngân sách cho phép.'
  },
  {
    title: 'Tư vấn đến từ đội ngũ chuyên nghiệp & giàu kinh nghiệm',
    description:
      'Inisoft tự hào mang đến dịch vụ tư vấn chuyên nghiệp từ đội ngũ chuyên gia giàu kinh nghiệm trong lĩnh vực công nghệ thông tin. Chúng tôi không chỉ am hiểu về các xu hướng công nghệ mới mà còn có khả năng phân tích và đưa ra những giải pháp thiết thực, phù hợp với nhu cầu cụ thể của từng doanh nghiệp.'
  },
  {
    title: 'Dịch vụ bảo trì và vận hành sau phát triển',
    description:
      'Inisoft cung cấp dịch vụ bảo trì và vận hành sau phát triển nhằm đảm bảo hệ thống và phần mềm luôn hoạt động ổn định, hiệu quả. Chúng tôi cam kết hỗ trợ doanh nghiệp khắc phục sự cố kịp thời, tối ưu hóa hiệu suất và cập nhật các phiên bản mới nhất khi cần thiết.'
  },
  {
    title: 'Các biện pháp bảo mật & tối ưu',
    description:
      'Inisoft áp dụng các biện pháp bảo mật và tối ưu hóa toàn diện nhằm bảo vệ dữ liệu và đảm bảo hiệu suất hệ thống cao nhất. Với các giải pháp này, Inisoft cam kết mang đến cho khách hàng hệ thống bảo mật vững chắc và hiệu năng tối ưu, giúp doanh nghiệp yên tâm phát triển bền vững trong môi trường kỹ thuật số.'
  }
];

const ServicesProvided = () => {
  return (
    <div className="relative w-full h-full">
      <div className="relative z-10 p-8 flex flex-col h-full">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h1 className="text-[46px] font-bold text-[#ffa23b] mb-6 uppercase">
              Tại sao chọn Inisoft
            </h1>
            {data.map((item, index) => (
              <div className="flex items-start gap-4 w-[50%] ml-[46%] mb-4" key={index}>
                <div className="flex items-center justify-center mt-[8px]">
                  <IconAllow width={20} height={20} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[20px] font-bold text-[#ffa23b] mb-2">{item.title}</h3>
                  <p className="text-black">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesProvided;
