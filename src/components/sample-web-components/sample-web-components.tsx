import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sample-web-components',
  styleUrl: './sample-web-components.css',
  shadow: true,
})
export class SampleWebComponents {
  @Prop() name: string;

  render() {
    return (
      <div>
        <span>name: </span>
        <span>{this.name}</span>
        <form>
          <input />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
