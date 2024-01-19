'use client'

import { Dispatch, createContext, useReducer } from 'react'

import Form from '@/components/RiceCalculator/Form'
import Recipe from '@/components/RiceCalculator/Recipe'
import { reducer, CalcReducer, CalcAction, CalcState, initialState } from '@/components/RiceCalculator/reducer'

import s from './RiceCalculator.module.css'


type CalcContext = {
  dispatch: Dispatch<CalcAction>
  state: CalcState
}
export const Context = createContext<CalcContext>({} as CalcContext)

export default function RiceCalculator() {
  const [state, dispatch] = useReducer<CalcReducer>(reducer, initialState)

  return (
    <Context.Provider value={{ dispatch, state }}>
      <div className={s.container}>
        <Form />
        <Recipe />
      </div>
    </Context.Provider>
  )
}
