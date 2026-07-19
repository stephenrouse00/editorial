import { articles } from '../data/articles'
import { CardVariantProvider } from '../components/cards/CardVariantContext'
import { ContentCard } from '../components/cards/ContentCard'
import { CardCollection } from '../components/collections/CardCollection'

const featuredItems = [
  { article: articles[0], variant: { density: 'standard' as const } },
  { article: articles[1], variant: { density: 'compact' as const } },
  { article: articles[2], variant: { density: 'compact' as const } },
  { article: articles[3], variant: { density: 'compact' as const } },
  { article: articles[4], variant: { density: 'compact' as const } },
  { article: articles[5], variant: { density: 'compact' as const } },
]

const latestItems = articles.slice(4, 8).map((article) => ({ article }))

const carouselSingleItems = articles.slice(0, 5).map((article) => ({ article }))
const carouselMultiItems = articles.slice(0, 6).map((article) => ({ article }))

export function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-10 border-b border-neutral-200 pb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Proof of concept
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900">
          Cards and card collections
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-neutral-600">
          A simple demonstration how to achieve a variety of cards and card collections using only two components, "Card" and "Card Collection".
        </p>
      </header>

      <section className="py-10" aria-labelledby="compact-example-heading">
        <h2
          id="compact-example-heading"
          className="mb-6 text-2xl font-semibold text-neutral-900"
        >
          Singular card variations
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-neutral-600">
          These cards are exactly the same from a data perspective.  Changing "density" from standard to compact changes the size and layout of the card and what data points are exposed.  If all data points have been provided by an author, changing from one design variant to another is simple.  If some datapoints are missing, the author may need to added them if changing from compact to standard.
        </p>
        <div className="max-w-md">
          <CardVariantProvider variant={{ theme: 'light', density: 'standard' }}>
            <ContentCard article={articles[7]} />
          </CardVariantProvider>
        </div>
        <br/>
        <div className="max-w-md">
          <CardVariantProvider variant={{ theme: 'dark', density: 'standard' }}>
            <ContentCard article={articles[7]} />
          </CardVariantProvider>
        </div>
        <br/>
        <div className="max-w-md">
          <CardVariantProvider variant={{ theme: 'light', density: 'compact' }}>
            <ContentCard article={articles[7]} />
          </CardVariantProvider>
        </div>
        <br/>
        <div className="max-w-md">
          <CardVariantProvider variant={{ theme: 'dark', density: 'compact' }}>
            <ContentCard article={articles[7]} />
          </CardVariantProvider>
        </div>
      </section>

      <section>
        <h2
          id="compact-example-heading"
          className="mb-6 text-2xl font-semibold text-neutral-900"
        >
          Card collection variations
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-neutral-600">
          Card collections are comprised of cards.  The card collection has a number of design and functional variations including basic, featured, and slide carousels. The design variation of the cards in a card collection (standard, compact, light, dark, etc.) is controlled at the card collection level.
        </p>
        <CardCollection
        title="Basic card collection"
        variant={{ theme: 'light', density: 'standard' }}
        layout={{ type: 'grid', columns: 3 }}
        items={latestItems}
        />

        <CardCollection
          title="Featured content collection"
          variant={{ theme: 'light' }}
          layout={{ type: 'featured', heroWidth: '75' }}
          items={featuredItems}
        />

        <CardCollection
          title="Single-slide carousel"
          variant={{ theme: 'light', density: 'standard' }}
          layout={{ type: 'carousel', visibleSlides: 1, adjacentSlides: 'hidden' }}
          items={carouselSingleItems}
        />

        <CardCollection
          title="Single-slide carousel with peek"
          variant={{ theme: 'light', density: 'standard' }}
          layout={{ type: 'carousel', visibleSlides: 1, adjacentSlides: 'peek' }}
          items={carouselSingleItems}
        />

        <CardCollection
          title="Three-slide carousel"
          variant={{ theme: 'dark', density: 'standard' }}
          layout={{ type: 'carousel', visibleSlides: 3, adjacentSlides: 'hidden' }}
          items={carouselMultiItems}
        />

        <CardCollection
          title="Three-slide carousel with peek"
          variant={{ theme: 'light', density: 'standard' }}
          layout={{ type: 'carousel', visibleSlides: 3, adjacentSlides: 'peek' }}
          items={carouselMultiItems}
        />
      </section>
    </main>
  )
}
