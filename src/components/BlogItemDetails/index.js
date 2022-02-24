import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetailItem: {}, isFetching: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/blogs/${id}`

    const response = await fetch(url)
    const blogItem = await response.json()
    const ModigiedData = {
      author: blogItem.author,
      avatarUrl: blogItem.avatar_url,
      content: blogItem.content,
      id: blogItem.id,
      imageUrl: blogItem.image_url,
      title: blogItem.title,
      topic: blogItem.topic,
    }
    this.setState({
      blogDetailItem: ModigiedData,
      isFetching: false,
    })
  }

  render() {
    const {blogDetailItem, isFetching} = this.state

    const {avatarUrl, content, imageUrl, title, author} = blogDetailItem

    return (
      <>
        {isFetching ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <li className="blog-details-container">
            <h1>{title}</h1>
            <div className="avatar-author-container">
              <img src={avatarUrl} alt="avatar" className="avatar-url" />
              <p>{author}</p>
            </div>

            <div>
              <img
                src={imageUrl}
                alt={title}
                className="image-url-blog-details "
              />
            </div>
            <p>{content}</p>
          </li>
        )}
      </>
    )
  }
}

export default BlogItemDetails
