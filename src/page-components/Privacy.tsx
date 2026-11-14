import React from 'react';
import { LegalPage } from '../components/LegalPage';
import { privacySections } from '../data/legal';

export function Privacy() {
  return <LegalPage title="Privacy Policy" updated="[Date]" sections={privacySections} />;
}
