import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Top from '../components/Top'
import styles from '../styles/Home.module.css'

const NwPlus: NextPage = () => {
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
                developer @ nwPlus ubc
            </strong>
            <br/><br/>
            push modifications and updates to internal tools (such as one used for hackathon evaluation)<br/>
            update hacker-facing applications such as the hacker portal <br/>
            create and/or update the websites for the three hackathons hosted by nwPlus: nwHacks, HackCamp, and cmd-f*<br/>
            work with react and firebase<br/><br/>

            visit nwPlus at <Link href="https://nwplus.io">nwplus.io🡥</Link>
          </p>
        </div>
      </main>
    </div>
  )
}

export default NwPlus
