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
          <input type="text" name="firstName" id="firstName"/>
          <label htmlFor="lastName">Last Name: </label>
          <input type="text" name="lastName" id="lastName" onChange={e => setGuest({ ...guest, lastName: e.target.value })} />
        </p>
        <p>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" onChange={e => setGuest({ ...guest, email: e.target.value })} />
        </p>
        <p>
          <label htmlFor="phone">Phone: </label>
          <input type="tel" name="phone" id="phone" onChange={e => setGuest({ ...guest, phone: e.target.value })} />
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
          <label htmlFor='number-of-children'>Number of children: </label>
          <select name="number-of-children" id="number-of-children" onChange={e => setGuest({ ...guest, numberOfChildren: e.target.value })}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </p>
        <div>
          {Array.from({ length: guest.numberOfChildren }, (_, i) => (
            <ChildInput key={i} i={i} />
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

function ChildInput({ i }) {
  return (
    <p>
      <label htmlFor={`children`}>Child {i + 1} Name: </label>
      <input type="text" name={`children`} id={`child-${i}-name`} />
    </p>
  )
}