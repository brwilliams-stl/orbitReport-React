import './styling.css';

const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
     {sat.map((sat, id) => {
      let status;
      if (sat.operational) {
        status = "Active";
      } else {
        status = "Inactive";
      }
      return (
        <tr key={id}>
          <td>{sat.name}</td>
          <td>{sat.type}</td>
          <td>{sat.launchDate}</td>
          <td>{status}</td>
        </tr>
      )
     })}
     </tbody>
   </table>
  );
};

export default Table;