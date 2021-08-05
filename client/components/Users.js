// Libraries
import { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
// Components
import CardUser from './CardUser'
// GQL
import { useLazyQuery, useQuery } from '@apollo/client'
import { GET_USERS } from '../graphql/query'
// Material UI
import { Button } from '@material-ui/core'

const Users = () => {
  const [numberOfCardDisplayed, setNumberOfCardDisplayed] = useState(20)
  const [users, setUsers] = useState([])
  const classes = useStyles();
  const [getUsers, { called, loading, data }] = useLazyQuery(
    GET_USERS,
    { variables: { usersFirst: numberOfCardDisplayed }, onCompleted: data => {
      setUsers([...data.users])
    }}
    
  );
  useEffect(() => {
    getUsers()
  }, [])
  const loadMoreUsers = () => {
    setNumberOfCardDisplayed(numberOfCardDisplayed + 20)
    getUsers()
  }
  return(
    <div >
      <Grid container className={classes.container}   
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container justifyContent="space-around" spacing={3}>
          {users.length && users.map(user => 
            <div key={user.name}>
              <Grid item xs={3}  className={classes.item} >
                <CardUser user={user}/>
              </Grid>
            </div>
          )}
        </Grid>
      </Grid>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 40, paddingBottom: 40,}}> 
        <Button color="primary" variant="contained" onClick={loadMoreUsers}>{loading ? 'Loading...': 'Load More'}</Button>
      </div>
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  myButton: {
    width: 120
  },
  item: {
    marginTop: 40
  },
}));
export default Users