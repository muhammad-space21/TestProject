import React from 'react';

import {
  StyledSignUpPage,
  Heading,
  FormStyled,
  TextWrapper,
  Title,
  Input,
  ErrorMessage,
  Container
} from './styles';

import ButtonPrimary from '../../components/Buttons/ButtonPrimary';



class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      secondname: '',
      phone: '',
      id_zmarket: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstname, 
      secondname, 
      phone, 
      id_zmarket
    } = this.state;
    this.setState({ submitted: true })
    // clear form
    if (firstname && secondname && phone && id_zmarket) {
      this.setState({
        firstname: '',
        secondname: '',
        phone: '',
        id_zmarket: '',
        submitted: false
      })
      console.log(this.state);
    }
  }

  render() {
    const {
      firstname, 
      secondname, 
      phone, 
      id_zmarket, 
      submitted
    } = this.state;
    return (
      <StyledSignUpPage>
        <FormStyled onSubmit={this.handleSubmit}>
          <TextWrapper>
            <Heading>Some Headline</Heading>
            <Title>Some Title goes here</Title>
          </TextWrapper>

          <Input
            type="text"
            name="firstname"
            placeholder="Firstname"
            value={firstname}
            onChange={this.handleChange}
          />
          { 
            submitted && !firstname &&
            <ErrorMessage>Name is missing!</ErrorMessage>
          }
          {
            firstname !== '' && firstname.length < 3 ?
            <ErrorMessage>Name must be more than 2 characters</ErrorMessage>
            : null
          }

          <Input
            type="text"
            name="secondname"
            placeholder="Lastname"
            value={secondname}
            onChange={this.handleChange}
          />
          { 
            submitted && !secondname && 
            <ErrorMessage>Lastname is missing!</ErrorMessage>
          }
          {
            secondname !== '' && secondname.length < 3 ? 
            <ErrorMessage>Lastname must be more than 2 characters</ErrorMessage>
            : null
          }
          <Input
            type="tel"
            name="phone"
            placeholder="phone number"
            value={phone}
            onChange={this.handleChange}
          />
          { 
            submitted && !phone &&
            <ErrorMessage>Name is missing!</ErrorMessage>
          }
          <Input
            type="text"
            name="id_zmarket"
            placeholder="Id zmarket"
            value={id_zmarket}
            onChange={this.handleChange}
          />
          { 
            submitted && !id_zmarket && 
            <ErrorMessage>Password is missing!</ErrorMessage>
          }
          {
            id_zmarket !== '' && id_zmarket.length < 6 ? 
            <ErrorMessage>Id Zmarket must be more than 6 characters</ErrorMessage>
            : null
          }
          <Container>
            <ButtonPrimary orderBtn>Submit</ButtonPrimary>
          </Container>
        </FormStyled>
      </StyledSignUpPage>
    );
  }
}

export default Form;
