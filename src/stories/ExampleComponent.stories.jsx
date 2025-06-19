import React from 'react';
import ExampleComponent from '../components/ExampleComponent';

export default {
  title: 'Example/ExampleComponent',
  component: ExampleComponent,
};

const Template = (args) => <ExampleComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props for the ExampleComponent here
};

export const AnotherState = Template.bind({});
AnotherState.args = {
  // Add props for another state of the ExampleComponent here
};