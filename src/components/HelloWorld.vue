<template>
  <div class="hello">
    <div class="modal-dialog">
				<div class="loginmodal-container">
					<h1><strong>Login</strong></h1><br>
  <form @submit.prevent="handleSubmit">{{msg}}
  <div class = "form-group">

    <!-- <label for ="email" ><strong>Username</strong></label> -->
    <input type="text" v-model = "email" placeholder="Username" name="email" class = "form-control" :class="{ 'is-invalid': submitted && !email }"/> 
    <div v-show="submitted && !email" class="invalid-feedback" style="color:red;">Username is required</div>
  </div>
  <div class = "form-group">
    <!-- <label for ="password"><strong>Password</strong></label> -->
    <input type="password" v-model = "password" placeholder="Password" name="password" class = "form-control" :class="{ 'is-invalid': submitted && !password }"/>
    <div v-show="submitted && !password" class="invalid-feedback" style="color:red">Password is required</div>
  </div> 
  <div class = "form-group"> 
   	<input type="submit" name="login" class="login loginmodal-submit" value="Login">
  </div>
    </form>
	</div>
			</div>
     
				  
					
				  
			
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
            email: '' ,
            password: '' ,
            submitted: false ,
            loading: '' ,
            status: '',
            msg: ''
           
            }
    },
     methods:{
    login() {
            
  

            const formData = new FormData();
            formData.append("email", this.email);
            formData.append("password", this.password);

            this.loading = "Signing in";
            this.$http.post('http://localhost:3000/login' , {email: this.email, password:this.password})
            
            .then(res => {
              console.log(res);
              this.loading = '';
              if (res.body.success == true) {
                //this.msg="user logged in";
             this.$router.push({ name: "dashboard"})
           } else {
          this.success = res.body.msg;
          
       this.msg="user not found";
        }
            })
              
          },

     handleSubmit (e) {
       this.submitted = true;
       const { email , password , submitted} = this;
       if(submitted && !email){
         console.log("Username is required")
       }
       if(submitted && !password){
         console.log("Password is required")
       }
       if(email && password) {
         this.login()
        }

 
  }
  
     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.loginmodal-container {
  padding: 30px;
  max-width: 350px;
  width: 100% !important;
  background-color: #E0E0E0;
  margin: 0 auto;
  border-radius: 2px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  font-family: roboto;
}

.loginmodal-container h1 {
  text-align: center;
  font-size: 1.8em;
  font-family: roboto;
}

.loginmodal-container input[type=submit] {
  width: 100%;
  display: block;
  margin-bottom: 10px;
  position: relative;
}

.loginmodal-container input[type=text], input[type=password] {
  height: 44px;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
  -webkit-appearance: none;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-top: 1px solid #c0c0c0;
  /* border-radius: 2px; */
  padding: 0 8px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}

.loginmodal-container input[type=text]:hover, input[type=password]:hover {
  border: 1px solid #b9b9b9;
  border-top: 1px solid #a0a0a0;
  -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
}

.loginmodal {
  text-align: center;
  font-size: 14px;
  font-family: 'Arial', sans-serif;
  font-weight: 700;
  height: 36px;
  padding: 0 8px;
/* border-radius: 3px; */
/* -webkit-user-select: none;
  user-select: none; */
}

.loginmodal-submit {
  /* border: 1px solid #3079ed; */
  border: 0px;
  color: #fff;
  text-shadow: 0 1px rgba(0,0,0,0.1); 
  background-color: #4d90fe;
  padding: 17px 0px;
  font-family: roboto;
  font-size: 14px;
  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed)); */
}

.loginmodal-submit:hover {
  /* border: 1px solid #2f5bb7; */
  border: 0px;
  text-shadow: 0 1px rgba(0,0,0,0.3);
  background-color: #357ae8;
  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#357ae8)); */
}

.loginmodal-container a {
  text-decoration: none;
  color:gray;
  font-weight: 400;
  text-align: center;
  display: inline-block;
  opacity: 0.6;
  transition: opacity ease 0.5s;
} 


</style>