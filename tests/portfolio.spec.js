import { test } from '@playwright/test';
import { HomePage } from './pages/homePage';
import { NavigationPage } from './pages/navigationPage';
import { ContactPage } from './pages/contactPage';

test('Načtení stránky – portfolio se zobrazí', async ({ page }) => {
  const home = new HomePage(page);

  await home.open();
  await home.verifyLoaded();
});

test('Navigace – klikání na položky menu', async ({ page }) => {
  const home = new HomePage(page);
  const nav = new NavigationPage(page);

  await home.open();
  await nav.goToAbout();
  await nav.goToProjects();
  await nav.goToContact();
});

test('Kontakt formulář – vyplnění', async ({ page }) => {
  const home = new HomePage(page);
  const nav = new NavigationPage(page);
  const contact = new ContactPage(page);

  await home.open();
  await nav.goToContact();
  await contact.fillForm('Veronika Tester', 'test@example.com', 'Zpráva z Playwrightu');
});
