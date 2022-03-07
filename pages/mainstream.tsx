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
            not much to say yet other than am working on this web3 app with a friend
            <br/><br/>
            will add more here when more happens
            <br/><br/>
            visit it at <Link href="https://mainstream.so">democracy.so🡥</Link> (nothings there)
          </p>
        </div>
      </main>
    </div>
  )
}

export default Mainstream
