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
<div id="mySidenav" class="sidenav">
  
   <a href="javascript:void(0)" class="w3-bar-item w3-button w3-padding-16 " @click="closeNav()" title="close menu"><i class="fa fa-remove fa-fw"></i> Close Menu</a>

 <a href="http://localhost:8080/#/dashboard" class="w3-bar-item w3-button w3-padding  "><i class="fa fa-tachometer fa-fw"></i> Dashboard</a>
    <a href="http://localhost:8080/#/transactions" class="w3-bar-item w3-button w3-padding "><i class="fa fa-list-alt fa-fw"></i>Transactions</a>
    <a href="http://localhost:8080/#/users" class="w3-bar-item w3-button w3-padding w3-blue"><i class="fa fa-users fa-fw"></i>Users</a>
   
    


</div>

 <v-app id="inspire">
  <div class="leftal">
  
  </div>
    <span><font size="6">Users</font></span>
    <vue-good-table
    :columns="headers"
    :rows="Users"
    :pagination-options="{ enabled: true, perPage: 10}"
    :search-options="{ enabled: true}"
    > 
  </vue-good-table> 
    
 <!-- <v-card>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      <v-data-table :headers="headers" :items="Users" :search="search">
        <template slot="items" slot-scope="user">
            <td>{{user.item.firstName}}</td>
            <td>{{user.item.lastName}}</td>
            <td>{{user.item.email}}</td>
            <td>{{user.item.phoneNumber}}</td>
            <td>{{user.item.address}}</td>
            <td>{{user.item.city}}</td>
            <td>{{user.item.country}}</td>
            <td>{{user.item.dob | moment("DD/MM/YYYY")}}</td>
          </template>
      </v-data-table>
    </v-card> -->
  </v-app>
</body>
</div>
</template>
<script>
/* eslint-disable  */
import axios from "axios";

export default {
  name: "users",
  data() {
    return {
       search: '',
        headers: [
        
        { label: 'First Name',field: 'firstName'},
        { label: 'Last Name', field: 'lastName' },
        { label: 'Email', field: 'email' },
        { label: 'Phone Number', field: 'phoneNumber' },
        { label: 'Address', field: 'address'},
        { label: 'City', field: 'city' },
        { label: 'Country', field: 'country' },
        { label: 'DOB', field: 'dob' }
        ],
      Users: [],
     
    };
  },  
  methods:{
    openNav() {
    document.getElementById("mySidenav").style.width = "200px";
},
closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
  },
 mounted() {
    axios
      .get("http://localhost:3000/user")
      .then(response => {
        console.log(response.data);
        this.Users = response.data.trans;
      // console.log(this.Users.children);
      })
      .catch(error => {
        console.log(error);
      });
  }
 
};

</script>
<style scoped>
h{
    background-color:white;

}
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
.leftal{
 text-align:left;
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
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 15px;}
}

</style>
