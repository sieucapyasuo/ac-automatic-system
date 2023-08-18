import { useRef, useState } from 'react'

import Brand from './Brand'
import ModeButtonGroup from './ModeButtonGroup'
import PowerButtonGroup from './PowerButtonGroup'
import EditIcon from '@mui/icons-material/Edit'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import WindPowerIcon from '@mui/icons-material/WindPower'

import ACOn from '@/assets/images/air-conditioner_on.png'
import '@/assets/css/components/DeviceList/DeviceCard.css'

import { IDevice } from '@/models/deviceModel'
import { FANSPEED } from '@/constants/enum'

interface DeviceCardProp {
  device: IDevice
}

const DeviceCardOn = ({ device }: DeviceCardProp): JSX.Element => {
  const tempControl = useRef<HTMLInputElement>(null)
  const [fan, setFan] = useState<FANSPEED>(device.fan)
  const [temp, setTemp] = useState<number>(device.temp)

  const onTempControlChange = () => {
    setTemp(Number(tempControl.current!.value))
  }

  return (
    <div className='device-card on'>
      <div className='card-header'>
        <Brand brandName={device.brand} />
        <div className='status-card'>{device.status}</div>
        <div className='device-name-container'>
          <div className='device-name'>{device.name}</div>
          <EditIcon className='edit-icon' />
        </div>
      </div>
      <div className='card-body'>
        <div className='ac-img-container'>
          <img src={ACOn} />
        </div>
        <div className='fan-controler-container'>
          <WindPowerIcon className='stat-icon fan' />
          <div
            className={`fan-speed ${fan == FANSPEED.HIGH ? 'current' : ''}`}
            onClick={() => setFan(FANSPEED.HIGH)}
          >
            HIGH
          </div>
          <div
            className={`fan-speed ${fan == FANSPEED.MEDIUM ? 'current' : ''}`}
            onClick={() => setFan(FANSPEED.MEDIUM)}
          >
            MED
          </div>
          <div
            className={`fan-speed ${fan == FANSPEED.LOW ? 'current' : ''}`}
            onClick={() => setFan(FANSPEED.LOW)}
          >
            LOW
          </div>
        </div>
        <div className='stats-container'>
          <div className='stat'>
            <WaterDropIcon className='stat-icon humidity' />
            <span>{device.humidity}%</span>
          </div>
          <div className='stat'>
            <DeviceThermostatIcon className='stat-icon temp' />
            <span>{device.envTemp}°C</span>
          </div>
          <hr className='stat-divider'></hr>
          <div className='stat'>
            <AcUnitIcon className='stat-icon humidity' />
            <span>{temp}°C</span>
          </div>
        </div>
      </div>
      <div className='slide-bar-container'>
        <AcUnitIcon className='stat-icon temp' />
        <input
          id='temperature-bar'
          type='range'
          min='18'
          max='30'
          step='1'
          ref={tempControl}
          defaultValue={temp}
          onChange={onTempControlChange}
        />
        <AcUnitIcon className='stat-icon humidity' />
      </div>
      <div className='card-footer'>
        <div className='card-button-group'>
          <ModeButtonGroup
            mode={device.currentProfile}
            status={device.status}
          />
          <PowerButtonGroup status={device.status} />
        </div>
      </div>
    </div>
  )
}

export default DeviceCardOn
