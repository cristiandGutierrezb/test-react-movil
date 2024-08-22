import { Data } from '../types'

import '../styles/Card.css'

type CardItemProps = {
  data: Data
}

export default function Card({ data }: CardItemProps) {
  return (
    <article className='principal'>
      <p>
        {data.name}
      </p>
    </article>
  )
}
