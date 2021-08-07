
import {
  Navbar,
} from 'reactstrap';

function AppNav(props) {
  
    const { navItems, handleNavClick } = props;

    return (
      <Navbar color="light" light expand="md">
        <nav>
          {navItems.map((navItem, i) =>
            <a href="#" key={i} onClick={ () => handleNavClick(navItem.value)} >
              {navItem.label} |
            </a>
          )}
        </nav>
      </Navbar>
    )
  
}

export default AppNav;


