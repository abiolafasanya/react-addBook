function Hero() {
    return (
        <div className={header}>
            <div className="lg:w-1/2 p-3">
                <h5 className="sm:text-2xl text-4xl lg:text-6xl uppercase">Why read a book</h5>
                <p className="p-3 justify">The importance of reading is completely undeniable. The next time someone asks you: “Why is reading important?” you will have an educated and thorough answer to respond with. If you’re not the biggest fan of books, that’s ok! You’re not alone! But before you shut down books and reading all together, take the time 
                    to learn more about the importance of reading and all the incredible benefits that come with it.
                </p>

            </div>
            <div className="lg:w-1/2 p-3 content-center"> 
                <img src="https://image.freepik.com/free-vector/bestseller-books-stand-wooden-bookshelf-booklet-diary-volumes-with-colorful-paperback-lying-pile-flying-shelf-hanging-wall-library-store-cartoon-vector-illustration_107791-4208.jpg"
                className="w-full"
                alt="Book Image" />
            </div>
        </div>
    )
}

const header = 'bg-indigo-300 flex flex-col lg:flex-row sm:flex-col px-10 py-10'
export default Hero
