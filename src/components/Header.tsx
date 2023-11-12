import Image from 'next/image'

import s from './Header.module.css'

export default function Footer() {
  return (
    <header>
      <div className={s.name}>
        <Image className={s.photo} src="/img/stas.png" alt="Фото Стасяна" width={80} height={80} />
        <span>Станислав Козин</span>
      </div>

      <h1 className={s.title}>
        Веб-разработчик и&nbsp;дизайнер
      </h1>

      <ul className={s.contacts}>
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
      </ul>
    </header>
  )
}
