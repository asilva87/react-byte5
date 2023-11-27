import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar(): JSX.Element {
    return (
        <div className="navbar">
            <div>react-byte5</div>
            <div className="navbar__btn">
                <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#ea5172' : '' })}>
                    Home
                </NavLink>
            </div>
            <div className="navbar__btn">
                <NavLink to="/book-search" style={({ isActive }) => ({ color: isActive ? '#ea5172' : '' })}>
                    Book Search
                </NavLink>
            </div>
        </div>
    )
}
