import { useState } from 'react'
import RspCard from '../components/rsp/RspCard'
import rock from '../../assets/rsp/rock.jpg'
import scissor from '../../assets/rsp/scissor.jpg'
import paper from '../../assets/rsp/paper.jpg'

const RspPage = () => {
  const [players, setPlayers] = useState([
    {
      id: 1,
      usename: '당신',
      arrRsp: ['가위', '바위', '보'],
      img: 'https://taegon.kim/wp-content/uploads/2018/05/image-5.png',
    },
    {
      id: 2,
      usename: '심판',
      arrRsp: [],
      img: 'https://taegon.kim/wp-content/uploads/2018/05/image-5.png',
    },
    {
      id: 3,
      usename: '컴퓨터',
      arrRsp: ['랜덤생성'],
      img: 'https://taegon.kim/wp-content/uploads/2018/05/image-5.png',
    },
  ])

  const handleClick = (event) => {
    console.log(event.target.innerText)

    const rspArr = ['가위', '바위', '보']
    const imgArr = [scissor, rock, paper]

    let user_rsp = rspArr.indexOf(event.target.innerText)
    let com_rsp = Math.floor(Math.random() * 3)

    let result = getResult(event.target.innerText, rspArr[com_rsp])

    // 화면 갱신을 위한 설정
    let copyPlayers = [...players]

    copyPlayers[1].arrRsp = [result]
    copyPlayers[2].arrRsp = [rspArr[com_rsp]]

    // 이미지 세팅
    copyPlayers[0].img = [imgArr[user_rsp]]
    copyPlayers[2].img = [imgArr[com_rsp]]

    setPlayers(copyPlayers)
  }

  function getResult(you, computer) {
    let result = '졌습니다.'

    if (you == computer) return '비겼습니다'

    if (
      (you == '가위' && computer == '보') ||
      (you == '바위' && computer == '가위') ||
      (you == '보' && computer == '바위')
    ) {
      result = '당신이 이겼습니다.'
    }

    return result
  }

  return (
    <>
      <main>
        <div className='container mt-5'>
          <div className='row'>
            {players &&
              players.map((player) => {
                return <RspCard player={player} onClick={handleClick} />
              })}
          </div>
        </div>
      </main>
    </>
  )
}

export default RspPage
