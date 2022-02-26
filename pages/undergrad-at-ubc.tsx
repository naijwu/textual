import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Top from '../components/Top'
import styles from '../styles/Home.module.css'

const Undergrad: NextPage = () => {
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
              undergrad @ ubc
            </strong>

            <br /><br />
            I hope to major in Computer Science
            <br /><br />
            Some courses I’ve taken and are taking:<br />
            CPSC 110: Systematic Program Design (DrRacket, Recursion)<br />
            CPSC 121: Models of Computation (Logic)<br />
            CPSC 210: Software Construction (Java)<br />
            MATH 100: Differential Calculus w/ Physics applications (Calc 1)<br />
            MATH 101: Integral Calculus w/ Physics applications (Calc 2)<br />
            ATSC 113: Atmospheric Science<br /><br />

            18 transfer credits from IB (for physics, english, and economics courses)
          </p>
        </div>
      </main>
    </div>
  )
}

export default Undergrad
