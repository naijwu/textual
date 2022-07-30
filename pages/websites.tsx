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
            <Link href="https://iydi.org"><a>int&apos;l youth debate initiative<sup>site</sup></a></Link> was for a debate education-focused non-profit<br/>
            <span className="disabled">help the business</span> had a list of gofundme&apos;s and resources for the looting in the US<br/>
            <span className="disabled">pa senate</span> was for my highschool&apos;s student government<br/>
            <span className="disabled">nimz kitchen</span> was for a fully custom catering service<br/>
            <Link href="http://openpage.me/competence"><a>minienterprize 2019<sup>site</sup></a></Link> was for Canada&apos;s largest high-school case competition<br/>
            <span className="disabled">chun2020</span> was my student gov&apos;t campaign website<br/>
            <Link href="https://github.com/naijwu/pacificmun2019"><a>pacific model un<sup>github</sup></a></Link> was for a highschool MUN conference {`<->`} <Link href="http://openpage.me/pacific"><a>2019<sup>site</sup></a></Link> <br/>
            <Link href="https://debateon.ca"><a>bc forensics league<sup>site</sup></a></Link> was for a debate academy<br/>
            <Link href="https://inovaca.org"><a>inova computer association<sup>site</sup></a></Link> was for a highschool org that hosted cs-related workshops and events<br/>
            <span className="disabled">wish youth network society</span> was for a highschool charity that fundraised for research<br/>
            <Link href="https://github.com/naijwu/prospervancouver"><a>prosper vancouver<sup>site</sup></a></Link> was for another highschool case competition {`<->`} <Link href="https://openpage.me/prosper"><a>2018<sup>site</sup></a></Link> <br/>
            <span className="disabled">central model un</span> was for an inaugural MUN day-conference<br/>
          </p>
        </div>
      </main>
    </div>
  )
}

export default Websites
