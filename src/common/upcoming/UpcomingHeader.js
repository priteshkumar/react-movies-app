import React, { Component } from 'react';
import './UpComingHeader.css';
import Typography from '@material-ui/core/Typography';

class UpcomingHeader extends Component {
    render() {
        return <Typography variant="h5" className="upcoming-header">
            Upcoming Movies
        </Typography>
    };
}

export default UpcomingHeader;