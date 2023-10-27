import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Top from '../components/Top'
import styles from '../styles/Home.module.css'

const Mainstream: NextPage = () => {
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
                building mainstream.so
            </strong>
            <br/><br/>
            mainstream is an experiment lab for servicing internet native communities
            <br/><br/>
            we've closed our pre-seed round (led by Lemniscap, joined by Samsung Next + many amazing angels) to focus on onboarding organizations to the platform
            <br/><br/>
            mainstream client is a modular, end-to-end governance platform for DAOs. Discuss proposals, have off-chain voting (Moloch, Snapshot, etc.), and then on-chain voting (Bravo, etc.) all in a package that makes sense and is efficient
            <br/><br/>
            mainstream pager can notify you (Slack, Discord, email, etc.) based on community events (proposal starting, voting ending soon, etc.)
            <br/><br/>
            pager for protocols gives community core members a convenient way to blast updates to community members
            <br/><br/>
            visit our client landing <Link href="https://mainstream.so">mainstream.so🡥</Link><br/>
            visit our Pager landing <Link href="https://getpager.xyz">mainstream.so🡥</Link>
          </p>
        </div>
      </main>
    </div>
  )
}

export default Mainstream
