<template>
<div>
   <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<body class="w3-light-grey">
<div class="w3-bar w3-top w3-black w3-large" style="z-index:4">
   <span class="w3-bar-item w3-right">
    <a href="http://localhost:8080/#/logout" class="w3-bar-item w3-button"><i class="fa fa-sign-out "></i>Logout</a></span>
  <button class="w3-bar-item " style="padding-top:17px;" @click="openNav()"><i class="fa fa-bars"></i>  Menu</button>
</div>


  
      <span>Welcome, <strong>Admin</strong></span><br>
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
   <a href="javascript:void(0)" class="w3-bar-item w3-button w3-padding-16 left" @click="closeNav()" title="close menu"><i class="fa fa-remove fa-fw"></i> Close Menu</a>

 <a href="http://localhost:8080/#/dashboard" class="w3-bar-item w3-button w3-padding w3-blue left"><i class="fa fa-tachometer fa-fw"></i> Dashboard</a>
    <a href="http://localhost:8080/#/transactions" class="w3-bar-item w3-button w3-padding left"><i class="fa fa-list-alt fa-fw"></i>Transactions</a>
    <a href="http://localhost:8080/#/users" class="w3-bar-item w3-button w3-padding left"><i class="fa fa-users fa-fw"></i>Users</a>
   
    


</div>
<div class="w3-main" style="margin-left:10px;">
  <header class="w3-container" style="padding-top:22px">
    <h5><b><i class="fa fa-dashboard"></i> My Dashboard</b></h5>
  </header>

<div class="w3-row-padding w3-margin-bottom">
    <div class="w3-quarter">
      <div class="w3-container w3-red w3-padding-16">
        <div class="w3-left"><i class="fa fa-users w3-xxxlarge"></i></div>
        <div class="w3-right">
          <h3>{{userCount}}</h3>
        </div>
        <div class="w3-clear"></div>
        <h4>Users</h4>
      </div>
    </div>
    <div class="w3-quarter">
      <div class="w3-container w3-blue w3-padding-16">
        <div class="w3-left"><i class="fa fa-list-alt w3-xxxlarge"></i></div>
        <div class="w3-right">
          <h3>{{transactionCount1}} </h3>
        </div>
        <div class="w3-clear"></div>
        <h4>Transactions in token 1</h4>
      </div>
    </div>
    <div class="w3-quarter">
      <div class="w3-container w3-teal w3-padding-16">
        <div class="w3-left"><i class="fa fa-list-alt w3-xxxlarge"></i></div>
        <div class="w3-right">
          <h3>{{transactionCount2}} </h3>
        </div>
        <div class="w3-clear"></div>
        <h4>Transactions in token 2</h4>
      </div>
    </div>
    <div class="w3-quarter">
      <div class="w3-container w3-orange w3-text-white w3-padding-16">
        <div class="w3-left"><i class="fa fa-list-alt w3-xxxlarge"></i></div>
        <div class="w3-right">
          <h3>{{transactionCount3}} </h3>
        </div>
        <div class="w3-clear"></div>
        <h4>Transactions in token 3</h4>
      </div>
    </div>
  </div>
 <hr>

  <div class="w3-container" style="width:800px; padding-left:350px;text-align:center;">
    <h5>Total amount spend</h5>
    <table class="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
      <tr  v-for="(items,i) in demo" :key="items.token">
        <td style="text-align:center;"> <pre>Token {{i+1}}         :</pre></td>
        <td style="text-align:left;">{{items.value}}</td>
      </tr>
      
    </table><br>
  
  </div>
    </div>

</body>
</div>

</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {
      userCount: "",
      transactionCount1: "",
      transactionCount2: "",
      transactionCount3: "",
      demo: [],
      count: 1
    };
  },
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "200px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/userCount")
      .then(response => {
        console.log(response.data);
        this.userCount = response.data.count;
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("http://localhost:3000/transCount1")
      .then(response => {
        console.log(response.data);
        this.transactionCount1 = response.data.tcount;
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("http://localhost:3000/transCount2")
      .then(response => {
        console.log(response.data);
        this.transactionCount2 = response.data.tcount;
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("http://localhost:3000/transCount3")
      .then(response => {
        console.log(response.data);
        this.transactionCount3 = response.data.tcount;
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("http://localhost:3000/total")
      .then(response => {
        console.log(response.data);
        this.demo = response.data.results;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>



<style scoped>
body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 18px;
  color: #818181;
  display: block;
  transition: 0.3s;
}
.leftal {
  text-align: left;
}
.top {
  padding-top: 50px;
}
.left {
  float: left;
}
.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 30px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 15px;
  }
}

html,
body,
h1,
h2,
h3,
h4,
h5 {
  font-family: "Raleway", sans-serif;
}
</style>