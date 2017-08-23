import React from 'react'
import Zone from '../presentation/Zone'

class Zones extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [],
      zone: {
        name: '',
        zipCode: '',
        numComments: 0
      }
    }
  }

  componentDidMount() {
    fetch('api/zone').then(response => {
      var contentType = response.headers.get("content-type")
      if(contentType && contentType.includes("application/json")) {
        return response.json()
      }
      throw new TypeError("Oops, we haven't got JSON!");
      })
    .then(json => {
      this.setState({
        list: json.results
      })
    })
    .catch(error => console.log(error))
  }

  updateInput(e) {
    let newZone = Object.assign({}, this.state.zone)
    newZone[e.target.name] = e.target.value
    this.setState({
      zone: newZone
    })
  }

  submitZone(e) {
    let newList = Object.assign([], this.state.list)
    newList.push(this.state.zone)
    this.setState({
      list: newList
    })
  }

  render() {
    const listItems = this.state.list.map((zone, i) => {
      return (
        <li key={i}><Zone zone={zone} /></li>
      )
    })
    return (
      <div>
        <ol>
          {listItems}
        </ol>

          <input name="name" onChange={this.updateInput.bind(this)} className="form-control" type="text" placeholder="Name"/><br />
          <input name="zipCode" onChange={this.updateInput.bind(this)} className="form-control" type="text" placeholder="Zip Code"/><br />
          <button onClick={this.submitZone.bind(this)} className="btn btn-danger">Add Zone</button>
      </div>
    )
  }
}

export default Zones
