import './App.css'

function App() {
  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-5">
              <h1 className="display-6 fw-bold mb-3">OctoFit Tracker</h1>
              <p className="lead text-muted mb-4">
                A modern fitness app for students to log workouts, compete in teams,
                and stay motivated.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a className="btn btn-primary" href="https://react.dev/" target="_blank" rel="noreferrer">
                  React 19
                </a>
                <a className="btn btn-outline-secondary" href="https://vite.dev/" target="_blank" rel="noreferrer">
                  Vite
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
