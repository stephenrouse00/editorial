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
  page: CardContent
  variant?: CardVariant
  className?: string
}

export function ContentCard({ page, variant, className }: ContentCardProps) {
  const collectionVariant = useCollectionVariant()
  const resolvedVariant = mergeVariants(collectionVariant, variant)
  const classes = resolveCardClasses(resolvedVariant)
  const compact = resolvedVariant.density === 'compact'

  if (compact) {
    return (
      <ResolvedVariantProvider variant={resolvedVariant}>
        <article className={cn(classes.root, className)}>
          <a href={page.href} className={classes.compactLink}>
            {page.imageUrl && (
              <CardMedia
                src={page.imageUrl}
                alt={page.imageAlt ?? page.title}
              />
            )}
            <h3 className={classes.title}>{page.title}</h3>
          </a>
        </article>
      </ResolvedVariantProvider>
    )
  }

  return (
    <ResolvedVariantProvider variant={resolvedVariant}>
      <article className={cn(classes.root, className)}>
        {page.imageUrl && (
          <a
            href={page.href}
            className={classes.mediaLink}
            tabIndex={-1}
            aria-hidden="true"
          >
            <CardMedia
              src={page.imageUrl}
              alt={page.imageAlt ?? page.title}
            />
          </a>
        )}
        <div className={classes.body}>
          <CardLabel>{page.label}</CardLabel>
          <CardTitle href={page.href}>{page.title}</CardTitle>
          <CardExcerpt>{page.excerpt}</CardExcerpt>
          <CardCTA href={page.href} variant={page.ctaVariant}>
            {page.ctaLabel ?? 'Read more'}
          </CardCTA>
        </div>
      </article>
    </ResolvedVariantProvider>
  )
}
