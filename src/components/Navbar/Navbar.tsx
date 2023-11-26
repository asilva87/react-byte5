import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar(): JSX.Element {
    return (
        <div className="navbar">
            <div>react-byte5</div>
            <div className="navbar__btn">
                <Link to="/">Home</Link>
            </div>
            <div className="navbar__btn">
                <Link to="/book-search">Book Search</Link>
            </div>
        </div>
    )
}
