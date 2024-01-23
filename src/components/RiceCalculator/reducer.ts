export const initialState: CalcState = {
  scale: true,
  rice: 450,
  ratio: 1.15,
  riceType: 'round',
  pot: 'pot',
  purpose: 'sushi',
  ingredients: {
    water: 518,
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
      multi: true,
      pan: true
    },
    purpose: {
      sushi: false,
      side: false,
      porridge: true
    }
  }
}

export const reducer: CalcReducer = (state: CalcState, action: CalcAction): CalcState => {
  let newState: CalcState = { ...state }

  if (action.type === 'changeScale') {
    newState.scale = action.payload
  }

  else if (action.type === 'changeRiceType') {
    newState.riceType = action.payload
    switch (action.payload) {
      case 'round':
        newState.ratio = 1.15
        break
      case 'long':
        newState.ratio = 1.25
        break
      case 'parboiled':
        newState.ratio = 1.3
        break
    }
    newState.ingredients = {
      ...state.ingredients,
      water: Math.round(state.rice * newState.ratio)
    }
  }

  else if (action.type === 'changePot') {
    newState.pot = action.payload
  }

  else if (action.type === 'changeRice') {
    newState.rice = action.payload
    const proportion = Math.abs(action.payload / 500)
    newState.ingredients = {
      water: Math.round(newState.rice * state.ratio),
      vinegar: Math.round(55 * proportion),
      sugar: Math.round(45 * proportion),
      salt: Math.round(5 * proportion)
    }
  }

  else if (action.type === 'changePurpose') {
    newState.purpose = action.payload

    if (action.payload === 'side') {
      newState.disabledButtons.riceType = {
        round: false,
        long: false,
        parboiled: false
      }
      newState.disabledButtons.pot = {
        pot: false,
        multi: true,
        pan: true
      }
    }

    else if (action.payload === 'porridge') {
      newState.riceType = 'round'
      newState.pot = state.pot !== 'pan' ? state.pot : 'pot'
      newState.disabledButtons.riceType = {
        round: false,
        long: true,
        parboiled: true
      }
      newState.disabledButtons.pot = {
        pot: false,
        multi: true,
        pan: true
      }
    }

    else {
      newState.riceType = 'round'
      newState.pot = state.pot !== 'pan' ? state.pot : 'pot'
      newState.disabledButtons.riceType = {
        round: false,
        long: true,
        parboiled: true
      }
      newState.disabledButtons.pot = {
        pot: false,
        multi: true,
        pan: true
      }
      newState.ratio = 1.15
      newState.ingredients = {
        ...state.ingredients,
        water: Math.round(state.rice * newState.ratio)
      }
    }
  }

  else {
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
  ratio: number
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
