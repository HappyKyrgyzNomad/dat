import "./App.css";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Preview from "./Preview";

function App({ content }) {
  // Бек
  const supabase = createClient(
    "https://hlsgdhbzyjqlpaudruoo.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhsc2dkaGJ6eWpxbHBhdWRydW9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ1OTQyODgsImV4cCI6MjAwMDE3MDI4OH0.eUNFmkd8HDTPz2adX_AwTQ03ou40cqoEGX-HlWA0ZYY"
  );

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }
  // Направления
  const origin = countries.map((country) => country.name);
  const dest = countries.map((country) => country.name);

  const [defaultValue, setDefaultValue] = useState("");
  function handleDefault() {
    setDefaultValue(`Load from ${origin} to ${dest}`);
  }

  // Тема письма для превью
  const [subject, setSubject] = useState("");

  return (
    <div className="app">
      <div>
        <h4>Subject</h4>
        <input
          className="app-input"
          placeholder="type..."
          onChange={(e) => setSubject(e.target.value)}
          type="text"
          defaultValue={defaultValue}
        />

        <button onClick={handleDefault} className="app-btn">
          default values
        </button>
      </div>
      <Preview
        content={content}
        origin={origin}
        dest={dest}
        subject={subject}
      />
    </div>
  );
}

export default App;
