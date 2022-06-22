import React from "react";
import PersistentDrawerLeft from "../../components/presentations/drawer";
    
export default {
    title: 'presentation/drawer',
    component: PersistentDrawerLeft,
};

const Template = (args) => <PersistentDrawerLeft {...args}/>;
export const drawerDefault = Template.bind({});
drawerDefault.args = {

};