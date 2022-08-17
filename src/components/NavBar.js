import React from 'react'
import { useContext } from 'react';
import { BookContext } from '../context/BookCont';

const Navbar = () => {
   const {books} = useContext(BookContext)

    return ( 
        <div className='navbar'>
            
            <h1>Reading list</h1>
            <p>Currently you have {books.length}</p>

        </div>
     );
}
 
export default Navbar;