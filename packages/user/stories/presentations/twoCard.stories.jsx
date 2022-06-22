import React from 'react';
import BigCard from '../../components/presentations/twoCard';

export default{
    title: 'presentation/BigCard',
    component: BigCard,
};

const Template = (args) => <BigCard {...args}/>;
export const twoCardDefault = Template.bind({});
twoCardDefault.args = {

};