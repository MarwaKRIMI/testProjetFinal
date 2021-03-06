import React, { Component } from 'react';
import { Button, ToastContainer, toast } from 'mdbreact';

class AlertPage extends Component {
  notify(type){
  return () => {
    switch (type) {
    
      
       
      case 'success':
        toast.success('Success message', {
          position: "top-right",
        });
        break;
      case 'warning':
        toast.warn('Warning message');
        break;
   
    }
  };
};
  render(){
    return (
      <React.Fragment>
        
        <button className='btn btn-success' onClick={this.notify('success')}>Success</button>
        <button className='btn btn-warning' onClick={this.notify('warning')}>Warning</button>

        <ToastContainer
          hideProgressBar={true}
          newestOnTop={true}
          autoClose={5000}
        />
      </React.Fragment>
    );
  }
}
export default AlertPage;