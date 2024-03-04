type StreetType = {
  title: string
}

type AddressType = {
  number?: number
  street: StreetType
}

type HouseType = {
  buildedAt: number
  repaired: boolean
  address: AddressType
}

type GovBuildingsType = {
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

