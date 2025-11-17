import image1 from "./imgs/cyber-crime.png"
import image2 from "./imgs/cyber-security.png"



function Footer() {
  const images=["cyber-crime.png","cyber-security.png","react.png"]
  return (
    //jsx javascript xml 
    //camel case   
    //background-color  => backgroundColor
    //font-size => fontSize
    // font-weight => fontWeight
    //color => color

    // css =>  css is js-object in jsx
    //{"backgroundColor":"black","fontSize":"20px","color":"white","fontWeight":"bold","padding":"10px"}

    <div class="alert alert-light" role="alert">
      <h1 style={
      {
        backgroundColor:"black",
        fontSize:"20px",
        color:"white",
        fontWeight:"bold",
        padding:"10px"
      }
        }>
        This is Footer Component
      </h1>
      <img src={image1} />
      <img src={image2}/>
      <img src={require("./imgs/react.png")}/>

{
  images.map(function(e){
    return <img src={require(`./imgs/${e}`)}/>
  })
}
<h1>Copyright 2025 yeh commit hoga ab</h1>

    </div>
  );
}

export default Footer;
