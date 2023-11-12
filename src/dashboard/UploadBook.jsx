import React, { useState } from "react";
import { Button, Label, TextInput, Select, Textarea } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Fantasy",
    "Science Fiction",
    "Mystery",
    "Romance",
    "Historical Fiction",
    "Non-Fiction",
    "Biography",
    "Self-Help",
    "Horror",
    "Thriller",
    "Dystopian",
    "Adventure",
    "Poetry",
    "Humor",
    "Children's Literature",
    "Graphic Novel",
    "Cookbook",
    "Travel",
    "Science",
    "Business",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleBookCategoryChange = (e) => {
    setSelectedBookCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents the default form submission behavior
    const form = e.target; // Access the form elements using e.target

    // Extract values from form elements
    const title = form.title.value;
    const author = form.author.value;
    const imageUrl = form.imageUrl.value;
    const category = form.category.value;
    const description = form.description.value;
    const pdfUrl = form.pdfUrl.value;

    const bookObj = { title, author, imageUrl, category, description, pdfUrl };

    // console.log(bookObj);

    // Send data to db
    fetch("https://teal-easy-skunk.cyclic.app/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj), // converts the JavaScript object bookObj into a JSON string
    })
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => {
        console.log(data);
        alert("Book Uploaded Successfully");
        form.reset(); // Reset the form fields to their initial values
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 font-bold text-3xl ">Upload A Book</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 lg:w-[1000px] flex-wrap"
      >
        {/* First Row */}
        <div className="flex gap-8">
          {/* Book Name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="title" value="Book Title" />
            </div>
            <TextInput
              id="title"
              name="title"
              placeholder="Book Name"
              required
              type="text"
            />
          </div>

          {/* Author Name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="author" value="Author Name" />
            </div>
            <TextInput
              id="author"
              name="author"
              placeholder="Author Name"
              required
              type="text"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex gap-8">
          {/* Book Image URL */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book Image URL" />
            </div>
            <TextInput
              id="imageUrl"
              name="imageUrl"
              placeholder="Book Image URL"
              required
              type="text"
            />
          </div>

          {/* Category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="category" value="Book Category" />
            </div>

            <Select
              id="category"
              name="category"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleBookCategoryChange}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {" "}
                  {option}{" "}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* Third Row - Book description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Book Description" />
          </div>
          <Textarea
            id="description"
            name="Book Description"
            placeholder="Write your book description..."
            className="w-full"
            required
            rows={5}
          />
        </div>

        {/* Fourth Row - Book Pdf url */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="pdfUrl" value="Book PDF URL" />
          </div>
          <TextInput
            id="pdfUrl"
            name="pdfUrl"
            placeholder="URL"
            required
            type="text"
          />
        </div>

        <Button type="submit" className="mt-5">
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
