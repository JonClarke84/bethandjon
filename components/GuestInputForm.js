export default function GuestInputForm({ guest, setGuest, success, addedGuestName }) {
  return (
    <div>
      { success &&
        <div>
          <strong>Success!</strong>
          <p>{addedGuestName} has been added.</p>
          <br />
        </div>
      }
      <div>
        { success ? <h1>Add another guest</h1> : <h1>Add a guest</h1> }
      </div>
      <form action="/api/addGuest" method="post">
        <h3>Lead Guest</h3>
        <p>
          <label htmlFor="firstName">First Name: </label>
          <input type="text" name="firstName" id="firstName" onChange={e => setGuest({ ...guest, firstName: e.target.value })} required />
          <label htmlFor="lastName">Last Name: </label>
          <input type="text" name="lastName" id="lastName" onChange={e => setGuest({ ...guest, lastName: e.target.value })} required />
        </p>
        <p>
          <label htmlFor="eveningOrDay">Evening or Day: </label>
          <select name="eveningOrDay" id="eveningOrDay">
            <option value="evening">Evening</option>
            <option value="day">Day</option>
          </select>
        </p>
        <p>
          <label htmlFor="Bringing a plus one?">Bringing a plus one: </label>
          <input type="checkbox" name="plusOne" id="plusOne" onChange={e => setGuest({ ...guest, plusOne: e.target.checked })} />
        </p>
        {guest.plusOne &&
          <p>
            <label htmlFor="plusOnefirstName">Plus One First Name: </label>
            <input type="text" name="plusOneFirstName" id="plusOneFirstName" />
            <label htmlFor="plusOneLastName">Plus One Last Name: </label>
            <input type="text" name="plusOneLastName" id="plusOneLastName" placeholder={`${guest.lastName}`} defaultValue={`${guest.lastName}`} />
          </p>
        }
        <p>
          <label htmlFor='numberOfChildren'>Number of children: </label>
          <select name="numberOfChildren" id="numberOfChildren" onChange={e => setGuest({ ...guest, numberOfChildren: e.target.value })}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </p>
        <div>
          {Array.from({ length: guest.numberOfChildren }, (_, i) => (
            <ChildInput key={i} i={i} guest={guest} setGuest={setGuest} />
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

function ChildInput({ i, guest, setGuest }) {
  return (
    <p>
      <label htmlFor={`children`}>Child {i + 1} Name: </label>
      <input type="text" name={`children`} id={`child-${i}-name`} onChange={e => setGuest({ ...guest, children: { ...guest.children, [i]: e.target.value } })} />
    </p>
  )
}