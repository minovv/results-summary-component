// Підключаємо технологію express для back-end сервера
const express = require('express')
// Створюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
	// res.render генерує нам HTML сторінку

	//            ↙ cюди вводимо назву файлу з container
	res.render('index', {
		layout: 'default',
		summary: [
			{
				"category": "Reaction",
				"score": 80,
				"icon": "./assets/images/icon-reaction.svg"
			},
			{
				"category": "Memory",
				"score": 92,
				"icon": "./assets/images/icon-memory.svg"
			},
			{
				"category": "Verbal",
				"score": 61,
				"icon": "./assets/images/icon-verbal.svg"
			},
			{
				"category": "Visual",
				"score": 72,
				"icon": "./assets/images/icon-visual.svg"
			}
		]

	})
	//                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
