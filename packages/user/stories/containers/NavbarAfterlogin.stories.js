import PrimarySearchAppBar from './../../components/containers/NavBarAfterLogin'
import React from 'react';


export default {
    title:'containers/NavBarAfterLogin',
    component:PrimarySearchAppBar,
}

const Template = (args) => <PrimarySearchAppBar {...args}/>;
export const Navbar = Template.bind({});
Navbar.args={
    appear:true,
    // src:"https://images.mrandmrssmith.com/images/698x522/4390977-song-saa-private-island-koh-rong-islands-cambodia.jpg",

}


