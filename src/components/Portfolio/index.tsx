import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import FirstPage from './FirstPage';
import ListButton from './ListButton';
import PortfolioItem from './PortfolioItem';
import { projects } from './data';

// Tạo component Page riêng cho từng trang và memo hóa để tránh render lại không cần thiết
const Page = React.memo(
  React.forwardRef((props: any, ref: any) => {
    return <PortfolioItem project={props.project} number={props.number} ref={ref} />;
  })
);

// Tạo FlipBook component riêng và memo hóa
const FlipBook = React.memo(({ bookRef, filteredProjects, handleFlip }: any) => {
  const flipBookStyles = {
    boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
    borderRadius: '10px',
    background: '#e6e7e8'
  };

  return (
    <HTMLFlipBook
      width={700}
      height={1000}
      minWidth={300}
      maxWidth={1000}
      minHeight={400}
      maxHeight={1500}
      startZIndex={0}
      size="stretch"
      showCover={false}
      mobileScrollSupport={true}
      className="mx-auto"
      ref={bookRef}
      style={flipBookStyles}
      flippingTime={800}
      usePortrait={true}
      startPage={0}
      drawShadow={true}
      useMouseEvents={true}
      renderOnlyPageLengthChange={true}
      swipeDistance={0}
      showPageCorners={true}
      disableFlipByClick={false}
      maxShadowOpacity={0.7}
      autoSize={true}
      clickEventForward={true}
      onFlip={handleFlip}>
      <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-gray-100">
        <FirstPage />
      </div>
      {filteredProjects.map((project: any, index: number) => (
        <div key={project.id || index} className="page">
          <Page project={project} number={`${index + 1}`} />
        </div>
      ))}
    </HTMLFlipBook>
  );
});

export default function Portfolio() {
  const [search, setSearch] = useState('');
  const bookRef = useRef();

  // Sử dụng useMemo để cache kết quả filter
  const filteredProjects = useMemo(() => {
    const searchTerm = search.toLowerCase();
    return projects.filter(
      (p: any) =>
        p.title.toLowerCase().includes(searchTerm) ||
        p.domain.toLowerCase().includes(searchTerm) ||
        p.languages.some((lang: string) => lang.toLowerCase().includes(searchTerm))
    );
  }, [search]);

  console.log(filteredProjects);
  

  const exportToPDF = useCallback(async () => {
    try {
      const book = bookRef.current;
      if (!book) {
        return;
      }

      const pages = document.querySelectorAll('.page');
      if (pages.length === 0) {
        return;
      }

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      // Tạo và cấu hình container một lần
      const tempContainer = document.createElement('div');
      tempContainer.style.cssText = 'position: absolute; left: -9999px;';
      document.body.appendChild(tempContainer);

      // Cấu hình canvas options một lần
      const canvasOptions = {
        scale: 2,
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: null,
        imageTimeout: 0
      };

      // Tính toán kích thước PDF một lần
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      for (let i = 0; i < pages.length; i++) {
        const page = pages[i] as HTMLElement;

        // Clone và cấu hình page
        const clonedPage = page.cloneNode(true) as HTMLElement;
        tempContainer.innerHTML = '';
        tempContainer.appendChild(clonedPage);

        clonedPage.style.cssText = `
          width: 700px;
          height: 1000px;
          background: linear-gradient(to bottom right, #fff7ed, #f3f4f6);
          position: relative;
          display: block;
          visibility: visible;
          opacity: 1;
          transform: none;
        `;

        // Đợi images load
        await new Promise((resolve) => setTimeout(resolve, 300));

        const canvas = await html2canvas(clonedPage, canvasOptions);

        const imgWidth = pageWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        if (i > 0) pdf.addPage();

        pdf.addImage(
          canvas.toDataURL('image/jpeg', 0.95),
          'JPEG',
          0,
          0,
          imgWidth,
          imgHeight,
          undefined,
          'FAST'
        );
      }

      document.body.removeChild(tempContainer);
      pdf.save('portfolio.pdf');
    } catch (error) {
      console.error('Lỗi khi xuất PDF:', error);
    }
  }, []);

  const handleFlip = useCallback((e: any) => {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page) => page.classList.remove('--turning'));
    if (e.data) {
      const currentPage = pages[e.data];
      currentPage?.classList.add('--turning');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f6f4] p-4">
      <div className="max-w-7xl mx-auto px-4">
        <ListButton
          bookRef={bookRef}
          search={search}
          setSearch={setSearch}
          exportToPDF={exportToPDF}
        />
        <div>
          <FlipBook bookRef={bookRef} filteredProjects={filteredProjects} handleFlip={handleFlip} />
        </div>
      </div>
    </div>
  );
}
