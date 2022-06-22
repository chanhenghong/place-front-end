import BoxLocation from './../../components/presentations/LocationBox'
export default{
    title:'presentations/LocationBox',
    component: BoxLocation,
    argsTypes:{
      color : {control: "color"},
    }
}

const Template = (args) => <BoxLocation {...args}/>
export const LocationBox = Template.bind({})
LocationBox.args={  
    address:'Koh Ouen Private, Koh Rong Archipelago, Near Sihanouville',
    email:"example@gmail.com",
    number:"017 900 906 (Cellcard) (Telegram), 069 900 900",
    FBpage:"Koh Rong",
    placeApp:"Koh Rong",
}
