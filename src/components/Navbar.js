import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className='navbar'>
        <div  className="rightside">
        <div className="photo">
                <img
                  className="photo"
                  src="https://www.pngitem.com/pimgs/m/157-1577246_transparent-bakery-logo-clipart-logo-bakery-cafe-hd.png"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="flex">
                    
                  <a
                    href="/"
                    >
                    <b>Customize </b>
                  </a>

                  <a
                    href="Classes"
                      >
                    <b>Classes</b>
                  </a>

                  <a
                    href="Items"
                     >
                      <b>Items</b>
                  </a>
                  
                  <a
                    href="cart"
                      >
                    <b>cart</b>
                  </a>

                   <a
                    href="#"
                      >
                    <b>  {'   '}Login/signup</b>
                  </a>
                  <a href="#">
                    <b>Register as baker</b>
                  </a>
                </div>
              </div>
            </div>
            <div className="menu">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="navbut"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only"></span>
                {!isOpen ? (
                  <div class="ran"> <ReorderIcon style={{ border:"none",color:"white",backgroundColor:"green" }}/></div>
                   
                ) : (
                <div className="ran">  <CloseIcon style={{border:"none",color:"white",backgroundColor:"green" }} /> </div>
                )}
              </button>
              </div>
          
              </nav>
              <div className="new">
        <Transition
          show={isOpen}
          
        >
          {(ref) => (
            <div>
              <div ref={ref} className="down">
                <a
                  href="/">
               <b> Customize</b>
                </a>

                <a
                  href="Classes"
                  >
                   <b>Classes</b>
                </a>

                <a
                  href="Items"
              >
                 <b> Items</b>
                </a>

                <a
                  href="#"
                   >
                  <b>cart</b>
                </a>
                <a href="#">
                    <b>Course cart</b>
                </a>
                <a
                  href="#"
                 >
                   <b>Login/signup</b>
                </a>
                <a href="#">
                   <b>Register as baker or instructor</b>
                </a>
              </div>
            </div>
          )}
        </Transition>
      
        </div>
    </div>
  );
}

export default Navbar;