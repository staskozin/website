import { useContext } from 'react'
import Image from 'next/image'

import { Context } from '@/components/RiceCalculator'
import ResponsiveImage from '@/components/UI/ResponsiveImage'

import s from './Recipe.module.css'


export default function Recipe() {
  const ctx = useContext(Context)

  return (
    <div className={s.recipe}>
      <div>
        <ResponsiveImage image={
          <Image src="/img/rice-calculator/pot-sushi-1.jpg" alt="" fill sizes="1024px" />
        } />
        <span>1. Промыть рис, пока вода не&nbsp;станет прозрачной.</span>
      </div>

      <div>
        <ResponsiveImage image={
          <Image src="/img/rice-calculator/pot-sushi-2.jpg" alt="" fill sizes="1024px" />
        } />
        <span>2. Добавить {ctx.state.ingredients.water}&nbsp;грамм воды и&nbsp;довести до&nbsp;кипения.</span>
      </div>

      <div>
        <ResponsiveImage image={
          <Image src="/img/rice-calculator/pot-sushi-3.jpg" alt="" fill sizes="1024px" />
        } />
        <span>3. Накрыть крышкой, включить минимальный огонь и&nbsp;подождать 15&nbsp;минут.</span>
      </div>

      <div>
        <ResponsiveImage image={
          <Image src="/img/rice-calculator/pot-sushi-4.jpg" alt="" fill sizes="1024px" />
        } />
        <span>4. Выключить огонь и&nbsp;подождать ещё&nbsp;15&nbsp;минут.</span>
      </div>

      <div>
        <ResponsiveImage image={
          <Image src="/img/rice-calculator/pot-sushi-5.jpg" alt="" fill sizes="1024px" />
        } />
        <span>5. Добавить заправку и&nbsp;перемешать.</span>
      </div>
    </div>
  )
}
