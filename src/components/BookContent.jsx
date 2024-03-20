import React from 'react'

const BookContent = ({img,title,autor,year,gender,resume}) => {
  return (
    <>
    <figure><img src={img} alt="Album" className='md:w-50 h-[350px]'/></figure>
    <div className="card-body lg:w-6/12 w-full">
        <div>
            <h2 className="card-title text-wrap mb-0 pb-0">{title}</h2>
            <p className='text-gray-600'>{autor} - {year} </p>
            <p className='text-gray-600'>{gender}</p>
            <p className='text-wrap	mt-5 text-base'>{resume}</p>
        </div>
    </div>
</>
  )
}

export default BookContent