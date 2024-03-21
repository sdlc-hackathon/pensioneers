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

const SummaryCard = ({ selectedMunro }) => {
  const styles = useStyles()
  const navigate = useNavigate()

  return (
    <Card className={styles.cardContainer}>
      <CardActionArea onClick={() => navigate(`/reward/${selectedMunro.id}`)}>
        <CardContent className={styles.cardContent}>
          <Typography gutterBottom variant='h5' component='div'>
            {selectedMunro.name}
          </Typography>
          <Typography variant='body2'>{selectedMunro.meaning}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default SummaryCard
