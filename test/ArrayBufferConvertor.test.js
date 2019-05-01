import getBuffer from '../src/js/getBuffer';
import ArrayBufferConverter from '../src/js/ArrayBufferConvertor';


test('test ', () => {
  const buffer = getBuffer();
  const convertor = new ArrayBufferConverter();
  convertor.load(buffer);
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(convertor.toString()).toBe(expected);
});
