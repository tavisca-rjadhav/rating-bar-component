import { OrxeRatingComponent } from '../';


describe('orxe-rating-component', () => {

  let ratingComponent;

  beforeEach(async function () {
    OrxeRatingComponent;

    ratingComponent = document.createElement('orxe-rating-component') as OrxeRatingComponent;
    await document.body.append(ratingComponent);
  });

  afterEach(async function () {
    await ratingComponent.remove();
  });

  async function setProperties(properties: object): Promise<void> {
    for (const property in properties) {
      if (ratingComponent.hasOwnProperty(property)) {
        ratingComponent[property] = properties[property];
      }
    }
    await ratingComponent.requestUpdate();
  }

  it('should check default values of properties', () => {
    expect(ratingComponent.rating).toEqual(0);
    expect(ratingComponent.label).toEqual('Rating');
  });

  it('check Rating for rating component', async () => {
    await setProperties({ rating: 90 });
    const ratingValue = ratingComponent.shadowRoot!.querySelector(`.rating`) as HTMLElement;
    expect(ratingValue).toHaveTextContent('9');
  });

  it('check Progress for Linear rating component', async () => {
    await setProperties({ rating: 80 });
    const linearTrack = ratingComponent.shadowRoot!.querySelector(`#linearBar`) as HTMLElement;
    expect(linearTrack).toHaveStyle({ width: '80%' });
  });

  it('check Progress for Linear rating component if rating is less than zero', async () => {
    await setProperties({ rating: -10 });
    const linearTrack = ratingComponent.shadowRoot!.querySelector(`#linearBar`) as HTMLElement;
    expect(linearTrack).toHaveStyle({ width: '0%' });
  });

  it('check Progress for Linear rating component if rating is greater than 100', async () => {
    await setProperties({ rating: 110 });
    const linearTrack = ratingComponent.shadowRoot!.querySelector(`#linearBar`) as HTMLElement;
    expect(linearTrack).toHaveStyle({ width: '100%' });
  });

  it('check label for Linear rating component', async () => {
    await setProperties({ label: 'test' });
    const linearTrack = ratingComponent.shadowRoot!.querySelector(`.label`) as HTMLElement;
    expect(linearTrack).toHaveTextContent('test');
  });

});