import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import { initializeStore } from '../store'
import styles from '../../styles/Home.module.css'
import CatsComponent from '../components/CatsComponent'

const Home: NextPage = () => {


  return (
    <div className={styles.container}>
      <Head>
        <title>Zustand State mangement</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <CatsComponent />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const zustandStore = initializeStore();

  const state = zustandStore.getState();

  // Here we pass the initial state to the page
  for (let i = 0; i < 7; i++) {
    state.cats.push({
      id: `${Math.random()}`,
      name: `Cat ${i}`,
      age: Math.ceil(Math.random()*2 + i*Math.random()),
      avatar: `https://placekitten.com/${100*(i)}/${100*(i+1)}`,
    })
  }

  // Set the selected cat as the fisrt Cat of the array
  state.selectedCat = state.cats[0];

  return {
    props: {
      initialZustandState: JSON.parse(JSON.stringify(state)),
    }
  }
}


export default Home;
