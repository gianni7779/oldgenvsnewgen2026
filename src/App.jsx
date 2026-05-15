import { useState } from 'react'

export default function App() {

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

  const buttonStyle = {
    background:'#2563eb',
    color:'white',
    border:'none',
    padding:'14px 24px',
    borderRadius:'15px',
    cursor:'pointer',
    fontWeight:'bold',
    fontSize:'16px'
  }

  return (
    <div style={{
      minHeight:'100vh',
      background:'#020817',
      color:'white',
      fontFamily:'Arial',
      padding:'30px'
    }}>

      <h1 style={{
        textAlign:'center',
        fontSize:'65px',
        marginBottom:'50px',
        fontWeight:'bold'
      }}>
        OLD GEN VS NEW GEN 🔥
      </h1>

      <div style={{
        display:'flex',
        justifyContent:'center',
        gap:'20px',
        marginBottom:'60px',
        flexWrap:'wrap'
      }}>

        <button
          style={buttonStyle}
          onClick={() => setActivePage('Home')}
        >
          Home
        </button>

        <button
          style={buttonStyle}
          onClick={() => setActivePage('New Gen')}
        >
          New Gen
        </button>

        <button
          style={buttonStyle}
          onClick={() => setActivePage('Players')}
        >
          Players
        </button>

      </div>

      {activePage === 'Home' && (

        <div style={{
          display:'grid',
          gridTemplateColumns:'1fr 1fr',
          gap:'50px',
          alignItems:'center'
        }}>

          <div>

            <p style={{
              color:'#60a5fa',
              letterSpacing:'3px'
            }}>
              PLAYER OF THE MOMENT
            </p>

            <h2 style={{
              fontSize:'75px',
              margin:'20px 0',
              fontWeight:'bold'
            }}>
              ASCIONE G
            </h2>

            <p style={{
              color:'#d1d5db',
              fontSize:'24px',
              marginBottom:'40px'
            }}>
              Capitano • Miglior giocatore attuale
            </p>

            <div style={{
              display:'flex',
              gap:'20px',
              flexWrap:'wrap'
            }}>

              <div style={{
                background:'#111827',
                padding:'25px',
                borderRadius:'25px',
                minWidth:'120px',
                textAlign:'center'
              }}>
                <h1 style={{
                  fontSize:'50px',
                  color:'#60a5fa'
                }}>
                  14
                </h1>

                <p>GOAL</p>
              </div>

              <div style={{
                background:'#111827',
                padding:'25px',
                borderRadius:'25px',
                minWidth:'120px',
                textAlign:'center'
              }}>
                <h1 style={{
                  fontSize:'50px',
                  color:'#60a5fa'
                }}>
                  6
                </h1>

                <p>ASSIST</p>
              </div>

              <div style={{
                background:'#111827',
                padding:'25px',
                borderRadius:'25px',
                minWidth:'120px',
                textAlign:'center'
              }}>
                <h1 style={{
                  fontSize:'50px',
                  color:'#60a5fa'
                }}>
                  1
                </h1>

                <p>MVP</p>
              </div>

            </div>

          </div>

          <div>

            <img
              src="/ascione-g.jpg"
              style={{
                width:'100%',
                borderRadius:'40px',
                objectFit:'cover'
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
              width:'170px',
              marginBottom:'40px'
            }}
          />

          <h2 style={{
            fontSize:'60px',
            marginBottom:'40px'
          }}>
            NEW GEN FORMATION
          </h2>

          <img
            src="/newgen-formation.png"
            style={{
              width:'450px',
              maxWidth:'100%',
              borderRadius:'40px'
            }}
          />

        </div>

      )}

      {activePage === 'Players' && (

        <div>

          <h2 style={{
            textAlign:'center',
            fontSize:'60px',
            marginBottom:'50px'
          }}>
            PLAYER STATS
          </h2>

          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',
            gap:'30px'
          }}>

            {playerStats.map((player) => (

              <div
                key={player.name}
                style={{
                  background:'#111827',
                  padding:'25px',
                  borderRadius:'35px'
                }}
              >

                <img
                  src={player.image}
                  style={{
                    width:'120px',
                    height:'120px',
                    objectFit:'cover',
                    borderRadius:'25px',
                    marginBottom:'20px'
                  }}
                />

                <h2 style={{
                  fontSize:'35px'
                }}>
                  {player.name}
                </h2>

                <p style={{
                  color:'#60a5fa',
                  marginBottom:'20px',
                  fontWeight:'bold'
                }}>
                  {player.role}
                </p>

                <p style={{fontSize:'20px'}}>
                  ⚽ Goals: {player.goals}
                </p>

                <p style={{fontSize:'20px'}}>
                  🎯 Assist: {player.assists}
                </p>

                <p style={{fontSize:'20px'}}>
                  🏆 MVP: {player.mvp}
                </p>

              </div>

            ))}

          </div>

        </div>

      )}

    </div>
  )
}
