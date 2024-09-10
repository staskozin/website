import s from './Resume.module.css'

export default function Resume() {
  return (
    <div className={s.resume}>
      <h2 id="skills">Ключевые навыки</h2>
      <ul className={s.skills}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Next.js</li>
      </ul>
      <h2 id="about">О&nbsp;себе</h2>
      <p>С&nbsp;2016 года занимался фрилансом (сайты, телеграм-боты, дизайн), сейчас хочу найти постоянную работу Frontend-разработчиком. Предпочитаю React, но&nbsp;готов выучить Vue или Angular. Всегда был единственным разработчиком на&nbsp;проекте, теперь хочу поработать в&nbsp;команде. Интереснее всего гибридный график работы (3&nbsp;дня удаленно, 2&nbsp;в офисе), но&nbsp;готов рассмотреть любые предложения.</p>
      <p>Люблю веб за&nbsp;то, что можно быстро создать приложение и&nbsp;запустить на&nbsp;любом устройстве. Умею гуглить, могу быстро набросать рабочий прототип на&nbsp;незнакомой технологии. Трудности не&nbsp;пугают, готов погрузиться в&nbsp;работу.</p>
      <h2 id="work">Чем занимался</h2>
      <p>Мой отец занимается интернет-торговлей, а&nbsp;я&nbsp;помогаю ему со&nbsp;всем, что связано с&nbsp;ИТ. В&nbsp;частности:</p>
      <ul>
        <li>Cоздавал и&nbsp;поддерживал интернет-магазины на&nbsp;готовом движке: устанавливал и&nbsp;настраивал модули, модифицировал стандартный шаблон, верстал шаблоны с&nbsp;нуля.</li>
        <li>Для двух магазинов создал конструкторы товаров:<ul>
          <li><a href="https://profkoptilnya.ru/constructor">https://profkoptilnya.ru/constructor</a> коптильни,</li>
          <li><a href="https://stolpodnos.ru/constructor">https://stolpodnos.ru/constructor</a> столики для завтрака в&nbsp;постель.</li>
        </ul>
        </li>
        <li>Разработал программу, которая генерирует картинки для карточек товаров на&nbsp;маркетплейсах (инфографику). Для генерации нужно заполнить Excel-таблицу и&nbsp;сверстать HTML-шаблон. Программа распарсит таблицу, откроет Chrome, подставит в&nbsp;шаблон данные и&nbsp;сделает скриншоты, которые сохранятся по&nbsp;указанному пути.</li>
      </ul>
      <p>Стек: HTML, CSS, JavaScript, TypeScript, React, Redux, Puppeteer, OpenCart.</p>
      <p>Другим заказчиком является компания, занимающаяся поставками электрооборудования. Для них я&nbsp;делал следующее:</p>
      <ul>
        <li>Разработал программу, интегрирующую каталог товаров Siemens в&nbsp;систему &laquo;Мой склад&raquo;.</li>
        <li>На&nbsp;основе интегратора сделал небольшую админку и&nbsp;телеграм-бота.</li>
        <li>Создал сайты-каталоги продукции, один реализован как полноценный интернет-магазин, а&nbsp;другой как сайт-визитка:<ul>
          <li><a href="https://vesko.info">https://vesko.info</a></li>
          <li><a href="https://avorio.biz">https://avorio.biz</a></li>
        </ul>
        </li>
      </ul>
      <p>Стек: Node.js, TypeScript, Fastify, Puppeteer, React, TypeScript, Telegram API, OpenCart.</p>
      <p>Помимо этого, делал разные небольшие проекты. Например, сайт для салона картин, на&nbsp;котором, собственно, можно выбрать и&nbsp;заказать картину (<a href="https://salon-kartin.ru/">https://salon-kartin.ru/</a>). Некоторые проекты, потерявшие актуальность, заархивированы на&nbsp;моём сайте (<a href="https://staskozin.ru/">https://staskozin.ru/</a>).</p>
      <p>Мои сайты хорошо работают во&nbsp;всех браузерах, кроме совсем древних, типа IE11.</p>
    </div>
  )
}
