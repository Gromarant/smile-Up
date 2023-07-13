import { Navbar } from "@nextui-org/react";
import { Link } from 'react-router-dom';

const NavBar = () => {  

  const collapseItems = [
    {
      name: "Home",
      link: "/",
    }
  ];

  return (
    <nav >
      <Navbar className='navBar' isBordered>
      <img src='../../../../public/vite.svg' alt='Logo smile-Up' />
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Link to="/">Home</Link>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item) => (
            <Navbar.CollapseItem key={item.name}>
              <Link to={item.link}>{item.name}</Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default NavBar;