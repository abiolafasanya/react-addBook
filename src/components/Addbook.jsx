import React, { Component } from 'react'

export class Addbook extends Component {
    state = {
        title: '',
        author: '',
        description: '',
        date: '',
        id: Date.now().toLocaleString()
    }

    add = (e) => {
        e.preventDefault()
        if(this.state.title === '' || this.state.author === '' || this.state.description === '') {
            alert('Please fill all the field')
            return
        }
        this.props.newBook(this.state)

        // console.log(this.state)
        this.setState({
            title: '',
            author: '',
            description: '',
            date: '',
        })

        this.props.history.push("/book")
    }

    render() {
        return (
            <div className="container lg:w-3/4 lg:mt-10 lg:mb-10 mx-auto py-3 px-10 bg-indigo-300">
                <form onSubmit={this.add}>
                    <h3 className="text-3xl text-center text-indigo-900">Add New Book</h3>
                    <div className={this.group}>
                        <label htmlFor="">Title</label>
                        <input type="text" name="title" value={this.state.title} className={this.inputStyle}
                            onChange={(e) => this.setState({title: e.target.value })}
                        />
                    </div>
                    <div className={this.group}>
                        <label htmlFor="">Author</label>
                        <input type="text" name="author" value={this.state.author} className={this.inputStyle}
                             onChange={(e) => this.setState({author: e.target.value })}
                        />
                    </div>
                    <div className={this.group}>
                        <label htmlFor="">Date</label>
                        <input type="date" name="date" value={this.state.date} className={this.inputStyle}
                             onChange={(e) => this.setState({date: e.target.value })}
                        />
                    </div>
                    <div className={this.group}>
                        <label htmlFor="">Description</label>
                        <textarea name="description" value={this.state.description} cols="10" rows="5" className={this.inputStyle}
                             onChange={(e) => this.setState({description: e.target.value })}
                        ></textarea>
                    </div>
                    <button className={this.btn}>Add Book</button>
                </form>
            </div>
        )
    }

    inputStyle = 'bg-indigo-50 p-2 rounded'
    group = 'flex flex-col text-indigo-900'
    btn = 'bg-indigo-500 text-indigo-200 rounded p-2 mt-4 hover:bg-indigo-600'
}

export default Addbook
