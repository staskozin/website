'use client'

import { useState } from 'react'

import Checkbox from '@/components/UI/Checkbox'
import Switcher from '@/components/UI/Switcher'
import NumberInput from '@/components/UI/NumberInput'
import Recipe from './Recipe'

import s from './RiceCalculator.module.css'
import sf from './Form.module.css'


export default function RiceCalculator() {
  const [scale, setScale] = useState<boolean>(true)
  const [rice, setRice] = useState<number>(450)
  const [riceType, setRiceType] = useState<riceTypeVariant>('round')
  const [pot, setPot] = useState<potVariant>('pot')
  const [purpose, setPurpose] = useState<purposeVariant>('sushi')


  return (
    <div className={s.container}>
      <Recipe
        scale={scale}
        rice={rice}
        riceType={riceType}
        pot={pot}
        purpose={purpose}
      />

<form className={sf.form}>
      <div className={sf.wrap}>
        <Switcher<purposeVariant>
          text='Для чего'
          selected={purpose}
          options={{
            'sushi': {
              name: 'Суши',
              disabled: false
            },
            'side': {
              name: 'Гарнир',
              disabled: true
            },
            'porridge': {
              name: 'Каша',
              disabled: true
            }
          }}
          setFunction={setPurpose}
        />

        <div className={sf.riceInput}>
          <NumberInput
            value={rice}
            setFunction={setRice}
            textBefore='Кол-во риса'
            textAfter='грамм'
          />
          <Checkbox
            text='У меня есть весы'
            checked={scale}
            setFunction={setScale}
          />
        </div>

        <Switcher
          text='Вид риса'
          selected={riceType}
          options={{
            'round': {
              name: 'Круглый',
              disabled: false
            },
            'long': {
              name: 'Длинный',
              disabled: true
            },
            'parboiled': {
              name: 'Пропаренный',
              disabled: true
            }
          }}
          setFunction={setRiceType}
        />

        <Switcher
          text='Посуда'
          selected={pot}
          options={{
            'pot': {
              name: 'Кастрюля',
              disabled: false
            },
            'multi': {
              name: 'Мультиварка',
              disabled: false
            },
            'pan': {
              name: 'Сковорода',
              disabled: true
            }
          }}
          setFunction={setPot}
        />
      </div>
    </form>
    </div>
  )
}

type riceTypeVariant = 'round' | 'long' | 'parboiled'
type potVariant = 'pot' | 'multi' | 'pan'
type purposeVariant = 'sushi' | 'side' | 'porridge'
