import {Link} from 'react-router-dom'

function Book(props) {
    console.log(props)
    const {title, description, author, date} = props.location.state.book
    const imgUrl = `https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg`
    return (
        <div>
             <div className={singleCard}>
                 <img src={imgUrl} alt="author image" className='bg-blend-color'/>
            <h5 className="text-2xl text-indigo-900 capitalize">{title}</h5>
            <p className="p-1 capitalize text-gray-800">{description}</p>
            <span className="text-indigo-500">written by {author} fasanya on {date}</span>
            
            <div className="border-t-2 py-3 border-indigo-300">
                <Link to="/book">
                    <button className={BtnStyle}>Back</button>
                </Link>
            </div>
             </div>
                
        </div>
    )
}
const singleCard = "container bg-white box-border shadow-md my-5 lg:w-2/5 rounded md:1/2 px-10 py-10 mx-auto bordered"
const BtnStyle = "bg-indigo-700 outline-0 text-indigo-200 hover:text-indigo-100 px-5 py-3 shadow-sm rounded hover:shadow-lg tracking-wider hover:bg-indigo-500 "
export default Book
