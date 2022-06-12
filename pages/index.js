import Head from 'next/head'
import Link from 'next/link'
import { getPosts } from '../lib/posts'

export async function getStaticProps() {
  const posts = await getPosts()
  return {
    props: {
      posts,
    },
  }
}

function HomePage({ posts }) {
  // 服务器获取我们的js代码并生成HTML页面返回到浏览器
  // 我们的react组件被渲染了两次，一次通过服务器，并在浏览器中一次
  // 服务器上的渲染发生在客户端渲染前
  // 在构建步骤中，html页面已经生成，服务器只是要做的是返回这个静态html文件
  console.log('[HomePage] render', posts)
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" value="This is my blog" />
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default HomePage
