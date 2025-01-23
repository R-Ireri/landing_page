import { Flex } from 'antd';
import { Button, Segmented, Row, Col } from 'antd';

const Navbar = () => {
  return (
    <div
      style={{
        background: '#001529',
        padding: '10px 20px',
        color: 'white',
      }}
    >
      <Row align="middle" justify="space-between" style={{ height: '100%' }}>
        {/* Logo Section */}
        <Col>
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>
            Tausi 
          </div>
        </Col>

        {/* Navigation Links */}
        <Col>
          <Row gutter={[20, 0]} align="middle">
            <Col>
              <Button
                type="link"
                style={{
                  color: 'white',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#40a9ff')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
                onClick={() => alert('Home clicked!')}
              >
                Home
              </Button>
            </Col>
            <Col>
              <Button
                type="link"
                style={{
                  color: 'white',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#40a9ff')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
                onClick={() => alert('About clicked!')}
              >
                About
              </Button>
            </Col>
            <Col>
              <Button
                type="link"
                style={{
                  color: 'white',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#40a9ff')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
                onClick={() => alert('Services clicked!')}
              >
                Services
              </Button>
            </Col>
            <Col>
              <Button
                type="link"
                style={{
                  color: 'white',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#40a9ff')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
                onClick={() => alert('Contact clicked!')}
              >
                Contact
              </Button>
            </Col>
          </Row>
        </Col>
        <Col>
          <Segmented
            options={[
              'Login',
              'Sign Up',
            ]}
            onChange={(value) => alert(`Switched to ${value} mode!`)}
            style={{
              background: '#ffffff',
              color: '#001529',
            }}
          />
        </Col>

      </Row>
    </div>
  );
};

export default Navbar;
