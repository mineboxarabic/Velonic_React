import React, { useState, useEffect } from 'react';
import { 
  Card, Col, Image, Modal, Row, Button, OverlayTrigger, Tooltip, Form
} from 'react-bootstrap';
import { Link } from 'react-router-dom'

interface CharacterData {
  id: number;
  owner: string;
  first_name: string;
  last_name: string;
  dob: string;
  cash: number;
  bankid: number;
  avatar: string;
  horses?: HorseData[]; 
}
interface HorseData {
  id: number;
  name: string;
  stable: string;
  model: string;
  cid: number;
}

interface OwnerCharactersProps {
  owner: string;
  characters: CharacterData[];
}

const CharacterCard: React.FC<CharacterData> = ({ 
  id, first_name, last_name, avatar, dob, cash, bankid, owner 
}) => {
  
  const [showModal, setShowModal] = useState(false);
  const handleEditClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [showAddHorseModal, setShowAddHorseModal] = useState(false);
  const handleShowAddHorse = () => setShowAddHorseModal(true);
  const handleCloseAddHorse = () => setShowAddHorseModal(false);
  
  const [newFirstName, setNewFirstName] = useState(first_name);
  const [newLastName, setNewLastName] = useState(last_name);
  const [bankAmount, setBankAmount] = useState(bankid);
  const [cashAmount, setCashAmount] = useState(cash);
  const [birthDate, setBirthDate] = useState(dob);
  const [job, setJob] = useState(''); 
  const [horses, setHorses] = useState([]); 
  const [showHorsesModal, setShowHorsesModal] = useState(false);
  const handleShowHorses = () => setShowHorsesModal(true);
  const handleCloseHorses = () => setShowHorsesModal(false);
  const [newHorseModel, setNewHorseModel] = useState('');
  const [newHorseStable, setNewHorseStable] = useState('');
  const [newHorseIsFemale, setNewHorseIsFemale] = useState(0);
  const [newHorseName, setNewHorseName] = useState('');

  const handleAddHorseSubmit = async () => {
    const newHorse = {
      model: newHorseModel,
      stable: newHorseStable,
      isFemale: newHorseIsFemale,
      name: newHorseName,
      cid: id,
    };

    try {
      const response = await fetch('http://localhost:3001/mtrd_horses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newHorse),
      });

      if (!response.ok) {
        throw new Error('Could not add the horse');
      }

      fetchHorses();
      handleCloseAddHorse(); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
  useEffect(() => {
    fetchHorses();
  }, []);
  
  const fetchHorses = async () => {
    try {

      const response = await fetch(`http://localhost:3001/mtrd_horses?cid=${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setHorses(data.filter(horse => horse.cid === id)); 
    } catch (error) {
      console.error('Error fetching horses:', error);
    }
  };
      const deleteHorse = async (horseId) => {
    try {
      const response = await fetch(`http://localhost:3001/mtrd_horses/${horseId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer YOUR_TOKEN_HERE',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete the horse');
      }
      fetchHorses();
    } catch (error) {
      console.error('Error deleting horse:', error);
    }
  };
    const addHorse = async (newHorseData) => {
    try {
      await fetch('http://localhost:3001/mtrd_horses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newHorseData),
      });
      fetchHorses();
    } catch (error) {
      console.error('Error adding horse:', error);
    }
  };
  
  



  const handleSaveChanges = () => {
    const updatedData = {
      first_name: newFirstName,
      last_name: newLastName,
      bankid: bankAmount,
      cash: cashAmount,
      dob: birthDate,
      
    };
    
      
    fetch(`http://localhost:3001/characters/${id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
    .then(response => response.json())
    .then(data => {
      setShowModal(false); 
    })
    .catch(error => {
      console.error('Error updating the character:', error);
    });
  };
  

  return (
    <Col md={6}>
      <Card>
        <Card.Body>
          <div className="d-flex align-items-start justify-content-between">
            <div className="d-flex">
              <Link className="me-3" to="#">
                <Image className="avatar-md rounded-circle" src={avatar} />
              </Link>
              <div className="info">
                <h5 className="fs-18 my-1">{`${first_name} ${last_name}`}</h5>
                <p className="text-muted fs-15">user account</p>
              </div>
            </div>
            <div>
              <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                <Button variant="success" size="sm" className="me-1" onClick={handleEditClick}>
                  <i className="ri-pencil-fill" />
                </Button>
              </OverlayTrigger>
              <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                <Button variant="danger" size="sm">
                  <i className="ri-close-fill" />
                </Button>
              </OverlayTrigger>
            </div>
          </div>
          <hr />
          <ul className="social-list list-inline mt-3 mb-0">
            <li className="list-inline-item">
              <OverlayTrigger placement="top" overlay={<Tooltip>Message</Tooltip>}>
                <Link className="social-list-item bg-dark-subtle text-secondary fs-16 border-0" to="#">
                  <i className="ri-mail-open-line" />
                </Link>
              </OverlayTrigger>
            </li>
          </ul>
        </Card.Body>
      </Card>

      <Modal size="xl" show={showModal} onHide={handleCloseModal}>
  <Modal.Header closeButton>
    <Modal.Title>Modify data</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Row>
      <Col md={8}>
        
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Steam ID</Form.Label>
            <Form.Control type="text" value={owner} readOnly />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>first name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              value={newFirstName}
              onChange={(e) => setNewFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              value={newLastName}
              onChange={(e) => setNewLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cash money</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the amount"
              value={cashAmount}
              onChange={(e) => setCashAmount(parseInt(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Bank Money</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the amount"
              value={bankAmount}
              onChange={(e) => setBankAmount(parseInt(e.target.value))}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>date of birth</Form.Label>
            <Form.Control
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Job</Form.Label>
            <Form.Control as="select" value={job} onChange={(e) => setJob(e.target.value)}>
              <option value="Job1">Job1</option>
              <option value="Job2">Job2</option>
              <option value="Job3">Job3</option>
            </Form.Control>
          </Form.Group>


        </Form>
      </Col>
      <Col md={4}>
      <Modal show={showHorsesModal} onHide={handleCloseHorses}>
        <Modal.Header closeButton>
          <Modal.Title>Horses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {horses.map((horse) => (
            <div key={horse.id} className="mb-2">
              <Image src={horse.image} thumbnail />
              <p>{horse.name}</p>
              <Card.Text>Stable: {horse.stable}</Card.Text>
              <Card.Text>Model: {horse.model}</Card.Text>
              <Button variant="danger" size="sm" onClick={() => deleteHorse(horse.id)}>
                Delete
              </Button>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleShowAddHorse}>
            Add Horse
          </Button>
          <Button variant="secondary" onClick={handleCloseHorses}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showAddHorseModal} onHide={handleCloseAddHorse}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Horse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3">
        <Form.Label>Horse Model</Form.Label>
        <Form.Control as="select" value={newHorseModel} onChange={(e) => setNewHorseModel(e.target.value)}>
          <option value="">Select Model</option>
          <option value="Model1">Horse Model 1</option>
          <option value="Model2">Horse Model 2</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Horse Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter horse name" 
          value={newHorseName} 
          onChange={(e) => setNewHorseName(e.target.value)}
        />
      </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleAddHorseSubmit}>
            Submit
          </Button>
          <Button variant="secondary" onClick={handleCloseAddHorse}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        <Button variant="info" className="mb-2 w-100">Open Bag</Button>
        <Button variant="secondary" className="mb-2 w-100">Wagon</Button>
        <Button variant="danger" className="mb-2 w-100" onClick={handleShowHorses}>Horse</Button>

      </Col>
    </Row>
  </Modal.Body>
  <Modal.Footer>

    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
    <Button variant="primary" onClick={handleSaveChanges}>Save</Button>

  </Modal.Footer>
</Modal>
    </Col>
  );
};

const OwnerCard: React.FC<OwnerCharactersProps> = ({ owner, characters }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);
  const [showBanModal, setShowBanModal] = useState(false);
  const [banReason, setBanReason] = useState('');
  const [banDuration, setBanDuration] = useState('');
  

  const handleBan = () => {
    console.log('Banning character with ID:');
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center p-3" style={{ border: '1px solid #eee', borderRadius: '8px', marginBottom: '20px' }} onClick={toggleDetails}>
        <Image src="path_to_account_image.jpg" roundedCircle style={{ width: '80px', height: '80px', cursor: 'pointer' }} />
        <h5 className="mt-2" style={{ cursor: 'pointer' }}>{owner}</h5>
        <div>{characters.length} Characters</div>
      </div>

      <Modal show={showDetails} onHide={toggleDetails} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{owner}'s Characterss</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {characters.map((character) => (
              <CharacterCard key={character.id} {...character} />
            ))}

          </Row>
          <Modal size="sm" show={showBanModal} onHide={() => setShowBanModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ban User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Ban Duration</Form.Label>
            <Form.Control
              as="select"
              value={banDuration}
              onChange={(e) => setBanDuration(e.target.value)}
            >
              <option value="">Select Duration</option>
              <option value="1h">1 Hour</option>
              <option value="6h">6 Hours</option>
              <option value="12h">12 Hours</option>
              <option value="24h">24 Hours</option>
              <option value="72h">72 Hours</option>
              <option value="Permanent">Permanent</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Ban Reason</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Ban Reason"
              value={banReason}
              onChange={(e) => setBanReason(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowBanModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleBan}>Ban User</Button>
        </Modal.Footer>
      </Modal>

        <Button variant="warning" className="mb-2 w-100" onClick={() => setShowBanModal(true)}>Ban</Button>

          <Button variant="danger" className="mb-2 w-100">Warn</Button>
          <Button variant="secondary" className="mb-2 w-100">Change Role</Button>
          <Button variant="info" className="mb-2 w-100">Open Log</Button>
          

        </Modal.Body>
      </Modal>
    </>
  );
};


const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterData[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/characters')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCharacters(data);
      })
      .catch((error) => {
        console.error('Error fetching the characters:', error);
      });
  }, []);

  const owners = characters.reduce((acc, character) => {
    (acc[character.owner] = acc[character.owner] || []).push(character);
    return acc;
  }, {} as Record<string, CharacterData[]>);

  return (
    <Row>
      {Object.entries(owners).map(([owner, characters]) => (
        <Col md={4} key={owner}>
          <OwnerCard owner={owner} characters={characters} />
        </Col>
      ))}
    </Row>
  );
};

export default CharacterList;