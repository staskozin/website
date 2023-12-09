import { Dispatch, useEffect, useReducer, useRef } from 'react'

import { CalcAction } from '@/components/RiceCalculator'

import s from './NumberInput.module.css'


export default function NumberInput(props: NumberInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [forcedUpdate, forceUpdate] = useReducer(x => x + 1, 0)

  let cursorPosition = useRef<number>(0)

  useEffect(() => {
    if (forcedUpdate > 0)
      inputRef.current!.setSelectionRange(cursorPosition.current, cursorPosition.current)
  }, [forcedUpdate])

  return (
    <div className={`${s.wrap} ${props.className ? props.className : ''}`}>
      <span>{props.textBefore}</span>
      <input
        className={s.input}
        ref={inputRef}
        value={props.value}
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        onChange={e => {
          if (e.target.validity.valid) {
            const value = Number(e.target.value)
            cursorPosition.current = e.target.selectionStart!
            props.setFunction({ type: 'changeRice', payload: value > 2000000 ? 2000000 : value })
          } else {
            cursorPosition.current = e.target.selectionStart! - 1
            forceUpdate()
          }
        }}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === 'Escape')
            inputRef.current!.blur()
        }}
        onBlur={() => {
          if (!props.value)
            props.setFunction({ type: 'changeRice', payload: 450 })
        }}
      />
      <span>{props.textAfter}</span>
    </div>
  )
}

type NumberInputProps = {
  value: number
  setFunction: Dispatch<CalcAction>
  textBefore: string
  textAfter: string
  className?: string
}
