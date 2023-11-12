import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "flowbite-react";

const ManageBook = () => {
  const [allBooks, setAllBooks] = useState([]); // allBooks is an array of objects

  useEffect(() => {
    // fetch all books from db
    fetch("https://teal-easy-skunk.cyclic.app/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  //Delete a book
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://teal-easy-skunk.cyclic.app/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => alert("Book deleted successfully"));
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 font-bold text-3xl ">Manage Your Books</h2>

      {/* table for book data */}
      <Table className="lg:w-[1100px]">
        <Table.Head>
          <Table.HeadCell>S. No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>

        {allBooks.map((book, index) => (
          <Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell>{book.title}</Table.Cell>
              <Table.Cell>{book.author}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>$10.00</Table.Cell>
              <Table.Cell>
                <Link
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                  to={`/admin/dashboard/edit-books/${book._id}`}
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(book._id)}
                  className="font-bold bg-red-600 rounded py-1 px-4 text-white hover:bg-blue-700"
                >
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
};

export default ManageBook;
