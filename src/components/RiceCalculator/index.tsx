'use client'

import { Dispatch, createContext, useReducer } from 'react'

import Form from '@/components/RiceCalculator/Form'
import Recipe from '@/components/RiceCalculator/Recipe'

import s from './RiceCalculator.module.css'

export const Context = createContext<CalcContext>({} as CalcContext)

const reducer: CalcReducer = (state: CalcState, action: CalcAction): CalcState => {
  let newState: CalcState
  switch (action.type) {
    case 'changeScale':
      newState = {
        ...state,
        scale: action.payload
      }
      break
    case 'changeRice':
      const proportion = Math.abs(action.payload / 500)
      newState = {
        ...state,
        rice: action.payload,
        ingredients: {
          // Здесь надо вызывать функцию, которая зависит от состояния рецепта
          // Для суши одна, для гарнира другая и т.д.
          // И пересчитывать ингредиенты в каждом экшне
          water: Math.round(550 * proportion),
          vinegar: Math.round(55 * proportion),
          sugar: Math.round(45 * proportion),
          salt: Math.round(5 * proportion)
        }
      }
      break
    case 'changePurpose':
      if (action.payload === 'side') {
        newState = {
          ...state,
          purpose: action.payload,
          disabledButtons: {
            ...state.disabledButtons,
            riceType: {
              round: false,
              long: false,
              parboiled: false
            },
            pot: {
              pot: false,
              multi: false,
              pan: false
            }
          }
        }
      } else if (action.payload === 'porridge') {
        newState = {
          ...state,
          purpose: action.payload,
          riceType: 'round',
          pot: state.pot !== 'pan' ? state.pot : 'pot',
          disabledButtons: {
            ...state.disabledButtons,
            riceType: {
              round: false,
              long: true,
              parboiled: true
            },
            pot: {
              pot: false,
              multi: false,
              pan: true
            }
          }
        }
      } else {
        newState = {
          ...state,
          purpose: action.payload,
          riceType: 'round',
          pot: state.pot !== 'pan' ? state.pot : 'pot',
          disabledButtons: {
            ...state.disabledButtons,
            riceType: {
              round: false,
              long: true,
              parboiled: true
            },
            pot: {
              pot: false,
              multi: false,
              pan: true
            }
          }
        }
      }
      break
    case 'changeRiceType':
      newState = {
        ...state,
        riceType: action.payload
      }
      break
    case 'changePot':
      newState = {
        ...state,
        pot: action.payload
      }
      break
    default:
      throw new Error('Неправильный action')
  }
  return newState
}

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

type CalcContext = {
  dispatch: Dispatch<CalcAction>
  state: CalcState
}

type CalcReducer = (state: CalcState, action: CalcAction) => CalcState

export type purposeVariant = 'sushi' | 'side' | 'porridge'
export type riceTypeVariant = 'round' | 'long' | 'parboiled'
export type potVariant = 'pot' | 'multi' | 'pan'

type CalcState = {
  scale: boolean
  rice: number
  purpose: purposeVariant,
  riceType: riceTypeVariant
  pot: potVariant
  ingredients: Ingredients,
  disabledButtons: DisabledButtons
}

type Ingredients = {
  water: number
  vinegar: number
  sugar: number
  salt: number
}

type DisabledButtons = {
  purpose: {
    sushi: boolean
    side: boolean
    porridge: boolean
  }
  riceType: {
    round: boolean
    long: boolean
    parboiled: boolean
  }
  pot: {
    pot: boolean
    multi: boolean
    pan: boolean
  }
}

export type CalcAction = {
  type: 'changeScale' | 'changeRice' | 'changePurpose' | 'changeRiceType' | 'changePot'
  payload?: any
}
