import type { CardCollectionItem } from '../../../types/card'
import { ContentCard } from '../../cards/ContentCard'

type GridLayoutProps = {
  items: CardCollectionItem[]
  columns?: 1 | 2 | 3 | 4
}

const columnClasses: Record<NonNullable<GridLayoutProps['columns']>, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

export function GridLayout({ items, columns = 3 }: GridLayoutProps) {
  return (
    <div className={`grid gap-6 ${columnClasses[columns]}`}>
      {items.map(({ article, variant }) => (
        <ContentCard key={article.id} article={article} variant={variant} />
      ))}
    </div>
  )
}
