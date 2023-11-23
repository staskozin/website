import { Dispatch, SetStateAction } from 'react'

import s from './TextSelect.module.css'


function renderOptions(options: Record<string, string>) {
  const result: Array<JSX.Element> = []
  for (let o in options) {
    result.push(<option key={o} value={o}>{options[o]}</option>)
  }
  return result
}


export default function TextSelect(props: CheckboxProps) {
  return (
    <div className={`${s.wrap} ${props.className ? props.className : ''}`}>
      {props.textBefore}
      <select className={s.select} onChange={e => props.setFunction(e.target.value)}>
        {renderOptions(props.options)}
      </select><span>{props.options[props.selected]}</span>
      {props.textAfter}
    </div>
  )
}

type CheckboxProps = {
  options: Record<string, string>
  selected: string
  setFunction: Dispatch<SetStateAction<string>>
  className?: string
  textBefore?: string
  textAfter?: string
}
