import { NavLink } from 'react-router-dom'
function MenuLateral() {
  return (
    <aside className="menu-lateral">
      <h3>Menu</h3>
      <ul>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/pacientes">Pacientes</NavLink>
        </li>
        <li>
          <NavLink to="/fisioterapeutas">Fisioterapeutas</NavLink>
        </li>
      </ul>
    </aside>
  )
}
export default MenuLateral