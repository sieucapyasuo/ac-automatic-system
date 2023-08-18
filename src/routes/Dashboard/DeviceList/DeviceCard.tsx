import Brand from './Brand'
import ModeButtonGroup from './ModeButtonGroup'
import PowerButtonGroup from './PowerButtonGroup'
import EditIcon from '@mui/icons-material/Edit'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import WindPowerIcon from '@mui/icons-material/WindPower'

import ACOn from '@/assets/images/air-conditioner_on.png'
import ACOff from '@/assets/images/air-conditioner_off.png'
import '@/assets/css/components/DeviceList/DeviceCard.css'

import { BRANDS, STATUS, MODE } from '@/constants/enum'
import { useRef } from 'react'

interface DeviceCardProp {
  device: {
    status: STATUS
    brand: BRANDS
    name: string
    humidity: string
    temp: string
    mode: MODE
  }
}

const DeviceCard = ({ device }: DeviceCardProp): JSX.Element => {
  const tempControl = useRef<HTMLInputElement>(null)
  console.log(tempControl.current?.value)
  return (
    <div className={`device-card ${device.status == STATUS.ON ? 'on' : 'off'}`}>
      <div className='card-header'>
        <Brand brandName={device.brand} />
        <div
          className={`status-card ${device.status == STATUS.ON ? 'on' : 'off'}`}
        >
          {device.status}
        </div>
        <div className='device-name-container'>
          <div className='device-name'>{device.name}</div>
          <EditIcon className='edit-icon' />
        </div>
      </div>
      <div className='card-body'>
        <div className='ac-img-container'>
          {device.status == STATUS.ON ? (
            <img src={ACOn} />
          ) : (
            <img src={ACOff} />
          )}
        </div>
        <div
          className={`fan-controler-container ${
            device.status == STATUS.ON ? '' : 'disable'
          }`}
        >
          <WindPowerIcon className='stat-icon fan' />
          <div className='fan-speed'>HIGH</div>
          <div className='fan-speed'>MED</div>
          <div className='fan-speed'>LOW</div>
        </div>
        <div className='stats-container'>
          <div className='stat'>
            <WaterDropIcon className='stat-icon humidity' />
            <span>{device.humidity}</span>
          </div>
          <div className='stat'>
            <DeviceThermostatIcon className='stat-icon temp' />
            <span>{device.temp}</span>
          </div>
          <hr className='stat-divider'></hr>
          <div className='stat'>
            <AcUnitIcon className='stat-icon humidity' />
            <span>{device.temp}</span>
          </div>
        </div>
      </div>
      <div
        className={`slide-bar-container ${
          device.status == STATUS.ON ? '' : 'disable'
        }`}
      >
        <AcUnitIcon className='stat-icon temp' />
        <input
          disabled={device.status == STATUS.ON ? false : true}
          id='temperature-bar'
          type='range'
          min='18'
          max='30'
          step='1'
          ref={tempControl}
        />
        <AcUnitIcon className='stat-icon humidity' />
      </div>
      <div className='card-footer'>
        <div className='card-button-group'>
          <ModeButtonGroup mode={device.mode} />
          <PowerButtonGroup status={device.status} />
        </div>
      </div>
    </div>
  )
}

export default DeviceCard
