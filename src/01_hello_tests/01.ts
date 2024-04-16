
export function sum(a: number, b: number) {
  return a + b;
}

export function mult(a: number, b: number) {
  return a * b;
}

export function splitIntoWords(sentence: string) {
  const words = sentence.match(/\b[\w']+\b/g);
  return words ? words.map(word => word.toLowerCase()) : [];
}


