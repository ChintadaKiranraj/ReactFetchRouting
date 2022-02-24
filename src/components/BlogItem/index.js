import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {eachBlogItem} = props
  const {author, avatarUrl, imageUrl, title, topic, id} = eachBlogItem

  return (
    <Link to={`/blogs/${id}`} style={{width: '60%'}}>
      <li className="blog-container">
        <div>
          <img src={imageUrl} alt={title} className="image-url" />
        </div>

        <div className="each-blog-titles">
          <div>
            <p>{topic}</p>
            <h1>{title}</h1>
            <div className="avatar-author-container">
              <img src={avatarUrl} alt="avatar" className="avatar-url" />
              <p>{author}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
