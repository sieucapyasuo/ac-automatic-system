import { Link } from 'react-router-dom'

import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone'

import '@/assets/css/components/LinkWizard/LinkSuccessfully.css'

const LinkSuccessfully: React.FC = () => {
  return (
    <div className='link-successfully'>
      <CheckCircleTwoToneIcon className='success-icon' />
      <h1>Successfully link new air conditioner !</h1>
      <Link to='/devices'>
        <span>Go back to devices management</span>
      </Link>
    </div>
  )
}

export default LinkSuccessfully
