'use client'

import { useState } from 'react'

import s from './RiceCalculator.module.css'
import Checkbox from '@/components/UI/Checkbox'


export default function RiceCalculator() {
  const [scale, setScale] = useState(true)

  return (
    <form>
      <Checkbox className={s.checkbox} text='У меня есть весы' setFunction={setScale} checked={scale} />
    </form>
  )
}
