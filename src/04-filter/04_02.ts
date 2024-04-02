type StreetType = {
  title: string
}

type AddressType = {
  number?: number
  street: StreetType
}

export type HouseType = {
  id?: number
  buildedAt: number
  repaired: boolean
  address: AddressType
}

export type GovBuildingsType = {
  type: 'HOSPITAL' | 'FIRE-STATION'
  budget: number
  staffCount: number
  address: AddressType
}

export type CityType = {
  title: string
  houses: HouseType[]
  governmentBuildings: GovBuildingsType[]
  citizensNumber: number
}

export function demolishHousesOntheStreet(city: CityType, str: string) {
  return city.houses.filter(h => h.address.street.title !== str);
}

export function getHousesOnTheStreet(city: CityType, str: string) {
  return city.houses.filter(h => h.address.street.title === str)
}

export function getBuildingsWithStaffCountGreaterThen(buildings: GovBuildingsType[], num: number) {
  return buildings.filter(b => b.staffCount > 500);
}