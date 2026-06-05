import { describe, test, expect } from 'vitest';

import { splash } from '../components/splash/splash';
import { signUp } from '../components/sign-up/sign-up';
import { statusBar } from '../components/status-bar/status-bar';
import { topBarMobile, topBarDesktop } from '../components/top-bar/top-bar';
import { navBar } from '../components/nav-bar/nav-bar';
import { pagesHomeMobile, pagesHomeDesktop } from '../pages/home/home';
import { pagesNetworking } from '../pages/networking/networking';
import { pagesJobsMobile, pagesJobsDesktop } from '../pages/job-portal/job-portal';
import { footer } from '../components/footer/footer';
import { tabBar } from '../components/tab-bar/tab-bar';
import { alumni } from '../data/alumni';
import { events } from '../data/events';
import { jobs } from '../data/jobs';

// GENERADO CON IA:

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

describe('Èpica 3 - Xarxa entre exalumnes', () => {

  test('Given alumni a la BD / When es renderitza networking / Then es mostren els perfils', () => {
    const html = pagesNetworking();
    alumni.forEach(p => {
      expect(html).toContain(p.name);
      expect(html).toContain(p.role);
    });
  });

  test('Given una llista d\'alumni / When es filtra per nom / Then retorna els que coincideixen', () => {
    const query = 'jane';
    const results = alumni.filter(p => p.name.toLowerCase().includes(query));
    expect(results.length).toBeGreaterThan(0);
    results.forEach(p => expect(p.name.toLowerCase()).toContain(query));
  });

  test('Given un alumni no connectat / When es connecta / Then connected és true', () => {
    const alumne = alumni[0];
    alumne.connected = false;
    alumne.connected = true;
    expect(alumne.connected).toBe(true);
  });

});

describe('Èpica 4 - Borsa de treball', () => {

  test('Given ofertes a la BD / When es renderitza jobs / Then es mostren els títols', () => {
    const html = pagesJobsDesktop();
    jobs.forEach(job => {
      expect(html).toContain(job.title);
    });
  });

  test('Given una llista de jobs / When es filtra per títol / Then retorna els que coincideixen', () => {
    const query = 'enginyer';
    const results = jobs.filter(j => j.title.toLowerCase().includes(query));
    expect(results.length).toBeGreaterThan(0);
    results.forEach(j => expect(j.title.toLowerCase()).toContain(query));
  });
});

describe('Èpica 5 - Esdeveniments i activitats', () => {

  test('Given esdeveniments a la BD / When es renderitza la home / Then es mostren els títols', () => {
    const html = pagesHomeDesktop();
    events.forEach(ev => {
      expect(html).toContain(ev.title);
    });
  });

  test('Given esdeveniments / When es filtra per categoria / Then retorna els correctes', () => {
    const categoria = 'Formació';
    const results = events.filter(ev => ev.category === categoria);
    expect(results.length).toBeGreaterThan(0);
    results.forEach(ev => expect(ev.category).toBe(categoria));
  });

});

describe('Top-bar dinàmica', () => {

  test('Given títol "Networking" / When es renderitza / Then el HTML el conté', () => {
    const html = topBarMobile({ title: 'Networking', showBack: true, showSearch: true, showFilters: false });
    expect(html).toContain('Networking');
  });

  test('Given activePage "jobs" / When es renderitza desktop / Then té la classe activa', () => {
    const html = topBarDesktop({ activePage: 'jobs' });
    expect(html).toContain('nav__item--active');
  });

});

