import React from "react";
import Axios from "axios";
import { List, ListItem } from "../components/List"

class Savedbooks extends React.Component {
    state = {
        title: "",
        books: []
    }

    componentDidMount (){
        Axios.get("/api/allbooks")
            .then((response) => {
                console.log(response)
            this.setState({books:response.data})
            })
    }


    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    {this.state.books.length ? (
                        <List>
                            {this.state.books.map(book => (
                                <ListItem key={book._id}>
                                    <strong>
                                        Title: {book.title}
                                    </strong>
                                    <h6>Author :by {book.author}</h6>
                                    <p>Description : {book.description}</p>
                                    {/* <button className="btn btn-success" onClick={() => this.saveBook({ title: book.title, author: book.author, description: book.description })}>Save book</button> */}
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

    export default Savedbooks;