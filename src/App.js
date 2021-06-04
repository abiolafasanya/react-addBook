import react, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Nav.jsx';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Content from './components/Content';
import Addbook from './components/Addbook';
import SingleBook from './components/Book';
import API from '../src/components/api/API'

function App() {

  const [books, setBook] = useState([])
  const newBook = (book) => {
    let id = Date.now()
    setBook([...books, book])
    // alert('new book added')
    console.log('new book added', book)
  }

  useEffect(() => {
    const loadStore = JSON.parse(localStorage.getItem('books'))
    if(loadStore) setBook(loadStore)
  }, [])


  useEffect(() => {
    const id = Date.now().toLocaleString()
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  const deleteHandler = async (id) => {
   const res =  await books.filter((book) => book.id !== id)
    setBook(res)
    console.log('deleted:', id)
  }
   
  return (
    <div className="bg-gray-100">
      <Router>
          <Navbar />

        <Switch>
        

          <Route 
          exact
          path="/"
          component={Hero}
          />
          <Route exact path="/book" render={(props) => (
            <Content {...props} book={books} deleteBook={deleteHandler}/>
          )}/>

          <Route exact path="/add-book" render={(props) => (
            <Addbook {...props} newBook={newBook}/>
          )}/>

          <Route exact path={`/book/:id`} component={SingleBook}/>

        </Switch>

          <Footer />
      </Router>
    </div>
  );
}

export default App;
