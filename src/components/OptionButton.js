import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography
} from '@material-ui/core'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  cardContainer: {
    alignSelf: 'center'
  },
  cardContent: {
    backgroundColor: 'white'
  }
}))

const OptionButton = () => {
  const styles = useStyles()
  const navigate = useNavigate()

  return (
    <Card className={styles.cardContainer}>
      <CardActionArea onClick={() => navigate(`/rewards`)}>
        <CardContent className={styles.cardContent}>
          <Typography gutterBottom variant='h5' component='div'>
            My Rewards
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default OptionButton
