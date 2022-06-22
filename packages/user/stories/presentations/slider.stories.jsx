import React from 'react';
import SwipeableTextMobileStepper from '../../components/presentations/slider';

export default{
    title: 'presentation/slider',
    component: SwipeableTextMobileStepper,
};

const Template = (args) => <SwipeableTextMobileStepper {...args}/>;
export const sliderDefault = Template.bind({});
sliderDefault.args = {

};