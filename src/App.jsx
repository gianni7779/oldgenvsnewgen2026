import { useState } from 'react'

export default function OldGenVsNewGen() {

  const [activePage, setActivePage] = useState('Home')

  const playerStats = [
    {
      name: 'Ascione G',
      goals: 14,
      assists: 6,
      mvp: 1,
      role: 'CAPITANO',
      image: '/ascione-g.jpg'
    },
    {
      name: 'Paduano',
      goals: 5,
      assists: 4,
      mvp: 0,
      role: 'ATTACCANTE',
      image: '/paduano.jpg'
    },
    {
      name: 'Sorrentino',
      goals: 3,
      assists: 2,
      mvp: 0,
      role: 'DIFENSORE',
      image: '/sorrentino.jpg'
    },
    {
      name: 'Nocerino',
      goals: 2,
      assists: 1,
      mvp: 0,
      role: 'CENTROCAMPISTA',
      image: '/nocerino.jpg'
    }
  ]

  return (
    <div style={{
      minHeight:'100vh',
      background:'#020817',
      color:'white',
      padding:'30px'
    }}>

      <h1 style={{
        textAlign:'center',
        fontSize:'60px',
        marginBottom:'40px'
      }}>
        OLD GEN VS NEW GEN
      </h1>

      <div style={{
        display:'flex',
        justifyContent:'center',
        gap:'20px',
        marginBottom:'50px',
        flexWrap:'wrap'
      }}>

        <button onClick={() => setActivePage('Home')}>
          Home
        </button>

        <button onClick={() => setActivePage('New Gen')}>
          New Gen
        </button>

        <button onClick={() => setActivePage('Players')}>
          Players
        </button>

      </div>

      {activePage === 'Home' && (

        <div style={{
          display:'grid',
          gridTemplateColumns:'1fr 1fr',
          gap:'40px',
          alignItems:'center'
        }}>

          <div>

            <p style={{
              color:'#60a5fa'
            }}>
              PLAYER OF THE MOMENT
            </p>

            <h2 style={{
              fontSize:'70px',
              margin:'20px 0'
            }}>
              ASCIONE G
            </h2>

            <p style={{
              color:'#ccc',
              fontSize:'22px'
            }}>
              Capitano • Miglior giocatore attuale
            </p>

            <div style={{
              display:'flex',
              gap:'20px',
              marginTop:'30px'
            }}>

              <div>
                <h1>14</h1>
                <p>GOAL</p>
              </div>

              <div>
                <h1>6</h1>
                <p>ASSIST</p>
              </div>

              <div>
                <h1>1</h1>
                <p>MVP</p>
              </div>

            </div>

          </div>

          <div>

            <img
              src="/ascione-g.jpg"
              style={{
                width:'100%',
                borderRadius:'30px'
              }}
            />

          </div>

        </div>

      )}

      {activePage === 'New Gen' && (

        <div style={{
          textAlign:'center'
        }}>

          <img
            src="/newgen-logo.png"
            style={{
              width:'150px',
              marginBottom:'30px'
            }}
          />

          <img
            src="/newgen-formation.png"
            style={{
              width:'400px',
              maxWidth:'100%',
              borderRadius:'30px'
            }}
          />

        </div>

      )}

      {activePage === 'Players' && (

        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',
          gap:'30px'
        }}>

          {playerStats.map((player) => (

            <div
              key={player.name}
              style={{
                background:'#111827',
                padding:'20px',
                borderRadius:'30px'
              }}
            >

              <img
                src={player.image}
                style={{
                  width:'100px',
                  height:'100px',
                  objectFit:'cover',
                  borderRadius:'20px'
                }}
              />

              <h2>{player.name}</h2>

              <p style={{
                color:'#60a5fa'
              }}>
                {player.role}
              </p>

              <p>⚽ Goals: {player.goals}</p>
              <p>🎯 Assist: {player.assists}</p>
              <p>🏆 MVP: {player.mvp}</p>

            </div>

          ))}

        </div>

      )}

    </div>
  )
}
