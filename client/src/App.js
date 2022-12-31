import React, {useState} from 'react';

function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: "",
  })

  const handleInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res =  await fetch('http://localhost:4000/transaction', {
      method: "POST",
      body: form,
    })
    console.log(res);
  }

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="number" 
          name="amount"
          onChange={handleInput} 
          value={form.amount}
          placeholder="Enter transaction amount"
        />
        <input 
          type="text"
          name ="description"
          onChange={handleInput}
          value={form.description}
          placeholder="Enter transaction details"/>
        <input 
          type="date"
          name="date"
          onChange={handleInput}
          value={form.date}
        />
        <button type="submit">Submit</button>
      </form>

    </div>
  
  );
}

export default App;
