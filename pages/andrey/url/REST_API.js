export const api = {
  user:{

    sendJson(ip,objToSend){
      return fetch(`/@api/user/${ip}`,{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(objToSend)
         
        
      })
    },
    getJson(){},
  },
}

api.user.sendJson(35,{})





fetch("/@api/user/0",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({a: 1, b: 2})
})
.then(function(res){ console.log(res) })
.catch(function(res){ console.log(res) })