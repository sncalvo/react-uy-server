import NavLink from '../atoms/NavLink';

const Navigation = () => {
  return (
    <>
      <nav>
        <ul className="hidden flex-row items-center justify-center gap-5 lg:flex">
          <li><NavLink href="/#">Inicio</NavLink></li>
          <li><NavLink href="/communities">Comunidades</NavLink></li>
          <li><NavLink href="/events">Eventos</NavLink></li>
          <li><NavLink href="/jobs">Trabajos</NavLink></li>
          <li><NavLink href="/contacts">Contacto</NavLink></li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
