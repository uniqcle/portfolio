const Contacts = () => {
  return (
    <>
      <main className="section">
        <div className="container">
          <h1 className="title-h1">Contacts</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-h2">Location</h2>
              <p>Moscow, Russia</p>
            </li>

            <li className="content-list__item">
              <h2 className="title-h2">Telegram / WhatsApp</h2>
              <p>+7 (913) 471 1262</p>
            </li>

            <li className="content-list__item">
              <h2 className="title-h2">Email</h2>
              <p>
                <a href="mailto:uniqcle@yandex.ru">uniqcle@yandex.ru</a>
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Contacts;
