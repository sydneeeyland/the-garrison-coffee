import type { Metadata } from 'next';

import '../assets/main.css';

export const metadata: Metadata = {
  title: 'The Garrison - Coffee',
  description: 'Steeped Brewed Coffee made for your taste.',
};

function LandingPage({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="App">{children}</div>;
}

export default LandingPage;
