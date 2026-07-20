import type { CardCollectionItem, CardCTAVariant } from '../../../types/card'
import { ContentCard } from '../../cards/ContentCard'

type GridLayoutProps = {
  items: CardCollectionItem[]
  columns?: 1 | 2 | 3 | 4
  ctaLabel?: string
  ctaVariant?: CardCTAVariant
}

const columnClasses: Record<NonNullable<GridLayoutProps['columns']>, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

export function GridLayout({ items, columns = 3, ctaLabel, ctaVariant }: GridLayoutProps) {
  return (
    <div className={`grid gap-6 ${columnClasses[columns]}`}>
      {items.map(({ page, variant }) => (
        <ContentCard key={page.id} page={page} variant={variant} ctaLabel={ctaLabel} ctaVariant={ctaVariant} />
      ))}
    </div>
  )
}
