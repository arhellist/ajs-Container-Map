export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(102, 'Ошибка ввода'),
    this.errors.set(302, 'Ошибка вложенности')
  }

  translate(code) {
    if ( this.errors.get(code) === undefined) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}
