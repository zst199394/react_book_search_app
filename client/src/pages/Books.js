import React from "react";
import Axios  from "axios";
import {List,ListItem} from "../components/List"

class Books extends React.Component {
    state ={
        title :"",
        books : []
    }
    handleInputChange =(event) => {
        const { name, value } = event.target;
        this.setState({
            [name]:value
        })
      };
    handleFormSubmit = () => {
       Axios.get("https://www.googleapis.com/books/v1/volumes?q="+ this.state.title)
       .then(response =>{
           console.log(response);
           let books =[];
           for (let i=0; i<response.data.items.length; i++){
             books.push({
              title: response.data.items[i].volumeInfo.title,
              author: response.data.items[i].volumeInfo.authors,
              description:response.data.items[i].volumeInfo.description
             })
           }
           this.setState({books:books})
           console.log(this.state.books,books)
       }) 
    }
    render(){
    return(
      <div class="container">
       <div className="jumbotron">
           <h1>Books</h1>
           <input
                onChange={this.handleInputChange}
                name="title"
                value={this.state.title}
                placeholder="Enter book name"
              />
             <button
                disabled={!this.state.title}
                onClick={this.handleFormSubmit}
              >
                Search
              </button>
       </div>
       <div className="jumbotron"> 
       <h2>Search Results</h2>
       {this.state.books.length ? (
            <List>
              {this.state.books.map(book => (
                <ListItem key={book._id}>
                    <strong>
                     Title: {book.title} 
                    </strong>
                    <h6>Author :by {book.author}</h6>
                    <p>Description : {book.description}</p>
                    <button className="btn btn-success">Save book</button>
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}

       </div>
      </div>
    );
    }
}
export default Books;