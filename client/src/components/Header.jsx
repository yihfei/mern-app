import React from 'react'
import { Button, Dropdown, Navbar, TextInput } from 'flowbite-react'
import { Link, useLocation  } from 'react-router-dom'
import { FaMoon } from 'react-icons/fa'
import { useSelector } from 'react-redux'; 

export default function Header() {
    const path = useLocation().pathname;
    const { currentUser } = useSelector(state => state.user);
  return (
    <Navbar className="border-b-2">
        <Link to="/" className="self center whitespace-nowrap text-sm sm:text-xl
        font-semibold dark:text-white">
            <span className='px-2 py-1'>BeanNotes</span>
        </Link>
        <div className="flex gap-2 md:order-2">
            <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
                <FaMoon />
            </Button>
            { currentUser ? (
                <div>
                    <p className='mt-2 text-gray-600'>hey {currentUser.username}!</p>
                </div>
            ) : 
                <Link to="/sign-in">
                    <Button outline>Sign In</Button>
                </Link>
            }
            
            
            <Navbar.Toggle/>
        </div>
        <Navbar.Collapse>
            <Navbar.Link active={path=== "/"} as={"div"}>
                <Link to="/">Home</Link>
            </Navbar.Link>
            <Navbar.Link active={path=== "/about"} as={"div"}>
                <Link to="/about">About</Link>
            </Navbar.Link>
            <Navbar.Link active={path=== "/brews"} as={"div"}>
                <Link to="/brews">Brews</Link>
            </Navbar.Link>
        </Navbar.Collapse>
        
    </Navbar>
  )
}
