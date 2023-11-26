import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import ResponsiveImage from '@/components/UI/ResponsiveImage'

import s from './Recipe.module.css'


export default function Recipe(props: RecipeProps) {
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
        <span>2. Добавить 495&nbsp;грамм воды и&nbsp;довести до&nbsp;кипения.</span>
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

      <div className={s.dressing}>
        <div className={s.paper}>
          <span>Заправка</span>
          <div className={s.ingredientWrap}>
            <div className={s.ingredient}>
              <span>Уксус 3%</span>
              <span>50 мл</span>
            </div>
            <div className={s.ingredient}>
              <span>Соль</span>
              <span>5 г</span>
            </div>
            <div className={s.ingredient}>
              <span>Сахар</span>
              <span>40 г</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

type RecipeProps = {
  scale: boolean
  setScale: Dispatch<SetStateAction<boolean>>
  rice: number
  setRice: Dispatch<SetStateAction<number>>
  riceType: string
  setRiceType: Dispatch<SetStateAction<string>>
  pot: string
  setPot: Dispatch<SetStateAction<string>>
  purpose: string
  setPurpose: Dispatch<SetStateAction<string>>
}
