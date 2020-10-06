abstract class Animal {
  abstract swim(): void;

  display(): void {
      console.log('display generic animal');
  }
}

class Shark extends Animal {
  swim(): void {
      console.log('shark swim');
  }

  bite(): void {
      console.log('shark bite');
  }

  display() {
      console.log('display generic animal');
  }
}

class Turtle extends Animal {
  swim(): void {
      console.log('turtle swim');
  }
  bite(): void {
      console.log('turtle bite');
  }
}

class Jellyfish extends Animal {
  swim(): void {
      console.log('jellyfish swim');
  }

}

class SeaStar extends Animal {
  swim(): void {
      console.log('seastart swim');
  }

}
