import React, {useState} from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useNavigate } from 'react-router-dom';
import { Button, Box, Card, CardContent, Typography, Grid, Badge, Modal, TextField } from '@mui/material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ModalSavingsCalculator from '../../components/ModalSavingsCalculator';
import Logo from "../../assets/FUNDR.gif"
//import Logo from '../../assets/FUNDR.tif'

const Dashboard = ({ user }) => {
  const navigate = useNavigate();
  const [viewMoneyModal, setviewMoneyModal] = useState(false);
  const [viewMoneySavingsModal, setViewMoneySavingsModal] = useState(false);
  const colours = {
    green: ""
  }

  const [totalPension, setTotalPension] = useState(1000);
  const growthFromLastMonth = 50; // Example growth value
  const pensionGrowthChartData = {
    labels: ["April", "May", "June", "July", "August", "September"],
    datasets: [
      {
        label: "Pension Growth",
        data: [950, 970, 980, 990, 1000, 1050], // Example data representing the pension value over months
        fill: false,
        borderColor: "#007bff",
        tension: 0.1,
      },
    ],
  };


  const growthChartData = {
    labels: ["April", "May", "June", "July", "August", "September"],
    datasets: [
      {
        label: "Monthly Growth",
        data: [200, 150, 300, 600, 800, totalPension],
        fill: true, // Fill the area under the line
        backgroundColor: "rgba(255, 159, 64, 0.2)", // Light orange fill beneath the line
        borderColor: "#7ca655", // Orange line color
        tension: 0.4, // Adds a slight curve to the line
        borderWidth: 2,
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "yellow",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        display: false, // Hide X-axis labels
      },
      y: {
        display: false, // Hide Y-axis labels
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    elements: {
      line: {
        borderColor: 'green', // Change line color to green
        backgroundColor: 'rgba(76, 175, 80, 0.1)', // Light green fill
      },
      point: {
        radius: 0 // Hide points on the line
      }
    },
    maintainAspectRatio: false,
  };


  return (
    <Box sx={{ p: 2 }}>
      <div style={{
        display:"flex",
        justifyContent: "center"
      }}>
        <img src={Logo}/>
      </div>
      {/* Welcome Card */}
      <div style={{
        backgroundColor: "#4495a2 ",
        color: "white",
        borderRadius: "1rem",
        padding: "1rem"
      }}>

        {
          viewMoneyModal ? <ModalMoney setIsOpen={setviewMoneyModal} setTotalPensionsState={setTotalPension}/> : ""
        }

        {
          viewMoneySavingsModal ? <ModalSavingsCalculator onClose={setViewMoneySavingsModal} totalPension={totalPension} /> : ""
        }

        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Hi Lily!
          </Typography>
          <Typography variant="body1">
            Ready to check your progress?
          </Typography>
        </CardContent>
        <br />


        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2, padding: "1rem" }}>
          <Typography variant="h6" component="div">
            Pension Pot
          </Typography>
          <div>
            <Typography variant="h4" component="div">
              £{totalPension}
            </Typography>
            <Typography variant="subtitle1" color="lightgray">
              Balance
            </Typography>
          </div>
        </div>
        <div style={{ height: "10rem" }}>
          
          <Box sx={{ width: '100%', height: '150px' }}> {/* Adjust size as needed */}
            <Line data={growthChartData} options={options} />
          </Box>
          <br /><br />  
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-around', margin: '1rem 0' }}>
          <Button
            variant="contained" // Use 'contained' for more emphasis
            startIcon={<VisibilityIcon />}
            onClick={() => {
              setViewMoneySavingsModal(true)
            }}
            sx={{
              textTransform: 'none',
              backgroundColor: '#7ca655', // Custom color for the button
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                backgroundColor: '#6b944d', // Slightly darker shade for the hover state
                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
              },
            }}
          >
            Compound View
          </Button>
          <Button
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
            onClick={() => {
              setviewMoneyModal(true)
            }}
            sx={{
              textTransform: 'none',
              backgroundColor: '#7ca655', // Custom color for the button
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                backgroundColor: '#6b944d', // Slightly darker shade for the hover state
                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
              },
            }}
          >
            Add Money
          </Button>

        </div>        
      </div>
      <br/>
      <Card sx={{ bgcolor: 'grey.100', display: 'flex', alignItems: 'center', p: 2 }}>
        <Grid container spacing={2} alignItems="center" justifyContent="space-between">
          <Grid item xs={6}>
            <Button
              variant=""
              startIcon={<CardGiftcardIcon />}
              onClick={() => navigate('/rewards')}
              sx={{ textTransform: 'none', width: '100%' }}
            >
              Rewards
            </Button>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: "3rem" }}>
            <Badge badgeContent={5} color="error">
              {/* Empty component if only showing the badge */}
            </Badge>
          </Grid>
        </Grid>
      </Card>

      <Card sx={{ bgcolor: 'grey.100', display: 'flex', alignItems: 'center', p: 2, marginTop: "2rem" }}>
        <Grid container spacing={2} alignItems="center" justifyContent="space-between">
          <Grid item xs={6}>
            <Button
              variant=""
              startIcon={<CardGiftcardIcon />}
              onClick={() => navigate('/rewards')}
              sx={{ textTransform: 'none', width: '100%' }}
            >
              Profile
            </Button>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: "3rem" }}>
          </Grid>
        </Grid>
      </Card>


    </Box>
  );
};

const ModalMoney = ({ setIsOpen, setTotalPensionsState }) => {
  const [inputValue, setInputValue] = useState(''); // Local state to hold input value

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    padding: "1rem",
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
  };

  const handleClose = () => setIsOpen(false);

  const handleSave = () => {
    // Convert inputValue to a number and update the total pensions state
    setTotalPensionsState(prevState => prevState + Number(inputValue));
    setIsOpen(false); // Close the modal after saving
  };

  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Deposit Money
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Enter the amount you wish to add to your pension pot.
        </Typography>
        <TextField
          label="Amount (£)"
          type="number"
          fullWidth
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          sx={{ mt: 2 }}
        />
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={handleClose} sx={{ mr: 1 }}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>Save</Button>
        </Box>
      </Box>
    </Modal>
  );
};


export default Dashboard;
