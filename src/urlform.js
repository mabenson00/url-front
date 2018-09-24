import React, { Component } from 'react'
import axios from 'axios'

class UrlForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      url: '',
      new_url: '',
      submtited: false

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  handleChange (event) {
    this.setState({url: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    var self = this
    axios.post('http://www.localhost:3000/links',
      {
        link: {
          long: this.state.url
        }
      }
        ).then(function (response) {
          self.setState({submitted: true, new_url: response.data.short})
        })
  }

  render () {
    return (
      <div className='url-form'>
        {!this.state.submitted &&
          <form onSubmit={this.handleSubmit}>
            <label>
             Url to be Shortened:
             <input type='text' value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type='submit' value='Submit' />
          </form>
         }
        {this.state.submitted &&
          <div>
           New URL: http://www.localhost:3000/{this.state.new_url}
          </div>
         }
      </div>

    )
  }
}
export default UrlForm
