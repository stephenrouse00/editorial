import { pages } from '../data/pages'
import { CardVariantProvider } from '../components/cards/CardVariantContext'
import { ContentCard } from '../components/cards/ContentCard'
import { CardCollection } from '../components/collections/CardCollection'

const featuredItems = [
  { page: pages[0], variant: { density: 'standard' as const } },
  { page: pages[1], variant: { density: 'compact' as const } },
  { page: pages[2], variant: { density: 'compact' as const } },
  { page: pages[3], variant: { density: 'compact' as const } },
  { page: pages[4], variant: { density: 'compact' as const } },
  { page: pages[5], variant: { density: 'compact' as const } },
]

const latestItems = pages.slice(4, 8).map((page) => ({ page }))

const carouselSingleItems = pages.slice(0, 5).map((page) => ({ page }))
const carouselMultiItems = pages.slice(0, 6).map((page) => ({ page }))

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
            <ContentCard page={pages[7]} ctaLabel="Overriding the default CTA text" ctaVariant='button' />
          </CardVariantProvider>
        </div>
        <br/>
        <div className="max-w-md">
          <CardVariantProvider variant={{ theme: 'light', density: 'standard' }}>
            <ContentCard page={pages[7]} ctaLabel="Read more" ctaVariant='link' />
          </CardVariantProvider>
        </div>
        <br/>
        <div className="max-w-md">
          <CardVariantProvider variant={{ theme: 'light', density: 'compact' }}>
            <ContentCard page={pages[7]} ctaLabel="Read more" ctaVariant='button' />
          </CardVariantProvider>
        </div>
        <br/>
        <div className="max-w-md">
          <CardVariantProvider variant={{ theme: 'dark', density: 'compact' }}>
            <ContentCard page={pages[7]} ctaLabel="Learn more" ctaVariant='link' />
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
          ctaLabel="More"
          ctaVariant='link'
          items={latestItems}
        />

        <CardCollection
          title="Featured content collection"
          variant={{ theme: 'light' }}
          layout={{ type: 'featured', heroWidth: '75' }}
          ctaVariant='button'
          items={featuredItems}
        />

        <CardCollection
          title="Single-slide carousel"
          variant={{ theme: 'light', density: 'standard' }}
          layout={{ type: 'carousel', visibleSlides: 1, adjacentSlides: 'hidden' }}
          ctaLabel="junk more"
          ctaVariant='button'
          items={carouselSingleItems}
        />

        <CardCollection
          title="Single-slide carousel with peek"
          variant={{ theme: 'light', density: 'standard' }}
          layout={{ type: 'carousel', visibleSlides: 1, adjacentSlides: 'peek' }}
          ctaLabel="blah more"
          ctaVariant='button'
          items={carouselSingleItems}
        />

        <CardCollection
          title="Three-slide carousel"
          variant={{ theme: 'dark', density: 'standard' }}
          layout={{ type: 'carousel', visibleSlides: 3, adjacentSlides: 'hidden' }}
          ctaLabel="explore more"
          ctaVariant='button'
          items={carouselMultiItems}
        />

        <CardCollection
          title="Three-slide carousel with peek"
          variant={{ theme: 'light', density: 'standard' }}
          layout={{ type: 'carousel', visibleSlides: 3, adjacentSlides: 'peek' }}
          ctaVariant='button'
          items={carouselMultiItems}
        />
      </section>
    </main>
  )
}
