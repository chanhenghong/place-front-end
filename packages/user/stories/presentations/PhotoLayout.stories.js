import Multivideo from '../../components/presentations/MultipleItem'
export default{
    title:'presentations/Multivideo',
    component: Multivideo,
    argsTypes:{
      color : {control: "color"},
    }
}

const Template = (args) => <Multivideo {...args}/>
export const MultiVideo = Template.bind({})
MultiVideo.args={  
    
}
