import React from "react";
import Navbar from "../../components/containers/NavBar";

export default {
    title: 'containers/NavBar',
    component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const NavBarPrimary = Template.bind({});
NavBarPrimary.args = {

};