import { useResolvedVariant } from './CardVariantContext'
import { resolveCardClasses } from './cardVariants'

type CardMediaProps = {
  src: string
  alt: string
}

export function CardMedia({ src, alt }: CardMediaProps) {
  const variant = useResolvedVariant()
  const classes = resolveCardClasses(variant)

  return (
    <img src={src} alt={alt} className={classes.media} loading="lazy" />
  )
}
