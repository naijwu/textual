import type { NextPage } from 'next'
import Head from 'next/head'
import Messages from '../../../components/Messages'
import Top from '../../../components/Top'
import styles from '../../../styles/Home.module.css'

const convo = [
    {
        me: true,
        message: ''
    }
]

const JuneConversation: NextPage = () => {
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
                writings {`->`} conversations {`->`} abortion law
            </strong>
            <br /><br />
            <Messages
                messages={convo} />
          </p>
        </div>
      </main>
    </div>
  )
}

export default JuneConversation
