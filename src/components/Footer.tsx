import s from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <span>Станислав Козин, 2016–н.в.</span>
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
    </footer>
  )
}
