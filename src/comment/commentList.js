import React from 'react'
import comment from './comment'
class commentList extends React.Component {
    render() {
        return (
            <div>
                <comment></comment>
                <comment></comment>
                <comment></comment>
            </div>
    )
    }

}

export {commentList as default}