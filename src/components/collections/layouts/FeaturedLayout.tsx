import type { CardCollectionItem, CardCTAVariant } from '../../../types/card'
import { ContentCard } from '../../cards/ContentCard'

type FeaturedLayoutProps = {
  items: CardCollectionItem[]
  heroWidth?: '66' | '75'
  ctaLabel?: string
  ctaVariant?: CardCTAVariant
}

export function FeaturedLayout({ items, heroWidth = '75', ctaLabel, ctaVariant }: FeaturedLayoutProps) {
  if (items.length === 0) {
    return null
  }

  const [heroItem, ...sideItems] = items
  const useWideHero = heroWidth === '75'

  return (
    <div
      className={
        useWideHero
          ? 'grid grid-cols-1 gap-4 lg:grid-cols-4'
          : 'grid grid-cols-1 gap-4 lg:grid-cols-3'
      }
    >
      <div className={useWideHero ? 'lg:col-span-3' : 'lg:col-span-2'}>
        <ContentCard
          page={heroItem.page}
          variant={heroItem.variant}
          ctaLabel={ctaLabel}
          ctaVariant={ctaVariant}
        />
      </div>
      {sideItems.length > 0 && (
        <div
          className={`flex flex-col gap-4 ${useWideHero ? 'lg:col-span-1' : 'lg:col-span-1'}`}
        >
          {sideItems.map(({ page, variant }) => (
            <ContentCard
              key={page.id}
              page={page}
              variant={variant}
              ctaLabel={ctaLabel}
              ctaVariant={ctaVariant}
            />
          ))}
        </div>
      )}
    </div>
  )
}
