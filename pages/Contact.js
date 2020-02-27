import React, { useState } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/shared/BasePage';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { sendQuestion } from '../store/actions/contact';
import { Button, Modal, ModalBody, ModalFooter, Spinner } from 'reactstrap';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
});

const Contact = props => {
  const { auth } = props;
  const [openModal, setOpenModal] = useState(false);
  const [openSpinner, setOpenSpinner] = useState(false);
  const toggleModal = () => setOpenModal(!openModal);
  const toggleSpinner = () => setOpenSpinner(!openSpinner);
  let spinner = null;
  openSpinner == true ? spinner = <Spinner color="primary" className="spinner-contact" /> : spinner = null;
  return (
    <BaseLayout auth={auth}>
      <BasePage className="contact-page">
        <div className="bounceInLeft">
          <h1 className="title">Have some questions?</h1>
          <div className="contact-form">
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                questions: ''
              }}
              validationSchema={SignupSchema}
              onSubmit={async function (values) {
                let contact;
                try {
                  contact = await sendQuestion(values);
                  if (contact) {
                    toggleModal();
                    toggleSpinner();
                  }
                } catch (err) {
                  console.error(err);
                }

              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Field placeholder="First Name" name="firstName" className='input-form' />
                  {errors.firstName && touched.firstName ? (<div>{errors.firstName}</div>) : null}
                  <Field placeholder="Last Name" name="lastName" className='input-form' />
                  {errors.lastName && touched.lastName ? (<div>{errors.lastName}</div>) : null}
                  <Field placeholder="Email" name="email" type="email" className='input-form' />
                  {errors.email && touched.email ? <div>{errors.email}</div> : null}
                  <Field component='textarea' placeholder="questions..." name="questions" type="text" className='area-form' />

                  <Button className="contact-button" type="submit" color="primary" onClick={toggleSpinner}>Submit</Button>
                  {spinner}
                </Form>
              )}
            </Formik>
          </div>
          <Modal isOpen={openModal}>
            <ModalBody>Email sended succesfully!!!</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleModal}>Close</Button>
            </ModalFooter>
          </Modal>
        </div>
      </BasePage>
    </BaseLayout>

  );
};

export default Contact;