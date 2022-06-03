import './PlayerForm.css';

export default function PlayerForm({onCreatePlayer}) {

  function handleSubmit(event) {

    event.preventDefault();

    const form = event.target;
    const { namePlayerNew } = form.elements;
    const playerNew = { namePlayerNew: namePlayerNew.value, score: 0}

    onCreatePlayer(playerNew);

    form.reset();
    namePlayerNew.focus();

  }

  return (<form className='PlayerForm' onSubmit={handleSubmit}>
    <label htmlFor="name">Name</label>
    <input id="namePlayerNew" name="namePlayerNew" type="text" />
    <button type="button">New Player</button>
  </form>)
}