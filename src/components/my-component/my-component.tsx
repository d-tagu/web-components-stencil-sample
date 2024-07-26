import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * placeholder
   */
  @Prop() placeholder: string;

  /**
   * button label
   */
  @Prop() buttonLabel: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div>
        <div>Hello, World! I'm {this.getText()}</div>
        <div class="input-wrapper">
          <input placeholder={this.placeholder} />
          <button
            onClick={() => {
              alert('button is clicked!');
            }}
          >
            {this.buttonLabel}
          </button>
        </div>
      </div>
    );
  }
}
