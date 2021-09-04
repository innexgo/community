import React from 'react';
import Header from './Header';

function Footer() {
  return (
    <footer className="container-fluid my-3"><br />
      <p>&copy; 2021, The Bark Out Board</p>
    </footer>
  )
}


const Layout: React.FunctionComponent<{}> = props =>
  <>
    <Header />
    {props.children}
    <Footer />
  </>

export default Layout;
