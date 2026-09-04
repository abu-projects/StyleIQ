# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: zero-html-baseline.spec.js >> the onboarding goal opens its useful destination immediately
- Location: tests/zero-html-baseline.spec.js:725:1

# Error details

```
Error: Channel closed
```

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByRole('button', { name: 'Sign in with Google' })
    - locator resolved to <button onclick="go('A-05')" class="btn wide auth-provider">…</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
      - waiting 100ms
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- main [ref=e5]:
  - generic [ref=e8]:
    - generic: 9:41
    - generic [ref=e12]:
      - generic [ref=e13]:
        - button "Back" [ref=e14] [cursor=pointer]
        - generic [ref=e17]: StyleIQ
      - generic [ref=e23]:
        - paragraph [ref=e24]: Your personal stylist
        - heading "Dress with more intention." [level=1] [ref=e25]
        - paragraph [ref=e26]: StyleIQ learns your wardrobe, plans complete looks, and keeps every idea editable.
        - generic [ref=e27]:
          - button "Sign in with Google" [ref=e28] [cursor=pointer]
          - button "Sign in with Apple" [ref=e36] [cursor=pointer]
          - button "Sign in with email" [ref=e41] [cursor=pointer]
    - status
```

# Test source

```ts
  635 | });
  636 | 
  637 | test('styling intelligence stays beside the decision it explains', async ({ page }) => {
  638 |   await page.goto('/0.html#D-02');
  639 |   await page.getByText('Why this Look works').click();
  640 |   await expect(page.getByText(/light layer handles the cooler morning/)).toBeVisible();
  641 |   await expect(page.locator('#app')).toHaveAttribute('data-screen', 'D-02');
  642 | 
  643 |   await page.goto('/0.html#C-06');
  644 |   await page.getByText('Useful in your wardrobe').click();
  645 |   await expect(page.getByText(/connects your office, dinner, and travel pieces/)).toBeVisible();
  646 |   await expect(page.locator('#app')).toHaveAttribute('data-screen', 'C-06');
  647 | });
  648 | 
  649 | test('Today launches common jobs without requiring feature knowledge', async ({ page }) => {
  650 |   const jobs = [
  651 |     ['Dress me', 'D-04'],
  652 |     ['Should I buy this?', 'K-02'],
  653 |     ['Recreate a Look', 'F-01'],
  654 |     ['Help me pack', 'J-01'],
  655 |     ['What goes with this?', 'C-02']
  656 |   ];
  657 | 
  658 |   for (const [label, id] of jobs) {
  659 |     await page.goto('/0.html#D-02');
  660 |     await page.getByRole('region', { name: 'Start with your goal' }).getByRole('button', { name: label, exact: true }).click();
  661 |     await expect(page.locator('#app')).toHaveAttribute('data-screen', id);
  662 |     await expect(page.locator('#app .screen')).toHaveCount(1);
  663 |   }
  664 | });
  665 | 
  666 | test('new interaction patterns inherit the editorial material system and semantic color tokens', async ({ page }) => {
  667 |   await page.goto('/0.html#B-06');
  668 |   const approval = page.locator('.approval-card');
  669 |   await expect(approval).toBeVisible();
  670 |   await page.evaluate(() => document.documentElement.style.setProperty('--success-soft', 'rgb(1, 2, 3)'));
  671 |   await expect(approval).toHaveCSS('background-color', 'rgb(1, 2, 3)');
  672 | 
  673 |   await page.goto('/0.html#D-02');
  674 |   const heading = page.getByRole('heading', { name: 'Good morning, Amelia' });
  675 |   await expect(heading).toHaveCSS('font-family', /Playfair Display/);
  676 |   await page.getByRole('button', { name: 'Save outfit' }).click();
  677 |   const sheet = page.getByRole('dialog', { name: 'Save this Look' });
  678 |   await page.evaluate(() => document.documentElement.style.setProperty('--sheet-surface', 'rgb(4, 5, 6)'));
  679 |   await expect(sheet).toHaveCSS('background-color', 'rgb(4, 5, 6)');
  680 |   await expect(sheet).toHaveCSS('border-top-left-radius', '28px');
  681 | });
  682 | 
  683 | test('one styling context choice is concise, persisted, and reused by its legacy edit alias', async ({ page }) => {
  684 |   await page.goto('/0.html#S-02');
  685 |   await expect(page.getByRole('heading', { name: 'Which wardrobe should Muse style?' })).toBeVisible();
  686 |   const group = page.getByRole('group', { name: 'Styling context' });
  687 |   await expect(group.getByRole('button')).toHaveCount(3);
  688 |   await expect(group.getByRole('button', { name: /Womenswear/ })).toBeVisible();
  689 |   await expect(group.getByRole('button', { name: /Menswear/ })).toBeVisible();
  690 |   await expect(group.getByRole('button', { name: /Both/ })).toBeVisible();
  691 |   await expect(page.getByText(/Someone else/)).toHaveCount(0);
  692 |   await expect(page.getByText(/not an identity question/)).toBeVisible();
  693 | 
  694 |   await group.getByRole('button', { name: /Menswear/ }).click();
  695 |   await expect(page.locator('#app')).toHaveAttribute('data-screen', 'A-01');
  696 |   await expect.poll(() => page.evaluate(() => localStorage.getItem('styleiqStylingContextV1'))).toBe('Menswear');
  697 | 
  698 |   await page.goto('/0.html#A-06');
  699 |   const editGroup = page.getByRole('group', { name: 'Styling context' });
  700 |   await expect(editGroup.getByRole('button', { name: /Menswear/ })).toHaveAttribute('aria-pressed', 'true');
  701 |   await expect(editGroup.getByRole('button')).toHaveCount(3);
  702 |   await editGroup.getByRole('button', { name: /Both/ }).click();
  703 |   await expect(page.locator('#app')).toHaveAttribute('data-screen', 'L-04');
  704 |   await expect.poll(() => page.evaluate(() => localStorage.getItem('styleiqStylingContextV1'))).toBe('Both');
  705 | });
  706 | 
  707 | test('minimum onboarding excludes occupation, attribution, brands, and Style Twin', async ({ page }) => {
  708 |   const visited = [];
  709 |   await page.goto('/0.html#A-01');
  710 |   visited.push(await page.locator('#app').getAttribute('data-screen'));
  711 |   await page.getByRole('button', { name: 'Sign in with email' }).click();
  712 |   visited.push(await page.locator('#app').getAttribute('data-screen'));
  713 |   await page.getByRole('button', { name: 'Use this name' }).click();
  714 |   visited.push(await page.locator('#app').getAttribute('data-screen'));
  715 |   await page.getByRole('button', { name: 'Create my account' }).click();
  716 |   visited.push(await page.locator('#app').getAttribute('data-screen'));
  717 |   await page.getByRole('button', { name: 'Verify email', exact: true }).click();
  718 |   visited.push(await page.locator('#app').getAttribute('data-screen'));
  719 | 
  720 |   expect(visited).toEqual(['A-01', 'A-02', 'A-03', 'A-04', 'A-05']);
  721 |   expect(visited).not.toEqual(expect.arrayContaining(['A-06', 'A-07', 'A-08', 'A-09', 'A-10']));
  722 |   await expect(page.locator('#app').getByText(/Occupation|How did you hear|Favorite brands/i)).toHaveCount(0);
  723 | });
  724 | 
  725 | test('the onboarding goal opens its useful destination immediately', async ({ page }) => {
  726 |   const goals = [
  727 |     ['Wear more of my Closet', 'D-02'],
  728 |     ['Plan outfits for my week', 'I-01'],
  729 |     ['Pack for a trip', 'J-01'],
  730 |     ['Decide what is worth buying', 'K-02']
  731 |   ];
  732 | 
  733 |   for (const [label, id] of goals) {
  734 |     await page.goto('/0.html#A-01');
> 735 |     await page.getByRole('button', { name: 'Sign in with Google' }).click();
      |                                                                     ^ Error: locator.click: Test ended.
  736 |     await page.getByRole('button', { name: new RegExp(label) }).click();
  737 |     await expect(page.locator('#app')).toHaveAttribute('data-screen', id);
  738 |   }
  739 | });
  740 | 
  741 | test('a completed onboarding returns straight to useful Today value', async ({ page }) => {
  742 |   await page.goto('/0.html#A-05');
  743 |   await page.getByRole('button', { name: /Wear more of my Closet/ }).click();
  744 |   await expect(page.locator('#app')).toHaveAttribute('data-screen', 'D-02');
  745 |   await expect.poll(() => page.evaluate(() => localStorage.getItem('styleiqOnboardingCompleteV1'))).toBe('true');
  746 | 
  747 |   await page.goto('/0.html#S-00');
  748 |   await page.getByRole('button', { name: 'Open StyleIQ' }).click();
  749 |   await expect(page.locator('#app')).toHaveAttribute('data-screen', 'D-02');
  750 | });
  751 | 
  752 | test('legacy outfit-action hashes open canonical sheets or canonical jobs', async ({ page }) => {
  753 |   const sheets = [
  754 |     ['E-01', 'Save this Look'],
  755 |     ['E-03', 'What missed?'],
  756 |     ['E-04', 'Create a private link']
  757 |   ];
  758 | 
  759 |   for (const [id, dialogName] of sheets) {
  760 |     await page.goto(`/0.html#${id}`);
  761 |     await expect(page.locator('#app')).toHaveAttribute('data-screen', id);
  762 |     await expect(page.getByRole('heading', { name: 'Five ways to wear it' })).toBeVisible();
  763 |     const dialog = page.getByRole('dialog', { name: dialogName });
  764 |     await expect(dialog).toBeVisible();
  765 |     await dialog.getByRole('button', { name: new RegExp(`Close ${dialogName}`, 'i') }).click();
  766 |     await expect(dialog).toHaveCount(0);
  767 |     await expect(page.locator('#app')).toHaveAttribute('data-screen', 'D-04');
  768 |     await expect(page.locator('#app .screen')).toHaveCount(1);
  769 |   }
  770 | 
  771 |   for (const [id, heading] of [['E-02', 'Design Review'], ['E-05', 'Create your Style Twin'], ['E-06', 'Five ways to wear it']]) {
  772 |     await page.goto(`/0.html#${id}`);
  773 |     await expect(page.getByRole('heading', { name: heading })).toBeVisible();
  774 |     if (id === 'E-02') await expect(page.getByRole('group', { name: 'Studio mode' })).toBeVisible();
  775 |     await expect(page.locator('#app .screen')).toHaveCount(1);
  776 |   }
  777 | });
  778 | 
  779 | test('occupation is absent and the profile edit hash renders the canonical inline editor', async ({ page }) => {
  780 |   await page.goto('/0.html#L-02');
  781 |   await expect(page.getByRole('heading', { name: 'Amelia Hart', level: 2 })).toBeVisible();
  782 |   await expect(page.locator('#app').getByText('Profile details', { exact: true })).toBeVisible();
  783 |   await expect(page.getByLabel('Profile name')).toHaveValue('Amelia Hart');
  784 |   await expect(page.locator('#app').getByText(/Occupation/i)).toHaveCount(0);
  785 | 
  786 |   await page.goto('/0.html#L-04');
  787 |   await expect(page.locator('#app').getByText(/Occupation/i)).toHaveCount(0);
  788 |   await expect(page.locator('#screen-list').getByText(/Occupation/i)).toHaveCount(0);
  789 | });
  790 | 
  791 | test('Style Twin begins only from intentional Try On and remains optional', async ({ page }) => {
  792 |   await page.goto('/0.html#D-02');
  793 |   await page.locator('#app').getByRole('button', { name: 'Try On', exact: true }).click();
  794 |   await expect(page.locator('#app')).toHaveAttribute('data-screen', 'H-01');
  795 |   await expect(page.getByRole('heading', { name: 'Create your Style Twin' })).toBeVisible();
  796 |   await expect(page.getByRole('button', { name: /Skip for now/ })).toBeVisible();
  797 | 
  798 |   await page.goto('/0.html#D-02');
  799 |   await page.getByRole('button', { name: 'Make From My Closet' }).click();
  800 |   await expect(page.locator('#app')).toHaveAttribute('data-screen', 'F-01');
  801 | });
  802 | 
  803 | test('Closet keeps one coherent layout from 1 to 100+ pieces', async ({ page }) => {
  804 |   await page.goto('/0.html#C-01');
  805 |   for (const size of [1, 10, 101]) {
  806 |     await page.evaluate(count => window.setClosetDemoSize(count), size);
  807 |     await expect(page.locator('.closet-results-head').getByRole('heading', { name: `${size} piece${size === 1 ? '' : 's'}` })).toBeVisible();
  808 |     await expect(page.locator('.closet-item')).toHaveCount(size);
  809 |     const overflow = await page.evaluate(() => ({
  810 |       app: document.getElementById('app').scrollWidth > document.getElementById('app').clientWidth + 1,
  811 |       document: document.documentElement.scrollWidth > window.innerWidth + 1
  812 |     }));
  813 |     expect(overflow).toEqual({ app: false, document: false });
  814 |   }
  815 | });
  816 | 
  817 | test('empty Closet prioritizes one useful action and retains import and Wishlist paths', async ({ page }) => {
  818 |   await page.goto('/0.html#C-01');
  819 |   await page.evaluate(() => window.setClosetDemoSize(0));
  820 |   await expect(page.getByRole('heading', { name: 'Start with one piece.' })).toBeVisible();
  821 |   await expect(page.getByRole('button', { name: 'Add your first item' })).toBeVisible();
  822 |   await expect(page.getByRole('button', { name: 'Import purchases' })).toBeVisible();
  823 |   await page.getByRole('button', { name: 'Open Wishlist' }).click();
  824 |   await expect(page.getByRole('heading', { name: 'Wishlist' })).toBeVisible();
  825 | });
  826 | 
  827 | test('large Closet search, category, collection, and sorting stay on the canonical surface', async ({ page }) => {
  828 |   await page.goto('/0.html#C-01');
  829 |   await page.evaluate(() => window.setClosetDemoSize(101));
  830 |   await page.getByRole('searchbox', { name: 'Search Closet' }).fill('Balmain');
  831 |   await expect(page.locator('.closet-item')).toHaveCount(9);
  832 |   await page.evaluate(() => window.resetClosetFilters());
  833 |   await page.getByRole('button', { name: 'Outerwear', exact: true }).click();
  834 |   await expect(page.locator('.closet-item')).toHaveCount(17);
  835 |   await page.getByRole('button', { name: /Needs attention/ }).click();
```