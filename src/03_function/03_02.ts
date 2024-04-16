import { CityType, GovBuildingsType, HouseType } from '../02_objects/02_02';

export const addMoneyToBudget = (
	arrBuildings: GovBuildingsType[],
	type: string,
	count: number
) => {
	return arrBuildings
		.filter((b) => b.type === type)
		.map((el) => (el.budget += count));
};

export function demolishHousesOnTheStreet(city: CityType, streetName: string) {
	city.houses = city.houses.filter(
		(h) => h.address.street.title !== streetName
	);
}

export function repairHouse(house: HouseType) {
	house.repaired = true;
}

export function toFireStaff(building: GovBuildingsType, count: number) {
	building.staffCount -= count;
}

export function toAddStaff(building: GovBuildingsType, count: number) {
	building.staffCount += count;
}
