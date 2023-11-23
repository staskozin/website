import { Dispatch, SetStateAction, useEffect, useRef } from 'react'

import s from './TextSelect.module.css'


function renderOptions(options: Record<string, string>) {
  const result: Array<JSX.Element> = []
  for (let o in options) {
    result.push(<option key={o} value={o}>{options[o]}</option>)
  }
  return result
}


export default function TextSelect(props: CheckboxProps) {
  const selectRef = useRef<HTMLSelectElement>(null)
  const widthHackRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    selectRef.current!.style.width = Math.round(widthHackRef.current!.getBoundingClientRect().width) + 'px'
  }, [props.selected])

  return (
    <div className={`${s.wrap} ${props.className ? props.className : ''}`}>
      {props.textBefore}
      <select className={s.select} ref={selectRef} onChange={e => props.setFunction(e.target.value)}>
        {renderOptions(props.options)}
      </select><span ref={widthHackRef}>{props.options[props.selected]}</span>
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
