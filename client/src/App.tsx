import React from 'react';
import './App.css';
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#page1">Page1</Nav.Link>
          <Nav.Link href="#page2">Page2</Nav.Link>
          <Nav.Link href="#page3">Page3</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <header className="App-header">
        <h1>Grey Johnson</h1>
        <p>Junior Software Developer</p>
      </header>
      <header className="App-header">
        <h3>More to come once I have some freetime 😉.</h3>
        <br></br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut lectus tempus, placerat arcu tempor, sagittis orci. Praesent elit ligula, dapibus eu sodales et, euismod id neque. Quisque iaculis dui eu ligula sagittis varius. Nulla egestas orci et nisl dictum cursus. In ut molestie nunc. Donec a ornare est. Nulla sit amet sapien malesuada, porttitor massa non, dignissim quam. Donec orci tortor, euismod vel fringilla sit amet, ultrices vitae elit. Sed fermentum facilisis magna non cursus. Phasellus et tempus nibh. Morbi volutpat lorem erat, laoreet fermentum lorem volutpat eu.</p>
        <p>Donec elementum eu massa in hendrerit. Proin tempus tellus ac enim tristique, vel porta nulla aliquet. Integer gravida blandit risus ut imperdiet. Curabitur vel erat id dui tincidunt interdum. Phasellus ac auctor arcu, eu dapibus leo. Duis maximus sem a gravida vestibulum. Aenean convallis lacus et turpis elementum, non egestas enim rutrum. Etiam cursus eros nec velit aliquet, quis sagittis neque aliquam. Suspendisse in fermentum purus, a consectetur sem. Praesent dictum orci rutrum euismod ultrices. Cras convallis, est non rutrum ultricies, est tortor rutrum ante, a vulputate purus dui in leo.</p>
        <p>Pellentesque tempus aliquam dolor, non vehicula mi feugiat sit amet. Aenean ullamcorper lectus quis felis suscipit rhoncus. Nam vel maximus urna. Aliquam vulputate tortor ac felis faucibus, luctus tincidunt turpis pellentesque. Proin faucibus nisi vitae sem imperdiet porttitor. Donec tincidunt est ut magna bibendum, vitae egestas dolor finibus. Curabitur venenatis non ipsum a convallis. Donec luctus nisl vitae sem eleifend, id fringilla purus porta. Integer nec elementum nibh. Duis ullamcorper ipsum tortor, bibendum iaculis dolor egestas et. Nunc blandit felis est, a malesuada felis consequat fermentum. Suspendisse eget sem leo. Fusce et vehicula sapien. In hac habitasse platea dictumst.</p>
        <p>Nullam non ligula nec velit venenatis tempor. Curabitur venenatis consectetur eleifend. Suspendisse luctus nec augue eu ullamcorper. In fermentum faucibus sapien, ut iaculis nunc sollicitudin sit amet. Nunc vehicula urna massa, in laoreet lorem fermentum ac. Donec porta enim vitae mi tristique, id mollis enim consectetur. Fusce consectetur ante nec vehicula ultrices. Donec nulla quam, lacinia eget pretium congue, ullamcorper ac nunc. Morbi faucibus, leo sit amet laoreet vehicula, felis nibh fermentum quam, vel scelerisque tellus massa eu diam. Sed tristique ipsum sit amet arcu ullamcorper, eget tincidunt dolor maximus. Sed sed lacus vehicula, accumsan enim sit amet, tempor leo. Nullam ac ultricies nulla. Pellentesque hendrerit maximus leo vel posuere. Praesent elementum augue sed aliquam aliquam. Phasellus vel mauris sodales magna imperdiet egestas.</p>
      </header>
    </div>
  );
}

export default App;
