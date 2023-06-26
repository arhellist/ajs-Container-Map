import ErrorRepository from '../app';

test('error', () => {
  const error =  new ErrorRepository();
  const result = error.translate(102);
  expect(result).toBe('Ошибка ввода');
});

test('error', () => {
  const error =  new ErrorRepository();
  const result = error.translate(302);
  expect(result).toBe('Ошибка вложенности');
});

test('error', () => {
  const error =  new ErrorRepository();
  const result = error.translate(22);
  expect(result).toBe('Unknown error');
});
