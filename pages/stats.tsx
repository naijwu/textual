import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Top from '../components/Top'
import styles from '../styles/Home.module.css'

const barSolid = '▮'
const barEmpty = '▯'
const smileBig = '😁'
const smileMild = '🙂'

const stats = [
    {
        name: 'HTML/CSS',
        cap: 5,
    },
    {
        name: 'JavaScript',
        cap: 4,
        additional: 'TypeScript'
    },
    {
        name: 'PHP',
        cap: 3,
    },
    {
        name: 'Solidity',
        cap: 1,
    },
    {
        name: 'Java',
        cap: 4,
        additional: 'Swing'
    },
    {
        name: 'C++',
        cap: 2,
    },
    {
        name: 'ReactJS',
        cap: 5,
    },
    {
        name: 'React Native',
        cap: 1,
        additional: 'Expo'
    },
    {
        name: 'NodeJS',
        cap: 3,
        additional: 'ExpressJS, JWT'
    },
    {
        name: 'Spring',
        cap: 2,
    },
    {
        name: 'MongoDB',
        cap: 2,
    },
    {
        name: 'PostgreSQL',
        cap: 2,
    },
    {
        name: 'MySQL',
        cap: 2,
    },
    {
        name: 'Docker',
        cap: 1,
    },
    {
        name: 'Firebase',
        cap: 4,
        additional: 'Firestore, RTDB, Auth, Hosting, GC Storage'
    },
    {
        name: 'Supabase',
        cap: 3,
    },
    {
        name: 'Figma',
        cap: 4,
    },
    {
        name: 'Webflow',
        cap: 4,
    },
    {
        name: 'DrRacket',
        cap: 0,
    },
    {
        name: 'listener',
        cap: 5,
        additional: "I'm a good listener"
    },
]

const Stats: NextPage = () => {

  const [filled, setFilled] = useState(barSolid)
  const [empty, setEmpty] = useState(barEmpty)
  
  const toggleBars = () => {
      setFilled(filled == barSolid ? smileBig : barSolid)
      setEmpty(empty == barEmpty ? smileMild : barEmpty)
  }

  const blockify = (lvl: String | Number) => {
    if (typeof lvl == "string") {
        return lvl // "NED" case
    } else {
        switch (lvl) {
            case 1:
                return filled + empty + empty + empty + empty;
            case 2:
                return filled + filled + empty + empty + empty;
            case 3:
                return filled + filled + filled + empty + empty;
            case 4:
                return filled + filled + filled + filled + empty;
            case 5:
                return filled + filled + filled + filled + filled;
            default:
                return empty + empty + empty + empty + empty;
        }
    }
  }

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
                some stats
            </strong>
            {/* <br/><br/>
            NED = not enough data points (read: application of said skill) to accurately assign a point, but have experience! */}
            <br/><br/>
            {/* Damn I really wanted to just keep these pages as plain text as possible */}
            <table>
                {stats.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{blockify(item.cap)}</td>
                            {item.additional && (
                                <td style={{ opacity: '0.3' }}>
                                    {`->`} {item.additional}
                                </td>
                            )}
                        </tr>
                    )
                })}
            </table>
            <br />
            {(empty == '▯') ? (
                <p className="clickable" onClick={()=>toggleBars()}>I{`'`}m an emoji type of person</p>
            ) : (
                <p className="clickable" onClick={()=>toggleBars()}>I{`'`}m a serious person</p>
            )}
          </p>
        </div>
      </main>
    </div>
  )
}

export default Stats
