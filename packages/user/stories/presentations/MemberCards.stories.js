import MembersCard from '../../components/presentations/MembersCard'
export default{
    title:'presentations/MembersCard',
    component: MembersCard,
    argsTypes:{
      color : {control: "color"},
    }
}

const Template = (args) => <MembersCard {...args}/>
export const Memberscard = Template.bind({})
Memberscard.args={  
    
}
