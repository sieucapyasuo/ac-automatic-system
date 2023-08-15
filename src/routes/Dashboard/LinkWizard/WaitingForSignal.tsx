import SettingsRemoteTwoToneIcon from '@mui/icons-material/SettingsRemoteTwoTone'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'

import '@/assets/css/components/LinkWizard/WaitingForSignal.css'

const WaitingForSignal: React.FC = () => {
  return (
    <div className='waiting-for-signal'>
      <h1>Waiting for signal</h1>
      <span className='instruction'>
        Set the A/C temperature between 22°C to 25°C and use a low fan speed
        setting for a suitable moisturizing profile.
      </span>
      <SettingsRemoteTwoToneIcon className='remote-icon' />
      <Box className='linear-progress' sx={{ width: '20%' }}>
        <LinearProgress color='success' />
      </Box>
    </div>
  )
}

export default WaitingForSignal
