import WaitingForSignal from './WaitingForSignal'

import '@/assets/css/components/LinkWizard/LinkWizard.css'

const LinkWizard: React.FC = () => {
  const phaseList = [
    { step: 1, title: 'Device Information Input' },
    { step: 2, title: 'Default Profile Detection' },
    { step: 3, title: 'Cooling Signal Detection' },
    { step: 4, title: 'Moisturizing Signal Detection' },
    { step: 5, title: 'Linked Successfully' }
  ]

  return (
    <div className='wizard-container'>
      <div className='phase-view'>
        <WaitingForSignal />
      </div>
      <div className='process-tracker'>
        {phaseList.map((phase, id) => (
          <div key={phase.step} className='phase pending'>
            <div className='col1'>
              <div className='step done'>{phase.step}</div>
              {id != phaseList.length - 1 ? (
                <div className='divider'></div>
              ) : null}
            </div>
            <div className='col2'>
              <div className='title'>{phase.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LinkWizard
