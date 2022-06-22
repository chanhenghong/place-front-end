import React from "react";
import ButtonBases from "../../components/presentations/TrendyCard";

export default {
    title: 'presentation/TrendyCard',
    component: ButtonBases,
};

export const Template = (args) => <ButtonBases {...args} />;
const TrendyCardDefault = Template.bind({});
TrendyCardDefault.args = {

};