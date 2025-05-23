import { SlidersHorizontal, Grid3X3, List } from "lucide-react";

type SearchControlsProps = {
    sortValue: string;
    pageSize: number;
    viewMode: 'grid' | 'list';
    sortOptions: any[];
    pageSizeOptions: any[];
    onSortChange: (value: string) => void;
    onPageSizeChange: (size: number) => void;
    onViewChange: (mode: 'grid' | 'list') => void;
}

const SearchControls = ({ sortValue, pageSize, viewMode, sortOptions, pageSizeOptions, onSortChange, onPageSizeChange, onViewChange }: SearchControlsProps) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center gap-2">
                    <SlidersHorizontal size={20} className="text-gray-500" />
                    <label className="text-sm font-medium text-gray-700">Sort by:</label>
                </div>
                <select value={sortValue} onChange={(e) => onSortChange(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700">Show:</label>
                    <select value={pageSize} onChange={(e) => onPageSizeChange(parseInt(e.target.value))} className="px-3 py-2 border border-gray-300 rounded-lg text-sm" >
                        {pageSizeOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 mr-2">View:</span>
                <button onClick={() => onViewChange('grid')} className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-accent1 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                    <Grid3X3 size={16} />
                </button>
                <button onClick={() => onViewChange('list')} className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-accent1 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                    <List size={16} />
                </button>
            </div>
        </div>
    </div>
);

export default SearchControls;