import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import axios from 'axios';
function useDataTableHook() {
    

  const host = "http://localhost:8081";
 
  
  const handleEditClick = (d) => {
    console.log("Edit", d);
    
  };
  const handleDeleteClick = (d) => {
    console.log("delete", d);
    confirmAlert({
      title: 'Are you sure to delete?',
     // message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: async() => {
            const response = await axios.delete(
              `${host}/posts/${d}`
            );
          // console.log(response.data.status)
          if(response.data.status===202){
            
          }
          }
        },
        {
          label: 'Cancel',
          onClick: () => { return false}
        }
      ]
    });
  };
  
  
 
  return { handleEditClick, handleDeleteClick };
}

export default useDataTableHook;