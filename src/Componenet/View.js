import Table from './Table'
function View(props) {
  return (
    <div>
      <Table list={props.list} onClick={props.onClick} onEdit={props.onEdit} />

    </div>
  );
}
export default View;
