import type { CardVariant } from '../../types/card'

export const DEFAULT_CARD_VARIANT: Required<CardVariant> = {
  density: 'standard',
  theme: 'light',
}

export function cn(...classes: Array<string | false | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

export function mergeVariants(
  collectionVariant?: CardVariant,
  cardVariant?: CardVariant,
): Required<CardVariant> {
  return {
    density: cardVariant?.density ?? collectionVariant?.density ?? 'standard',
    theme: cardVariant?.theme ?? collectionVariant?.theme ?? 'light',
  }
}

export function isCompact(variant: Required<CardVariant>): boolean {
  return variant.density === 'compact'
}

export function resolveCardClasses(variant: Required<CardVariant>) {
  const compact = isCompact(variant)
  const dark = variant.theme === 'dark'

  return {
    root: cn(
      'group rounded-lg overflow-hidden transition-colors h-full',
      dark
        ? 'bg-neutral-900 text-neutral-100'
        : 'bg-white text-neutral-900 border border-neutral-200',
      compact ? 'flex items-center gap-3 p-3' : 'flex flex-col',
    ),
    body: cn('min-w-0', compact ? 'flex-1' : 'flex flex-col gap-2 p-4'),
    media: cn(
      'object-cover shrink-0',
      compact ? 'h-16 w-16 rounded' : 'aspect-[16/9] w-full',
    ),
    mediaLink: cn(
      'block shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
      dark ? 'focus-visible:outline-neutral-100' : 'focus-visible:outline-neutral-900',
      compact ? 'rounded' : '',
    ),
    label: cn(
      'text-xs font-semibold uppercase tracking-wide',
      dark ? 'text-neutral-400' : 'text-neutral-500',
    ),
    title: cn(
      'font-semibold leading-snug',
      compact ? 'text-sm line-clamp-2' : 'text-lg line-clamp-3',
    ),
    titleLink: cn(
      'hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm',
      dark
        ? 'text-neutral-100 focus-visible:outline-neutral-100'
        : 'text-neutral-900 focus-visible:outline-neutral-900',
    ),
    excerpt: cn(
      'text-sm leading-relaxed line-clamp-3',
      dark ? 'text-neutral-300' : 'text-neutral-600',
    ),
    ctaLink: cn(
      'inline-flex text-sm font-medium underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm',
      dark
        ? 'text-neutral-100 focus-visible:outline-neutral-100'
        : 'text-neutral-900 focus-visible:outline-neutral-900',
    ),
    ctaButton: cn(
      'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
      dark
        ? 'bg-neutral-100 text-neutral-900 hover:bg-white focus-visible:outline-neutral-100'
        : 'bg-neutral-900 text-white hover:bg-neutral-800 focus-visible:outline-neutral-900',
    ),
    compactLink: cn(
      'flex items-center gap-3 min-w-0 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
      dark ? 'focus-visible:outline-neutral-100' : 'focus-visible:outline-neutral-900',
    ),
  }
}
