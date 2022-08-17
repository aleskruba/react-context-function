import React,{useContext} from 'react'
import { BookContext } from '../context/BookCont';

const BookDetails = ({book}) => {
    
    const {dispatch} = useContext(BookContext)
    

    return ( 
        <div>
            <li onClick={()=> dispatch({type:'REMOVE_BOOK',id:book.id})}>
                <div className='title'>{book.title}</div>
                <div className='title'>{book.author}</div>

            </li>
        </div>
     );
}
 
export default BookDetails;