/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React from 'react';
import { NextAppRouterProvider, usePathname } from './lib/next-navigation';
import RootLayout from './app/layout';
import HomePage from './app/page';
import ProjectCaseStudyPage from './app/projects/[slug]/page';
import NotFound from './app/not-found';

function AppRouterView() {
  const pathname = usePathname();

  if (pathname === '/' || pathname === '') {
    return <HomePage />;
  }

  if (pathname.startsWith('/projects/')) {
    return <ProjectCaseStudyPage />;
  }

  return <NotFound />;
}

export default function App() {
  return (
    <NextAppRouterProvider>
      <RootLayout>
        <AppRouterView />
      </RootLayout>
    </NextAppRouterProvider>
  );
}
