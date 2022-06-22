import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card_56 } from "./Card_56";

export default{
    title: 'Cards',
    component: Card_56,
    argTypes: {
        color: {control: "color"},
        created: {control: "date"},
        updated: {control: "date"}
    }
} as ComponentMeta<typeof Card_56>;

const Template: ComponentStory<typeof Card_56> = (args) => <Card_56 {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  map: "https://storage.googleapis.com/support-forums-api/attachment/thread-11325546-16293980148694269169.jpg",
  title: "Land Registration",
  color: "#18A0FB",
  backgroundColor: "#FFFFFF",
  name: "Sum_Dara",
  created: "Jan 26, 2022",
  updated: "Jan 26, 2022",
  viewCount: 2,
};

export const Secondary = Template.bind({});
Secondary.args = {
  map: "https://storage.googleapis.com/support-forums-api/attachment/thread-11325546-16293980148694269169.jpg",
  title: "Land Registration",
  color: "#18A0FB",
  backgroundColor: "#FFFFFF",
  name: "Sum_Dara",
  created: "Jan 26, 2022",
  updated: "Jan 26, 2022",
  viewCount: 2,  
};