'use client'

import { useState } from 'react'

import s from './RiceCalculator.module.css'
import Checkbox from '@/components/UI/Checkbox'
import TextInput from '@/components/UI/TextInput'
import TextSelect from './UI/TextSelect'


export default function RiceCalculator() {
  const [scale, setScale] = useState<boolean>(true)
  const [rice, setRice] = useState<number>(450)
  const [riceType, setRiceType] = useState<string>('round')
  const [potType, setPotType] = useState<string>('pot')
  const [purpose, setPurpose] = useState<string>('sushi')

  return (
    <form className={s.control}>
      <Checkbox className={s.checkbox} text='У меня есть весы' setFunction={setScale} checked={scale} />

      <span className={s.text}>Я&nbsp;буду варить</span>
      {' '}
      <TextInput className={s.text} value={rice} setFunction={setRice} />
      {' '}
      <span className={s.text}>грамм</span>
      {' '}
      <TextSelect
        className={s.text}
        options={{
          'round': 'круглозёрного',
          'long': 'длиннозёрного',
          'parboiled': 'пропаренного'
        }}
        selected={riceType}
        setFunction={setRiceType}
      />
      {' '}
      <span className={s.text}>риса</span>
      {' '}
      <TextSelect
        className={s.text}
        options={{
          'pot': 'кастрюле',
          'multi': 'мультиварке',
          'pan': 'сковороде'
        }}
        selected={potType}
        setFunction={setPotType}
        textBefore='в '
      />
      {' '}
      <span className={s.text}>и использовать</span>
      {' '}
      <TextSelect
        className={s.text}
        options={{
          'sushi': 'для суши',
          'side': 'как гарнир',
          'porridge': 'для каши'
        }}
        selected={purpose}
        setFunction={setPurpose}
        textAfter='.'
      />
    </form>
  )
}
