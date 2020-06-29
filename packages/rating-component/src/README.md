
### Purpose  

This component use to display any type of rating of on UI. This is a progress bar which will display respected rating on the progress bar.

  

This component requires two inputs as label for the progress bar and rating number should be displayed on UI.

  

### Development

  

The component will comply to the [Custom Elements specification](https://w3c.github.io/webcomponents/spec/custom/  "https://w3c.github.io/webcomponents/spec/custom/").

  

### Constructor

  

To create the custom web component, extend LitElement. The Web Component syntax is:

  

    @customElement('orxe-rating-component')
    export default class OrxeRatingComponent extends LitElement {
    ...
    }

  
### Properties

  
Properties which will be exposed by the component. Details of properties are as follows: 

| Name | Attribute | AccessModifier | Description | Type | Default |
|--|--|--|--|--|--|
| Rating | rating | public | value of the rating bar | Number | 0 |
| Label | label | public | Label displayed on progress bar| String | '' |

  

### Styling

 The following custom properties are available for styling:

  

| Custom Property | Description | Default |
|--|--|--|
| --track-color | This property will change background color of track | #E1E6ED |
| --font-family | This property will change the font of text content | san-serif |
| --font-size | This property will change font size of text content | 1rem |
| --font-weight | This property add weight to text content | 100 |
| --font-color | This property will change color of the font | #000000 |
| --rating-bar-excellent | This property will overwrite the background color of rating greater than 8.5 | #238738 |
| --rating-bar-great | This property will overwrite the background color of rating between 7 to 8.5 | #67AB04 |
| --rating-bar-average | This property will overwrite the background color of rating between 5 to 7 | #D99B22 |
| --rating-bar-poor | This property will overwrite the background color of rating between 3 to 5 | #D97322 |
| --rating-bar-bad | This property will overwrite the background color of rating between 1 to 3 | #D9222A |

  

### ADA Compliance

  

#### Accessibility Features

  

  

Rating Bar is a static bar which will be dispayed on UI on the basis of values provided. To handle accessibility we need to add aria-label attribute.

  

  

#### Keyboard Support

  

  

For Rating bar no keyboard support or events are provided.

  

  

### Usage

  

  

To use the element: 

    <orxe-rating-component  label="Rating"  rating="75"  style="--font-family:san-serif;"></orxe-rating-component>

  

  

### Reference Material