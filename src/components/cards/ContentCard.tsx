import type { CardContent, CardVariant } from '../../types/card'
import { cn } from './cardVariants'
import {
  mergeVariants,
  ResolvedVariantProvider,
  resolveCardClasses,
  useCollectionVariant,
} from './CardVariantContext'
import { CardCTA } from './CardCTA'
import { CardExcerpt } from './CardExcerpt'
import { CardLabel } from './CardLabel'
import { CardMedia } from './CardMedia'
import { CardTitle } from './CardTitle'

export type ContentCardProps = {
  article: CardContent
  variant?: CardVariant
  className?: string
}

export function ContentCard({ article, variant, className }: ContentCardProps) {
  const collectionVariant = useCollectionVariant()
  const resolvedVariant = mergeVariants(collectionVariant, variant)
  const classes = resolveCardClasses(resolvedVariant)
  const compact = resolvedVariant.density === 'compact'

  if (compact) {
    return (
      <ResolvedVariantProvider variant={resolvedVariant}>
        <article className={cn(classes.root, className)}>
          <a href={article.href} className={classes.compactLink}>
            {article.imageUrl && (
              <CardMedia
                src={article.imageUrl}
                alt={article.imageAlt ?? article.title}
              />
            )}
            <h3 className={classes.title}>{article.title}</h3>
          </a>
        </article>
      </ResolvedVariantProvider>
    )
  }

  return (
    <ResolvedVariantProvider variant={resolvedVariant}>
      <article className={cn(classes.root, className)}>
        {article.imageUrl && (
          <a
            href={article.href}
            className={classes.mediaLink}
            tabIndex={-1}
            aria-hidden="true"
          >
            <CardMedia
              src={article.imageUrl}
              alt={article.imageAlt ?? article.title}
            />
          </a>
        )}
        <div className={classes.body}>
          <CardLabel>{article.label}</CardLabel>
          <CardTitle href={article.href}>{article.title}</CardTitle>
          <CardExcerpt>{article.excerpt}</CardExcerpt>
          <CardCTA href={article.href} variant={article.ctaVariant}>
            {article.ctaLabel ?? 'Read more'}
          </CardCTA>
        </div>
      </article>
    </ResolvedVariantProvider>
  )
}
