import { html, customElement, LitElement, property } from 'lit-element';
import styles from './style-css';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';
@customElement('orxe-rating-component')
export default class OrxeRatingComponent extends LitElement {

  @property({ type: Number, reflect: true })
  rating = 0;

  @property({ type: String, reflect: true })
  label = 'Rating';
  private actualRating = 0;
  private _showProgress(): Record<string, string> {
    const progress = {};

    if (this.rating > 100) {
      progress['width'] = '100%';
    } else if (this.rating < 0) {
      progress['width'] = '0%';
    } else {
      progress['width'] = this.rating + '%';
    }
    return progress;
  }

  getRating(): number {
    return !this.rating
      ? 0
      : this.rating > 100
        ? 10
        : this.rating < 0
          ? 0
          : Math.floor(this.rating) / 10;
  }
  /**
   * Implement `render` to define a template for button element.
   */
  render() {
    this.actualRating = this.getRating();

    return html`<div id="linear">
                  <div id="linearBar" 
                  aria-label="${this.actualRating} out of 10" 
                  style=${styleMap(this._showProgress())}
                  class="${classMap({
      'linear-bar__indicator': true,
      'linear-bar--bad': this.actualRating >= 1 && this.actualRating < 3,
      'linear-bar--poor': this.actualRating >= 3 && this.actualRating < 5,
      'linear-bar--average': this.actualRating >= 5 && this.actualRating < 7,
      'linear-bar--great': this.actualRating >= 7 && this.actualRating < 8.5,
      'linear-bar--excellent': this.actualRating >= 8.5
    })}"></div>                  
        </div>
        <div class= "content">
          <span class="label"> ${ this.label} </span>
    <span class= "rating" > ${ this.actualRating} </span>
    </div>
      `;
  }
  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
