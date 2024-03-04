type LocalCityType = {
  title: string
  countryTitle: string
}

type AddressType = {
  streetTitle: string
  city: LocalCityType
}

export type TechType = {
  id: number
  title: string
}

export type StudentType = {
  id: number
  name: string
  age: number
  isActive: boolean
  address: AddressType
  technologies: TechType[]
}

export const student: StudentType = {
  id: 1,
  name: 'Tumen',
  age: 27,
  isActive: true,
  address: {
    streetTitle: 'Surganova 2',
    city: {
      title: 'Moscow',
      countryTitle: 'Russia'
    }
  },
  technologies: [
    {
      id: 1,
      title: 'HTML'
    },
    {
      id: 2,
      title: 'CSS'
    },
    {
      id: 3,
      title: 'React'
    },
  ]
}

console.log(student.address.city)