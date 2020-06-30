import React from 'react'

class comment extends React.Component {
    render() {
        return (
            <div>
                <p>姓名<span className={date}>时间</span></p>
                <p>这是评论的内容</p>
            </div>
     )
    }

}

export {comment as default}