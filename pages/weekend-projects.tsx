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
            <Link href="https://github.com/naijwu/cahsmun-ipc">cahmun ipc🡥</Link> is a MERN stack article system {`<->`} <Link href="https://www.figma.com/file/Q4gIVkTe1bq5CdVBtXEIY8/CIPC?node-id=0%3A1">figma🡥</Link> <br/>
            <Link href="https://tendies-calculator.web.app">tendies calculator🡥</Link> is a simple pseudo (no greeks) options tendies (profits) calculator<br/>
            <Link href="https://github.com/naijwu/fullerpicture">the fuller picture🡥</Link> is a chrome extension that helps you seek different political perspectives on news {`<->`} <Link href="https://www.figma.com/file/tlUDQTGBq02WNc37TQ8qNp/The-Other-Side?node-id=0%3A1">figma🡥</Link><br/>
            <Link href="https://github.com/naijwu/create-gifs">convert to gif🡥</Link> converts video into gifs (uses webassembly ffmpeg!)<br/>
            <Link href="https://github.com/naijwu/networthtrack">net worth tracker🡥</Link> is a mobile app that shows tracks your net worth (manually updated)<br/>
            <Link href="https://github.com/naijwu/pacificmun-ipc">pacificmun ipc🡥</Link> news site is an article system based on PHP/MySQL<br/>
            <Link href="https://github.com/naijwu/pacificmun-battleship">pacificmun battleship🡥</Link> is a 5v5 customized battleship-like game
            <br/><br/>
            I also have some projects that I&apos;ve started but discontinued progress:
            <br/><br/>
            <Link href="https://github.com/naijwu/hrulmk">hrulmk🡥</Link> is a texting-based reflection app {`<->`} <Link href="https://www.figma.com/file/2qZPaFqaaPfiqqVX8Fpp9f/hrulmk?node-id=0%3A1">figma🡥</Link><br/>
            <span className="disabled">notetrip</span> is a trip-based journalling app (I used to like exploring suburbs) {`<->`} <Link href="https://www.figma.com/file/Cg87L6lLSB5uYDSwMN5WVI/Notetrip?node-id=0%3A1">figma🡥</Link>
          </p>
        </div>
      </main>
    </div>
  )
}

export default WeekendProjects
