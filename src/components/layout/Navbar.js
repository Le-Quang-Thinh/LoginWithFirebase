import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

class Navbar extends Component {
  render() { 
    const {auth} = this.props;
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
        <Link to='/' className="brand-logo">
            Kyomi
        </Link> 
        {auth.uid ?<SignedInLinks avatar={auth.photoURL} />: <SignedOutLinks />}
        </div>
      </nav>
    )
}
}
export default Navbar
