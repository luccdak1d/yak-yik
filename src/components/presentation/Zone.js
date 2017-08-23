import React from 'react'
import styles from './styles'

class Zone extends React.Component {
  render() {
    const style = styles.zone
    const { name, zipCode, numComments } = this.props.zone
    return (
      <div style={style.container}>
        <h2 style={style.headerTwo}>
          <a style={style.link} href="#">{name}</a>
        </h2>
        <span className="detail">{zipCode}</span><br />
        <span className="detail">{numComments}</span>
      </div>
    )
  }
}

export default Zone
