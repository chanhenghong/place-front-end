import React from 'react';
import SearchHompage from '../../components/presentations/searchHomepage';

export default {
    title: 'presentation/searchHomepage',
    component: SearchHompage,
};
const Template = (args) => <SearchHompage {...args}/>;
export const searchHomepageDefault = Template.bind({});
searchHomepageDefault.bind = {
    
}