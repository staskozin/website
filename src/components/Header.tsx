'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import s from './Header.module.css'


export default function Header(props: HeaderProps) {
  const pathname = usePathname()

  return (
    <header className={s.header}>
      <div className={s.name}>
        <Image className={s.photo} src="/img/stas.png" alt="Фото Стасяна" width={80} height={80} />
        {pathname === '/' ? (
          <span>Станислав Козин</span>
        ) : (
          <Link href='/'>Станислав Козин</Link>
        )}

      </div>

      <h1 className={s.title}>
        {props.title}
      </h1>

      <ul className={s.contacts}>
        {props.subtitle ? (
          <li>{props.subtitle}</li>
        ) : (
          <>
            <li>
              <a href="https://hh.ru/resume/d0c04ea9ff044224bc0039ed1f794536703956">Резюме</a>
            </li>
            <li>
              <a href="https://github.com/staskozin">Гитхаб</a>
            </li>
            <li>
              <a href="https://t.me/staskozin">Телеграм</a>
            </li>
            <li>
              <a href="mailto:stas@staskozin.ru">stas@staskozin.ru</a>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

type HeaderProps = {
  title: string
  subtitle?: string
}
