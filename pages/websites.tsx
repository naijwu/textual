import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Top from '../components/Top'
import styles from '../styles/Home.module.css'

const Websites: NextPage = () => {
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
                website creations
            </strong>
            <br/><br/>
            looking back, I went kind of hard with making a bunch of websites in highschool<br/>
            these are several I&apos;ve designed and coded<br/><br/>
            
            <Link href="https://iydi.org">int&apos;l youth debate initiative🡥</Link> was for a debate education-focused non-profit<br/>
            <span className="disabled">help the business</span> had a list of gofundme&apos;s and resources for the looting in the US<br/>
            <span className="disabled">pa senate</span> was for my highschool&apos;s student government<br/>
            <span className="disabled">nimz kitchen</span> was for a fully custom catering service<br/>
            <span className="disabled">minienterprize 2019</span> was for Canada&apos;s largest high-school case competition<br/>
            <span className="disabled">chun2020</span> was my student gov&apos;t campaign website<br/>
            <Link href="https://github.com/naijwu/pacificmun2019">pacific model un🡥</Link> was for a highschool MUN conference<br/>
            <Link href="https://debateon.ca">bc forensics league🡥</Link> was for a debate academy<br/>
            <Link href="https://inovaca.org">inova computer association🡥</Link> was for a highschool org that hosted cs-related workshops and events<br/>
            <span className="disabled">wish youth network society</span> was for a highschool charity that fundraised for research<br/>
            <Link href="https://github.com/naijwu/prospervancouver">prosper vancouver🡥</Link> was for another highschool case competition<br/>
            <span className="disabled">central model un</span> was for an inaugural MUN day-conference<br/>
          </p>
        </div>
      </main>
    </div>
  )
}

export default Websites
