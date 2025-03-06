import LottoBall from '../components/lotto/LottoBall'
import { useState } from 'react'

const LottoPage = () => {
  const getLottoNUms = () => {
    const lottoSet = new Set()

    while (lottoSet.size < 6) {
      let num = Math.floor(Math.random() * 45) + 1
      lottoSet.add(num)
    }
    console.log('lottoSet:', lottoSet)

    return Array.from(lottoSet)
  }

  const [nums, setNums] = useState(getLottoNUms)

  const onClick = () => {
    setNums(getLottoNUms)
  }

  return (
    <>
      <div className='container'>
        <div className='row mt-sm-5' onClick={onClick}>
          {nums &&
            nums.map((num) => {
              return <LottoBall lottoNum={num} />
            })}
        </div>
      </div>
    </>
  )
}

export default LottoPage
