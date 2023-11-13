import Header from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Станислав Козин. Веб-разработчик и дизайнер',
  description: 'Сайт-портфолио фронтенд-разработчика',
}

export default function Home() {
  return (
    <>
      <Header title='Как варить рис' subtitle='Интерактивный рецепт' />
      <span>Конь тент</span>
    </>
  )
}
