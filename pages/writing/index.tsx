import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Top from '../../components/Top'
import styles from '../../styles/Home.module.css'

const WritingIndex: NextPage = () => {
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
                writing
            </strong>
            <br /><br />
            I find writing beautiful, both when being read and being written<br />
            it grants clarity to mind for the writer and provides an intellectual journey for the reader<br /><br />

            I love writing when my writing is how I intend... but<br />
            I&apos;m not nearly as good a writer as I want to be, so I often call what I write “chicken-scratch” to not offend actual writers<br />
            or to give the impression that these writings offer insight in the way literature aims to do<br /><br />

            most these “writings” are pre first-draft writing, structureless mini thoughts with abundant grammatical errors<br />
            I usually write them in a single sitting and word vomit<br />
            they are only attempts to play with ideas, not to be taken too seriously or interpreted as absolutes that I have conviction in<br />
            I seldom return to edit these writings, although I should<br /><br />

            with that in mind, I&apos;ve jotted some thoughts <br/>
            {/* <Link href="/writing/plans">about vision, potential, plans, chaos</Link> (warning: makes absolutely no sense)<br /> */}
            <Link href="/writing/hardship">on hardship and its neccessity to living</Link><br />
            <Link href="/writing/studying">on perceived conditions for my productivity</Link><br />
            {/* <br />
            and had conversation with friends <br/>
            <Link href="/writing/conversation/june">on abortion laws + social discourse</Link><br /> */}
          </p>
        </div>
      </main>
    </div>
  )
}

export default WritingIndex
