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


>
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

|--bar-background-color | This property used to set background color of the rating bar | Default Green |

  

### ADA Compliance

#### Accessibility Features

  

Rating Bar is a static bar which will be dispayed on UI on the basis of values provided. To handle accessibility we need to add aria-label attribute.

  

#### Keyboard Support  

For Rating bar no keyboard support or events are provided.

  

### Usage

  

To use the element:

  

    <orxe-rating-component  label="Rating"  rating="50" ></orxe-rating-component>

  
### Snapshot
![Rating Bar Component](packages\rating-component\rating.PNG)

### Reference Material