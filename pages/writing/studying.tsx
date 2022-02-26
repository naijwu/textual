import type { NextPage } from 'next'
import Head from 'next/head'
import Top from '../../components/Top'
import styles from '../../styles/Home.module.css'

const Studying: NextPage = () => {
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
                writings {`->`} conditions for productivity
            </strong>
            <br/><br/>
            as bad as it sounds, most (all) of my time studying were done on the day before exams<br/>
            but on a positive note, these studying sessions were wildly productive<br/>
            I took note on what I felt enabled me to study this well:<br/><br/>

            1. feel the need to study (time pressure, day before exam; push towards studying)<br/>
            2. know what to study (direct energy of the former)<br/>
            3. *useful* resources to study (good textbook, good yt videos)<br/>
            4. &quot;wins&quot; in studying; studying breakthroughs e.g. correct practice answers (overcome fatigue; signals actual progress)<br/>
            5. fuel for studying (corollary to &quot;wins&quot;), e.g. water, food, gum<br/>
            6. nighttime???<br/>
            7. know when to rest
          </p>
        </div>
      </main>
    </div>
  )
}

export default Studying
