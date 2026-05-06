import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default withNextIntl(nextConfig)