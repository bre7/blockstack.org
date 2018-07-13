import React from 'react'
const { fetchBlogPosts } = require('@common/lib')
import { BlogList } from '@components/blog/list'
import { BlogPost } from '@components/blog/post'
import Link from 'next/link'
const meta = {
  path: '/blog',
  title: 'Blockstack Blog',

  description:
    'Blockstack is a new internet for decentralized apps that you access through the Blockstack Browser. With Blockstack, there is a new world of apps that let you own your data and maintain your privacy, security and freedom.'
}

const renderSingle = (slug, posts) => {
  const post = posts.find((blogPost) => blogPost.urlSlug === slug)

  return (
    <>
      <div>
        <Link href="/blog" prefetch>
          <a>Blog</a>
        </Link>
        {' / '}
        {post.title}
      </div>
      <br />
      <br />
      <img src={post.image} alt={post.title} />
      <div dangerouslySetInnerHTML={{ __html: post.markup }} />
    </>
  )
}
class CareersPage extends React.PureComponent {
  static async getInitialProps(ctx) {
    const blogData = await fetchBlogPosts()

    let propsMeta = meta
    let post = null

    const {
      query: { slug }
    } = ctx

    return {
      meta: propsMeta,
      post,
      ...blogData,
      slug
    }
  }

  render() {
    return (
      <>
        <BlogList posts={this.props.posts} />
      </>
    )
  }
}

export default CareersPage
