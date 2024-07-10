
const Input = ({label, type, state, setState}) => {
  return (
    <div class="form-floating">
      <input type={type} className="form-control" id="floatingInput" value={state} onChange={e => setState(e.target.value)}  placeholder={label} />
      <label for="floatingInput">{label}</label>
    </div>
  )
}

export default Input