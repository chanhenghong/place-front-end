import HorizontalCardImageRight from './../../../components/presentations/horizontalcards/imageright'
export default{
    title:'presentations/horizontalcards/imageright',
    component: HorizontalCardImageRight,
    argsTypes:{
      color : {control: "color"},
    }
}

const Template = (args) => <HorizontalCardImageRight {...args}/>
export const imageright = Template.bind({})
imageright.args={
    url:"https://tripily.co/wp-content/uploads/2020/03/Discover-Bokor-Scooter.jpg", 
    title:"Bokor Mountain", 
    desc:"This is the place that is the most famous for exotic beach and peaceful nature", 
    items:'hi', 
    // heartColor:color,
}
