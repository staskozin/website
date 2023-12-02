import { useEffect, useState } from 'react'
import Image from 'next/image'
import ResponsiveImage from '@/components/UI/ResponsiveImage'

import s from './Recipe.module.css'


export default function Recipe(props: RecipeProps) {
  const [ingredients, setIngredients] = useState<Ingredients>({
    water: 495,
    vinegar: 50,
    sugar: 45,
    salt: 5
  })

  useEffect(() => {
    setIngredients(calculateProportions(props.rice))
  }, [props.rice])

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
        <span>2. Добавить {ingredients.water}&nbsp;грамм воды и&nbsp;довести до&nbsp;кипения.</span>
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

function calculateProportions(rice: number): Ingredients {
  const proportion = Math.abs(rice / 500)
  return {
    water: Math.round(550 * proportion),
    vinegar: Math.round(55 * proportion),
    sugar: Math.round(45 * proportion),
    salt: Math.round(5 * proportion)
  }
}

type Ingredients = {
  water: number
  vinegar: number
  sugar: number
  salt: number
}

type RecipeProps = {
  scale: boolean
  rice: number
  riceType: string
  pot: string
  purpose: string
}
