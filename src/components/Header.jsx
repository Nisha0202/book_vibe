import React from 'react'
import { NavLink } from 'react-router-dom'

export default function () {

    const Genres = <>
        <li><NavLink to='/'  className={({ isActive }) => (isActive ? "link-active" : "link")}>Home</NavLink></li>
        <li><NavLink to='/bookmark'  className={({ isActive }) => (isActive ? "link-active" : "link")}>Listed Books</NavLink></li>
        <li><NavLink to='/pages' className={({ isActive }) => (isActive ? "link-active" : "link")}>Pages to Read</NavLink></li>
        
    </>

    return (

        <div className="navbar bg-base-100 px-0 md:py-4 py-6 flex flex-col md:flex-row md:items-center justify-between lexend">
            <div className="">
                <NavLink to="/" className="text-base md:text-xl font-bold text-indigo-600">Book Vibe</NavLink>
            </div>
            <div className="menu menu-horizontal flex gap-2">
                {Genres}


            </div>
            <div className='md:flex hidden'>
                <ul className="p-2 md:flex gap-4">
                    <button className='btn py-1 bg-emerald-500  text-white'>Sign In</button>
                    <button className='btn py-1 bg-blue-500 text-white'>Sign Up</button>
                </ul>
            </div>





        </div>



    )
}
