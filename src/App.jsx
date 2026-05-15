import { useState, useEffect } from 'react'

export default function OldGenVsNewGen() {
  const [activePage, setActivePage] = useState('Home')

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2026-07-03T19:00:00').getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        seconds: Math.floor(
          (distance % (1000 * 60)) / 1000
        )
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const menu = [
  'Home',
  'Storico',
  'Regolamento',
  'Old Gen',
  'New Gen',
  'Players',
  'Old Gen Players',
  'Campo Millenium'
]
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

const oldGenPlayers = [
  {
    name: 'Antonio Ascione',
    goals: 2,
    assists: 2,
    mvp: 0,
    role: 'ATTACCANTE'
  },
  {
    name: 'Pasquale Ascione',
    goals: 1,
    assists: 1,
    mvp: 0,
    role: 'CENTROCAMPISTA'
  },
  {
    name: 'Domenico Di Martino',
    goals: 0,
    assists: 1,
    mvp: 0,
    role: 'DIFENSORE'
  },
  {
    name: 'Alessandro Nocerino',
    goals: 2,
    assists: 0,
    mvp: 0,
    role: 'ATTACCANTE'
  },
  {
    name: 'Parente Mimmo',
    goals: 0,
    assists: 0,
    mvp: 0,
    role: 'PORTIERE'
  }
]
  return (
    <div className="min-h-screen bg-[#020817] text-white overflow-x-hidden">

      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.35),transparent_45%)] pointer-events-none" />

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#06152f]/80 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between flex-wrap gap-4">

          <h1 className="text-3xl md:text-4xl font-black tracking-wide bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            OLD GEN VS NEW GEN 🔥
          </h1>

          <nav className="flex flex-wrap gap-3">
            {menu.map((item) => (
              <button
                key={item}
                onClick={() => setActivePage(item)}
                className={`px-5 py-2 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  activePage === item
                    ? 'bg-blue-600 border-blue-400 shadow-2xl shadow-blue-500/30'
                    : 'border-blue-400/40 bg-blue-500/10 hover:bg-blue-500'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {activePage === 'Home' && (
        <>
          <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20">

            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />

            <div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">

              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/40 bg-blue-500/10 mb-6">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  FOOTBALL EVENT
                </div>

                <h2 className="text-6xl md:text-8xl font-black leading-none mb-8">
                  OLD GEN
                  <br />
                  <span className="text-blue-400">VS</span>
                  <br />
                  NEW GEN
                </h2>

                <p className="text-xl text-blue-100/80 leading-relaxed mb-8 max-w-xl">
                  Il match definitivo tra esperienza e nuova generazione.
                  Una sfida destinata a lasciare il segno.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setActivePage('New Gen')}
                    className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-500/30 font-bold"
                  >
                    Guarda la Formazione
                  </button>

                  <button
                    onClick={() => setActivePage('Players')}
                    className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300"
                  >
                    Player Stats
                  </button>
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />

                <div className="relative rounded-[40px] border border-blue-400/20 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(59,130,246,0.35)] max-w-lg w-full">

                  <div className="flex items-center gap-5 mb-8">
                    <img
                      src="/ascione-g.jpg"
                      alt="Ascione G"
                      className="w-28 h-28 rounded-3xl object-cover border-2 border-blue-400 shadow-2xl"
                    />

                    <div>
                      <p className="text-blue-300 tracking-[4px] text-sm mb-2">
                        PLAYER OF THE MATCH
                      </p>

                      <h3 className="text-5xl font-black mb-2">
                        ASCIONE G
                      </h3>

                      <p className="text-white/70 text-lg">
                        Capitano • Miglior giocatore attuale
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-3xl bg-blue-500/10 border border-blue-400/20 p-6 text-center">
                      <div className="text-5xl font-black text-blue-300 mb-2">14</div>
                      <div className="text-white/70">GOAL</div>
                    </div>

                    <div className="rounded-3xl bg-blue-500/10 border border-blue-400/20 p-6 text-center">
                      <div className="text-5xl font-black text-blue-300 mb-2">6</div>
                      <div className="text-white/70">ASSIST</div>
                    </div>

                    <div className="rounded-3xl bg-blue-500/10 border border-blue-400/20 p-6 text-center">
                      <div className="text-5xl font-black text-blue-300 mb-2">1</div>
                      <div className="text-white/70">MVP</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-6 py-20">
            <div className="max-w-6xl mx-auto">

              <div className="grid lg:grid-cols-2 gap-10 items-center">

                <div className="rounded-[40px] overflow-hidden border border-blue-400/20 shadow-[0_0_60px_rgba(59,130,246,0.25)]">
                  <img
                    src="/campo.jpg"
                    alt="Campo Millenium"
                    className="w-full h-[500px] object-cover"
                  />
                </div>

                <div className="rounded-[40px] border border-blue-500/20 bg-white/5 backdrop-blur-xl p-10 shadow-2xl">

                  <p className="text-blue-300 tracking-[5px] mb-4">
                    LIVE COUNTDOWN
                  </p>

                  <h3 className="text-5xl font-black mb-6">
                    CAMPO MILLENIUM
                  </h3>

                  <p className="text-white/70 text-lg mb-8">
                    Via Plinio, Boscoreale 🔥
                  </p>

                  <a
                    href="https://maps.app.goo.gl/9kz7n2bq7G5Qx9tV6"
                    target="_blank"
                    className="inline-block mb-10 px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition-all duration-300 font-bold"
                  >
                    Apri posizione Maps
                  </a>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                    <div className="rounded-3xl bg-blue-500/10 border border-blue-400/20 p-6 text-center">
                      <div className="text-5xl font-black text-blue-300 mb-2">
                        {timeLeft.days}
                      </div>
                      <div className="text-white/70 tracking-[2px]">
                        GIORNI
                      </div>
                    </div>

                    <div className="rounded-3xl bg-blue-500/10 border border-blue-400/20 p-6 text-center">
                      <div className="text-5xl font-black text-blue-300 mb-2">
                        {timeLeft.hours}
                      </div>
                      <div className="text-white/70 tracking-[2px]">
                        ORE
                      </div>
                    </div>

                    <div className="rounded-3xl bg-blue-500/10 border border-blue-400/20 p-6 text-center">
                      <div className="text-5xl font-black text-blue-300 mb-2">
                        {timeLeft.minutes}
                      </div>
                      <div className="text-white/70 tracking-[2px]">
                        MINUTI
                      </div>
                    </div>

                    <div className="rounded-3xl bg-blue-500/10 border border-blue-400/20 p-6 text-center">
                      <div className="text-5xl font-black text-blue-300 mb-2">
                        {timeLeft.seconds}
                      </div>
                      <div className="text-white/70 tracking-[2px]">
                        SECONDI
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>
        </>
      )}

      {activePage === 'New Gen' && (
        <section className="px-6 py-20">
          <div className="max-w-5xl mx-auto text-center">

            <img
              src="/newgen-logo.png"
              alt="New Gen"
              className="w-40 mx-auto mb-8"
            />

            <h2 className="text-6xl font-black mb-4 text-blue-300">
              NEW GEN
            </h2>

            <img
              src="/newgen-formation.png"
              alt="New Gen Formation"
              className="mx-auto rounded-[40px] border border-blue-400/20"
            />
          </div>
        </section>
      )}

      {activePage === 'Old Gen' && (
        <section className="px-6 py-20">
          <div className="max-w-5xl mx-auto text-center">

            <img
              src="/oldgen-logo.png"
              alt="Old Gen"
              className="w-40 mx-auto mb-8"
            />

            <h2 className="text-6xl font-black mb-6">
              OLD GEN
            </h2>

            <img
              src="/oldgen-formation.png"
              alt="Old Gen Formation"
              className="mx-auto rounded-[40px] border border-white/10"
            />
          </div>
        </section>
      )}

      {activePage === 'Players' && (
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-14">
              <h2 className="text-6xl font-black">
                NEW GEN PLAYERS
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {playerStats.map((player) => (
                <div
                  key={player.name}
                  className="rounded-[35px] border border-blue-400/20 bg-white/5 backdrop-blur-xl p-8"
                >
                  <div className="flex items-center gap-5 mb-8">

                    <img
                      src={player.image}
                      alt={player.name}
                      className="w-24 h-24 rounded-3xl object-cover border-2 border-blue-400"
                    />

                    <div>
                      <h3 className="text-3xl font-black mb-2">
                        {player.name}
                      </h3>

                      <p className="text-blue-300 font-bold tracking-[2px]">
                        {player.role}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">

                    <div className="flex justify-between p-4 rounded-2xl bg-blue-500/10">
                      <span>Goals</span>
                      <span className="font-black text-blue-300">
                        {player.goals}
                      </span>
                    </div>

                    <div className="flex justify-between p-4 rounded-2xl bg-blue-500/10">
                      <span>Assist</span>
                      <span className="font-black text-blue-300">
                        {player.assists}
                      </span>
                    </div>

                    <div className="flex justify-between p-4 rounded-2xl bg-blue-500/10">
                      <span>MVP</span>
                      <span className="font-black text-blue-300">
                        {player.mvp}
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
{activePage === 'Storico' && (
  <section className="px-6 py-20">

    <div className="max-w-6xl mx-auto">

      <div className="text-center mb-14">

        <h2 className="text-6xl font-black">
          STORICO PARTITE
        </h2>

      </div>

      <div className="rounded-[40px] border border-blue-400/20 bg-white/5 backdrop-blur-xl p-10">

        <h3 className="text-5xl font-black mb-6">
          PARTITA 3 LUGLIO 2025
        </h3>

        <p className="text-white/70 text-xl mb-8">
          Prima edizione ufficiale Old Gen VS New Gen 🔥
        </p>

        <div className="overflow-hidden rounded-[30px] mb-10 border border-blue-400/20">

          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/KYRcdeSXmbo"
            title="Old Gen vs New Gen"
            frameBorder="0"
            allowFullScreen
          ></iframe>

        </div>

      </div>

    </div>

  </section>
)}
      {activePage === 'Regolamento' && (
        <section className="px-6 py-24">
          <div className="max-w-5xl mx-auto">

            <div className="rounded-[40px] border border-blue-400/20 bg-white/5 backdrop-blur-xl p-10">

              <div className="text-center mb-12">
                <h3 className="text-5xl font-black">
                  REGOLE DEL MATCH
                </h3>
              </div>

              <div className="space-y-6">
                {[
                  'Rispetto assoluto tra tutti i giocatori.',
                  'No falli inutili.',
                  'Fair play prima di tutto.',
                  'Divertimento obbligatorio.'
                ].map((rule, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-5 p-6 rounded-3xl bg-blue-500/10 border border-blue-400/20"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-blue-500 flex items-center justify-center font-black text-xl shrink-0">
                      {index + 1}
                    </div>

                    <p className="text-lg text-white/85 leading-relaxed">
                      {rule}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
{activePage === 'Old Gen Players' && (
  <section className="px-6 py-20">

    <div className="max-w-6xl mx-auto">

      <div className="text-center mb-14">

        <h2 className="text-6xl font-black">
          OLD GEN PLAYERS 🏆
        </h2>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {oldGenPlayers.map((player) => (

          <div
            key={player.name}
            className="rounded-[35px] border border-blue-400/20 bg-white/5 backdrop-blur-xl p-8"
          >

            <h3 className="text-3xl font-black mb-2">
              {player.name}
            </h3>

            <p className="text-blue-300 font-bold tracking-[2px] mb-8">
              {player.role}
            </p>

            <div className="space-y-4">

              <div className="flex justify-between p-4 rounded-2xl bg-blue-500/10">
                <span>Goals</span>
                <span className="font-black text-blue-300">
                  {player.goals}
                </span>
              </div>

              <div className="flex justify-between p-4 rounded-2xl bg-blue-500/10">
                <span>Assist</span>
                <span className="font-black text-blue-300">
                  {player.assists}
                </span>
              </div>

              <div className="flex justify-between p-4 rounded-2xl bg-blue-500/10">
                <span>MVP</span>
                <span className="font-black text-blue-300">
                  {player.mvp}
                </span>
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  </section>
)}
      {activePage === 'Campo Millenium' && (
        <section className="px-6 pb-24 pt-20">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-10">

              <h3 className="text-5xl font-black mb-4">
                CAMPO MILLENIUM
              </h3>

              <p className="text-xl text-white/70 mb-6">
                Costo: 5€ a persona
              </p>

              <a
                href="https://maps.app.goo.gl/9kz7n2bq7G5Qx9tV6"
                target="_blank"
                className="inline-block px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition-all duration-300 font-bold"
              >
                Apri su Google Maps
              </a>
            </div>

            <div className="overflow-hidden rounded-[40px] border border-blue-400/20 shadow-2xl">
              <img
                src="/campo.jpg"
                alt="Campo"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-white/50">
            OLD GEN VS NEW GEN © 2026
          </p>

          <div className="flex gap-4 text-white/50">
            <span>⚽ Football Match</span>
            <span>🔥 Next Generation Clash</span>
          </div>
        </div>
      </footer>

    </div>
  )
}
