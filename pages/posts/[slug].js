import Head from 'next/head'
import { getPost, getSlugs } from '../../lib/posts'

// 告诉next.js，哪些路径是有效的，对于这个动态路由
// /posts 路径下面，有效的路径/posts/first-post /posts/second-post
export async function getStaticPaths() {
  const slugs = await getSlugs()
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    // 以上路径都没有怎么办，false表示不匹配，跳转到404页面
    fallback: false,
  }
}

// getStaticProps 只在服务器上执行，生成返回给浏览器的HTML
// SSG 静态站点生成: 静态HTML + JSON  用于支持客户端导航
export async function getStaticProps({ params: { slug } }) {
  console.log('[PostPage] getStaticProps()', slug)
  const post = await getPost(slug)
  return {
    props: {
      post,
    },
  }
}

function PostPage({ post }) {
  console.log('[PostPage] render', post)
  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
      </Head>
      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  )
}

export default PostPage
