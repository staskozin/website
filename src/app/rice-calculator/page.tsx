import Header from '@/components/Header'
import RiceCalculator from '@/components/RiceCalculator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Как варить рис. Интерактивный рецепт',
  description: 'Интерактивный рецепт риса: для суши, гарнир и каша',
}

export default function RiceRecipe() {
  return (
    <>
      <Header title='Как варить рис' subtitle='Интерактивный рецепт' />
      <RiceCalculator />
    </>
  )
}
