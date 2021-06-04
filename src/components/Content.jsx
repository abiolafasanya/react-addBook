import BookItem from './BookItem'

function Content({book, deleteBook}) {
    
    return (
        <div className={contentStyle}>
            <div className={Card}>
            {
                book < 1 ?
                'No books to show'
                :
                book.map((book, index) => (
                <>
                        <BookItem
                            key={book.id || index} 
                            book={book} 
                            deleteBook={deleteBook}
                        />
                </>
                ))

            }
            </div>

        </div>
    )
}
const Card = 'grid lg:grid-cols-3 sm:grid-col-1 gap-10 mx-5 px-2'
const contentStyle = 'container mx-auto py-10 px-10 bg-indigo-200'

export default Content
