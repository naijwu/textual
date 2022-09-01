import type { NextPage } from 'next'
import Head from 'next/head'
import Top from '../../../components/Top'
import styles from '../../../styles/Home.module.css'

const Keep: NextPage = () => {
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
                writings {`->`} memo
            </strong>
            <br/><br/>
            <strong>
              untitled (7-27-2022)
            </strong><br/><br/>
            do we fabricate our own hardships as a cop out to true hardships we&apos;re 
            meant to face<br/>
            (since fabrication still realizes some portion of the virtue of enduring hardship)<br/><br/><br/>

            <strong>
              mcs (7-22-2022)
            </strong><br/><br/>
            main character syndrome<br/><br/>

            a sophisticated evolution of attention seeking<br/><br/>
          </p>
        </div>
      </main>
    </div>
  )
}

export default Keep
