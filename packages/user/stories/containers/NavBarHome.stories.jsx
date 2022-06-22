import React from "react";
import NavbarHome from "../../components/containers/NavBarHome";

export default {
    title: 'containers/NavBarHome',
    component: NavbarHome,
};

const Template = (args) => <NavbarHome {...args} />;

export const NavBarHoemDefault = Template.bind({});
NavbarHome.args = {

};