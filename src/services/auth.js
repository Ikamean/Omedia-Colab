// authorization methods

function login(){
    var formdata = new FormData();
    formdata.append("userName", this.userName);
    formdata.append("password", this.password);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
      credentials: 'include',
    };

    fetch("http://127.0.0.1:5000/api/login", requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.success = data.success;
        localStorage.setItem('userID', data.data.userId)
        localStorage.setItem('userName', data.data.userName)
        this.activeUser = localStorage.getItem('userName')
        if (localStorage.getItem('userID')){
          this.dialog = !this.success;
        }
        this.userName = '';
        this.password = '';
      }) 
      .catch(error => {
        console.log('error', error)
        this.error = error.response.data;
        this.success = false;
      });
  }

  function register(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"userName":this.userName,"password":this.password, "email":this.email});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://127.0.0.1:5000/api/register", requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.success = true;
        this.username = '';
        this.password = '';
        this.dialog = false;
      })
      .catch(err => {
        this.success = false;
        this.error = err.response.data;
        console.log(this.error)
      });
  },