import React from "react";
import PrimarySearchAppBar from "../../components/containers/NavBarAfterLogin";

export default {
    title: 'containers/PrimarySearchAppBar',
    component: PrimarySearchAppBar,
};

const Template = (args) => <PrimarySearchAppBar {...args}/>;

export const SearchAppBar = Template.bind({});
SearchAppBar.args = {
   
};