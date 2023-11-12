import React, { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';

const Shop = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-books')
        .then(res => res.json())
        .then(data => setBooks(data));
    }, [])

    return (
        <div className='mt-24 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center'>All Books Are Here</h2>

            <div className='my-12 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8'>
                {
                    books.map(book => <Card>
                        <img src= {book.imageUrl} alt="" className='h-96'/>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <p>
                            {book.title}
                          </p>
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                          <p>
                            {book.description}
                          </p>
                        </p>
                        <button className='bg-blue-700 py-2 px-5 rounded text-white font-semibold hover:bg-black transition-all duration-300'>Buy Now</button>
                      </Card>)
                }
            </div>
        </div>
    )
}

export default Shop;