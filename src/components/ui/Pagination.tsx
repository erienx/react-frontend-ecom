import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentPage: number;
  totalPages: number;
  first: boolean;
  last: boolean;
  onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, first, last, onPageChange }: Props) => {
  const renderPageNumbers = () => {
    const buttons = [];

    for (let i = 0; i < totalPages; i++) {
      const isActive = i === currentPage;
      const isEdge = i === 0 || i === totalPages - 1;
      const isNear = Math.abs(i - currentPage) <= 2;

      if (isEdge || isNear) {
        buttons.push(
          <button key={i} onClick={() => onPageChange(i)} className={`px-3 py-2 rounded-lg text-sm transition-colors ${isActive ? "bg-accent1 text-white" : "text-gray-700 hover:bg-gray-100"}`}>
            {i + 1}
          </button>
        );
      } else if (
        (i === currentPage - 3 || i === currentPage + 3) &&
        buttons[buttons.length - 1]?.type !== "span"
      ) {
        buttons.push(
          <span key={`ellipsis-${i}`} className="px-2 text-gray-400">
            ...
          </span>
        );
      }
    }

    return buttons;
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={first} className="flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" >
        <ChevronLeft size={16} />
        Previous
      </button>

      {renderPageNumbers()}

      <button onClick={() => onPageChange(currentPage + 1)} disabled={last} className="flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-300 text-sm text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" >
        Next
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;
