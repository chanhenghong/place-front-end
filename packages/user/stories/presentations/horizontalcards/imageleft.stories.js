import HorizontalCardImageLeft from './../../../components/presentations/horizontalcards/imageleft'
export default{
    title:'presentations/horizontalcards/imageleft',
    component: HorizontalCardImageLeft,
    argsTypes:{
      color : {control: "color"},
    }
}

const Template = (args) => <HorizontalCardImageLeft {...args}/>
export const imageleft = Template.bind({})
imageleft.args={
    url:"https://pix10.agoda.net/hotelImages/620/620936/620936_17040711520052182097.jpg?ca=6&ce=1&s=1024x768", 
    title:"Koh Rong", 
    desc:"This is the place that is the most famous for exotic beach and peaceful nature", 
    items:'hi', 
    // heartColor:color,
}
