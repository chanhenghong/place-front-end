import MultipleSelect from '../../components/presentations/SearchBar'
export default{
    title:'presentations/MultipleSelect',
    component: MultipleSelect,
    argsTypes:{
      color : {control: "color"},
    }
}

const Template = (args) => <MultipleSelect {...args}/>
export const MultipleSelect = Template.bind({})
MultipleSelect.args={  
    
}
