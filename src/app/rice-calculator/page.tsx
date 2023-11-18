import Header from '@/components/Header'
import RiceCalculator from '@/components/RiceCalculator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Станислав Козин. Веб-разработчик и дизайнер',
  description: 'Сайт-портфолио фронтенд-разработчика',
}

export default function RiceRecipe() {
  return (
    <>
      <Header title='Как варить рис' subtitle='Интерактивный рецепт' />
      <RiceCalculator />
    </>
  )
}
