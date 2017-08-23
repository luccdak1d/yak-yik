import React from 'react'
import Comment from '../presentation/Comment'
import styles from './styles'

class Comments extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [],
      comment: {
        username: '',
        body: '',
        timestamp: ''
      }
    }
  }

  submitComment(e) {
    console.log('submitComment', JSON.stringify(this.state.comment));
    let newList = Object.assign([], this.state.list)
    newList.push(this.state.comment)
    this.setState({
      list: newList
    })
  }

  updateInput(e) {
    let newComment = Object.assign({}, this.state.comment)
    newComment[e.target.name] = e.target.value
    this.setState({
      comment: newComment
    })
  }

  render() {
    const style = styles.comments
    const commentList = this.state.list.map((comment, i) => {
      return (
        <li key={i}><Comment comment={comment} /></li>
      )
    })
    return (
      <div>
        <h2>Comment: Zone1</h2>
        <div style={style.commentBox}>
          <ul style={style.unorderedList}>
            {commentList}
          </ul>

          <input name="username" onChange={this.updateInput.bind(this)} className="form-control" type="text" placeholder="Username"/><br />
          <input name="body" onChange={this.updateInput.bind(this)} className="form-control" type="text" placeholder="Comment"/><br />
          <input name="timestamp" onChange={this.updateInput.bind(this)} className="form-control" type="text" placeholder="Timestamp"/><br />
          <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit COMMENT</button>
        </div>
      </div>
    )
  }
}

export default Comments
