// import {useState} from 'react'

type PaginationProps = {
  total: number,
  onPageChanged: (page: number) => void,
  currentPage: number,
}

const maxVisibleButtons = 10
const Pagination = (props: PaginationProps) => {
  // const [hasMorePages, setHasMorePages] = useState(false)
  function startPage() {
    if (props.currentPage === 1) {
      return 1;
    }

    if (props.currentPage === props.total) {
      return props.total - maxVisibleButtons + 1;
    }

    return props.currentPage - 1;
  }

  function endPage() {
    return Math.min(
      startPage() + maxVisibleButtons - 1,
      props.total
    );
  }

  function pages() {
    const range = [];

    for (let i = startPage(); i <= endPage(); i += 1) {
      range.push({
        name: i,
        isDisabled: i === props.currentPage
      });
    }

    return range;
  }

  // function isInFirstPage() {
  //   return props.currentPage === 1;
  // }
  
  // function isInLastPage() {
  //   return props.currentPage === props.total;
  // }

  function changePage(e: any, page: number) {
    e.preventDefault()
    props.onPageChanged(page)
  }

  return (
    <div className="flex justify-center items-center space-x-5 my-10 text-sm">
      <a href="#">PREV</a>
      {pages().map(page => (
        <a className={props.currentPage === page.name ? 'rounded-full border-2 border-gray-700 w-8 h-8 inline-flex items-center justify-center' : ''} href="#" 
          onClick={(e) => changePage(e, page.name)}
          key={page.name}>
          {page.name}
          </a>  
      ))}
      <a href="#">NEXT</a>
    </div>
  )
}

export { Pagination };
