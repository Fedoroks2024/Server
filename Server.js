const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware для парсинга тела запроса в формате JSON
app.use(bodyParser.json());

// Обработка POST-запроса на путь /submit
app.post('/submit', (req, res) => {
  try {
    const data = req.body;

    // Валидация данных (пример)
    if (!data.name || !data.email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Обработка данных (например, сохранение в базу данных)
    console.log('Received data:', data);

    // Отправка ответа
    res.status(200).json({ message: 'Data received successfully', data: data });


  } catch (error) {
      console.error(error);
      res.status(500).json({error: 'Internal Server Error'});
  }
});


// Запуск сервера
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
