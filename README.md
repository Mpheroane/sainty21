<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>


     <link rel="stylesheet" href="bootstrap.min.css"  />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style1.css" />
    <script type="text/javascript" src="javascrp.js"></script>

    <meta charset="utf-8" />
    <title>samsung</title>
  </head>
  <body style="background-color:cornflowerblue">
    <div class="samsung">
       <div style="height:12px;width:10px;background-color:#696969;margin:-13px 0px 0px 106px;border-radius:50px;"></div>
       <div style="height:6px;width:60px;background-color:#696969;margin:-8px 0px 0px 125px;border-radius:10px;"></div>
          <div style="height:8px;width:8px;background-color:#696969;margin:-21px 0px 34px 155px;border-radius:50%;"></div>
          <div class="nav-top">
            <div class="nav-icons">
              <span style="float:left">
                <i class="fa fa-signal" aria-hidden="true"></i>
                <i class="fa fa-wifi" aria-hidden="true"></i>


                </span>
                <span id="times" style="margin-left: 65.5px;margin-right: 47px;">
                      19h00
                  </span>
                <span id="batter">
                  93%<i class="fa fa-battery-three-quarters" aria-hidden="true"></i>

                  </span>

              </div>
            </div>
            <div class="screen" >
              <div class="contents">
        <img src="google.png" width="90%" style="margin:20px 14px"/>
                <div class="lay-out">
                  <i onclick="phone()" style="color:brown;" class="fa fa-address-book" aria-hidden="true"></i>
                  <a href="mailto:mpheroanesainty21@gmail.com">
                            <i style="color:grey;" class="fa fa-envelope" aria-hidden="true"></i>
                       </a>


                       <i onclick="font()" style="color:blue"; class="fa fa-fort-awesome" aria-hidden="true"></i>

                  <i onclick="wallpaper()" style="color:orange;" class="fa fa-picture-o" aria-hidden="true"></i>
                  <i onclick="hom()" style="color:black;" class="fa fa-home" aria-hidden="true"></i>
                  <i onclick="nothing()" style="color:red;" class="fa fa-youtube-play" aria-hidden="true"></i>

                  <i onclick="profilef()" style="color:grey;" class="fa fa-user-circle-o" aria-hidden="true"></i>

                  <i style="color":blue; onclick="search()" class="fa fa-search" aria-hidden="true"></i>

                  <i onclick="nothing()" style="color:green;" class="fa fa-whatsapp" aria-hidden="true"></i>
                  <i onclick="nothing()" style="color:blue;" class="fa fa-twitter-square" aria-hidden="true"></i>
                  <i onclick="nothing()" style="color:blue;" class="fa fa-linkedin-square" aria-hidden="true"></i>
                  <i onclick="heartb()" style="color:red;" class="fa fa-heartbeat" aria-hidden="true"></i>
                        <br />
                        <br />

                         </div>
                         <div class="divider">
                           <hr />
                           </div>
                       <div class="footer">
                        <i onclick="nothing()" style="color:green;" class="fa fa-phone-square" aria-hidden="true"></i>
                        <i onclick="talk()" style="color:skyblue;" class="fa fa-comment" aria-hidden="true"></i>
                        <i onclick="musics()" style="color:blue;" class="fa fa-music" aria-hidden="true"></i>

                        <i onclick="nothing()" style="color:black;" class="fa fa-camera" aria-hidden="true"></i>

                 </div>

</div>

     <iframe id="music" src="https://www.mp3juices.cc/"></iframe>
     <iframe id="fonts" src="https://fontawesome.com/v4.7.0/icons/"></iframe>
     <iframe id="profile" src="http://saintymphex.simplesite.com/"></iframe>

     <iframe id="bing" src="https://www.bing.com/" scrolling="yes"></iframe>


     <iframe id="heart" src="https://caniuse.com/"></iframe>
     <div id="walp" style="font-family:cursive">
       <h1 style="margin:auto;color:grey">choose any to set wallpaper</h1>
       <p style="color:grey;">my-life</p>
       <hr/>
       <div style="width:100%;height:80px;">

         <img src="IMG-20200225-WA0016.jpg" onclick="setPic(this.getAttribute('src'))" height="100%"/>
         <img src="IMG-20200225-WA0017.jpg" onclick="setPic(this.getAttribute('src'))" height="100%"/>
         <img src="IMG-20200317-WA0024.jpeg" onclick="setPic(this.getAttribute('src'))" height="100%"/>
         <img src="IMG-20200405-WA0003.jpg" onclick="setPic(this.getAttribute('src'))" height="100%"/>
         <img src="sainty.jpg" onclick="setPic(this.getAttribute('src'))" height="100%"/>
         <img src="IMG-20200406-WA0148.jpg " onclick="setPic(this.getAttribute('src'))" height="100%"/>
         <img src="IMG-20200401-WA0051.jpg" onclick="setPic(this.getAttribute('src'))" height="100%"/>
         <hr>
       </div>
     </div>
     <div id="phoneb" style="color:grey">
       <div class="list-group">
       <h1 style="margin:auto">Favourite Contacts</h1>

          <i style="color:grey;" class="fa fa-user-circle-o" aria-hidden="true"></i>sainty&nbsp<a class="list-group-item list-group-item-action" href="tel:0767036727">0767036727</a>
          <i style="color:grey;" class="fa fa-user-circle-o" aria-hidden="true"></i>potego&nbsp<a class="list-group-item list-group-item-action" href="tel:0834262667">0834262667</a>
          <i style="color:grey;" class="fa fa-user-circle-o" aria-hidden="true"></i>thapelo&nbsp<a class="list-group-item list-group-item-action" href="tel:0797236726">0797236726</a>
          <i style="color:grey;" class="fa fa-user-circle-o" aria-hidden="true"></i>thabang&nbsp<a class="list-group-item list-group-item-action" href="tel:0867036867">0867036867</a>
          <i style="color:grey;" class="fa fa-user-circle-o" aria-hidden="true"></i>jeck&nbsp<a class="list-group-item list-group-item-action" href="tel:0762555728">0762555728</a>
          <i style="color:grey;" class="fa fa-user-circle-o" aria-hidden="true"></i>Lindo&nbsp<a class="list-group-item list-group-item-action" href="tel:076277528">076277528</a>
          <i style="color:grey;" class="fa fa-user-circle-o" aria-hidden="true"></i>Bae&nbsp<a class="list-group-item list-group-item-action" href="tel:07626678287">07626678287</a>

     </div>
   </div>

     <div id="message">
       <div style="margin:8px 11px 8px 11px " class="alert alert-success alert-dismissible">
         <button type="button" class="close" data-dismiss="alert">&times</button>
         <strong>hello!</strong>
         i am so lucky to have you as my friend.call me Sainty.
       </div>
       <div style="margin:0 11px 8px 11px " class="alert alert-warning alert-dismissible">
         <button type="button" class="close" data-dismiss="alert">&times</button>
         <strong>hello!</strong>
         can you please whatsapp me or text me ASAP.
         to do so ,go to Contacts.
       </div>
       <div style="margin:0 11px 8px 11px " class="alert alert-dark alert-dismissible">
         <button type="button" class="close" data-dismiss="alert">&times</button>
         <strong>hello!</strong>
          do you want source code???<strong>email me</strong>
       </div>
     </div>
</div>







              <center><button onclick="hom()" class="btn" type="button" name="button"></button></center>

      </div>
  </body>
</html>
