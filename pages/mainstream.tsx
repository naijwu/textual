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
            launched closed beta!
            <br/><br/>
            mainstream is a modular, end-to-end governance platform for DAOs. Discuss proposals, have off-chain voting (Moloch, Snapshot, etc.), and then on-chain voting (Bravo, etc.) all in a package that makes sense and is efficient
            <br/><br/>
            currently closing our pre-seed round (led by Lemniscap, joined by Samsung Next + many amazing angels) to focus on onboarding organizations to the platform
            <br/><br/>
            medium to long term, we want to offer deep treasury + delegation insight,
            as well as explore metagovernance + cross-chain governance
            <br/><br/>
            exciting!
            <br/><br/>
            visit the landing at <Link href="https://mainstream.so">mainstream.so🡥</Link>
          </p>
        </div>
      </main>
    </div>
  )
}

export default Mainstream
