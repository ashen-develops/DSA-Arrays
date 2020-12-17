import Memory from './memory.js';

class Array {
  constructor() {
    this.length = 0;
    this.ptr = Memory.allocate(this.length);
  }
}