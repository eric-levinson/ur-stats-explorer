import axios from 'axios';

const key = process.env.REACT_APP_BCTOKEN

//https://ballchasing.com/api/groups?group=week-01-7jp3zhq4w7&?sort-dir=asc&?sort-by=created
//https://ballchasing.com/api/groups/macaroni-league-0p6avqc0gv
function BallchaseRequest(id, type)  {
    const baseurl = 'http://localhost:8080/https://ballchasing.com/api'
    let reqUrl = baseurl + '/'
    if (type === 'group-list') {
        reqUrl = baseurl + '/groups?group=' + id + '&?sort-by=created&?sort-dir=asc'
    } else if ( type === 'group-stats' ) {
        reqUrl = baseurl + '/groups/' + id
    } else if ( type === 'match-list') {
        reqUrl = baseurl + '/replays?group=' + id + '&?sort-by=replay-date&?sort-by=asc'
    } else if ( type === 'game-stats') {
        reqUrl = baseurl + '/replays/' + id
    } else {
        let err = 'err'
        throw err
    }
 
    
    axios.get(reqUrl + id, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Target-URL': 'https://ballchasing.com/api/',
          'crossorigin': true,
          'Authorization': key,
        }
      })
      .then((res) => {
        let req = res.data
        return req
      })
      .catch((error) => {
        console.error(error)
        return error
      })
  }

export default BallchaseRequest