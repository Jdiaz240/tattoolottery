import Countdown from 'react-countdown';

export default function Timer() {
    let endDate = new Date('2023-05-31T23:59:59')
  return (
    <div>
        <Countdown date={endDate}>
            <p>All Done</p>
        </Countdown>
    </div>
  )
}
