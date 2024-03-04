import { CityType } from './../02-objects/02_02';
import { addMoneyToBudget, demolishHousesOnTheStreet, repairHouse, toAddStaff, toFireStaff } from './03_02';

let city: CityType;

beforeEach(() => {
	city = {
		title: 'New York',
		houses: [
			{
				id: 1,
				buildedAt: 2012,
				repaired: false,
				address: {
					number: 100,
					street: {
						title: 'White street',
					},
				},
			},
			{
				id: 2,
				buildedAt: 2008,
				repaired: false,
				address: {
					number: 100,
					street: {
						title: 'Happy street',
					},
				},
			},
			{
				id: 3,
				buildedAt: 2020,
				repaired: false,
				address: {
					number: 101,
					street: {
						title: 'Happy street',
					},
				},
			},
		],
		governmentBuildings: [
      {
        type: 'HOSPITAL',
        budget: 200000,
        staffCount: 200,
        address: {
          street: {
            title: 'Central Str'
          }
        }
      }, 
      {
        type: 'FIRE-STATION',
        budget: 500000,
        staffCount: 1000,
        address: {
          street: {
            title: 'South Str'
          }
        }
      }
    ],
		citizensNumber: 1000000,
	};
});

// 01. Создайте в отдельном файле функцию, чтобы тесты прошли
test('Budget should be changed for HOSPITAL', () => {
  addMoneyToBudget(city.governmentBuildings, 'HOSPITAL', 100000);

  expect(city.governmentBuildings[0].budget).toBe(300000);
  expect(city.governmentBuildings[1].budget).toBe(500000);
}) 

// 02. Тесты должны пройти
test('Budget should be changed for FIRE-STATION', () => {
  addMoneyToBudget(city.governmentBuildings, 'FIRE-STATION', -100000);
  
  expect(city.governmentBuildings[0].budget).toBe(200000);
  expect(city.governmentBuildings[1].budget).toBe(400000);
})

// 03. дополните тип HouseType (добавьте новый id от 1 и по возрастанию)
// 03.1 создайте функцию чтобы тесты прошли
test('Houses should be destroyed', () => {
	demolishHousesOnTheStreet(city, 'Happy street')
	expect(city.houses.length).toBe(1);
	expect(city.houses[0].id).toBe(1);
})

// 04. почините дом:
test('House should be repared', () => {
	repairHouse(city.houses[1]);

	expect(city.houses[1].repaired).toBeTruthy();
})

// 05. remove some count staff:
test('staff should be removed', () => {
	toFireStaff(city.governmentBuildings[0], 20);

	expect(city.governmentBuildings[0].staffCount).toBe(180)
})

// 06. add some count staff:
test('staff should be add', () => {
	toAddStaff(city.governmentBuildings[0], 20);

	expect(city.governmentBuildings[0].staffCount).toBe(220)
})