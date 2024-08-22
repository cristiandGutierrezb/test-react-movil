
import personIcon from '../../public/img/personIcon.svg'
import '../styles/Header.css'

export default function Header() {
  return (
    <header className='header'>
      <nav>
        <section className='header__section'>
          <img 
            className='header__img' 
            src={personIcon} 
            alt="Icono de perfil"
          />
          <ul>
            <li>Opcion 1</li>
            <li>Opcion 2</li>
          </ul>
        </section>
        <section className='header__section'>
          <ul>
            <li>Opcion 3</li>
            <li>Opcion 4</li>
          </ul>
        </section>
      </nav>
    </header>
  )
}
