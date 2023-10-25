import { calcTileType } from '../js/utils';

test('test calcTileType top-left', () => {
  const result = calcTileType(0, 8);
  expect(result).toEqual('top-left');
});
test('test calcTileType top', () => {
  const result = calcTileType(5, 8);
  expect(result).toEqual('top');
});
test('test calcTileType top-right', () => {
  const result = calcTileType(7, 8);
  expect(result).toEqual('top-right');
});
test('test calcTileType left', () => {
  const result = calcTileType(24, 8);
  expect(result).toEqual('left');
});
test('test calcTileType right', () => {
  const result = calcTileType(23, 8);
  expect(result).toEqual('right');
});
test('test calcTileType bottom-left', () => {
  const result = calcTileType(56, 8);
  expect(result).toEqual('bottom-left');
});
test('test calcTileType bottom', () => {
  const result = calcTileType(58, 8);
  expect(result).toEqual('bottom');
});
test('test calcTileType bottom-right', () => {
  const result = calcTileType(63, 8);
  expect(result).toEqual('bottom-right');
});
test('test calcTileType center', () => {
  const result = calcTileType(35, 8);
  expect(result).toEqual('center');
});
