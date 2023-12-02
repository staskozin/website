import { Dispatch, SetStateAction } from 'react'

import s from './Switcher.module.css'


function renderOptions<Variant extends string>(options: Record<Variant, optionState>, selected: string, setFunction: Dispatch<SetStateAction<Variant>>) {
  const result: Array<JSX.Element> = []
  for (let o in options) {
    result.push(
      <label key={o} className={s.button}>
        <input type="radio" value={o} onChange={e => setFunction(e.target.value as Variant)} checked={selected === o} disabled={options[o].disabled} />
        <span>{options[o].name}</span>
      </label>
    )
  }
  return result
}

export default function Switcher<Variant extends string>(props: SwitcherProps<Variant>) {
  return (
    <div className={`${s.switcher} ${props.className ? props.className : ''}`}>
      <span>{props.text}</span>
      <div className={s.buttons}>
        {renderOptions(props.options, props.selected, props.setFunction)}
      </div>
    </div>
  )
}

type SwitcherProps<Variant extends string> = {
  text: string
  selected: string
  options: Record<Variant, optionState>
  setFunction: Dispatch<SetStateAction<Variant>>
  className?: string
}

type optionState = {
  name: string
  disabled: boolean
}