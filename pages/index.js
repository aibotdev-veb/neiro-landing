export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial' }}>
      <h1>🚀 Решаю задачи через нейросеть</h1>
      <p>Вы ставите задачу — я решаю её с помощью GPT...</p>

      <h2>📌 Услуги:</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>✅ Чат-боты и MVP</li>
        <li>✅ Лендинги, формы, ЛК</li>
        <li>✅ Тексты, ТЗ, письма</li>
        <li>✅ Автоматизация Excel, данных</li>
      </ul>

      <h2>🔥 Портфолио:</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>💬 Чат-бот для психолога</li>
        <li>📢 Лендинг онлайн-курса</li>
        <li>📊 Автоматизация отчетов Excel</li>
      </ul>

      <h2>💰 Прайс:</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>⚡ MVP / Telegram-бот — от 5000 ₽</li>
        <li>⚡ Лендинг / CRM — от 8000 ₽</li>
        <li>⚡ Генерация текстов — от 1500 ₽</li>
        <li>⚡ Автоматизация — от 3000 ₽</li>
      </ul>

      <a href="https://t.me/o_serebryakov" style={{
        display: 'inline-block',
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#0088cc',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '18px'
      }}>
        Связаться в Telegram
      </a>
    </div>
  );
}
