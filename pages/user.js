import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from "next/link";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>user page</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>User</p>
                
            </section>
        </Layout>
    )
}