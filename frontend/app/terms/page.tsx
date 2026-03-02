import type {Metadata} from 'next'
import {notFound} from 'next/navigation'
import {type PortableTextBlock} from 'next-sanity'

import PortableText from '@/app/components/PortableText'
import ResolvedLink from '@/app/components/ResolvedLink'
import {sanityFetch} from '@/sanity/lib/live'
import {getPageQuery} from '@/sanity/lib/queries'
export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms that govern your use of the Bill Builder platform.',
}

export default async function TermsPage() {
  const {data: page} = await sanityFetch({
    query: getPageQuery,
    params: {slug: 'terms'},
    stega: false,
  })

  if (!page?._id) {
    return notFound()
  }

  return (
    <div className="container my-12 lg:my-24">
      <div className="max-w-5xl rounded-2xl bg-white p-8 text-gray-900 shadow-xl lg:p-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{page.heading}</h1>
        {page.subheading && (
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">{page.subheading}</p>
        )}

        <div className="mt-8 space-y-8 text-base leading-relaxed text-gray-700 sm:text-lg">
          {page.pageBuilder?.map((block) => {
            if (block._type === 'infoSection') {
              return (
                <section key={block._key} className="space-y-4">
                  {block.heading && <h2 className="text-2xl font-bold tracking-tight">{block.heading}</h2>}
                  {block.subheading && (
                    <p className="text-base font-medium tracking-wide text-gray-600">{block.subheading}</p>
                  )}
                  {block.content?.length ? (
                    <PortableText
                      className="prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 max-w-none"
                      value={block.content as PortableTextBlock[]}
                    />
                  ) : null}
                </section>
              )
            }

            if (block._type === 'callToAction') {
              return (
                <section key={block._key} className="space-y-4 rounded-xl border border-gray-200 p-6">
                  {block.heading && <h2 className="text-2xl font-bold tracking-tight">{block.heading}</h2>}
                  {block.text && <p className="text-base text-gray-700">{block.text}</p>}
                  {block.link && block.buttonText && (
                    <ResolvedLink
                      className="inline-flex items-center rounded-lg bg-[#06402B] px-5 py-2.5 text-white transition hover:opacity-90"
                      link={block.link}
                    >
                      {block.buttonText}
                    </ResolvedLink>
                  )}
                </section>
              )
            }

            return null
          })}
        </div>
      </div>
    </div>
  )
}
