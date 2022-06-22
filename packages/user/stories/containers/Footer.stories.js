import Footer from './../../components/containers/Footer'
import React from 'react';

export default{
    title:'containers/Footer',
    component:Footer,
    argTypes: {
      color : {control: "color"},
    }
}

const Template = (args) => <Footer {...args}/>;
export const Footer1 = Template.bind({});
Footer.args = {
 }