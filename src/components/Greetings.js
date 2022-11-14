/*iteration 2 */
function Greetings({ lang, children }) {
  var greet = '';

  if (lang === 'de') {
    greet = 'Hallo';
  }

  if (lang === 'en') {
    greet = 'Hello';
  }

  if (lang === 'es') {
    greet = 'Hola';
  }

  if (lang === 'fr') {
    greet = 'Bonjour';
  }

  return (
    <>
      <h1 className="greetingCard">
        {greet} {children}
      </h1>
    </>
  );
}
export default Greetings;
