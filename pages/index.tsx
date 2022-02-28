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
          based in Vancouver, I&apos;m a first-year science <Link href="/undergrad-at-ubc">undergrad @ ubc</Link>
          <br/>when not <Link href="/writing/studying">studying</Link>, I spend time as a developer for <Link href="/nwplus">nwPlus ubc</Link> and building <Link href="/democracy">democracy.so</Link>
          <br/>Early highschool I delved into web design and built <Link href="/websites">several websites</Link> (for conferences, charities, businesses)
          <br/>I have a habit of starting projects randomly (most are small, <Link href="/weekend-projects">weekend projects</Link>)
          <br/>some <Link href="/projects">projects</Link> (more polished than others) include <Link href="https://internetspace.co">internetspace.co🡥</Link>, <Link href="https://wordseveryday.net">wordseveryday.net🡥</Link>, and <Link href="https://opengavel.app">opengavel.app🡥</Link>
          <br/><br/>
          these days, I&apos;ve been learning of and building in crypto &amp; web3
          <br/>I&apos;m interested in the financial markets, <Link href="/writing">writing</Link>, and systems/infrastructure design
          <br/>I like to think and create
          <br/>I love people and ideas
          <br/><br/>
          cheers
          </p>
        </div>
      </main>
    </div>
  )
}

export default Home
