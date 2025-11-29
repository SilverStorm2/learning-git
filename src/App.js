import './App.css';

function App() {
  return (
    <div className="page">
      <main className="card" aria-labelledby="title">
        <h1 id="title">Nauka Git w trzech zdaniach</h1>
        <p>
          Git to dziennik zmian: commit zapisuje konkretny stan plików, dzięki czemu można łatwo
          porównywać i cofać kroki.
        </p>
        <p>
          Nauka zaczyna się od małych repozytoriów, gdzie świadomie dodajesz pliki (<code>git add</code>)
          i opisujesz każdy etap (<code>git commit</code>).
        </p>
        <p>
          Gałęzie (<code>git branch</code>) pozwalają izolować eksperymenty, a regularny push utrzymuje
          historię przejrzystą dla zespołu.
        </p>
      </main>
    </div>
  );
}

export default App;
