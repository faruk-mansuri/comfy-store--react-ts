import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { constructUrl, constructPrevOrNextUrl, OrdersResponse } from '@/utils';
import { useLoaderData, useLocation } from 'react-router-dom';

const ComplexPagination = () => {
  const { meta } = useLoaderData() as OrdersResponse;
  const { pageCount, page } = meta.pagination;
  const { search, pathname } = useLocation();

  if (pageCount < 2) return null;

  // const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  // const renderPagination = pages.map((pageNumber) => {
  //   const isActive = pageNumber === page;
  //   const url = constructUrl({ pageNumber, search, pathname });

  //   return (
  //     <PaginationItem key={pageNumber}>
  //       <PaginationLink to={url} isActive={isActive}>
  //         {pageNumber}
  //       </PaginationLink>
  //     </PaginationItem>
  //   );
  // });

  const constructButton = ({
    pageNumber,
    isActive,
  }: {
    pageNumber: number;
    isActive: boolean;
  }): React.ReactNode => {
    const url = constructUrl({ pageNumber, search, pathname });
    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink to={url} isActive={isActive}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  };

  const constructEllipsis = (key: string): React.ReactNode => {
    return (
      <PaginationItem key={key}>
        <PaginationEllipsis />
      </PaginationItem>
    );
  };

  const renderPagination = () => {
    const pages: React.ReactNode[] = [];

    // add first
    pages.push(constructButton({ pageNumber: 1, isActive: page === 1 }));

    // ellipsis
    if (page > 3) {
      pages.push(constructEllipsis('dots-1'));
    }

    // button before active button
    if (page > 2) {
      pages.push(constructButton({ pageNumber: page - 1, isActive: false }));
    }

    // active button
    if (page !== 1 && page !== pageCount) {
      pages.push(constructButton({ pageNumber: page, isActive: true }));
    }

    // button after active button
    if (page !== pageCount && page < pageCount - 1) {
      pages.push(constructButton({ pageNumber: page + 1, isActive: false }));
    }

    // ellipsis
    if (page < pageCount - 2) {
      pages.push(constructEllipsis('dots-1'));
    }

    // add last
    pages.push(
      constructButton({ pageNumber: pageCount, isActive: page === pageCount })
    );

    return pages;
  };
  const { prevUrl, nextUrl } = constructPrevOrNextUrl({
    currentPage: page,
    pageCount,
    search,
    pathname,
  });

  return (
    <Pagination className='mt-16'>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={prevUrl} />
        </PaginationItem>
        {renderPagination()}
        <PaginationItem>
          <PaginationNext to={nextUrl} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ComplexPagination;
