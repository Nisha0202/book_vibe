import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function CategoryList() {

    const [genres, setgenres] = useState([]);
    const [total, setTotal] = useState(4);

    useEffect(() => {
        console.log('hi');
        fetch('category.json')
            .then(res => res.json())
            .then(data => setgenres(data));
    }, [])


    return (
        <div className='md:my-16 my-12 lexend grid place-items-center'>
            <div className='grid place-items-center'>
                <h1 className='text-base md:text-2xl font-medium'>Explore Your Next Favourate Drama!</h1>

            </div>
            <div className='my-8 flex flex-wrap'>
                {genres.slice(0, total).map(genre => (
                    <div key={genre.id} className='w-full md:w-1/2 border-base-300 border-[1px] md:p-6 p-6 flex flex-col items-center md:flex-row md:items-start gap-4 '>
                        <div>
                            <img src={genre.icon} className=" w-56 h-56 md:w-80 md:h-80 object-cover border-base-300 border-[1px]" alt={genre.name} />
                        </div>


                        <div className='md:w-1/3 w-full md:h-full h-40 flex-col gap-4 items-center'>
                            <div className='content md:h-1/2 h-2/3'>
                                <div className='text-base font-bold'>{genre.name}</div>
                                <div className='overflow-y-auto max-h-52 mt-3'>{genre.description}</div>
                            </div>

                            <div className='md:h-1/2 flex justify-end items-end '>
                                <Link to={`/genre_details/${genre.id}`}>
                                    <button className='btn btn-sm'>
                                        more details
                                    </button>
                                </Link>



                            </div>

                        </div>



                    </div>)
                )}


            </div>

            <div className={total === genres.length ? 'hidden' : ''}>
                <button onClick={() => setTotal(genres.length)} className='btn'>
                    See more
                </button>
            </div>



        </div>
    )
}
