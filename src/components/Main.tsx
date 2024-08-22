import Categories from './Categories'

import '../styles/Main.css'

export default function Main() {
  return (
    <main className='main'>
      <section className='main__categories'>
        <Categories />
      </section>
      <section className='main__products'>
        Products
      </section>
    </main>
  )
}
