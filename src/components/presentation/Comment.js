import React from 'react'
import styles from './styles'

class Comment extends React.Component {
  render() {
    const style = styles.comments.comment
    const { username, body, timestamp } = this.props.comment
    return (
      <div style={style.container}>
        <p style={style.body}>
          {body}
        </p>
        <span style={style.userTime}>{username}</span>
        <span style={style.separator}>|</span>
        <span style={style.userTime}>{timestamp}</span>
        <hr />
      </div>
    )
  }
}

export default Comment
