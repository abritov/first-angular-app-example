export abstract class Animal {
  abstract swim(): void;
  abstract skills(): string[];
  abstract toString(): string;

  canBite(): boolean {
    return this.skills().includes('bite');
  }

  display(): void {
      console.log(`display ${this.toString()}`);
  }
}

export class Shark extends Animal {
  swim(): void {
      console.log('shark swim');
  }

  skills(): string[] {
    return ['swim', 'bite'];
  }

  bite(): void {
      console.log('shark bite');
  }

  toString(): string {
      return 'shark';
  }
}

export class Turtle extends Animal {
  swim(): void {
      console.log('turtle swim');
  }

  skills(): string[] {
    return ['swim', 'bite'];
  }

  bite(): void {
      console.log('turtle bite');
  }

  toString(): string {
    return 'turtle';
  }
}

export class Jellyfish extends Animal {
  swim(): void {
      console.log('jellyfish swim');
  }

  skills(): string[] {
    return ['swim'];
  }

  toString(): string {
    return 'jellyfish';
  }
}

export class Starfish extends Animal {
  swim(): void {
      console.log('starfish swim');
  }

  skills(): string[] {
    return ['swim'];
  }

  toString(): string {
    return 'starfish';
  }
}
