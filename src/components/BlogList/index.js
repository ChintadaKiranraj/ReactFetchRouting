import Loader from 'react-loader-spinner'

import {Component} from 'react'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {
    isFetching: true,
    blogsList: [],
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    console.log('getting the blogs data')

    const response = await fetch('https://apis.ccbp.in/blogs')
    const blogsData = await response.json()

    const ModifiedBlogsData = blogsData.map(eachBlogData => ({
      author: eachBlogData.author,
      avatarUrl: eachBlogData.avatar_url,
      id: eachBlogData.id,
      imageUrl: eachBlogData.image_url,
      title: eachBlogData.title,
      topic: eachBlogData.topic,
    }))

    this.setState({
      blogsList: ModifiedBlogsData,
      isFetching: false,
    })
  }

  render() {
    const {blogsList, isFetching} = this.state
    return (
      <>
        {isFetching ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div>
            {blogsList.map(eachBlogItem => (
              <BlogItem eachBlogItem={eachBlogItem} key={eachBlogItem.id} />
            ))}
          </div>
        )}
      </>
    )
  }
}

export default BlogList
