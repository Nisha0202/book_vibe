import React from 'react'
import { NavLink } from 'react-router-dom'

export default function () {

    const Genres = <>
        <li><NavLink to='/'  className={({ isActive }) => (isActive ? "link-active" : "link")}>Home</NavLink></li>
        <li><NavLink to='/bookmark/read'  className={({ isActive }) => (isActive ? "link-active" : "link")}>Listed Books</NavLink></li>
        <li><NavLink to='/pages' className={({ isActive }) => (isActive ? "link-active" : "link")}>Pages to Read</NavLink></li>
        <li><NavLink to='/about' className={({ isActive }) => (isActive ? "link-active" : "link")}>About</NavLink></li>
        <li><NavLink to='/more' className={({ isActive }) => (isActive ? "link-active" : "link")}>More</NavLink></li>
        
    </>

    return (

        <div className="navbar bg-base-100 px-0 md:pt-4 pt-6 flex flex-col md:flex-row md:items-center md:justify-between lexend">
            <div className="">
                <NavLink to="/" className="text-base md:text-xl font-bold text-indigo-600">Book Vibe</NavLink>
            </div>
            <div className="menu menu-horizontal flex md:gap-1 gap-0">
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
