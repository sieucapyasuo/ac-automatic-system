import { useEffect, useState } from 'react'

import DeviceCardOn from './DeviceCardOn'
import DeviceCardOff from './DeviceCardOff'

import '@/assets/css/components/DeviceList/DeviceList.css'

import { IDevice } from '@/models/deviceModel'
import getDeviceList from '@/services/getDeviceList'

import Swal, { SweetAlertOptions } from 'sweetalert2'
import { loading, errorAlert } from '@/utils/sweetAlert'
import { STATUS } from '@/constants/enum'

const DeviceList: React.FC = () => {
  const [deviceList, setDeviceList] = useState<IDevice[]>([])

  useEffect(() => {
    Swal.fire(loading)
    getDeviceList()
      .then((devices) => {
        Swal.close()
        setDeviceList(devices)
      })
      .catch(() =>
        Swal.fire(
          errorAlert('Failed to get device list !') as SweetAlertOptions
        )
      )
  }, [])

  return (
    <div className='devices-container'>
      {deviceList.map((device) =>
        device.status == STATUS.ON ? (
          <DeviceCardOn device={device} />
        ) : (
          <DeviceCardOff device={device} />
        )
      )}
    </div>
  )
}

export default DeviceList
