export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    return [...bufferView].reduce((string, current) => string + String.fromCharCode(current), '');
  }
}
