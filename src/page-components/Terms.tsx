import React from 'react';
import { LegalPage } from '../components/LegalPage';
import { termsSections } from '../data/legal';

export function Terms() {
  return <LegalPage title="Terms of Use" updated="[Date]" sections={termsSections} />;
}
