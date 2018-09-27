import Link from 'next/link';

const headStyle = {
  height: '74px',
  borderBottom: '1px solid #eee',
  textAlign: 'right'
}

const Header = () => (
  <div style={headStyle}>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>

    <style jsx>{`
      a {
        height: 100%;
        padding: 25px 24px 0;
        display: inline-block;
        color: #34495e;
        text-decoration: none;
      }

      a:hover {
        color: #7400ff;
      }
    `}</style>
  </div>
)

export default Header;
