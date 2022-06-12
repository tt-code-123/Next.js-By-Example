import Link from 'next/dist/client/link'
import ThemeSwitch from './ThemeSwitch'

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          {/* 重新请求服务器，加载页面 */}
          {/* <a href="/about">About</a> */}
          {/* 客户端跳转 */}
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <ThemeSwitch />
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          display: inline;
        }
        li:not(:first-child) {
          margin-left: 0.75rem;
        }
      `}</style>
    </nav>
  )
}

export default NavBar
