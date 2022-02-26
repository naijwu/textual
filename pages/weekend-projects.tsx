import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Top from '../components/Top'
import styles from '../styles/Home.module.css'

const WeekendProjects: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>jaewuchun</title>
        <meta name="description" content="on the net" />
      </Head>

      <main className={styles.main}>
        <Top />

        <div className="page">
          <p>
            <strong>
                weekend projects
            </strong>
            <br/><br/>
            by chronological order, these are some of my smaller projects:
            <br/><br/>
            <span className="disabled">
                maxerp
            </span> is a bespoke light and modular ERP and invoicing program<br/>
            <Link href="https://github.com/naijwu/cahsmun-campus">cahsmun campus🡥</Link> is a fancy directory of zoom meetings for a conference<br/>
            <Link href="https://github.com/naijwu/cahsmun-ipc">cahmun ipc🡥</Link> is a MERN stack article system<br/>
            <Link href="https://tendies-calculator.web.app">tendies calculator🡥</Link> is a simple pseudo (no greeks) options tendies (profits) calculator<br/>
            <Link href="https://github.com/naijwu/fullerpicture">the fuller picture🡥</Link> is a chrome extension that helps you seek different political perspectives on news<br/>
            <Link href="https://github.com/naijwu/create-gifs">convert to gif🡥</Link> converts video into gifs (uses webassembly ffmpeg!)<br/>
            <Link href="https://github.com/naijwu/networthtrack">net worth tracker🡥</Link> is a mobile app that shows tracks your net worth (manually updated)<br/>
            <Link href="https://github.com/naijwu/pacificmun-ipc">pacificmun ipc🡥</Link> news site is an article system based on PHP/MySQL<br/>
            <Link href="https://github.com/naijwu/pacificmun-battleship">pacificmun battleship🡥</Link> is a 5v5 customized battleship-like game<br/>
          </p>
        </div>
      </main>
    </div>
  )
}

export default WeekendProjects
