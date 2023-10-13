test('Test de un objeto', () => {
  const data = { name: 'Gilbert' };
  expect(data).toEqual({ name: 'Gilbert' });
});

test('Test de null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});
