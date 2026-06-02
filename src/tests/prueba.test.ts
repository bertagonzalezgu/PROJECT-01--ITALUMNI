import { describe, test, expect } from 'vitest';

import { splash } from '../components/splash/splash';
import { signUp } from '../components/sign-up/sign-up';
import { statusBar } from '../components/status-bar/status-bar';
import { topBarMobile, topBarDesktop } from '../components/top-bar/top-bar';
import { navBar } from '../components/nav-bar';
import { pagesHomeMobile, pagesHomeDesktop } from '../pages/home/home';
import { pagesNetworking } from '../pages/networking/networking';
import { pagesJobsMobile, pagesJobsDesktop } from '../pages/job-portal/job-portal';
import { footer } from '../components/footer/footer';
import { tabBar } from '../components/tab-bar/tab-bar';

describe('Diagnóstico del renderitzat', () => {

  test('Comprovar que cap component falli en executar-se', () => {
    expect(typeof splash()).toBe('string');
    expect(typeof signUp()).toBe('string');
    expect(typeof statusBar()).toBe('string');
    expect(typeof footer()).toBe('string');
    expect(typeof tabBar()).toBe('string');
    
    expect(typeof topBarMobile({ title: 'Home', showBack: false, showSearch: true, showFilters: false })).toBe('string');
    expect(typeof topBarDesktop({ activePage: 'home' })).toBe('string');
    expect(typeof navBar({ activePage: 'home' })).toBe('string');

    expect(typeof pagesHomeMobile()).toBe('string');
    expect(typeof pagesHomeDesktop()).toBe('string');
    expect(typeof pagesNetworking()).toBe('string');
    
    expect(typeof pagesJobsMobile()).toBe('string');
    expect(typeof pagesJobsDesktop()).toBe('string');
  });

});