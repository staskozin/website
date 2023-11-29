'use client'

import { useState } from 'react'

import Form from './Form'
import Recipe from './Recipe'


export default function RiceCalculator() {
  const [scale, setScale] = useState<boolean>(true)
  const [rice, setRice] = useState<number>(450)
  const [riceType, setRiceType] = useState<string>('round')
  const [pot, setPot] = useState<string>('pot')
  const [purpose, setPurpose] = useState<string>('sushi')

  return (
    <>
      <Form
        scale={scale}
        setScale={setScale}
        rice={rice}
        setRice={setRice}
        riceType={riceType}
        setRiceType={setRiceType}
        pot={pot}
        setPot={setPot}
        purpose={purpose}
        setPurpose={setPurpose}
      />

      <Recipe
        scale={scale}
        rice={rice}
        riceType={riceType}
        pot={pot}
        purpose={purpose}
      />
    </>
  )
}
