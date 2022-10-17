import React from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';

import Wrapper from '../assets/wrappers/PageBtnContainer';
import { changePage } from '../features/allJobs/allJobsSlice';

const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {
    let tempPage = page + 1;
    if (tempPage > numOfPages) {
      tempPage = 1;
    }
    dispatch(changePage({ page: tempPage }));
  };

  const prePage = () => {
    let tempPage = page - 1;
    if (tempPage < 1) {
      tempPage = numOfPages;
    }
    dispatch(changePage({ page: tempPage }));
  };

  return (
    <Wrapper>
      <button type="button" className="prev-btn" onClick={prePage}>
        <HiChevronDoubleLeft />
      </button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              key={pageNumber}
              className={page === pageNumber ? 'pageBtn active' : 'pageBtn'}
              onClick={() => dispatch(changePage({ page: pageNumber }))}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button type="button" className="next-btn" onClick={nextPage}>
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
