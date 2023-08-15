import { useState } from 'react'

import AcUnitIcon from '@mui/icons-material/AcUnit'
import OpacityIcon from '@mui/icons-material/Opacity'
import SettingsIcon from '@mui/icons-material/Settings'

import { MODE } from '@/constants/enum'

import '@/assets/css/components/DeviceList/ModeButtonGroup.css'

interface ModeBtnGrProp {
  mode: MODE
}

const ModeButtonGroup = ({ mode }: ModeBtnGrProp): JSX.Element => {
  const [currentMode, setCurrentMode] = useState<MODE>(mode)

  const onModeClick = (mode: MODE): void => {
    setCurrentMode(mode)
  }

  return (
    <div className='mode-button-group'>
      <div
        className={`mode-button button ${
          currentMode == MODE.COOLING ? 'active' : 'inactive'
        } ${currentMode == MODE.NONE ? 'disable' : ''}`}
        onClick={
          currentMode != MODE.NONE ? () => onModeClick(MODE.COOLING) : undefined
        }
      >
        <AcUnitIcon className='mode-icon' />
        <span>Cooling</span>
      </div>
      <div
        className={`mode-button button ${
          currentMode == MODE.DEFAULT ? 'active' : 'inactive'
        } ${currentMode == MODE.NONE ? 'disable' : ''}
        `}
        onClick={
          currentMode != MODE.NONE ? () => onModeClick(MODE.DEFAULT) : undefined
        }
      >
        <SettingsIcon className='mode-icon' />
        <span>Default</span>
      </div>
      <div
        className={`mode-button button ${
          currentMode == MODE.MOISTURING ? 'active' : 'inactive'
        } ${currentMode == MODE.NONE ? 'disable' : ''}`}
        onClick={
          currentMode != MODE.NONE
            ? () => onModeClick(MODE.MOISTURING)
            : undefined
        }
      >
        <OpacityIcon className='mode-icon' />
        <span>Moisturing</span>
      </div>
    </div>
  )
}

export default ModeButtonGroup
