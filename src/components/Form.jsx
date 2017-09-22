import React from 'react';
const Form = () => {
  return (
    <section className="form">
      <div className="container">
        <h1 className="headline">
          Quis nostrum exercitationem ullam corporis suscipit laboriosasimu,
          nisi ut aliquid?
        </h1>
        <form onSubmit={e => e.preventDefault}>
          <input type="text" placeholder="front-end@tunaiku.com" />
          <button className="btn form__btn">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
