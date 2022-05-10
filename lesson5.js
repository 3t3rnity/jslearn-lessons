function lesson5() {
  alert(lesson5);
  let login = prompt('Введите ваш логин, (Сотрудник, Директор, "")');
  let message;

  login === 'Сотрудник'
    ? (message = 'Привет')
    : login === 'Директор'
    ? (message = 'Здравствуйте')
    : login.trim() === ''
    ? (message = 'Нет логина')
    : (message = '');

  alert(`Ответ: ${message}`);
}
