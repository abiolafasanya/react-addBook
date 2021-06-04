import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div className={navbarStyle}>
            <div className={leftStyle}>
                <Link to="/" className={Btn}>Home</Link>
                <Link to="/book" className={Btn}>Books</Link>
                <Link to="/add-book" className={Btn}>Add Book</Link>
            </div>
            <div className={rightStyle}>
                <a href="#" className={Btn}>Login</a>
                <a href="#" className={Btn}>Register</a>
            </div>
        </div>
    )
}

const navbarStyle = 'bg-indigo-500 flex justify-between align-center py-3 px-5 text-indigo-200 cursor-pointer'
const leftStyle = 'flex justify-between'
const rightStyle = ''
const Btn = 'p-1 mx-1'

export default Nav
