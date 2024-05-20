import { NavLink } from 'react-router-dom'
export const Header = () => {
    return(
        <header id='header'>
        <NavLink className='header__link' to="/">Weather</NavLink>
        {/* <NavLink className='header__link' to="/product">Product</NavLink> */}
      </header>
    )
}