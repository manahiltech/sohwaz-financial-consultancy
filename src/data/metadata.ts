import type { Metadata } from 'next';

const companyName = 'Sohwaz Financial Consultants';
const image = {
  url: '/assets/og-image.jpg',
  width: 1200,
  height: 630,
  alt: companyName,
};

export function pageMetadata(title: string, description: string): Metadata {
  return {
    title: { absolute: `${title} | ${companyName}` },
    description,
    openGraph: {
      title: `${title} | ${companyName}`,
      description,
      images: [image],
      siteName: companyName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${companyName}`,
      description,
      images: [image.url],
    },
  };
}
