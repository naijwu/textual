import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Top from '../components/Top'
import styles from '../styles/Home.module.css'

const Cohear: NextPage = () => {
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
                building cohear.io
            </strong>
            <br/><br/>
            cohear is short for &apos;cooperative hearing&apos;, while intentionally being spelt similar to &apos;cochear&apos; as in cochlear implants.<br/><br/>
            with a friend, we&apos;re building a support hub for people with cochlear implants: providing resources and coordinating mentorship.<br/><br/>
            will add more here when more&apos;s done.
          </p>
        </div>
      </main>
    </div>
  )
}

export default Cohear
