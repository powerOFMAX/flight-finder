import Logo from '../Logo'

const Layout = ({ content, subtitle }) => (
  <>
    <Logo subtitle={subtitle} />
    {content}
  </>
)

export default Layout
