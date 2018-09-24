import React, { Component } from 'react';
import axios from 'axios'

class UrlForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: ''

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({url: event.target.value});
  }

  handleSubmit(event) {
   event.preventDefault();

   axios.post('http://www.localhost:3000/links',
            {

                  link: {
                      long: this.state.url
                  }

            }
        );
      }



    render() {


      return (
        <div className = "url-form">
        <form onSubmit={this.handleSubmit}>
         <label>
           Url to be Shortened:
           <input type="text" value={this.state.value} onChange={this.handleChange} />
         </label>
         <input type="submit" value="Submit" />
       </form>
        </div>




      );

  }
}
export default UrlForm
