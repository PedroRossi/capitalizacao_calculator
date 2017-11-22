import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ResultDialog extends Component {

    render() {
        const actions = [
            <FlatButton
                label="Fechar"
                primary={true}
                onClick={this.props.onRequestClose}
            />
        ];
        const result = parseFloat(this.props.result).toFixed(2);

        return (
            <Dialog
                title="Você vai receber"
                actions={actions}
                modal={false}
                open={this.props.open}
                onRequestClose={this.props.onRequestClose}
            >
                {`R$${result}`}
            </Dialog>
        );
    }

}

export default ResultDialog;