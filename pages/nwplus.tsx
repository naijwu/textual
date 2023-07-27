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
                treasurer @ nwPlus 
            </strong><br/>
            {`(Mar 23 ~ Present)`}
            <br/><br/>

            set budgets, process payments, talk with AMS. Was told that this role is depressing,<br/>
            but maybe because of my temperment and interests, I{`'`}ve been enjoying it so far

            <br/><br/><br/>
          </p>
          <p>
            <strong>
                development director @ nwPlus
            </strong><br/>
            {`(Mar 22 ~ Mar 23)`}
            <br/><br/>

            hired two new devs as an incoming (for 2022-23) director<br/><br/>
            <br/>
          </p>
          <p>
            <strong>
              developer @ nwPlus 
            </strong><br/>
            {`(Oct 21 ~ Feb 22)`}
            
            <br/><br/>
            I pushed modifications and updates for internal tools (hackathon applicant evaluator),<br/>
            update hacker-facing applications (hacker portal), and<br/>
            create and/or update the websites for nwHacks, HackCamp, and cmd-f*.<br/>
            we work with react and firebase.<br/><br/>

            visit nwPlus at <Link href="https://nwplus.io">nwplus.io🡥</Link>
          </p>
        </div>
      </main>
    </div>
  )
}

export default NwPlus
