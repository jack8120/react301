import Customer from './App.css';

const Cardz = (props) => {

    const customerName = props.data.customerName;
    const address = props.data.address;
    const postcode = props.data.postcode;
    const phone = props.data.phone;
    const chimneyType = props.data.chimneyType;
    const brushType = props.data.brushType;
    const guard = props.data.guard;
    
    
  
  
    return(
        <div>
            <h1>{customerName}</h1>
            <h3>{address}</h3>
               <h3>{postcode}</h3>
               <h3>{phone}</h3>
               <h3>{chimneyType}</h3>
               <h3>{brushType}</h3>
              <h3>{guard}</h3>
        </div>
    );


};


export default Cardz;

