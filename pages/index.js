import Head from 'next/head'
import Image from 'next/image'
import About from '../components/about'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <About id="about"/>
    </div>
  )
}
