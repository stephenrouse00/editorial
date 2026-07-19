import type { ReactNode } from 'react'
import { isCompact, resolveCardClasses, useResolvedVariant } from './CardVariantContext'

type CardExcerptProps = {
  children: ReactNode
}

export function CardExcerpt({ children }: CardExcerptProps) {
  const variant = useResolvedVariant()

  if (isCompact(variant)) {
    return null
  }

  const classes = resolveCardClasses(variant)

  return <p className={classes.excerpt}>{children}</p>
}
