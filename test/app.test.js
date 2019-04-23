import { getBuffer, ArrayBufferConverter } from '../src/js/app';

test('test ', () => {
  const buffer = getBuffer();
  const convertor = new ArrayBufferConverter();
  convertor.load(buffer);
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(convertor.toString()).toBe(expected);
});
