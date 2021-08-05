// Libraries
import { Card, CardHeader, Avatar } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";


const CardUser = ({ user }) => {
  const classes = useStyles();
  return(
    <div> 
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                  {user?.name?.split(' ')[1][0]}{user?.name?.split(' ')[2][0]}
              </Avatar>
            }
            title={user.name}
            subheader={user.address}
          />
        </Card>
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 345,
      height: 160,
    },
    avatar: {
      backgroundColor: green[500],
    },
  })
)
export default CardUser