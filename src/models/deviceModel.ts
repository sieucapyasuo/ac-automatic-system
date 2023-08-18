import { BRAND, FANSPEED, MODE, STATUS } from '@/constants/enum'

interface IProfile {
  temp: number
  fan: FANSPEED
}

export interface IDevice extends Document {
  userId: string
  name: string
  status: STATUS
  fan: FANSPEED
  temp: number
  brand: BRAND
  currentProfile: MODE
  profile: {
    [key in MODE]: IProfile
  }
  envTemp: number
  humidity: number
}
