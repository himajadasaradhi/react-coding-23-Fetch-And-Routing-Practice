// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogsData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogsData
  return (
    <Link to={`/blogs/${id}`} className="link-css">
      <div className="flex-row">
        <img src={imageUrl} alt={title} className="image" />
        <div>
          <p className="topic">{topic}</p>
          <h2 className="title">{title}</h2>
          <div className="author-flex-row">
            <img src={avatarUrl} alt="avatarUrl" className="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
