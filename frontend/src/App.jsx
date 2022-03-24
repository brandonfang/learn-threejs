import './App.css';

function App() {
  return (
    <>
      <div className="game">
        <div className="header-wrapper">
          <header className="header">
            <div className="logo-wrapper">
              <h1 className="logo">Learn Three.js</h1>
            </div>

            <div className="level-menu">
              <div className="arrow left">
                <svg
                  className="chevron"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </div>
              <div className="level-picker">
                <span className="label label-level">Level</span>
                <span className="label label-current"></span>
                <span className="label label-of">of</span>
                <span className="label label-total"></span>
                <span className="label label-down">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </div>
              <div className="arrow right">
                <svg
                  className="chevron"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
              <div className="level-dropdown">
                <div className="level-grid"></div>
                <button className="reset-all">Reset</button>
              </div>
            </div>
          </header>
        </div>

        <section className="sidebar">
          <article className="instructions"></article>

          <div className="editor-tag"></div>
          <div id="editor-wrapper"></div>

          <div className="level-buttons">
            <button className="reset-level">Reset level</button>
            <button className="next-button">Next</button>
          </div>

          <div className="hint">
            <div className="hint-header">
              <h3 className="hint-title">Hint</h3>
              <button className="hint-icon closed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
            <div className="hint-body closed"></div>
          </div>

          <div className="reference">
            <h3 className="reference-title">Recommended reading</h3>
            <div className="reference-body"></div>
          </div>

          <footer className="footer">
            <div className="footer-link">
              Made by{' '}
              <a href="" target="_blank">
                Brandon Fang
              </a>
            </div>
            <div className="footer-link">
              <a href="https://bdmfang.com" target="_blank">
                Portfolio
              </a>
            </div>
            <div className="footer-link">
              <a href="https://github.com/brandonfang/learn-three-js" target="_blank">
                GitHub
              </a>
            </div>
            <div className="footer-link">
              <a href="https://www.linkedin.com/in/bdmfang" target="_blank">
                LinkedIn
              </a>
            </div>
          </footer>
        </section>

        <section className="view">
          {/* <div className="canvas" id="canvas"></div> */}
          <iframe className="canvas" id="canvas" src="canvas.html" frameBorder="0"></iframe>
        </section>
      </div>
    </>
  );
}

export default App;
