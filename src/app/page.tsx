import Header from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Станислав Козин. Веб-разработчик и дизайнер',
  description: 'Сайт-портфолио фронтенд-разработчика',
}

export default function Home() {
  return (
    <>
      <Header title='Веб-разработчик и&nbsp;дизайнер' />
      <span>Контент</span>
    </>
  )
}
