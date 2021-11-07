import Draggable from 'react-draggable';
import React from 'react';

class statementBlock extends React.Component {

    render() {
        return(
            <Draggable className="statement-block">
                <div>
                <div>This readme is really dragging on...</div>
                </div>
            </Draggable>
        );
    }
}

export default statementBlock;
