import React from "react";
import UploadFilePage from "../../components/presentations/photos";

export default {
    title: 'presentation/photo',
    component: UploadFilePage,
};

const Template = (args) => <UploadFilePage {...args}/>;
export const photoDefault = Template.bind({});
photoDefault.args = {

};