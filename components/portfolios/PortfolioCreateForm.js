import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Alert } from 'reactstrap';
import PortInput from '../form/PortInput';

const PortfolioCreateForm = ({ initialValues, onSubmit, error }) => (
  <div>
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Field type="text"
          name="title"
          label="Title"
          component={PortInput} />
        <Field type="text"
          name="image"
          label="Image"
          component={PortInput} />
        <Field type="text"
          name="tools"
          label="Tools"
          component={PortInput} />
        <Field type="textarea"
          name="description"
          label="Description"
          component={PortInput} />
        <Field type="textarea"
          name="url"
          label="url"
          component={PortInput} />
        {error && <Alert color="danger">{error}</Alert>}
        <Button color="success" size="lg" type="submit">Create</Button>
      </Form>
    </Formik>
  </div>
);

export default PortfolioCreateForm;





































// import React from 'react';


// export default class PortfolioCreateForm extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {title: '', description: '', language: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     const field = event.target.name;
//     this.setState({[field]: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.title + ' ' + this.state.description + ' ' + this.state.language);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <Label>
//           Name:
//           <input name="title" type="text" value={this.state.value} onChange={this.handleChange} />
//         </Label>
//         <Label>
//           Description:
//           <textarea name="description" value={this.state.description} onChange={this.handleChange} />
//         </Label>
//         <Label>
//           Pick your favorite Programming Language:
//           <select name="language" value={this.state.language} onChange={this.handleChange}>
//             <option value="javascript">Javascript</option>
//             <option value="java">Java</option>
//             <option value="c++">C++</option>
//             <option value="c#">C#</option>
//           </select>
//         </Label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
