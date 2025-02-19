import { useEffect, useState } from "react";

function App() {
  return (
    <div style={{backgroundColor:"#dfe6e9", height:"100vh"}}>
     <div style={{display:"flex", justifyContent:"center"}}>
      <div>
        <div>
         <PostComponent/>
         <br />
        </div>
        <div>
         <PostComponent/>
         <br />
        </div>
        
         <PostComponent/>
         
      
      </div>
     </div>

    </div>
  );
}

const style = {
  width:200, backgroundColor:"white", borderRadius:10, borderColor:"gray", borderWidth:1, padding:20,
}

function PostComponent(){
  return(
    <div style={{style}}>
      <div style={{display:"flex"}}>
        <img src="https://cdn.pixabay.com/photo/2022/06/27/14/38/cat-7287671_1280.jpg" style={{width:30, height:30, borderRadius:20}} />
        <div style={{fontSize:10, marginLeft:10}}>
          <b>100xdevs</b>
          <div>23,098 followers</div>
          <div>12m</div>
        </div>
      </div>
      <div style={{fontSize:12}}>
        What to know how to win big? 
        Check how folks win $6000 in bounties.
      </div>
    </div>
  )
  
}

export default App;

