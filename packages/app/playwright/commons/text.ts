import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export async function hasText(
  page: Page,
  text: string | RegExp,
  position: number = 0
) {
  const textFound = page.getByText(text).nth(position);
  await expect(textFound).toHaveText(text, {
    useInnerText: true,
  });
  return textFound;
}

export async function hasAriaLabel(page: Page, value: string) {
  const selector = await page.waitForSelector(`[aria-label="${value}"]`);
  await expect(await selector.getAttribute('aria-label')).toBe(value);
}
