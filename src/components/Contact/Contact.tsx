import { useState } from 'react';
import classNames from 'classnames';

import { RequestData } from '../../types/Request';
import { validateEmail } from '../../utils/emailValidation';
import { sendRequest } from '../../utils/sendRequest';
import { Loader } from '../Loader/Loader';
import './Contact.scss';

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState(false);

  const [report, setReport] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setMessage(event.target.value);
    setMessageError(false);
  };

  const handleSendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || !validateEmail(email)) {
      if (!email.trim()) {
        setEmail('');
      }

      setEmailError(true);

      return;
    }

    if (!message.trim()) {
      setMessageError(true);

      return;
    }

    const data: RequestData = {
      email,
      message,
    };

    setLoading(true);

    await sendRequest(data)
      .then(() => {
        setEmail('');
        setMessage('');
        setReport('Successful');
      })
      .catch(() => {
        setReport('Something wrong');
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setReport(''), 5000);
        return;
      });

    return;
  };

  return (
    <section className="page__contact contact" id="Contact">
      <div className="container">
        <div className="contact__wrapper">
          <h2 className="contact__title">Get In Touch</h2>

          <div className="contact__content">
            <div className="contact__data">
              <a
                href="tel:+380633485206"
                className="contact__data-link contact__data-link--phone"
              >
                +38 063 3485206
              </a>

              <a
                href="mailto:vlkzmn@gmail.com"
                className="contact__data-link contact__data-link--email"
              >
                vlkzmn@gmail.com
              </a>
            </div>

            <form
              className="contact__form"
              id="form-reload"
              onSubmit={handleSendMessage}
            >
              <input
                type="mail"
                value={email}
                className={classNames('contact__details', {
                  'contact__details--invalid': emailError,
                })}
                placeholder="Your e-mail"
                onChange={handleEmailChange}
              />

              <textarea
                value={message}
                className={classNames('contact__massage', {
                  'contact__massage--invalid': messageError,
                })}
                placeholder="Your message..."
                onChange={handleMessageChange}
              />

              <div className="contact__footer">
                <button type="submit" className="contact__button">
                  Send
                </button>

                <div
                  className={classNames('contact__report', {
                    'contact__report--error': report.includes('wrong'),
                  })}
                >
                  {loading ? <Loader /> : report}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
