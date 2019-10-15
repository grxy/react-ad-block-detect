import { Component } from 'react';
import PropTypes from 'prop-types';

import { detected } from 'adblockdetect';

const { node } = PropTypes;

class AdBlockDetect extends Component {
    static displayName = 'AdBlockDetect'

    static propTypes = {
        children: node
    }

    state = {
        detected: false
    }

    componentDidMount = () => {
        this.setState({
            detected: detected()
        });
    }

    render = () => this.state.detected ? this.props.children : null
}

export default AdBlockDetect;
