/*iteration 1*/
function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="card">
      <img className="foto" src={picture} alt="imagem do ${firstName}" />
      <div className="dados">
        <div>
          <span className="negrito">Last Name:</span> {lastName}
        </div>
        <div>
          <span className="negrito">First Name:</span>
          {firstName}
        </div>
        <div>
          <span className="negrito"> Gender:</span>
          {gender}
        </div>
        <div>
          <span className="negrito"> Height:</span>
          {height}
        </div>
        <div>
          <span className="negrito"> Birth:</span> {birth}
        </div>
      </div>
    </div>
  );
}

export default IdCard;
