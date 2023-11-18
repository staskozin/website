import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'

import s from './Checkbox.module.css'


export default function RiceCalculator(props: CheckboxProps) {
  return (
    <label className={`${s.checkbox} ${props.className ? props.className : ''}`}>
      <div className={s.inputwrap}>
        <input className={s.input} type="checkbox" checked={props.checked} onChange={() => props.setFunction(!props.checked)} />
        <Image className={s.checkmark} src="/img/ui/checkmark.svg" alt="Галочка" width={21} height={28}/>
      </div>
      <span className={s.text}>{props.text}</span>
    </label>
  )
}

type CheckboxProps = {
  checked?: boolean
  text: string
  setFunction: Dispatch<SetStateAction<boolean>>
  className?: string
}
