import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from 'shared/ui/Modal/Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores dolorum exercitationem inventore? Consequatur cumque distinctio eaque esse fugit id officia, quae quam quod ratione sequi sint sit tenetur vitae.',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores dolorum exercitationem inventore? Consequatur cumque distinctio eaque esse fugit id officia, quae quam quod ratione sequi sint sit tenetur vitae.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
