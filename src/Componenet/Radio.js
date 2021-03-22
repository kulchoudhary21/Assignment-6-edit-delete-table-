function Radio(props) {
  return (
    <div>
      <div class="form-check">
        <input
          type="radio"
          value={props.value}
          checked={props.checked}
          onChange={props.onChange}
        />
        <label class="form-check-label" for="flexCheckDefault">
          {props.msg}
        </label>
      </div>
    </div>
  );
}
export default Radio;
