import Link from 'next/link';

const headStyle = {
  height: '74px',
  borderBottom: '1px solid #eee',
  textAlign: 'right'
}

const Header = () => (
  <div style={headStyle}>
    <div className="links">
      <Link href="/cv">
        <a className="link">CV</a>
      </Link>
      <Link href="/">
        <a className="link">About</a>
      </Link>
    </div>

    <style jsx>{`
      .links {
        max-width: 992px;
        margin: 0 auto
      }

      a.link {
        color: #222;
        height: 100%;
        padding: 25px 24px 0;
        display: inline-block;
        color: #34495e;
        text-decoration: none;
      }

      a.link:hover {
        color: #7400ff;
      }
    `}</style>
  </div>
)

export default Header;
