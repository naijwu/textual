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
                development director @ nwPlus ubc
            </strong>
            <br/><br/>
            I push modifications and updates for internal tools (hackathon applicant evaluator),<br/>
            update hacker-facing applications (hacker portal), and<br/>
            create and/or update the websites for the three hackathons hosted by nwPlus: nwHacks, HackCamp, and cmd-f*.<br/>
            we work with react and firebase.<br/><br/>

            recently hired two new devs as an incoming (for 2022-23) director<br/><br/>

            basically, I push buttons, make life easier, and vibe<br/><br/>

            visit nwPlus at <Link href="https://nwplus.io">nwplus.io🡥</Link>
          </p>
        </div>
      </main>
    </div>
  )
}

export default NwPlus
