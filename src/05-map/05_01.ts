export type ManType = {
	name: string;
	age: number;
};

export const transformator = (man: ManType) => ({
	stack: ['css', 'html', 'react', 'redux'],
	firstName: man.name.split(' ')[0],
	lastName: man.name.split(' ')[1],
});

export const greetingMessage = (man: ManType) => {
  const [name] = man.name.split(' ');
  return `Hello ${name}! How are you?`
} 