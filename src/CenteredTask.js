// Denne komponenten er en wrapper rundt oppgaver som skal være sentrert i nettleser.
export const CenteredTask = ({ children }) => {
  if (children) {
    return (
      <div className="App">
        <header className="App-header">{children}</header>
      </div>
    );
  } else {
    return null;
  }
};
