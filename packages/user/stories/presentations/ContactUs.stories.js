import ContactUs from './../../components/presentations/ContactUs'
export default{
    title:'presentations/ContactUs',
    component: ContactUs,
    argsTypes:{
      color : {control: "color"},
    }
}

const Template = (args) => <ContactUs {...args}/>
export const contactUs = Template.bind({})
contactUs.args={
    url:"http://localhost:3000/BusinessCard.png",

}
