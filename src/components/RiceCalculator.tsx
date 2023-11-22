'use client'

import { useState } from 'react'

import s from './RiceCalculator.module.css'
import Checkbox from '@/components/UI/Checkbox'
import TextInput from '@/components/UI/TextInput'


export default function RiceCalculator() {
  const [scale, setScale] = useState<boolean>(true)
  const [rice, setRice] = useState<number>(450)

  return (
    <form className={s.control}>
      <Checkbox className={s.checkbox} text='У меня есть весы' setFunction={setScale} checked={scale} />

      <div className={s.text}>Я&nbsp;буду варить</div>
      {' '}
      <TextInput className={s.text} value={rice} setFunction={setRice} />
      {' '}
      <div className={s.text}>
        грамм
      </div>
    </form>
  )
}
