import React, { useContext, useState, useEffect  } from 'react'
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import {FaBarsStaggered, FaXmark, FaBlog} from 'react-icons/fa6';
import { AuthContext } from '../context/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const {user} = useContext(AuthContext);
    // console.log(user); 

    //toggle menu 
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect( () => {
        const handleScroll = () =>{
            if(window.scrollY > 0) setIsSticky(true);
            else setIsSticky(false);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    //navitems here
    const navItems = [
        {link: 'Home', path: '/'},
        {link: 'About', path: '/about'},
        {link: 'Shop', path: '/shop'},
        {link: 'Sell Your Book', path: '/admin/dashboard'},
        {link: 'Blog', path: '/blog'}
    ]

  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className= {`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                {/* Logo */}
                <Link to = "/" className='flex gap-6 font-bold text-4xl text-blue-700'> <FaBlog/> Books </Link>
                {/* <Link to = "/" className='flex items-center justify-items-center gap-2'> 
                    <img className='inline-block h-20 rounded-full w-auto' src = {logo} alt = "logo" />
                </Link> */}

                {/* Nav items for large device */}
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link, path}) => <Link key = {path} to = {path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>
                            {link} </Link>)
                    }
                </ul>
                
                {/* Btn items for large device */}
                <div className='space-x-12 hidden lg:flex items-center'>
                    <button> <FaBarsStaggered className = 'w-5 hover:text-red-700' /> </button>
                </div>

                {/* Menu Btn items for mobile device */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-black focus:outline-none'>
                        {
                            isMenuOpen ? <FaXmark className = 'h-5 text-black w-5' /> : <FaBarsStaggered className = 'h-5 text-black w-5' />
                        }
                    </button>
                </div>
            </div>
            
            {/* navitems for small device */}
            <div style={{ backgroundColor: '#03B5E1'}} className={`space-y-4 px-4 mt-6 py-7 ${isMenuOpen ? "block top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({link, path}) => <Link key = {path} to = {path} className='block text-base text-white uppercase cursor-pointer'> {link} </Link>)
                }
            </div>
        </nav>
    </header> 
  )
}

export default Navbar