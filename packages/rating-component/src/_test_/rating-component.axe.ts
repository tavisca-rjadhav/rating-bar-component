import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
import { OrxeRatingComponent } from '..';

expect.extend(toHaveNoViolations);

describe('orxe-rating-component-axe', () => {
  let ratingComponent;

  beforeEach(async function () {
    OrxeRatingComponent;

    ratingComponent = document.createElement('orxe-rating-bar') as OrxeRatingComponent;
    await document.body.append(ratingComponent);
  });

  afterEach(async function () {
    await ratingComponent.remove();
  });

  it('should support all WCAG Accessibility Rules', async () => {
    const result = await axe(ratingComponent);
    expect(result).toHaveNoViolations();
  });

});
