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

        return (
            <Dialog
                title="Você vai pagar"
                actions={actions}
                modal={false}
                open={this.props.open}
                onRequestClose={this.props.onRequestClose}
            >
                {`R$${this.props.result}`}
            </Dialog>
        );
    }

}

export default ResultDialog;