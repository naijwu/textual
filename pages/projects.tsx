import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Top from '../components/Top'
import styles from '../styles/Home.module.css'

const Projects: NextPage = () => {
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
                projects
            </strong>
            <br/><br/>
            although by no means perfect, these are some of my more polished or larger projects (in chronological order):
            <br/><br/>
            <Link href="https://wordseveryday.net">wordseveryday🡥</Link> is a journaling app that encourages you to write every day<br/>
            <Link href="https://internetspace.co">internetspace🡥</Link> is a linktree clone (I thought I could make it better looking), and my method of procrastination<br/>
            <Link href="https://opengavel.app">opengavel🡥</Link> is a open-source, free MUN committee chairing program<br/><br/>

            and production web apps that have to do with solving some business need:<br/><br/>

            <span className="disabled">cahsmun crs</span> is a custom registration software for CAHSMUN<br/>
            <span className="disabled">pacificmun asmr</span> is an automated registration software for PacificMUN
          </p>
        </div>
      </main>
    </div>
  )
}

export default Projects
