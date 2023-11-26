import { Dispatch, SetStateAction } from 'react'
import Checkbox from '@/components/UI/Checkbox'
import TextInput from '@/components/UI/TextInput'
import TextSelect from '@/components/UI/TextSelect'

import s from './Form.module.css'


export default function Form(props: FormProps) {
  return (
    <form className={s.control}>
      <Checkbox className={s.checkbox} text='У меня есть весы' setFunction={props.setScale} checked={props.scale} />

      <span className={s.text}>Я&nbsp;буду варить</span>
      {' '}
      <TextInput className={s.text} value={props.rice} setFunction={props.setRice} />
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
        selected={props.riceType}
        setFunction={props.setRiceType}
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
        selected={props.pot}
        setFunction={props.setPot}
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
        selected={props.purpose}
        setFunction={props.setPurpose}
        textAfter='.'
      />
    </form>
  )
}

type FormProps = {
  scale: boolean
  setScale: Dispatch<SetStateAction<boolean>>
  rice: number
  setRice: Dispatch<SetStateAction<number>>
  riceType: string
  setRiceType: Dispatch<SetStateAction<string>>
  pot: string
  setPot: Dispatch<SetStateAction<string>>
  purpose: string
  setPurpose: Dispatch<SetStateAction<string>>
}
