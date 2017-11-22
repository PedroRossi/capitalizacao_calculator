import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ResultDialog from './resultDialog';
import RaisedButton from 'material-ui/RaisedButton';
import calculate from '../lib/calculate';

const styles = {
    paper: {
        textAlign: 'center',
        display: 'inline-block'
    },
    form: {
        textAlign: 'center',
        margin: 20
    },
    select: {
        textAlign: 'left'
    },
    card: {
        width: '70%'
    },
    button: {
        margin: 12
    }
};

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            aplicacao: 0,
            aplicacaoError: "",
            capitalizacao: null,
            tempo: "",
            tempoError: "",
            juros: "",
            jurosError: "",
            resultado: 0,
            open: false
        };
    }

    cleanFields = () => {
        this.setState({
            aplicacao: "0",
            aplicacaoError: "",
            capitalizacao: null,
            tempo: "",
            tempoError: "",
            juros: "",
            jurosError: "",
            resultado: 0
        });
    }

    calculate = () => {
        let { aplicacao, capitalizacao, tempo, juros } = this.state;
        aplicacao = Number(aplicacao);
        tempo = Number(tempo);
        juros = Number(juros);
        const resultado = calculate(aplicacao, capitalizacao, tempo, juros);
        this.setState({
            resultado: resultado,
            open: true
        });
    }

    handleResultClose = () => {
        this.setState({
            open: false
        });
    }

    handleTextChange = (ev, stateVar) => {
        const n = Number(ev.target.value);
        let stt = {};
        stt[`${stateVar}`] = ev.target.value;
        if (Number.isNaN(n)) {
            stt[`${stateVar}Error`] = "Por favor digite um número!";
        } else {
            stt[`${stateVar}Error`] = "";
        }
        this.setState(stt);
    }

    handleSelectChange = (ev, i, val) => {
        this.setState({
            capitalizacao: val
        });
    }

    render() {
        return (
            <Paper style={styles.paper} zDepth={5}>
                <form action="" style={styles.form}>
                    <div>
                        <TextField
                            floatingLabelText="Aplicação (R$)"
                            errorText={this.state.aplicacaoError}
                            value={this.state.aplicacao}
                            onChange={(ev) => this.handleTextChange(ev, 'aplicacao')}
                        />
                    </div>
                    <div>
                        <SelectField 
                            floatingLabelText="Capitalização"
                            value={this.state.capitalizacao}
                            onChange={this.handleSelectChange}
                            style={styles.select}
                        >
                            <MenuItem value={"continua"} primaryText="Continua"/>
                            <MenuItem value={"composta"} primaryText="Composta" />
                            <MenuItem value={"simples"} primaryText="Simples"/>
                        </SelectField>
                    </div>
                    <div>
                        <TextField
                            floatingLabelText="Tempo da Aplicação (meses)"
                            errorText={this.state.tempoError}
                            value={this.state.tempo}
                            onChange={(ev) => this.handleTextChange(ev, 'tempo')}
                        />
                    </div>
                    <div>
                        <TextField
                            floatingLabelText="Taxa de Juros (%)"
                            errorText={this.state.jurosError}
                            value={this.state.juros}
                            onChange={(ev) => this.handleTextChange(ev, 'juros')}
                        />
                    </div>
                </form>
                <div>
                    <RaisedButton
                        label="Calcular"
                        primary={true}
                        style={styles.button}
                        onClick={this.calculate}
                        disabled={
                            this.state.aplicacaoError !== "" || 
                            this.state.aplicacao === "" || 
                            this.state.tempoError !== "" || 
                            this.state.tempo === "" || 
                            this.state.jurosError !== "" || 
                            this.state.juros === "" || 
                            this.state.capitalizacao === null
                        }
                    />
                    <RaisedButton
                        label="Limpar"
                        primary={false}
                        style={styles.button}
                        onClick={this.cleanFields}
                    />
                </div>
                <ResultDialog
                    result={this.state.resultado}
                    open={this.state.open}
                    onRequestClose={this.handleResultClose}
                />
            </Paper>
        );
    }

}

export default Form;