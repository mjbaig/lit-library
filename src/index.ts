import {LitElement, html} from 'lit-element';

export default class MyComponent extends LitElement {

  render() {
    return html`<span>test</span>>`
  }


}

customElements.define('my-component', MyComponent);
