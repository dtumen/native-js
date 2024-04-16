type LessonType = {
  title: string
}

type StreetType = {
  title: string
  number: string
}

type AddressType = {
  country: string
  city: string
  street: StreetType
}

type ManType = {
  name: string
  age: number
  lessons: LessonType[]
  address: AddressType
}

let props: ManType;

beforeEach(() => {
  props = {
		name: 'Tumen',
		age: 27,
		lessons: [{ title: 'react' }, { title: 'jsNative' }],
    address: {
      country: 'Serbia',
      city: 'Belgrade',
      street: {
        title: 'Cara Dushana',
        number: '56a',
      }
    }
	};
})

test('should use destructuring of props', () => {
  const { name, age, lessons, address: { street: { title: titleName } } } = props;

  expect(name).toBe('Tumen');
  expect(age).toBe(27);
  expect(lessons.length).toBe(2);
  expect(titleName).toBe('Cara Dushana');
});


test('get lessons from object with using destructuring', () => {

  const [ react, jsNative ] = props.lessons;

  expect(react.title).toBe('react');
  expect(jsNative.title).toBe('jsNative');
})


test('get twice lesson from object with using destructuring', () => {

  const [ , jsNative ] = props.lessons;

  expect(jsNative.title).toBe('jsNative');
})