// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemData: {}, isLoading: true}

  componentDidMount = () => {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      author: data.author,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      content: data.content,
    }
    this.setState({blogItemData: updatedData, isLoading: false})
    console.log(data)
  }

  render() {
    const {blogItemData, isLoading} = this.state
    const {title, imageUrl, avatarUrl, content, author} = blogItemData
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="flex">
            <h2>{title}</h2>
            <div className="image-flex">
              <img src={avatarUrl} alt="avatar" className="avatar" />
              <p>{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="image" />
            <p className="content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}
export default BlogItemDetails
