// 1. Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша

const [inputElement, ulElement] = [document.createElement('input'),document.createElement('ul')]

document.body.append(inputElement)
document.body.append(ulElement)

document.querySelector('input').addEventListener('keydown', function(event) {
    const liElement = document.createElement('li')
    ulElement.append(liElement)
    liElement.textContent = event.key
})

// Вставить в разметку html теги input и div без js (просто предусмотреть в разметке). Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля)

let input = document.querySelector('input')
input.addEventListener('keyup', () =>
    console.log(input.value)
 )

// 2.1 Каждый раз при изменении данных в инпуте, в предусмотренный div должна вписываться фраза "Клиент набирает: ВСЕ_ЧТО_НАБРАНО_В_ИНПУТЕ".

document.querySelector('input').addEventListener('keyup', function (event) {
    document.querySelector('div').textContent = 'Клиент набирает: ' + event.key
})

// 3. Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст. После отправки формы инпут должен быть очищен (проставить пустую строку в value). Подсказки смотрите в последнем задании с предыдущего занятия в конспекте.

const [formElement, inputElement, ulElement] = [document.createElement('form'), document.createElement('input'), document.createElement('ul')]
document.body.append(formElement)
document.body.append(ulElement)
formElement.append(inputElement)

const submitElement = document.createElement('input')
submitElement.setAttribute("type", "submit")
formElement.append(submitElement)
submitElement.value = 'Кнопка'

formElement.addEventListener('submit', function(event){
    event.preventDefault()
    const liElement = document.createElement('li')
    ulElement.append(liElement) 
    const inputElementValue = formElement.querySelector('input')
    liElement.textContent= inputElementValue.value
    inputElementValue.value='' 
})