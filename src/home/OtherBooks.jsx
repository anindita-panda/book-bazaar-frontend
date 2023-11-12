import React, { useEffect } from 'react';
import { useState } from 'react';
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://teal-easy-skunk.cyclic.app/all-books")
        .then(res => res.json()
        .then(data => setBooks(data.slice(3,9))))
    }, [])
    
  return (
    <div>
        <BookCards books = {books} headlines= "Other Books" />
    </div>
  )
}

export default OtherBooks