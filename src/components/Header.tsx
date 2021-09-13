import { Link } from 'react-router-dom';
import { ThreeDotsVertical } from 'react-bootstrap-icons'

const Header = () =>
  <header className="pb-5">
    <nav className={"navbar navbar-expand-lg py-3 fixed-top navbar-light bg-light shadow-sm"}>
      <div className="container d-flex">
        <Link className="navbar-brand" to="/"><strong>The Bark Out Board</strong></Link>
        {/*Collapsible Button*/}
        <button type="button" className="navbar-toggler"
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
        >
          <ThreeDotsVertical className="text-body" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/*Left Aligned*/}
          <div className="navbar-nav">
            
            
            
            
            <Link to="/classroom" className="nav-item nav-link"><strong>Classroom</strong></Link>
            <Link to="/community" className="nav-item nav-link"><strong>Community</strong></Link>
            <Link to="/campus" className="nav-item nav-link"><strong>Campus</strong></Link>
            <Link to="/about" className="nav-item nav-link"><strong>About</strong></Link>
          </div>
          {/*Right Aligned*/}
          <div className="navbar-nav ms-auto">
            <Link to="/submit" className="nav-item nav-link"><strong>Submit Your Story</strong></Link>
          </div>
        </div>
      </div>
    </nav>
  </header>

export default Header;
