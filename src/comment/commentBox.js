import React from 'react'
import commentList from './commentList'
import commentForm from './commentForm'
class commentBox extends React.Component {
   render() {
       return(
           <div>
               <commentList></commentList>
               <commentForm></commentForm>
           </div>
       )
   }
}

export {commentBox as default}