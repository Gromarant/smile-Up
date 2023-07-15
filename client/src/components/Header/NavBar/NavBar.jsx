import { Navbar } from "@nextui-org/react";
import { Link } from 'react-router-dom';

const NavBar = () => {  

  const linksNavBar = [
    {
      name: "Mis Listas",
      link: "/",
    },
    {
      name: "Buscar",
      link: "/search",
    }
  ];

  const linksCollapse = [
    {
      name: "Mis Listas",
      link: "/",
    },
    {
      name: "Busca",
      link: "/",
    }
  ];

  return (
    <>
      <Navbar className='navBar' isBordered>
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
        </Navbar.Brand>
          <img className='navBar_logo' src='../../../../public/vite.svg' alt='Logo smile-Up' />
        <Navbar.Content hideIn="xs">
          {linksNavBar.map((item) => (
              <Link className='navBar_link' to={item.link} key={item.name} >{item.name}</Link>
          ))}
        </Navbar.Content>
        <Navbar.Collapse>
          {linksCollapse.map((item) => (
              <Link to={item.link} key={item.name}>{item.name}</Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;