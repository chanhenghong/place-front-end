import React from 'react';
import Star from '../../components/presentations/star';

export default{
    title: 'presentation/star',
    component: Star,
};

const Template = (args) => <Star {...args}/>;
export const starDefault = Template.bind({});
starDefault.args = {

};