import React from 'react';

class ProgressBar extends React.Component {
    render () {
        return (
            <div className="progress">
                <div 
                    className="progress-bar bg-info" 
                    role="progressbar" 
                    aria-valuenow="50" 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                />
            </div>
        )
    }
}

export default ProgressBar
