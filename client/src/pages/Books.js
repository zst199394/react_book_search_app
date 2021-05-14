import React from "react";
import Axios  from "axios";

class Books extends React.Component {
    state ={
        title :""
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
              title: response.data.items[i].volumeInf.title
              author: 
              description:
             })
           }
       }) 
    }
    render(){
    return(
       <div className="jumbotron">
           <h1>Books</h1>
           <input
                onChange={this.handleInputChange}
                name="title"
                value={this.state.title}
                placeholder="Enter book name (required)"
              />
             <button
                disabled={!this.state.title}
                onClick={this.handleFormSubmit}
              >
                Search
              </button>
       </div>


    );
    }
}
export default Books;