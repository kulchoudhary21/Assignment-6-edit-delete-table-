import Button from './Button'
function Table(props) {
    
  let counter=0;
  
    return (
     
      <div   class="container">
        <table class="table">
          <thead>
            <tr class="table-secondary">
              <th scope="col">S.no</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
              <th scope="col">Gender</th>
              <th scope="col">Education</th>
            </tr>
                    
          </thead>
          
          
          {props.list.map((obj) => {
          counter++;
          return(<tbody class="table-primary">  
          
            <tr class="primary"> 
              <th scope="row" >{counter}</th>
              <th>{obj.name}</th>
              <td>{obj.email}</td>
              <td>{obj.date}</td>
              <td>{obj.option}</td>
              <td>{obj.select}</td>
              
              <Button type="submit" msg="Delete" onClick={props.onClick}/>
              {/* <Button type="submit" msg="Edit" onClick={props.onEdit}/>                 */}
            </tr>
             
          </tbody>
          
          )
          
        })
    }
      
    </table>
    
    </div>
  );
}
export default Table;