import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Top from '../components/Top'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
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
          based in Vancouver, I&apos;m a second-year science <Link href="/undergrad-at-ubc">undergrad @ ubc</Link> (currently on gap).
          <br/>when not building <Link href="/mainstream">mainstream.so</Link>, I&apos;m developing for <Link href="/nwplus">nwPlus ubc</Link> or going for a drive.
          <br/>
          <br/>early highschool I delved into web design and built <Link href="/websites">several websites</Link> (for conferences, charities, businesses).
          <br/>I have a habit of starting projects randomly (most are small, <Link href="/weekend-projects">weekend projects</Link>).
          <br/>some <Link href="/projects">projects</Link> (more polished than others) include <Link href="https://internetspace.co">internetspace.co🡥</Link>, <Link href="https://wordseveryday.net">wordseveryday.net🡥</Link>, and <Link href="https://opengavel.app">opengavel.app🡥</Link>.
          <br/>I love gamifying everything so these are my <Link href="/stats">stats</Link>.
          <br/><br/>
          these days, I&apos;ve been learning of and building in crypto &amp; web3.
          <br/>I&apos;m interested in the financial markets, <Link href="/writing">writing</Link>, and systems.
          <br/>I like to think and create, I love people and ideas.
          <br/><br/>
          cheers
          </p>
          <p className="lower">
            <br/>
            this site is an expression (of what?)<br/>
            the detached straight-edge font on suspicious contrast...<br/><br />
            &quot;plain looking&quot;<br/>
            &quot;unprofessional&quot;<br />
            &quot;you should add some images&quot;<br/><br />
            but the site is what it is<br />
            regardless of anything anyone tells it what it should be
          </p>
        </div>
      </main>
    </div>
  )
}

export default Home
