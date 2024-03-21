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
      let status = (operational) => {return operational ? "Active" : "Inactive"};
      return (
        <tr key={id}>
          <td>{sat.name}</td>
          <td>{sat.type}</td>
          <td>{sat.launchDate}</td>
          <td>{status(sat.operational)}</td>
        </tr>
      )
     })}
     </tbody>
   </table>
  );
};

export default Table;