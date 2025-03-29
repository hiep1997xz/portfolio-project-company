import React from 'react';
import Languague from './Languague';
import { useLanguages } from '@/utils/hooks/useLanguages';

interface ListButtonProps {
  bookRef: any;
  search: string;
  setSearch: (value: string) => void;
  exportToPDF: () => void;
}

const ListButton = ({ bookRef, search, setSearch, exportToPDF }: ListButtonProps) => {
  const { swLanguages } = useLanguages();
  return (
    <div className="fixed top-5 left-5 z-[1000] flex flex-col items-center gap-2.5">
      <button
        onClick={() => bookRef.current.pageFlip().flipPrev()}
        className="w-10 h-10 flex items-center justify-center bg-[#f80] rounded-full border-none shadow-[0_2px_10px_rgba(0,0,0,0.1)] cursor-pointer hover:scale-110 hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)] transition-all duration-300 text-white">
        ←
      </button>
      <button
        onClick={() => bookRef.current.pageFlip().flipNext()}
        className="w-10 h-10 flex items-center justify-center bg-[#f80] rounded-full border-none shadow-[0_2px_10px_rgba(0,0,0,0.1)] cursor-pointer hover:scale-110 hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)] transition-all duration-300 text-white">
        →
      </button>
      <div className="relative w-10 mb-10">
        <input
          type="text"
          placeholder={swLanguages('project.search')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="absolute left-0 w-10 h-10 p-2border-none rounded-full bg-[#f80] shadow-[0_2px_10px_rgba(0,0,0,0.1)] cursor-pointer text-sm transition-all duration-300 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6Ii8+PC9zdmc+')] bg-no-repeat bg-center bg-[length:20px] -indent-[9999px] focus:w-[300px] focus:rounded-[20px] focus:px-4 focus:cursor-text focus:indent-0 focus:outline-none focus:bg-[95%_center] text-white placeholder-white"
        />
      </div>
      <button
        className="w-10 h-10 flex items-center justify-center bg-[#f80] rounded-full border-none shadow-[0_2px_10px_rgba(0,0,0,0.1)] cursor-pointer hover:scale-110 hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)] transition-all duration-300"
        onClick={exportToPDF}>
        📑
      </button>
      <Languague />
    </div>
  );
};

export default ListButton;
