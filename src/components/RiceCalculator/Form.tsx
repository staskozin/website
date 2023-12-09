import { useContext } from 'react'

import { Context, potVariant, purposeVariant, riceTypeVariant } from '@/components/RiceCalculator'
import Checkbox from '@/components/UI/Checkbox'
import NumberInput from '@/components/UI/NumberInput'
import Switcher from '@/components/UI/Switcher'

import s from './Form.module.css'


export default function Recipe() {
  const { state, dispatch } = useContext(Context)

  const changePurpose = (payload: purposeVariant) => {
    dispatch({ type: 'changePurpose', payload })
  }

  const changeRiceType = (payload: riceTypeVariant) => {
    dispatch({ type: 'changeRiceType', payload })
  }

  const changePot = (payload: potVariant) => {
    dispatch({ type: 'changePot', payload })
  }

  return (
    <form className={s.form}>
      <div className={s.wrap}>
        <Switcher<purposeVariant>
          text='Для чего'
          selected={state.purpose}
          options={{
            'sushi': {
              name: 'Суши',
              disabled: state.disabledButtons.purpose.sushi
            },
            'side': {
              name: 'Гарнир',
              disabled: state.disabledButtons.purpose.side
            },
            'porridge': {
              name: 'Каша',
              disabled: state.disabledButtons.purpose.porridge
            }
          }}
          setFunction={changePurpose}
        />

        <div className={s.riceInput}>
          <NumberInput
            value={state.rice}
            setFunction={dispatch}
            textBefore='Кол-во риса'
            textAfter='грамм'
          />
          <Checkbox
            text='У меня есть весы'
            checked={state.scale}
            setFunction={dispatch}
          />
        </div>

        <Switcher<riceTypeVariant>
          text='Вид риса'
          selected={state.riceType}
          options={{
            'round': {
              name: 'Круглый',
              disabled: state.disabledButtons.riceType.round
            },
            'long': {
              name: 'Длинный',
              disabled: state.disabledButtons.riceType.long
            },
            'parboiled': {
              name: 'Пропаренный',
              disabled: state.disabledButtons.riceType.parboiled
            }
          }}
          setFunction={changeRiceType}
        />

        <Switcher<potVariant>
          text='Посуда'
          selected={state.pot}
          options={{
            'pot': {
              name: 'Кастрюля',
              disabled: state.disabledButtons.pot.pot
            },
            'multi': {
              name: 'Мультиварка',
              disabled: state.disabledButtons.pot.multi
            },
            'pan': {
              name: 'Сковорода',
              disabled: state.disabledButtons.pot.pan
            }
          }}
          setFunction={changePot}
        />
      </div>
    </form>
  )
}
