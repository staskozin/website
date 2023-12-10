export const reducer: CalcReducer = (state: CalcState, action: CalcAction): CalcState => {
  let newState: CalcState = { ...state }
  switch (action.type) {
    case 'changeScale':
      newState.scale = action.payload
      break
    case 'changeRice':
      const proportion = Math.abs(action.payload / 500)
      newState.rice = action.payload
      newState.ingredients = {
        // Здесь надо вызывать функцию, которая зависит от состояния рецепта
        // Для суши одна, для гарнира другая и т.д.
        // И пересчитывать ингредиенты в каждом экшне
        water: Math.round(550 * proportion),
        vinegar: Math.round(55 * proportion),
        sugar: Math.round(45 * proportion),
        salt: Math.round(5 * proportion)
      }
      break
    case 'changePurpose':
      newState.purpose = action.payload
      if (action.payload === 'side') {
        newState.disabledButtons.riceType = {
          round: false,
          long: false,
          parboiled: false
        }
        newState.disabledButtons.pot = {
          pot: false,
          multi: false,
          pan: false
        }
      } else if (action.payload === 'porridge') {
        newState.riceType = 'round'
        newState.pot = state.pot !== 'pan' ? state.pot : 'pot'
        newState.disabledButtons.riceType = {
          round: false,
          long: true,
          parboiled: true
        }
        newState.disabledButtons.pot = {
          pot: false,
          multi: false,
          pan: true
        }
      } else {
        newState.riceType = 'round'
        newState.pot = state.pot !== 'pan' ? state.pot : 'pot'
        newState.disabledButtons.riceType = {
          round: false,
          long: true,
          parboiled: true
        }
        newState.disabledButtons.pot = {
          pot: false,
          multi: false,
          pan: true
        }
      }
      break
    case 'changeRiceType':
      newState.riceType = action.payload
      break
    case 'changePot':
      newState.pot = action.payload
      break
    default:
      throw new Error('Неправильный action')
  }
  return newState
}

export type CalcReducer = (state: CalcState, action: CalcAction) => CalcState

export type purposeVariant = 'sushi' | 'side' | 'porridge'
export type riceTypeVariant = 'round' | 'long' | 'parboiled'
export type potVariant = 'pot' | 'multi' | 'pan'

export type CalcState = {
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