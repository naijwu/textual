import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Top from '../components/Top'
import styles from '../styles/Home.module.css'

const NewWebsite: NextPage = () => {
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
                new personal website
            </strong>
            <br/><br/>
            what is the point of this website? simply to express
            <br/><br/>
            which, I&apos;d argue, is the point of posting on socials or making videos or wearing certain clothes<br/>
            or most of anything we do that has social implications, if not for its aesthetics<br/>
            by extension, this website will always be a &quot;work in progress&quot;<br/><br/>
            
            I think there&apos;s some powerful and necessary aspect to living that involves expressing oneself<br/>
            and are stories not the best way to share knowledge of the (/a) human(&apos;s) condition? maybe not<br/>
            but I thought it would be fun to experiment with walls of texts as a website LMAO
          </p>
        </div>
      </main>
    </div>
  )
}

export default NewWebsite
