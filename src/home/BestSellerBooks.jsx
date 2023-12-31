import React, { useEffect } from 'react';
import { useState } from 'react';
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://teal-easy-skunk.cyclic.app/all-books")
        .then(res => res.json()
        .then(data => setBooks(data.slice(0,7))))
    }, [])
    
  return (
    <div>
        <BookCards books = {books} headlines= "Best Seller Books" />
    </div>
  )
}

export default BestSellerBooks