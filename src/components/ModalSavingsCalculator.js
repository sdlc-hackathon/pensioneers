import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SavingsIcon from '@mui/icons-material/Savings';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const ModalSavingsCalculator = ({ onClose, totalPension }) => {
    const [depositAmount, setDepositAmount] = useState('');
    const [period, setPeriod] = useState('');
    const [growthData, setGrowthData] = useState(null);
    const [metrics, setMetrics] = useState(null);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300, // Adjust the width as needed
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: '8px',
    };

    const calculateGrowth = () => {
        const annualInterestRate = 0.05; // Assuming a constant annual interest rate
        let monthlyCompoundAmount = totalPension;
        let totalInterestEarned = 0;
        let monthlyDeposit = Number(depositAmount);
        let investmentPeriod = Number(period);
        let labels = [];
        let data = [];

        for (let month = 1; month <= investmentPeriod; month++) {
            let monthlyInterest = (monthlyCompoundAmount + monthlyDeposit) * (annualInterestRate / 12);
            monthlyCompoundAmount += monthlyDeposit + monthlyInterest;
            totalInterestEarned += monthlyInterest;
            labels.push(`${month} month${month > 1 ? 's' : ''}`);
            data.push(monthlyCompoundAmount.toFixed(2));
        }

        const totalInvested = monthlyDeposit * investmentPeriod;
        const finalBalance = monthlyCompoundAmount;
        const totalGrowth = finalBalance - totalPension - totalInvested;

        setGrowthData({
            labels,
            datasets: [
                {
                    label: 'Projected Growth',
                    data,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1,
                },
            ],
        });

        setMetrics({
            totalInvested: totalInvested.toFixed(2),
            totalInterest: totalInterestEarned.toFixed(2),
            finalBalance: finalBalance.toFixed(2),
            totalGrowth: totalGrowth.toFixed(2),
        });
    };

    const handleButtonClick = () => {
        // Any other logic...
        onClose(); // This will call the function passed from the parent to close the modal.
    };


    return (
        <Modal
            open={true}
            onClose={handleButtonClick}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Projected Pension Growth
                </Typography>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Monthly Deposit Amount (£)"
                            type="number"
                            variant="outlined"
                            value={depositAmount}
                            onChange={(e) => setDepositAmount(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Investment Period (Months)"
                            type="number"
                            variant="outlined"
                            value={period}
                            onChange={(e) => setPeriod(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" onClick={calculateGrowth} sx={{ width: '100%' }}>
                            Calculate Growth
                        </Button>
                    </Grid>
                </Grid>

                {metrics && (
                    <Paper elevation={3} sx={{ mt: 8, p: 2, display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', bgcolor: '#f0f0f0' }}>
                        <Box display="flex" flexDirection="column" alignItems="center" style={{marginTop:"1em"}}>
                            <TrendingUpIcon color="success" />
                            <Typography>Invested: £{metrics.totalInvested}</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center" style={{ marginTop: "1em" }}>
                            <MonetizationOnIcon color="primary" />
                            <Typography>Interest: £{metrics.totalInterest}</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center" style={{ marginTop: "1em" }}>
                            <AccountBalanceWalletIcon color="secondary" />
                            <Typography>Balance: £{metrics.finalBalance}</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center" style={{ marginTop: "1em" }}>
                            <SavingsIcon color="action" />
                            <Typography>Growth: £{metrics.totalGrowth}</Typography>
                        </Box>
                    </Paper>
                )}

                {growthData && (
                    <Box sx={{ mt: 2, height: '300px' }}>
                        <Line data={growthData} />
                    </Box>
                )}
            </Box>
        </Modal>
    );
};

export default ModalSavingsCalculator;
