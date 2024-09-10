'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import s from './Header.module.css'


export default function Header(props: HeaderProps) {
  const pathname = usePathname()

  return (
    <header className={s.header}>
      {pathname === '/' ? (
        <div className={s.name}>
          {renderLogo()}
        </div>
      ) : (
        <Link className={s.name} href='/'>
          {renderLogo()}
        </Link>
      )}

      <h1 className={s.title}>
        {props.title}
      </h1>

      <ul className={s.contacts}>
        {props.subtitle ? (
          <li>{props.subtitle}</li>
        ) : (
          <>
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

function renderLogo() {
  return (
    <>
      <Image className={s.photo} src="/img/stas.png" alt="Фото Стасяна" width={80} height={80} />
      <span>Станислав Козин</span>
    </>
  )
}