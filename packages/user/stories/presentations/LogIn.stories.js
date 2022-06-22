import LogIn from '../../components/presentations/LogIn'
export default{
    title:'presentations/LogIn',
    component: LogIn,
    argsTypes:{
      color : {control: "color"},
    }
}

const Template = (args) => <LogIn {...args}/>
export const Login = Template.bind({})
Login.args={  
    
}
