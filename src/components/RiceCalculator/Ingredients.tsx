import { useRef, useContext } from 'react'

import { Context } from '@/components/RiceCalculator'
import s from './Ingredients.module.css'


export default function Ingredients() {
  const { state } = useContext(Context)
  const ingredientsRef = useRef<HTMLUListElement>(null)
  const copiedRef = useRef<HTMLSpanElement>(null)

  return (
    <div className={s.ingredients}>
      <div className={s.head}>
        <span>Ингредиенты</span>
        <button
          type="button"
          onClick={() => {
            navigator.clipboard.writeText(ingredientsRef.current!.innerText)
            copiedRef.current!.classList.remove(s.play)
            copiedRef.current!.offsetWidth
            copiedRef.current!.classList.add(s.play)
          }}
        ></button>
        <div className={s.copied}>
          <span ref={copiedRef}>Скопировано</span>
        </div>
      </div>
      <ul ref={ingredientsRef}>
        <li>Рис — {state.rice} г</li>
        <li>Вода — {state.ingredients.water} г</li>
        {
          state.purpose === 'sushi' ?
            <>
              <li>Для заправки:</li>
              <li>Уксус 3% — {state.ingredients.vinegar} мл</li>
              <li>Сахар — {state.ingredients.sugar} г</li>
              <li>Соль — {state.ingredients.salt} г</li>
            </> : null
        }
      </ul>
    </div>
  )
}
