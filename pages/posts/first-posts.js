import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

const ProfileImageComponent = () => (
    <Image
        src="/images/pepe.jpeg"
        height={144}
        width={144}
        alt="OMEGALUL"
    />
)

export default function FirstPost() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
        <section>
            <p>[Self intro]</p>
            <p>
                (This is a sample website - you’ll be building a site like this on{' '}
                <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
            </p>
        </section>
        </Layout>
    )
}