import React from "react";
import "./styles.css"

export const Section = () => {
  return (
    <div className="section-container">
      {/* van a tener que ser botones que cambian un valor de estado al presionarse. Si presiono My faves all pasa a estar false y my faves a true y vice versa. Cada on click va a tener que cambiar el estado del otro. All y My faves van a tener que tener un estado booleano q haga switch. Según como este el estado hacer la lógica condicional de que styles va a tener cada uno */}
      <div className="button-section--active">All</div>
      <div className="button-section">My Faves</div>
    </div>
  );
};