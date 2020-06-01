import React from "react";

const Contact = () => {

    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
            }
        };
        xhr.send(data);
    }

    return (
        <section id="contact">
            <div className="tag right">
                Me contacter
            </div>
            <div className="contact-container">
                <div className="title">
                    <h1>Envoyez moi un message !</h1>
                    <p>
                        Vous avez une question, besoin d'aide, une proposition ou <br/>
                        simplement envie de parler ? Ecrivez moi.
                    </p>
                </div>
                <form
                    onSubmit={submitForm}
                    action="https://formspree.io/xeqraenv"
                    method="POST">
                    <div className="form-top">
                        <div className="left">
                            <label htmlFor="name">Votre nom</label>
                            <input
                                placeholder="Arthur DANJOU"
                                id="name"
                                name="name"
                                required="required"
                            >
                            </input>
                        </div>
                        <div className="right">
                            <label htmlFor="email">Votre adresse mail</label>
                            <input
                                placeholder="contact@arthurdanjou.fr"
                                id="email"
                                name="email"
                                required="required"
                                type="email">
                            </input>
                        </div>
                    </div>
                    <div className="form-bottom">
                        <label htmlFor="message">Votre message</label>
                        <textarea
                            placeholder="Bonjour, J'aimerais travailler avec vous. J'ai une super idée de logiciel web et mobile ! Pouvons-nous en discuter ?"
                            id="message" name="message" required="required" rows="7" minLength="30">
                        </textarea>
                    </div>
                    <div className="form-submit">
                        <input type="submit" className="button disabled" value="Envoyer le message" />
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Contact;