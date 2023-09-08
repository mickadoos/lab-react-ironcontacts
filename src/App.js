import './App.css';
import Table from './components/Table';
import contacts from './contacts.json'

function App() {
  // console.log("Contacts: ", contacts)
  return (
    <div className='container'>
      <Table contactsList={contacts}/>
    </div>
  );
}

export default App;
