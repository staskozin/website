'use client'

import Link from 'next/link'

import s from './Footer.module.css'
import { usePathname } from 'next/navigation'


export default function Footer() {
  const pathname = usePathname()

  return (
    <footer className={s.footer}>
      <span>Станислав Козин, 2016–н.в.</span>
      <ul className={s.contacts}>
        {pathname !== '/cv' ? (
          <li>
            <Link href="/cv">Резюме</Link>
          </li>
        ) : null}
        <li>
          <a href="https://github.com/staskozin">Гитхаб</a>
        </li>
        <li>
          <a href="https://t.me/staskozin">Телеграм</a>
        </li>
        <li>
          <a href="mailto:stas@staskozin.ru">stas@staskozin.ru</a>
        </li>
      </ul>
    </footer>
  )
}
