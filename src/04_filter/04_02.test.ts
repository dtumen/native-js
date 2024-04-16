import {
	CityType,
	demolishHousesOntheStreet,
	getBuildingsWithStaffCountGreaterThen,
	getHousesOnTheStreet,
} from './04_02';

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
					number: 99,
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
						title: 'Programming street',
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
						title: 'Central Str',
					},
				},
			},
			{
				type: 'FIRE-STATION',
				budget: 500000,
				staffCount: 1000,
				address: {
					street: {
						title: 'South Str',
					},
				},
			},
		],
		citizensNumber: 1000000,
	};
});

// 01. Дополните тип HouseType (добавьте порядковый номер id )
// 02. СОздайте в том же файле тесты, чтобы они прошли.
test('Houses should be destroyed', () => {
	let result = demolishHousesOntheStreet(city, 'Happy street');

	expect(result.length).toBe(2);
	expect(result[0].id).toBe(1);
});

// 03. СОздайте в том же файле тесты, чтобы они прошли.
test('list of streets titles of houses', () => {
	let happyHouse = getHousesOnTheStreet(city, 'Happy street');
	let whiteHouse = getHousesOnTheStreet(city, 'White street');

	expect(happyHouse[0].address.number).toBe(100);
	expect(whiteHouse[0].address.number).toBe(99);
});

// 04. СОздайте в том же файле тесты, чтобы они прошли.
test('buildings with correct staff count', () => {
	let result = getBuildingsWithStaffCountGreaterThen(
		city.governmentBuildings,
		500
	);

	expect(result.length).toBe(1);
	expect(result[0].type).toBe("FIRE-STATION");
});
