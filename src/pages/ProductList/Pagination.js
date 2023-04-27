import React from 'react'

const Pagination = ({totalPosts, postPerpage ,setCurrentPage , currentpage}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerpage); i++){
        pages.push(i);
    }


  const prewPage = () => {
    if (currentpage > 1) {
      setCurrentPage(currentpage - 1)
    }
  }
  const nextPage = () => {
    if (currentpage < Math.ceil(totalPosts / postPerpage)) {
      setCurrentPage((currentpage) => currentpage + 1);
    }
  }

  return (
    <div className='pagination'>
        {currentpage > 1 &&  <button onClick={prewPage}>Prew</button> }
        {
            pages.map((page ,index) => {
                return <button key={index} onClick={() => setCurrentPage(page)} >{page}</button>
            })
        }
        {currentpage < Math.ceil(totalPosts / postPerpage) && <button onClick={nextPage}>Next</button> }
    </div>
  )
}

export default Pagination