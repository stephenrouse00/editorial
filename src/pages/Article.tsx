import { pages } from '../data/pages'
import { ContentCard } from '../components/cards/ContentCard'

//import { Page } from '../types/page'
type Page = any

export function ArticlePage({ page }: { page: Page }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <img src={page.imageUrl} alt={page.imageAlt} className="w-full h-auto mb-6 rounded-lg" />
      <header className="mb-10 border-b border-neutral-200 pb-8">
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900">
            {page.title}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-neutral-600">
            {page.excerpt}
        </p>
      </header>

      <section className="py-10" aria-labelledby="compact-example-heading">
        {page.body ? (
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: page.body }}
          />
        ) : (
          <p className="text-neutral-600">No content available.</p>
        )}
      </section>

      <section className="py-10" aria-labelledby="compact-example-heading">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
          Related Articles
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-neutral-600">
          Explore more articles on similar topics.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pages
            .filter((p) => p.slug !== page.slug)
            .filter((p) => p.category === page.category)
            .slice(0, 3)
            .map((relatedPage) => (
              <ContentCard
                key={relatedPage.id}
                page={relatedPage}
                variant={{ density: 'compact' }}
              />
            ))}
        </div>
      </section>

      <section className="py-10" aria-labelledby="compact-example-heading">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
          More Articles
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-neutral-600">
          Discover additional articles from our collection.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pages
            .filter((p) => p.slug !== page.slug)
            .slice(3, 6)
            .map((morePage) => (
              <ContentCard
                key={morePage.id}
                page={morePage}
                variant={{ density: 'compact' }}
              />
            ))}
        </div>
      </section>
      <section className="py-10" aria-labelledby="compact-example-heading">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
          Featured Articles
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-neutral-600">
          Check out some of our featured articles.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pages
            .filter((p) => p.slug !== page.slug)
            .slice(6, 9)
            .map((featuredPage) => (
              <ContentCard
                key={featuredPage.id}
                page={featuredPage}
                variant={{ density: 'compact' }}
              />
            ))}
        </div>
      </section>
{/**/}
    </main>
    )
}