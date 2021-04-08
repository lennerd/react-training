import classNames from "classnames";

interface PaginationProps {
  className?: string;
  pages: number[];
  onPageClick(page: number): void;
  activePage: number;
}

export default function Pagination({
  pages,
  onPageClick,
  activePage,
  className
}: PaginationProps) {
  return (
    <ul className={classNames("flex justify-center divide-x", className)}>
      {pages.map((page) => (
        <li key={page}>
          <button
            onClick={() => onPageClick(page)}
            className={classNames("px-1 text-blue-600 hover:text-blue-700", {
              "text-pink-600 hover:text-pink-700": activePage === page
            })}
          >
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
}
