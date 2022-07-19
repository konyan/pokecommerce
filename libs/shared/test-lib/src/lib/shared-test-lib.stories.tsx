import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SharedTestLib } from './shared-test-lib';

export default {
  component: SharedTestLib,
  title: 'SharedTestLib',
} as ComponentMeta<typeof SharedTestLib>;

const Template: ComponentStory<typeof SharedTestLib> = (args) => (
  <SharedTestLib {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
