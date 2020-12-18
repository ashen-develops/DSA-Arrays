const memory = require('./memory');

const Memory = new memory();

class Array {
  constructor() {
    this.length = 0;
    this.ptr = Memory.allocate(this.length);
  }
  push(value) {
    this._resize(this.length +1);
    Memory.settings(this.ptr + this.length, value);
    this.length++;
  }
  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = Memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    Memory.copy(this.ptr, oldPtr, this.length);
    Memory.free(oldPtr);
  }
  // adds an index offset and gets the value stored at a memory address
  // O(1)
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return Memory.get(this.ptr + index);
  }
  // Leaving an extra space which will be filled at the next push:
  // O(1)
  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = Memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    Memory.set(this.ptr + index, value);
    this.length++;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error ('Index error');
    }
    Memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }

}
Array.SIZE_RATIO = 3;

module.exports = Array;