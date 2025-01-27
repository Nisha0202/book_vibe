import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function BookList() {
    const [books, setBooks] = useState([]);
    // const [total, setTotal] = useState(4);

    useEffect(() => {
        console.log('hi');
        fetch('book.json')
            .then(res => res.json())
            .then(data => {
                setBooks(data.books);
            })



    }, [])


    return (
        <div className='md:my-20 my-10 w-full'>
            <h1 className='playful md:text-4xl text-xl font-bold grid place-items-center'>Books</h1>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8
            gap-4 mt-8 p-4 md:p-0'>
                {books.map((book) => (

                    <Link key={book.bookId} to={`/book_details/${book.bookId}`}>
                   
                        <div key={book.bookId} className='lexend'>

                            <div className="w-full rounded-2xl overflow-hidden border-[1px] border-gray-300 p-5">
                                <img className='rounded-xl w-full h-[300px] object-cover' src={book.image} alt={book.bookName} />
                                <div className="px-0 py-6 pb-2 flex gap-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-emerald-500">{book.tags[0]}</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm  text-emerald-500 ">{book.tags[1]}</span>
                                </div>


                                <div className="">
                                    <div className="font-bold text-2xl playful">{book.bookName}</div>
                                    <p className="text-gray-600 text-sm mt-2 mb-6 font-bold lexend"> By: {book.author}
                                    </p>
                                </div>

                                <div className=" pt-4 flex justify-between items-center font-bold border-t-[1px] border-dashed border-gray-300">
                                    <span className="inline-block  rounded-full text-sm  text-gray-600 ">{book.category}</span>
                                    <span className=" flex gap-2  rounded-full  text-sm  text-gray-600 ">{book.rating}
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.48 1.49897C9.52229 1.3958 9.59432 1.30755 9.68692 1.24543C9.77951 1.18331 9.88849 1.15015 10 1.15015C10.1115 1.15015 10.2205 1.18331 10.3131 1.24543C10.4057 1.30755 10.4777 1.3958 10.52 1.49897L12.645 6.60997C12.6848 6.70561 12.7502 6.78841 12.834 6.84928C12.9178 6.91015 13.0167 6.94672 13.12 6.95497L18.638 7.39697C19.137 7.43697 19.339 8.05997 18.959 8.38497L14.755 11.987C14.6765 12.0542 14.6179 12.1417 14.5858 12.2399C14.5537 12.3382 14.5493 12.4434 14.573 12.544L15.858 17.929C15.8838 18.037 15.8771 18.1503 15.8385 18.2545C15.8 18.3587 15.7315 18.4491 15.6416 18.5144C15.5517 18.5797 15.4445 18.6168 15.3335 18.6212C15.2225 18.6256 15.1127 18.597 15.018 18.539L10.293 15.654C10.2048 15.6001 10.1034 15.5715 10 15.5715C9.89661 15.5715 9.79522 15.6001 9.707 15.654L4.982 18.54C4.88725 18.598 4.77745 18.6266 4.66645 18.6222C4.55546 18.6178 4.44825 18.5807 4.35836 18.5154C4.26848 18.4501 4.19996 18.3597 4.16145 18.2555C4.12294 18.1513 4.11617 18.038 4.142 17.93L5.427 12.544C5.45083 12.4434 5.44645 12.3381 5.41434 12.2399C5.38223 12.1416 5.32363 12.0541 5.245 11.987L1.041 8.38497C0.956339 8.3128 0.895003 8.21714 0.864756 8.11009C0.834509 8.00304 0.836712 7.88942 0.871085 7.78362C0.905459 7.67782 0.970457 7.58461 1.05785 7.51578C1.14524 7.44695 1.25109 7.4056 1.362 7.39697L6.88 6.95497C6.98325 6.94672 7.08222 6.91015 7.16602 6.84928C7.24983 6.78841 7.31522 6.70561 7.355 6.60997L9.48 1.49897Z"
                                                stroke="#424242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>



                                    </span>
                                </div>
                            </div>

                        </div>
                    </Link>


                ))}
                <div className='h-24'></div>

            </div>
        </div>

    )
}
