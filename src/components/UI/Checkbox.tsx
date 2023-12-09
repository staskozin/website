import { Dispatch } from 'react'
import Image from 'next/image'

import { CalcAction } from '@/components/RiceCalculator'

import s from './Checkbox.module.css'


export default function Checkbox(props: CheckboxProps) {
  return (
    <label className={`${s.checkbox} ${props.className ? props.className : ''}`}>
      <div className={s.inputwrap}>
        <input className={s.input} type="checkbox" checked={props.checked} onChange={() => props.setFunction({ type: 'changeScale', payload: !props.checked })} />
        <Image className={s.checkmark} src="/img/ui/checkmark.svg" alt="Галочка" width={15} height={21} />
      </div>
      <span className={s.text}>{props.text}</span>
    </label>
  )
}

type CheckboxProps = {
  checked: boolean
  text: string
  setFunction: Dispatch<CalcAction>
  className?: string
}
