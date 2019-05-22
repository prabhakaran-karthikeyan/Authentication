
<template>
  <section class="container">
<div class="fixed_bg" id="login_window" v-if="logged_in == false">
        <div class="container" >       
          <button class="back_close_Window"  @click="activePopWindow = ''"><img src="images/go-back-left-arrow.png" alt=""/></button>
          <h2>Login to your account</h2>
          <button class="close_window" @click="activePopWindow = ''">&times;</button>
          <div class="form">
              <form >
                  <div class="row">
                      <!-- <label class="label">Mobile No / Email</label> -->
                      <input type="text" name="username" v-model="email"
                             placeholder="Mobile No / Email" required />
                  </div>
                  <div class="row">
                      <!-- <label class="label">Password</label> -->
                      <input type="password" name="password" v-model="password" 
                             placeholder="Password" required />
                  </div>
                  <div class="row">
                      <button @click="login($event)">Login</button>
                  </div>
              </form>
          </div>
          <div style="clear: both;"></div>
        </div>
  </div>
 
</section>
</template>
<script>
  import {fireDb} from '~/plugins/firebase.js'
  import {firebase} from '~/plugins/firebase.js'
  require('firebase/auth')
  export default {
    middleware: 'routing',
    data() {
      return {
        email : '',
        password : '',
        logged_in: false
      }
    },
    methods: {
      async login(e) {
        var self = this;
        e.preventDefault();
        console.log("yes");
        console.log(fireDb);
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        function(user) {
          console.log(user);
          self.logged_in = true;
          alert("success! you are logged in")
          self.$router.push("/welcome");
         
        },
        function(err) {
          alert("failure reason=" + err.message)

        }
        );
      }
    }
  }
</script>
<style>
  .welcome {
    background: #fff;
    display:flex;
    text-align: center;
    justify-content: center;
  }
  .fixed_bg{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 3
}
.fixed_bg .container{
    position: relative;
    width: 45%;
    max-height: 600px;
    background: #fff;
    margin: 3.5% auto 0 auto;
    padding: 25px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
}
.fixed_bg .container h2{
    font-size: 25px;
    font-family: Montserrat;
    font-style: normal;
    text-align: center;
    font-weight: 600;
    line-height: 16px;
    color: #000000;    
}
.fixed_bg .container p.desc{
    font-size: 13px;
    color: #666;
    margin-top: 5px;
}
.fixed_bg .container p.desc button{
    margin: 0;
    padding: 0;    
    font-family: 'open_sansregular';
    font-size: inherit;
    color: #ff8328;
    border: none;
    background: transparent;
    text-decoration: underline;
    cursor: pointer
}
.fixed_bg .container button.close_window{
    display:block;
    width: 40px;
    height: 40px;
    margin: 0;
    padding: 0;
    border: none;
    background: #eee;
    border: 1px solid #ccc;
    border-radius: 50%;
    font-family: 'open_sansbold';
    font-size: 20px;
    color: #000;    
    position: absolute;
    right: -20px;
    top: -20px!important;
    cursor: pointer
}
.fixed_bg .container button.back_close_Window {
    display:none;
}
.fixed_bg .container button.close_window:hover{
    background: #ff8328;
    color: #fff;
    border: 1px solid #ff8328;
}
.fixed_bg .container .row{
    position: relative;
    width: 100%;
    float: left;
    margin: 8px 0;
}
.fixed_bg .container .rows {
    position: relative;
    width: 100%;
    float: left;
    margin: 8px 0;
}
.fixed_bg .container .form{
    margin-top: 15px;
}

.fixed_bg .container .row input[type="text"],
.fixed_bg .container .row input[type="password"],
.fixed_bg .container .row input[type="email"]{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    font-size: 13px;
    color: #000000;
    width: 100%;
    border: 1px solid #ddd;
    padding: 0 10px;
    height: 45px;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;   
}
.fixed_bg .container .row button{
    border: none;
    cursor: pointer;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    line-height: 22px;
    font-size: 18px;
    text-transform: uppercase;
    color: #FFFFFF;
    background: linear-gradient(90deg, #FF4A4D 0%, #CC3739 100%);
    cursor: pointer;
    width:100%;
    /*border-bottom: 1px solid #ddd;*/
    margin: 0;
    padding: 0 40px;    
    height: 40px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;       
}
</style>