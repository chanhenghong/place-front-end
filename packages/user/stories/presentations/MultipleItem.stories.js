import PhotoLayout from '../../components/presentations/PhotoLayout'
export default{
    title:'presentations/PhotoLayout',
    component: PhotoLayout,
    argsTypes:{
      color : {control: "color"},
    }
}

const Template = (args) => <PhotoLayout {...args}/>
export const PhotoLayout1 = Template.bind({})
PhotoLayout1.args={  
    
}
