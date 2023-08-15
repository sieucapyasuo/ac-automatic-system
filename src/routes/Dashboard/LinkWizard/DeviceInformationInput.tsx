import '@/assets/css/components/LinkWizard/DeviceInformationInput.css'

const DeviceInformationInput: React.FC = () => {
  return (
    <div className='device-information-input'>
      <h1>Fill in base information</h1>
      <span className='description'>
        Provide name and brand for new air conditioner
      </span>
      <div className='input-container'>
        <label>Device name</label>
        <input className='device-name'></input>
      </div>
      <div className='input-container'>
        <label>Brand</label>
        <select>
          <option value='someOption'>Some option</option>
          <option value='otherOption'>Other option</option>
        </select>
      </div>
      <div className='submit-button'>SUBMIT</div>
    </div>
  )
}

export default DeviceInformationInput
