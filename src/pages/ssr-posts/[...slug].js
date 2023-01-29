import dynamic from 'next/dynamic'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Test from '@/components/Test'

const SERVER = 'http://localhost:3001'

const components = {
    Test,
    TestDynamic: dynamic(() => import('@/components/TestDynamic'))
}

export default function PostPage({ source }) {
    return (
        <>
            <header><a href="/">Home</a></header>
            <main>
                <MDXRemote {...source} components={components} />
            </main>
        </>
    )
}

export const getServerSideProps = async ({ params }) => {
    const resp = await fetch(`${SERVER}/${params.slug.join('/')}.mdx`)
    const content = await resp.text()

    const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        }
    })

    return {
        props: {
            source: mdxSource,
        },
    }
}
