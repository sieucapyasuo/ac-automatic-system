import DeviceCard from './DeviceCard'

import '@/assets/css/components/DeviceList/DeviceList.css'

import { BRANDS, STATUS, MODE } from '@/constants/enum'

const DeviceList: React.FC = () => {
  const testAc1 = {
    status: STATUS.ON,
    brand: BRANDS.PANASONIC,
    name: 'Air Conditioner 1',
    humidity: '50%',
    temp: '24°C',
    mode: MODE.COOLING
  }

  const testAc2 = {
    status: STATUS.OFF,
    brand: BRANDS.DAIKIN,
    name: 'Air Conditioner 1',
    humidity: '50%',
    temp: '24°C',
    mode: MODE.NONE
  }

  return (
    <div className='devices-container'>
      <DeviceCard device={testAc1} />
      <DeviceCard device={testAc2} />
    </div>
  )
}

export default DeviceList
