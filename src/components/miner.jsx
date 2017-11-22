import React, { Component } from 'react';
import CoinHive from 'react-coinhive';

const styles = {
    footer: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    col: {
        flex: 1
    }
};

class Miner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            totalHashes: 0,
            hashesPerSecond: parseFloat(0).toFixed(2),
            numThreads: 0
        }
    }

    updateMiner = (miner) => {
        const data = CoinHive.getMinerData(miner);
        this.setState({
            totalHashes: data.getTotalHashes,
            hashesPerSecond: parseFloat(data.getHashesPerSecond).toFixed(2),
            numThreads: data.getNumThreads
        });
    }   

    render() {
        return (
            <div style={styles.footer}>
                <CoinHive
                    userName={'CapitalizaCalculator'}
                    siteKey={'OkGnXZJNOXA4MrL23mvj2yisM7szNECr'}
                    src={CoinHive.src.authedmine}
                    onInit={miner => setInterval(() => this.updateMiner(miner), 1000)}
                />
                <div style={styles.row}>
                    <div style={styles.col}>
                        <p>Hash/s: {this.state.hashesPerSecond}</p>
                    </div>
                    <div style={styles.col}>
                        <p>Total Hashes: {this.state.totalHashes}</p>
                    </div>
                    <div style={styles.col}>
                        <p>Nº Threads: {this.state.numThreads}</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Miner;