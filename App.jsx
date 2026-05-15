import { useState } from 'react'

export default function OldGenVsNewGen() {
  const [activePage, setActivePage] = useState('Home')

  const menu = [
    'Home',
    'Regolamento',
    'Old Gen',
    'New Gen',
    'Players',
    'Campo Millenium'
  ]

  const playerStats = [
    {
      name: 'Ascione G',
      team: 'New Gen',
      goals: 14,
      assists: 6,
      mvp: 1,
      role: 'CAPITANO',
      image: '/ascione-g.jpg'
    },
    {
      name: 'Paduano',
      team: 'New Gen',
      goals: 5,
      assists: 4,
      mvp: 0,
      role: 'ATTACCANTE',
      image: '/paduano.jpg'
    },
    {
      name: 'Sorrentino',
      team: 'New Gen',
      goals: 3,
      assists: 2,
      mvp: 0,
      role: 'DIFENSORE',
      image: '/sorrentino.jpg'
    },
    {
      name: 'Nocerino',
      team: 'New Gen',
      goals: 2,
      assists: 1,
      mvp: 0,
      role: 'CENTROCAMPISTA',
      image: '/nocerino.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-[#020817] text-white p-8">
      <h1 className="text-5xl font-black text-center mb-10">
        OLD GEN VS NEW GEN
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {menu.map((item) => (
          <button
            key={item}
            onClick={() => setActivePage(item)}
            className="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition-all"
          >
            {item}
          </button>
        ))}
      </div>

      {activePage === 'Home' && (
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-blue-300 mb-4">PLAYER OF THE MOMENT</p>

            <h2 className="text-6xl font-black mb-4">
              ASCIONE G
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              Capitano • Miglior giocatore attuale
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-500/10 rounded-3xl p-6 text-center">
                <div className="text-5xl font-black text-blue-300">14</div>
                <div>GOAL</div>
              </div>

              <div className="bg-blue-500/10 rounded-3xl p-6 text-center">
                <div className="text-5xl font-black text-blue-300">6</div>
                <div>ASSIST</div>
              </div>

              <div className="bg-blue-500/10 rounded-3xl p-6 text-center">
                <div className="text-5xl font-black text-blue-300">1</div>
                <div>MVP</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/ascione-g.jpg"
              alt="Ascione G"
              className="rounded-[40px] w-full max-w-md border-4 border-blue-500"
            />
          </div>
        </div>
      )}

      {activePage === 'New Gen' && (
        <div className="text-center">
          <img
            src="/newgen-logo.png"
            className="w-40 mx-auto mb-8"
          />

          <img
            src="/newgen-formation.png"
            className="mx-auto rounded-[40px] max-w-md w-full"
          />
        </div>
      )}

      {activePage === 'Players' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {playerStats.map((player) => (
            <div
              key={player.name}
              className="bg-white/5 border border-blue-500/20 rounded-[35px] p-6"
            >
              <img
                src={player.image}
                alt={player.name}
                className="w-24 h-24 rounded-3xl object-cover mb-6"
              />

              <h3 className="text-3xl font-black mb-2">
                {player.name}
              </h3>

              <p className="text-blue-300 mb-6">
                {player.role}
              </p>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Goals</span>
                  <span>{player.goals}</span>
                </div>

                <div className="flex justify-between">
                  <span>Assist</span>
                  <span>{player.assists}</span>
                </div>

                <div className="flex justify-between">
                  <span>MVP</span>
                  <span>{player.mvp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
