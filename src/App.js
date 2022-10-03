import './App.css';
import Cardz from './cards';



const App = () => {

const Customer = [
  {
    customerName:"Jack Torn",
    address: "8 Davidson Road",
    postcode: "NR7 0XW",
    phone: 123456789,
    chimneyType: "w/b stove",
    brushType: "6 inch",
    guard: "yes",
    },
    
    {
      customerName:"Mark Ball",
      address: "A Street",
      postcode: "NR4 PO5H",
      phone: 123456789,
      chimneyType: "m/f stove",
      brushType: "6 inch",
      guard: "yes",
      },
  
];

  return (

    <div className="container">
      <div className="header">
      <h1 className="main-text"> First React Page - 29th Sept 2022 </h1>
      </div>

      

      <div className="card-container">
        
        {/* step 1 - movies.map() */}
        {Customer.map((value) => {
          return(
            <Cardz data = {value} />

            // <div className="card">
            //   <h1>Customer Card</h1>
            //   <h1>{value.customerName}</h1>
            //   <h3>{value.address}</h3>
            //   <h3>{value.postcode}</h3>
            //   <h3>{value.phone}</h3>
            //   <h3>{value.chimneyType}</h3>
            //   <h3>{value.brushType}</h3>
            //   <h3>{value.guard}</h3>
            // </div>
          );
        })}
        {/*{ step 2 - movies.map( () => {} ) }*/}

        {/* step 3 - movies.map( () => {
          return();
        } ) */}

        {/* step 4 - movies.map( () => {
          return(
            <div>
            // Do the stuff here
            </div>
          );
        } ) */}

        {/* step 5 - movies.map( (value) => {
          return(
            <div>
            // Do the stuff here
            <p>{value}</p> 
            </div>
          );
        } ) */}
        

      </div>
      <div className="footer"></div>




    </div>
  
    
  );
}

export default App;
