import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from './footer';

export default {
  component: Footer,
  title: 'footer',
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
