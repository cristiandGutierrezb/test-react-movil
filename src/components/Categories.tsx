import Card from './Card'

import { categories } from '../data/categories'

import '../styles/Categories.css'

export default function Categories() {
  return (
    <aside className='aside'>
      <h2>Categories</h2>
      {categories.map(category => (
        <Card 
          key={category.id} 
          data={category}
        />
      ))}
    </aside>
  )
}
