import Comment from './../../components/presentations/CommentNew'
import { RecoilRoot } from 'recoil'
export default{
    title:'presentations/CommentNew',
    component: Comment,
    argsTypes:{
      color : {control: "color"},
    }
}

const Template = (args) => <RecoilRoot><Comment {...args}/></RecoilRoot>
export const comment = Template.bind({})
comment.args={
  // onSubmit:PropTypes.func,
  
    
}
