'use client'

import { Dispatch, createContext, useReducer } from 'react'

import Form from '@/components/RiceCalculator/Form'
import Recipe from '@/components/RiceCalculator/Recipe'
import { reducer, CalcReducer, CalcAction, CalcState } from '@/components/RiceCalculator/reducer'

import s from './RiceCalculator.module.css'


type CalcContext = {
  dispatch: Dispatch<CalcAction>
  state: CalcState
}
export const Context = createContext<CalcContext>({} as CalcContext)

export default function RiceCalculator() {
  const [state, dispatch] = useReducer<CalcReducer>(reducer, {
    scale: true,
    rice: 450,
    riceType: 'round',
    pot: 'pot',
    purpose: 'sushi',
    ingredients: {
      water: 495,
      vinegar: 50,
      salt: 5,
      sugar: 41
    },
    disabledButtons: {
      riceType: {
        round: false,
        long: true,
        parboiled: true
      },
      pot: {
        pot: false,
        multi: false,
        pan: true
      },
      purpose: {
        sushi: false,
        side: false,
        porridge: false
      }
    }
  })

  return (
    <Context.Provider value={{ dispatch, state }}>
      <div className={s.container}>
        <Recipe />
        <Form />
      </div>
    </Context.Provider>
  )
}
