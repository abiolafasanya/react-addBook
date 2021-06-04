import { Link } from 'react-router-dom'
import { FaTrash, FaEdit } from 'react-icons/fa'

function BookItem({ book, deleteBook }) {
    const { title, author, description, date, id } = book

    return (
        <div key={id} className="bg-white px-5 py-3 shadow-md rounded">

            <Link to={{pathname: `book/${id}`, state:{book: book}}}>
                <h5 className="text-2xl text-indigo-900 capitalize">{title}</h5>
                <p className="p-1 capitalize text-gray-800">{description}</p>
            </Link>
            <div className="flex justify-between border-t py-1">
                <span className="text-indigo-500">written by {author} fasanya on {date}</span>
                <span className="flex">
                    <FaTrash
                        onClick={() => deleteBook(id)}
                        className="text-red-700 m-1 hover:text-red-500"
                    />
                        <Link to='/edit'>
                            <FaEdit className="text-indigo-700 m-1 hover:text-indigo-500" />    
                        </Link>
                    
                </span>
            </div>
        </div>
    )
}

export default BookItem
